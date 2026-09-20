// =============================================================================
// APPLICATION PRINCIPALE - CARNET DE VOYAGE POLYNÉSIE (SÉCURISÉ AES-256)
// =============================================================================

let map;
let markers = [];
let polyline;
let currentLightboxImages = [];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initSecurityGate();
});

// -----------------------------------------------------------------------------
// SÉCURITÉ & DÉCHIFFREMENT DU VOYAGE (Web Crypto API)
// -----------------------------------------------------------------------------
async function decryptPayload(password, encryptedObj) {
    const enc = new TextEncoder();
    const dec = new TextDecoder();

    // Décodage Base64
    const salt = Uint8Array.from(atob(encryptedObj.salt), c => c.charCodeAt(0));
    const iv = Uint8Array.from(atob(encryptedObj.iv), c => c.charCodeAt(0));
    const ciphertext = Uint8Array.from(atob(encryptedObj.data), c => c.charCodeAt(0));

    // Dérivation de la clé avec PBKDF2 (100 000 itérations SHA-256)
    const baseKey = await crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256"
        },
        baseKey,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
    );

    // Déchiffrement AES-GCM (échoue automatiquement si le mot de passe est faux)
    const decryptedBuffer = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        ciphertext
    );

    return dec.decode(decryptedBuffer);
}

function initSecurityGate() {
    const passwordScreen = document.getElementById('password-screen');
    const appContent = document.getElementById('app-content');
    const form = document.getElementById('unlock-form');
    const input = document.getElementById('trip-password');
    const errorEl = document.getElementById('password-error');
    const btn = document.getElementById('unlock-btn');

    // Vérifier si un mot de passe valide est déjà mémorisé dans la session locale
    const savedPass = localStorage.getItem('polynesie_family_token');
    if (savedPass && typeof ENCRYPTED_TRIP_PAYLOAD !== 'undefined') {
        attemptUnlock(savedPass, false);
    }

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const pass = input.value.trim();
            if (!pass) return;

            btn.disabled = true;
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Déverrouillage...`;
            errorEl.classList.add('hidden');

            const success = await attemptUnlock(pass, true);
            if (!success) {
                btn.disabled = false;
                btn.innerHTML = `<i class="fas fa-key"></i> Déverrouiller le voyage`;
                errorEl.classList.remove('hidden');
                input.value = '';
                input.focus();
            }
        });
    }

    async function attemptUnlock(pass, saveOnSuccess) {
        try {
            if (typeof ENCRYPTED_TRIP_PAYLOAD === 'undefined') {
                console.error("Données chiffrées introuvables");
                return false;
            }

            const rawJs = await decryptPayload(pass, ENCRYPTED_TRIP_PAYLOAD);

            // Injection du script déchiffré directement dans le DOM pour que toutes les variables globales existent
            const scriptEl = document.createElement('script');
            scriptEl.textContent = rawJs;
            document.head.appendChild(scriptEl);

            if (saveOnSuccess) {
                localStorage.setItem('polynesie_family_token', pass);
            }

            // Afficher le site
            if (passwordScreen) passwordScreen.classList.add('hidden');
            if (appContent) appContent.classList.remove('hidden');

            // Lancer l'application complète
            launchApplication();
            return true;
        } catch (err) {
            console.error("Erreur lors du déchiffrement :", err);
            return false;
        }
    }
}

function launchApplication() {
    initHeroData();
    initLiveCountdown();
    renderStagesRibbon();
    renderFlightsList();
    initMap();
    if (typeof TRIP_STAGES !== 'undefined') {
        renderTimeline(TRIP_STAGES);
    }
    renderFilters();
    renderGallery();
    initGuestbook();
    initLightbox();

    // Recalculer la taille de la carte Leaflet après affichage du conteneur
    setTimeout(() => {
        if (map) {
            map.invalidateSize();
        }
    }, 200);
}

// -----------------------------------------------------------------------------
// 1. En-tête & Informations Générales
// -----------------------------------------------------------------------------
function initHeroData() {
    const titleEl = document.getElementById('trip-title');
    const travelersEl = document.getElementById('trip-travelers');
    const descEl = document.getElementById('trip-desc');
    const liveIslandEl = document.getElementById('live-island');
    const countdownEl = document.getElementById('live-countdown');

    if (titleEl) titleEl.textContent = TRIP_CONFIG.tripTitle;
    if (travelersEl) travelersEl.textContent = TRIP_CONFIG.travelers;
    if (descEl) descEl.textContent = TRIP_CONFIG.description;

    const today = new Date();
    const start = new Date(TRIP_CONFIG.startDate + "T12:05:00");
    const end = new Date(TRIP_CONFIG.endDate + "T23:59:59");
    const currentStage = TRIP_STAGES.find(s => s.status === 'current') || TRIP_STAGES[0];

    if (liveIslandEl && currentStage) {
        if (today < start) {
            liveIslandEl.innerHTML = `✈️ Cap vers la Polynésie le <strong>09 Octobre 2026</strong> ! Première escale : <strong>${currentStage.island}</strong>`;
        } else if (today >= start && today <= end) {
            liveIslandEl.innerHTML = `📍 Étape en cours : <strong>${currentStage.island}</strong> — ${currentStage.title}`;
        } else {
            liveIslandEl.innerHTML = `🌺 Voyage réalisé — De merveilleux souvenirs en famille`;
        }
    }

    if (countdownEl) {
        if (today < start) {
            const diffDays = Math.ceil((start - today) / (1000 * 60 * 60 * 24));
            countdownEl.innerHTML = `⏳ Décollage dans <strong>${diffDays} jours</strong> !`;
        } else if (today >= start && today <= end) {
            const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
            countdownEl.innerHTML = `🌺 <strong>Jour ${diffDays}</strong> au paradis !`;
        } else {
            countdownEl.innerHTML = `🌴 <strong>Voyage terminé</strong> — Souvenirs gravés !`;
        }
    }
}

// -----------------------------------------------------------------------------
// 1.b Compte à Rebours Dynamique à la Seconde
// -----------------------------------------------------------------------------
function initLiveCountdown() {
    const targetDate = new Date("2026-10-09T12:05:00+02:00").getTime();
    const daysEl = document.getElementById('count-days');
    const hoursEl = document.getElementById('count-hours');
    const minutesEl = document.getElementById('count-minutes');
    const secondsEl = document.getElementById('count-seconds');
    const titleEl = document.getElementById('countdown-title');
    const infoEl = document.getElementById('countdown-flight-info');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    function updateTimer() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        } else {
            // Pendant le voyage ou après
            const returnDate = new Date("2026-10-30T23:45:00-10:00").getTime();
            if (now < returnDate) {
                if (titleEl) titleEl.textContent = "Voyage en cours !";
                if (infoEl) infoEl.innerHTML = `<span class="text-amber-300 font-bold">🌺 Toute la tribu est actuellement sous le soleil polynésien !</span>`;
                const daysIn = Math.floor((now - targetDate) / (1000 * 60 * 60 * 24)) + 1;
                daysEl.textContent = String(daysIn).padStart(2, '0');
                hoursEl.textContent = "JOUR";
                minutesEl.textContent = "DE";
                secondsEl.textContent = "RÊVE";
            } else {
                if (titleEl) titleEl.textContent = "Voyage inoubliable terminé";
                if (infoEl) infoEl.innerHTML = `<span>🌴 22 jours de souvenirs magiques gravés pour toujours !</span>`;
                daysEl.textContent = "22";
                hoursEl.textContent = "J";
                minutesEl.textContent = "100%";
                secondsEl.textContent = "❤️";
            }
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// -----------------------------------------------------------------------------
// 1.c Bandeau d'Étapes (Stage Navigation Ribbon)
// -----------------------------------------------------------------------------
function renderStagesRibbon() {
    const ribbonContainer = document.getElementById('stages-ribbon');
    if (!ribbonContainer) return;

    ribbonContainer.innerHTML = TRIP_STAGES.map((stage, idx) => {
        const isActive = stage.status === 'current';
        const isCompleted = stage.status === 'completed';
        
        let badgeIcon = `${idx + 1}`;
        let badgeBg = "bg-white/20 text-white";
        if (isActive) {
            badgeIcon = "★";
            badgeBg = "bg-amber-400 text-teal-950 font-bold";
        } else if (isCompleted) {
            badgeIcon = "✓";
            badgeBg = "bg-emerald-400 text-teal-950 font-bold";
        }

        return `
            <a href="#stage-${stage.id}" onclick="jumpToStage('${stage.id}')" class="ribbon-pill flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium cursor-pointer transition ${isActive ? 'active ring-2 ring-amber-400' : ''}">
                <span class="ribbon-badge w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${badgeBg}">
                    ${badgeIcon}
                </span>
                <div class="text-left">
                    <span class="block font-bold leading-tight">${stage.island}</span>
                    <span class="block text-[10px] text-teal-100/90 leading-tight">${stage.dates.split(' ')[0]} ${stage.dates.split(' ')[1]}</span>
                </div>
            </a>
            ${idx < TRIP_STAGES.length - 1 ? `<i class="fas fa-chevron-right text-[10px] text-teal-200/50 flex-shrink-0"></i>` : ''}
        `;
    }).join('');
}

function jumpToStage(stageId) {
    // S'assurer qu'on est en vue "stages"
    if (typeof currentViewMode !== 'undefined' && currentViewMode !== 'stages') {
        switchTimelineView('stages');
    }
    setTimeout(() => {
        const target = document.getElementById(`stage-${stageId}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.add('ring-4', 'ring-amber-400', 'transition', 'duration-500');
            setTimeout(() => {
                target.classList.remove('ring-4', 'ring-amber-400');
            }, 2000);
        }
    }, 100);
}

// -----------------------------------------------------------------------------
// 1.d Rendu du Calendrier des Vols & Liaisons Aériennes
// -----------------------------------------------------------------------------
function renderFlightsList() {
    const container = document.getElementById('flights-list');
    if (!container || typeof TRIP_FLIGHTS === 'undefined') return;

    container.innerHTML = TRIP_FLIGHTS.map((flight, idx) => {
        const isInter = flight.category === 'international';
        const badgeColor = isInter ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-amber-100 text-amber-900 border-amber-200';
        const iconName = isInter ? 'fa-plane' : 'fa-plane-tail';

        return `
            <div class="border border-gray-100 rounded-2xl p-4 sm:p-5 hover:border-teal-300 hover:shadow-md transition bg-gradient-to-r ${isInter ? 'from-teal-50/40 to-transparent' : 'from-amber-50/30 to-transparent'}">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${isInter ? 'bg-teal-800 text-white' : 'bg-amber-500 text-white'}">
                            ${idx + 1}
                        </span>
                        <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor}">
                            ${flight.type}
                        </span>
                        <span class="font-extrabold text-sm sm:text-base text-teal-950 font-mono">
                            ${flight.flightNumber}
                        </span>
                    </div>
                    <span class="text-xs font-semibold text-gray-500 flex items-center gap-1">
                        <i class="fas fa-calendar-day text-teal-600"></i> ${flight.departureDate}
                    </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-2 text-xs sm:text-sm">
                    <!-- Départ -->
                    <div class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <span class="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Départ</span>
                        <span class="font-bold text-teal-950 block">${flight.departureAirport}</span>
                        <span class="text-xs font-bold text-teal-700 mt-1 block">Heure : ${flight.departureTime}</span>
                    </div>

                    <!-- Transit / Durée -->
                    <div class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center text-center">
                        <span class="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Liaison & Transit</span>
                        <span class="font-semibold text-gray-700 block">${flight.transit}</span>
                        <span class="text-[11px] text-amber-700 mt-1 font-medium block">⏳ Durée : ${flight.duration}</span>
                    </div>

                    <!-- Arrivée -->
                    <div class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                        <span class="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Arrivée</span>
                        <span class="font-bold text-teal-950 block">${flight.arrivalAirport}</span>
                        <span class="text-xs font-bold text-teal-700 mt-1 block">Arrivée : ${flight.arrivalTime}</span>
                    </div>
                </div>

                <div class="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
                    <span class="flex items-center gap-1.5">
                        <i class="fas fa-suitcase text-teal-600"></i> <strong>Franchise :</strong> ${flight.baggage}
                    </span>
                    <span class="flex items-center gap-1.5 text-gray-500 italic">
                        <i class="fas fa-info-circle text-amber-500"></i> ${flight.notes}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// -----------------------------------------------------------------------------
// 2. Carte Interactive (Leaflet)
// -----------------------------------------------------------------------------
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Centrage sur la Société / Tuamotu
    map = L.map('map', {
        scrollWheelZoom: false
    }).setView([-16.5, -149.8], 7);

    // Fond de carte OpenStreetMap avec un style moderne
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & CartoDB',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Tracé de l'itinéraire
    const coordsList = TRIP_STAGES.map(stage => stage.coords);
    polyline = L.polyline(coordsList, {
        color: '#028090',
        weight: 3,
        opacity: 0.8,
        dashArray: '8, 8',
        lineCap: 'round'
    }).addTo(map);

    // Ajout des marqueurs pour chaque île
    TRIP_STAGES.forEach((stage, index) => {
        const iconEmoji = stage.status === 'completed' ? '✓' : stage.status === 'current' ? '★' : (index + 1);
        const markerClass = stage.status === 'current' ? 'custom-map-marker active-marker' : 'custom-map-marker';

        const customIcon = L.divIcon({
            className: markerClass,
            html: `<span>${iconEmoji}</span>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
            popupAnchor: [0, -20]
        });

        const marker = L.marker(stage.coords, { icon: customIcon }).addTo(map);

        // Contenu de la popup
        const statusBadge = getStatusBadge(stage.status);
        const popupContent = `
            <div style="width: 240px; font-family: inherit;">
                <img src="${stage.coverImage}" alt="${stage.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px 8px 0 0;" />
                <div style="padding: 12px;">
                    <div style="margin-bottom: 6px;">${statusBadge}</div>
                    <h4 style="font-weight: 700; font-size: 1rem; color: #264653; margin-bottom: 4px;">${stage.island}</h4>
                    <p style="font-size: 0.85rem; color: #52796F; margin-bottom: 6px;"><strong>${stage.dates}</strong></p>
                    <p style="font-size: 0.8rem; color: #444; line-height: 1.3; margin-bottom: 10px;">${stage.summary}</p>
                    <a href="#stage-${stage.id}" style="display: inline-block; width: 100%; text-align: center; background: #028090; color: white; padding: 6px 10px; border-radius: 6px; text-decoration: none; font-size: 0.8rem; font-weight: 600;">
                        Voir dans le carnet →
                    </a>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent);
        markers.push({ stageId: stage.id, marker: marker });
    });

    // Ajustement de la vue pour tout voir
    if (coordsList.length > 0) {
        map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
    }
}

function highlightMapStage(stageId) {
    const item = markers.find(m => m.stageId === stageId);
    if (item && map) {
        map.flyTo(item.marker.getLatLng(), 9, { duration: 1.2 });
        item.marker.openPopup();
    }
}

// -----------------------------------------------------------------------------
// 3. Journal de Bord (Timeline)
// -----------------------------------------------------------------------------
function getStatusBadge(status) {
    if (status === 'completed') {
        return `<span class="badge-status badge-completed"><i class="fas fa-check-circle"></i> Visité</span>`;
    } else if (status === 'current') {
        return `<span class="badge-status badge-current"><i class="fas fa-compass fa-spin"></i> En ce moment</span>`;
    } else {
        return `<span class="badge-status badge-upcoming"><i class="fas fa-clock"></i> À venir</span>`;
    }
}

function renderTimeline(stagesToRender) {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    if (stagesToRender.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 bg-white rounded-2xl shadow-sm">
                <p class="text-lg text-emerald-800">Aucune étape ne correspond à ce filtre.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = stagesToRender.map((stage, idx) => {
        const highlightsHtml = stage.highlights.map(h => `
            <li class="flex items-center gap-2 text-sm text-emerald-900 mb-1">
                <span class="text-teal-600 font-bold">✓</span> ${h}
            </li>
        `).join('');

        const programDetailsHtml = (stage.programDetails || []).map(item => `
            <li class="text-xs sm:text-sm text-gray-700 mb-1.5 pl-3 border-l-2 border-teal-300">
                ${item}
            </li>
        `).join('');

        const galleryThumbs = stage.gallery.map(img => `
            <img src="${img}" alt="${stage.title}" class="w-16 h-16 rounded-xl object-cover cursor-pointer hover:opacity-80 transition shadow-sm" onclick="openLightboxFromUrl('${img}')" />
        `).join('');

        return `
            <article id="stage-${stage.id}" class="stage-card mb-12 overflow-hidden border border-emerald-100/60 scroll-mt-24">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <!-- Photo de couverture & Badges -->
                    <div class="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px]">
                        <img src="${stage.coverImage}" alt="${stage.title}" class="w-full h-full object-cover cursor-pointer" onclick="openLightboxFromUrl('${stage.coverImage}')" />
                        <div class="absolute top-4 left-4">
                            ${getStatusBadge(stage.status)}
                        </div>
                        <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white text-xs bg-black/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl">
                            <span><i class="fas fa-map-marker-alt text-amber-400 mr-1"></i> ${stage.island}</span>
                            <span><i class="fas fa-calendar-alt text-cyan-300 mr-1"></i> ${stage.dates}</span>
                        </div>
                    </div>

                    <!-- Contenu du récit & Détails -->
                    <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <span class="text-xs uppercase tracking-wider font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                                    Étape ${idx + 1} • ${stage.island}
                                </span>
                                <div class="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                    <span>${stage.weather}</span>
                                    <span>${stage.mood}</span>
                                </div>
                            </div>

                            <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 font-display mb-3">
                                ${stage.title}
                            </h3>

                            <p class="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                                ${stage.story}
                            </p>

                            <!-- Encart Logistique & Hébergement -->
                            <div class="bg-teal-50/70 p-4 rounded-xl mb-4 border border-teal-100 text-xs sm:text-sm">
                                <div class="mb-1.5 flex items-start gap-2">
                                    <i class="fas fa-hotel text-teal-600 mt-0.5"></i>
                                    <div><strong>Hébergement :</strong> <span class="text-teal-950 font-semibold">${stage.hotel}</span> — <span class="text-gray-600">${stage.roomType || ''}</span></div>
                                </div>
                                <div class="flex items-start gap-2">
                                    <i class="fas fa-plane-arrival text-teal-600 mt-0.5"></i>
                                    <div><strong>Transfert & Transport :</strong> <span class="text-gray-700">${stage.transport || ''}</span></div>
                                </div>
                            </div>

                            <!-- Programme au jour le jour de l'étape -->
                            ${programDetailsHtml ? `
                                <div class="mb-5">
                                    <h4 class="text-xs font-bold uppercase tracking-wider text-teal-900 mb-2 flex items-center gap-1.5">
                                        <i class="fas fa-list-check text-teal-600"></i> Au fil des journées sur place
                                    </h4>
                                    <ul class="space-y-1">${programDetailsHtml}</ul>
                                </div>
                            ` : ''}

                            <!-- Highlights -->
                            <div class="bg-amber-50/80 p-4 rounded-xl mb-4 border border-amber-200/80">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-amber-950 mb-2 flex items-center gap-1.5">
                                    <i class="fas fa-star text-amber-500"></i> Moments phares & Activités incluses
                                </h4>
                                <ul>${highlightsHtml}</ul>
                            </div>

                            <!-- Conseils Spécial Famille -->
                            ${stage.familyTips ? `
                                <div class="p-3.5 bg-rose-50/60 rounded-xl mb-3 border border-rose-100 text-xs sm:text-sm text-gray-700 flex items-start gap-2.5">
                                    <span class="text-base">👶</span>
                                    <div><strong class="text-rose-950">Conseil Tribu & Enfants :</strong> ${stage.familyTips}</div>
                                </div>
                            ` : ''}

                            <!-- Saveurs locales -->
                            ${stage.culinaryTips ? `
                                <div class="p-3.5 bg-emerald-50/60 rounded-xl mb-5 border border-emerald-100 text-xs sm:text-sm text-gray-700 flex items-start gap-2.5">
                                    <span class="text-base">🍍</span>
                                    <div><strong class="text-emerald-950">À déguster sur l'île :</strong> ${stage.culinaryTips}</div>
                                </div>
                            ` : ''}
                        </div>

                        <!-- Galerie de l'étape & Bouton carte -->
                        <div class="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                            <div class="flex items-center gap-2">
                                ${galleryThumbs}
                            </div>
                            <button onclick="highlightMapStage('${stage.id}')" class="btn-secondary text-xs flex items-center gap-2">
                                <i class="fas fa-map-pin"></i> Situer sur la carte
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// -----------------------------------------------------------------------------
// 4. Bascule de Vue (Étapes vs Jour par Jour) & Filtres par Île
// -----------------------------------------------------------------------------
let currentViewMode = 'stages';

function switchTimelineView(mode) {
    currentViewMode = mode;
    const stagesBtn = document.getElementById('view-mode-stages');
    const dailyBtn = document.getElementById('view-mode-daily');
    const filterContainer = document.getElementById('island-filters');

    if (mode === 'daily') {
        if (dailyBtn) dailyBtn.className = 'px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-teal-800 text-white shadow-sm flex items-center gap-2';
        if (stagesBtn) stagesBtn.className = 'px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition text-teal-900 hover:text-teal-700 flex items-center gap-2';
        if (filterContainer) filterContainer.classList.add('hidden');
        renderDailyProgram();
    } else {
        if (stagesBtn) stagesBtn.className = 'px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition bg-teal-800 text-white shadow-sm flex items-center gap-2';
        if (dailyBtn) dailyBtn.className = 'px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition text-teal-900 hover:text-teal-700 flex items-center gap-2';
        if (filterContainer) filterContainer.classList.remove('hidden');
        renderTimeline(TRIP_STAGES);
    }
}

function renderDailyProgram() {
    const container = document.getElementById('timeline-container');
    if (!container || !DAILY_PROGRAM) return;

    container.innerHTML = `
        <div class="relative pl-4 sm:pl-8 border-l-2 border-teal-200/80 space-y-6 sm:space-y-8 my-6">
            ${DAILY_PROGRAM.map(day => `
                <div class="relative group">
                    <!-- Point sur la ligne chronologique -->
                    <div class="absolute -left-[25px] sm:-left-[41px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-teal-600 flex items-center justify-center text-xs shadow-sm font-bold text-teal-800">
                        ${day.dayNumber}
                    </div>

                    <!-- Carte du jour -->
                    <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-teal-100">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div class="flex items-center gap-2">
                                <span class="bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
                                    Jour ${day.dayNumber} • ${day.date}
                                </span>
                                <span class="bg-amber-50 text-amber-900 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-amber-200">
                                    📍 ${day.island}
                                </span>
                            </div>
                            <span class="text-xs text-gray-500 font-medium italic">
                                ${day.type}
                            </span>
                        </div>

                        <h3 class="text-lg sm:text-xl font-bold text-teal-950 font-display mb-2 flex items-center gap-2">
                            <span>${day.icon}</span> ${day.title}
                        </h3>

                        <p class="text-gray-600 text-sm leading-relaxed mb-3">
                            ${day.description}
                        </p>

                        <div class="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-teal-700 font-medium">
                            <i class="fas fa-bed"></i> <strong>Hébergement :</strong> ${day.hotel}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderFilters() {
    const filterContainer = document.getElementById('island-filters');
    if (!filterContainer) return;

    const islands = ['Toutes', ...new Set(TRIP_STAGES.map(s => s.island))];

    filterContainer.innerHTML = islands.map((island, i) => `
        <button onclick="filterStages('${island}')" class="filter-btn px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition ${i === 0 ? 'bg-teal-700 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-teal-50'}">
            ${island === 'Toutes' ? '🌴 Tout voir' : '🌺 ' + island}
        </button>
    `).join('');
}

function filterStages(island) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.textContent.includes(island) || (island === 'Toutes' && btn.textContent.includes('Tout voir'))) {
            btn.className = 'filter-btn px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition bg-teal-700 text-white shadow-md';
        } else {
            btn.className = 'filter-btn px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition bg-white text-gray-700 hover:bg-teal-50';
        }
    });

    if (island === 'Toutes') {
        renderTimeline(TRIP_STAGES);
    } else {
        const filtered = TRIP_STAGES.filter(s => s.island === island);
        renderTimeline(filtered);
    }
}

// -----------------------------------------------------------------------------
// 5. Galerie Photo Complète
// -----------------------------------------------------------------------------
function renderGallery() {
    const galleryContainer = document.getElementById('photo-gallery');
    if (!galleryContainer) return;

    // Rassembler toutes les photos des étapes
    const allPhotos = [];
    TRIP_STAGES.forEach(stage => {
        allPhotos.push({ url: stage.coverImage, caption: `${stage.island} - ${stage.title}` });
        stage.gallery.forEach(img => {
            if (img !== stage.coverImage) {
                allPhotos.push({ url: img, caption: `${stage.island}` });
            }
        });
    });

    currentLightboxImages = allPhotos.map(p => p.url);

    galleryContainer.innerHTML = allPhotos.map((photo, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
            <img src="${photo.url}" alt="${photo.caption}" loading="lazy" />
            <div class="overlay">
                <p class="text-sm font-medium"><i class="fas fa-camera mr-1"></i> ${photo.caption}</p>
            </div>
        </div>
    `).join('');
}

// -----------------------------------------------------------------------------
// 6. Lightbox Plein Écran
// -----------------------------------------------------------------------------
function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#lightbox-close')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    const modal = document.getElementById('lightbox-modal');
    modal.classList.add('active');
}

function openLightboxFromUrl(url) {
    const foundIdx = currentLightboxImages.indexOf(url);
    if (foundIdx !== -1) {
        openLightbox(foundIdx);
    } else {
        currentLightboxImages.push(url);
        openLightbox(currentLightboxImages.length - 1);
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.remove('active');
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    updateLightboxContent();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const imgEl = document.getElementById('lightbox-img');
    const counterEl = document.getElementById('lightbox-counter');
    if (imgEl) imgEl.src = currentLightboxImages[currentLightboxIndex];
    if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

// -----------------------------------------------------------------------------
// 7. Livre d'or Familial (100% Sécurisé via WhatsApp & Affichage Local)
// -----------------------------------------------------------------------------
function initGuestbook() {
    renderGuestbook();

    const form = document.getElementById('guestbook-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('gb-name');
            const avatarInput = document.getElementById('gb-avatar');
            const messageInput = document.getElementById('gb-message');

            const author = nameInput ? nameInput.value.trim() : '';
            const avatar = avatarInput ? avatarInput.value : '🌺';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!author || !message) return;

            // 1. Enregistrement local immédiat pour affichage sur le site
            const stored = JSON.parse(localStorage.getItem('polynesia_guestbook') || '[]');
            const newEntry = {
                id: Date.now(),
                author: author,
                avatar: avatar,
                date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
                message: message
            };

            stored.unshift(newEntry);
            localStorage.setItem('polynesia_guestbook', JSON.stringify(stored));
            renderGuestbook();

            // 2. Préparation du message formaté pour WhatsApp (100% direct et privé)
            const text = `Ia Orana toute la Tribu ! ${avatar}\nC'est ${author} :\n"${message}"\n\n(Envoyé depuis votre carnet de voyage en Polynésie 🌴)`;
            const encodedText = encodeURIComponent(text);

            // Notification visuelle de succès
            const successMsg = document.getElementById('gb-success');
            if (successMsg) {
                successMsg.classList.remove('hidden');
                setTimeout(() => successMsg.classList.add('hidden'), 5000);
            }

            // Réinitialiser le formulaire
            nameInput.value = '';
            messageInput.value = '';

            // 3. Ouvre WhatsApp directement dans un nouvel onglet / application mobile
            window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
        });
    }
}

function renderGuestbook() {
    const container = document.getElementById('guestbook-list');
    if (!container) return;

    const customMessages = JSON.parse(localStorage.getItem('polynesia_guestbook') || '[]');
    const allMessages = [...customMessages, ...INITIAL_GUESTBOOK];

    container.innerHTML = allMessages.map(msg => `
        <div class="guestbook-card mb-4 bg-white p-5 rounded-2xl border-l-4 border-teal-500 shadow-sm">
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                    <span class="text-2xl p-2 bg-teal-50 rounded-xl">${msg.avatar}</span>
                    <strong class="text-gray-800 font-semibold">${msg.author}</strong>
                </div>
                <span class="text-xs text-gray-400 font-medium">${msg.date}</span>
            </div>
            <p class="text-gray-600 text-sm pl-12 leading-relaxed">${msg.message}</p>
        </div>
    `).join('');
}
