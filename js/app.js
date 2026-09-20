// =============================================================================
// APPLICATION PRINCIPALE - CARNET DE VOYAGE POLYNÉSIE 2026
// Navigation Fluide, Cartes Épurées, Modales Détaillées & Zéro Blocage
// =============================================================================

let map;
let markers = [];
let polyline;
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let cardsDisplayMode = 'compact'; // 'compact' (épuré) ou 'expanded' (tout déplié)
let currentFilter = 'all';
let currentSearchQuery = '';

// Démarrage direct dès le chargement du DOM sans barrière ni friction
document.addEventListener('DOMContentLoaded', () => {
    launchApplication();
    initBackToTop();
    initSearchListener();
});

// -----------------------------------------------------------------------------
// 1. Initialisation Principale
// -----------------------------------------------------------------------------
function launchApplication() {
    const stages = window.TRIP_STAGES || [];
    
    initHeroData();
    initLiveCountdown();
    initInternationalClock();
    renderStagesRibbon();
    renderFlightsList();
    initMap();
    renderTimeline();
    renderFilters();
    renderGallery();
    initLightbox();
    initModalKeyListeners();

    // Recalcul de la taille de la carte Leaflet
    setTimeout(() => {
        if (map) {
            map.invalidateSize();
            if (polyline) {
                map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
            }
        }
    }, 400);
}

// -----------------------------------------------------------------------------
// 2. En-tête & Informations Générales
// -----------------------------------------------------------------------------
function initHeroData() {
    if (typeof TRIP_CONFIG === 'undefined') return;

    const titleEl = document.getElementById('trip-title');
    const travelersEl = document.getElementById('trip-travelers');
    const descEl = document.getElementById('trip-desc');

    if (titleEl && TRIP_CONFIG.tripTitle) titleEl.textContent = TRIP_CONFIG.tripTitle;
    if (travelersEl && TRIP_CONFIG.travelers) travelersEl.textContent = TRIP_CONFIG.travelers;
    if (descEl && TRIP_CONFIG.description) descEl.textContent = TRIP_CONFIG.description;
}

// -----------------------------------------------------------------------------
// 3. Compte à Rebours Dynamique & Statut en Direct
// -----------------------------------------------------------------------------
function initLiveCountdown() {
    const start = new Date("2026-10-09T12:05:00+02:00");
    const end = new Date("2026-11-01T09:05:00+01:00");

    function update() {
        const now = new Date();
        const diffToStart = start - now;
        const diffToEnd = end - now;

        const countTitle = document.getElementById('countdown-title');
        const countDays = document.getElementById('count-days');
        const countHours = document.getElementById('count-hours');
        const countMinutes = document.getElementById('count-minutes');
        const countSeconds = document.getElementById('count-seconds');
        const flightInfo = document.getElementById('countdown-flight-info');

        if (diffToStart > 0) {
            // Avant le départ
            const d = Math.floor(diffToStart / (1000 * 60 * 60 * 24));
            const h = Math.floor((diffToStart / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diffToStart / (1000 * 60)) % 60);
            const s = Math.floor((diffToStart / 1000) % 60);

            if (countTitle) countTitle.textContent = "Décollage dans";
            if (countDays) countDays.textContent = d;
            if (countHours) countHours.textContent = h.toString().padStart(2, '0');
            if (countMinutes) countMinutes.textContent = m.toString().padStart(2, '0');
            if (countSeconds) countSeconds.textContent = s.toString().padStart(2, '0');
            if (flightInfo) flightInfo.innerHTML = `<i class="fas fa-plane-departure text-amber-300"></i> Vol Air Tahiti Nui TN57 • Départ Paris CDG le 09/10/2026 à 12h05`;
        } else if (diffToEnd > 0) {
            // Pendant le voyage
            const totalDuration = end - start;
            const elapsed = now - start;
            const pct = Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100)));

            const d = Math.floor(diffToEnd / (1000 * 60 * 60 * 24));
            const h = Math.floor((diffToEnd / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diffToEnd / (1000 * 60)) % 60);
            const s = Math.floor((diffToEnd / 1000) % 60);

            if (countTitle) countTitle.textContent = "Voyage en cours ! Reste";
            if (countDays) countDays.textContent = d;
            if (countHours) countHours.textContent = h.toString().padStart(2, '0');
            if (countMinutes) countMinutes.textContent = m.toString().padStart(2, '0');
            if (countSeconds) countSeconds.textContent = s.toString().padStart(2, '0');
            if (flightInfo) flightInfo.innerHTML = `🌊 Échappée polynésienne en direct • Progression du périple : <strong>${pct}%</strong>`;
        } else {
            // Après le voyage
            if (countTitle) countTitle.textContent = "Voyage terminé";
            if (countDays) countDays.textContent = "0";
            if (countHours) countHours.textContent = "00";
            if (countMinutes) countMinutes.textContent = "00";
            if (countSeconds) countSeconds.textContent = "00";
            if (flightInfo) flightInfo.innerHTML = `🌺 Des souvenirs inoubliables plein les yeux et le cœur !`;
        }
    }

    update();
    setInterval(update, 1000);
}

// -----------------------------------------------------------------------------
// 4. Horloge Internationale Interactive (Double Cadran Paris ↔ Polynésie)
// -----------------------------------------------------------------------------
let currentClockZone = 'tahiti';

const CLOCK_ZONES = {
    tahiti: {
        tz: 'Pacific/Tahiti',
        name: '🌺 Tahiti / Moorea / Tuamotu',
        abbr: 'UTC-10',
        diffHours: -12,
        tips: 'Sieste de 13h recommandée pour les jumeaux et bébé afin d\'absorber les 12h de décalage.'
    },
    marquises: {
        tz: 'Pacific/Marquesas',
        name: '🗿 Îles Marquises',
        abbr: 'UTC-9h30',
        diffHours: -11.5,
        tips: 'Décalage horaire particulier de -11h30 avec la France. Rythme très matinal avec le soleil.'
    },
    lax: {
        tz: 'America/Los_Angeles',
        name: '🇺🇸 Escale Los Angeles LAX',
        abbr: 'PDT (UTC-7)',
        diffHours: -9,
        tips: 'Transit de 2h à LAX : marche dans le terminal pour dégourdir les jambes des enfants.'
    }
};

function selectClockZone(zoneKey) {
    if (!CLOCK_ZONES[zoneKey]) return;
    currentClockZone = zoneKey;

    document.querySelectorAll('.clock-zone-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-amber-400', 'text-teal-950');
        btn.classList.add('bg-white/15', 'text-teal-100');
    });

    const activeBtn = document.getElementById(`btn-clock-${zoneKey}`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-amber-400', 'text-teal-950');
        activeBtn.classList.remove('bg-white/15', 'text-teal-100');
    }

    updateClockDisplay();
}

function initInternationalClock() {
    updateClockDisplay();
    setInterval(updateClockDisplay, 1000);
}

function updateClockDisplay() {
    const now = new Date();
    const zoneConfig = CLOCK_ZONES[currentClockZone] || CLOCK_ZONES.tahiti;

    // Heure Paris
    const parisFormatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
    const parisDateFormatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    const parisTimeEl = document.getElementById('clock-paris-time');
    const parisDateEl = document.getElementById('clock-paris-date');
    if (parisTimeEl) parisTimeEl.textContent = parisFormatter.format(now);
    if (parisDateEl) parisDateEl.textContent = parisDateFormatter.format(now);

    // Heure Destination
    const destFormatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: zoneConfig.tz,
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
    const destDateFormatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: zoneConfig.tz,
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    const destTitleEl = document.getElementById('clock-dest-title');
    const destTimeEl = document.getElementById('clock-dest-time');
    const destDateEl = document.getElementById('clock-dest-date');
    const diffBadgeEl = document.getElementById('clock-diff-badge');
    const diffTextEl = document.getElementById('clock-diff-text');

    if (destTitleEl) destTitleEl.textContent = zoneConfig.name;
    if (destTimeEl) destTimeEl.textContent = destFormatter.format(now);
    if (destDateEl) destDateEl.textContent = destDateFormatter.format(now);

    if (diffBadgeEl) diffBadgeEl.textContent = `${zoneConfig.diffHours}h`;
    if (diffTextEl) diffTextEl.textContent = `${Math.abs(zoneConfig.diffHours)}h de moins qu'à Paris`;

    // Ambiance en fonction de l'heure locale
    const destHourStr = new Intl.DateTimeFormat('fr-FR', {
        timeZone: zoneConfig.tz, hour: 'numeric', hour12: false
    }).format(now);
    const destHour = parseInt(destHourStr, 10);

    const actIconEl = document.getElementById('clock-activity-icon');
    const actTitleEl = document.getElementById('clock-activity-title');
    const actDescEl = document.getElementById('clock-activity-desc');
    const tipEl = document.getElementById('clock-family-jetlag-tip');

    if (destHour >= 5 && destHour < 7) {
        if (actIconEl) actIconEl.textContent = "🌅";
        if (actTitleEl) actTitleEl.textContent = "Lever du jour tropical";
        if (actDescEl) actDescEl.textContent = "L'île s'éveille doucement. Bain matinal rafraîchissant dans les eaux calmes du lagon.";
    } else if (destHour >= 7 && destHour < 12) {
        if (actIconEl) actIconEl.textContent = "☀️";
        if (actTitleEl) actTitleEl.textContent = "Matinée lagon & découvertes";
        if (actDescEl) actDescEl.textContent = "Ensoleillement parfait pour le snorkeling, les raies mantas et les sorties pirogue.";
    } else if (destHour >= 12 && destHour < 15) {
        if (actIconEl) actIconEl.textContent = "🌴";
        if (actTitleEl) actTitleEl.textContent = "Déjeuner & pause ombragée";
        if (actDescEl) actDescEl.textContent = "Poisson cru au lait de coco et sieste indispensable pour les enfants à l'ombre des cocotiers.";
    } else if (destHour >= 15 && destHour < 18) {
        if (actIconEl) actIconEl.textContent = "🏖️";
        if (actTitleEl) actTitleEl.textContent = "Après-midi plage & baignade";
        if (actDescEl) actDescEl.textContent = "Jeux de sable pour les jumeaux et bébé, balade au bord du récif et paddle.";
    } else if (destHour >= 18 && destHour < 21) {
        if (actIconEl) actIconEl.textContent = "🍹";
        if (actTitleEl) actTitleEl.textContent = "Coucher de soleil & dîner insulaire";
        if (actDescEl) actDescEl.textContent = "Le ciel s'embrase de rose et d'or. Roulottes traditionnelles ou dîner les pieds dans le sable.";
    } else {
        if (actIconEl) actIconEl.textContent = "🌙";
        if (actTitleEl) actTitleEl.textContent = "Nuit tropicale sous les étoiles";
        if (actDescEl) actDescEl.textContent = "Sommeil bercé par le ressac des vagues sur la barrière de corail.";
    }

    if (tipEl) tipEl.innerHTML = `<i class="fas fa-bed text-amber-300"></i> ${zoneConfig.tips}`;
}

// -----------------------------------------------------------------------------
// 5. Ruban Défilant d'Étapes en Haut (Navigation Rapide)
// -----------------------------------------------------------------------------
function renderStagesRibbon() {
    const ribbonContainer = document.getElementById('stages-ribbon');
    if (!ribbonContainer || typeof TRIP_STAGES === 'undefined') return;

    ribbonContainer.innerHTML = TRIP_STAGES.map((stage, idx) => {
        let iconEmoji = "🏝️";
        let badgeBg = "bg-teal-800 text-white";
        let labelTitle = stage.island || stage.title;

        if (stage.category === 'flight') {
            iconEmoji = "✈️";
            badgeBg = "bg-amber-400 text-teal-950 font-bold";
            labelTitle = stage.flightNumber || "Vol";
        } else if (stage.category === 'transfer') {
            iconEmoji = "⛴️";
            badgeBg = "bg-cyan-600 text-white";
            labelTitle = "Ferry";
        }

        const dateSnippet = stage.dates ? stage.dates.split(' ')[0] : '';

        return `
            <button onclick="openStageModal('${stage.id}')" class="flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white text-xs font-medium cursor-pointer transition transform hover:scale-105" title="${stage.title}">
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-[11px] shadow-sm ${badgeBg}">
                    ${iconEmoji}
                </span>
                <div class="text-left">
                    <span class="block font-bold text-xs leading-tight whitespace-nowrap">${labelTitle}</span>
                    <span class="block text-[10px] text-teal-200 leading-tight whitespace-nowrap">${dateSnippet}</span>
                </div>
            </button>
            ${idx < TRIP_STAGES.length - 1 ? `<i class="fas fa-chevron-right text-[8px] text-teal-300/40 flex-shrink-0"></i>` : ''}
        `;
    }).join('');
}

// -----------------------------------------------------------------------------
// 6. Rendu des Étapes de l'Itinéraire (Vue Synthétique vs Dépliée)
// -----------------------------------------------------------------------------
function setCardsDisplayMode(mode) {
    cardsDisplayMode = mode;
    const btnCompact = document.getElementById('btn-view-compact');
    const btnExpanded = document.getElementById('btn-view-expanded');

    if (mode === 'compact') {
        if (btnCompact) {
            btnCompact.className = 'px-3 py-1.5 rounded-lg bg-white text-teal-900 shadow-sm transition';
        }
        if (btnExpanded) {
            btnExpanded.className = 'px-3 py-1.5 rounded-lg text-gray-600 hover:text-teal-900 transition';
        }
    } else {
        if (btnExpanded) {
            btnExpanded.className = 'px-3 py-1.5 rounded-lg bg-white text-teal-900 shadow-sm transition';
        }
        if (btnCompact) {
            btnCompact.className = 'px-3 py-1.5 rounded-lg text-gray-600 hover:text-teal-900 transition';
        }
    }

    renderTimeline();
}

function initSearchListener() {
    const searchInput = document.getElementById('stage-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        renderTimeline();
    });
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container || typeof TRIP_STAGES === 'undefined') return;

    // Filtrage
    let stages = TRIP_STAGES;

    if (currentFilter === 'flights') {
        stages = stages.filter(s => s.category === 'flight' || s.category === 'transfer');
    } else if (currentFilter === 'islands') {
        stages = stages.filter(s => s.category === 'island');
    } else if (currentFilter !== 'all') {
        stages = stages.filter(s => s.island && s.island.toLowerCase() === currentFilter.toLowerCase());
    }

    // Recherche
    if (currentSearchQuery) {
        stages = stages.filter(s => {
            const str = `${s.title} ${s.island || ''} ${s.hotel || ''} ${s.summary || ''} ${s.story || ''}`.toLowerCase();
            return str.includes(currentSearchQuery);
        });
    }

    if (stages.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <span class="text-4xl block mb-2">🔍</span>
                <p class="text-base font-bold text-gray-800">Aucune étape ne correspond à votre recherche.</p>
                <button onclick="resetFilters()" class="mt-3 px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-semibold hover:bg-teal-700 transition">
                    Réinitialiser les filtres
                </button>
            </div>
        `;
        return;
    }

    // Rendu selon le mode d'affichage
    if (cardsDisplayMode === 'compact') {
        container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
        container.innerHTML = stages.map((stage, idx) => renderStageCompactCard(stage, idx)).join('');
    } else {
        container.className = "grid grid-cols-1 gap-8";
        container.innerHTML = stages.map((stage, idx) => renderStageExpandedCard(stage, idx)).join('');
    }
}

// CARTE ÉPURÉE (Synthétique avec bouton d'ouverture de modale)
function renderStageCompactCard(stage, idx) {
    const isFlight = stage.category === 'flight';
    const isTransfer = stage.category === 'transfer';

    let categoryBadge = "Escale Lagon";
    let badgeColor = "bg-teal-50 text-teal-800 border-teal-200";
    let iconEmoji = "🏝️";

    if (isFlight) {
        categoryBadge = stage.flightType === 'international' ? "Vol International" : "Vol Air Tahiti";
        badgeColor = stage.flightType === 'international' ? "bg-amber-50 text-amber-900 border-amber-200" : "bg-teal-50 text-teal-800 border-teal-200";
        iconEmoji = "✈️";
    } else if (isTransfer) {
        categoryBadge = "Traversée Bateau";
        badgeColor = "bg-cyan-50 text-cyan-900 border-cyan-200";
        iconEmoji = "⛴️";
    }

    const highlightsSnippet = (stage.highlights || []).slice(0, 3).map(h => `
        <li class="flex items-center gap-1.5 text-xs text-gray-600 truncate">
            <span class="text-teal-500 text-xs">✓</span> <span class="truncate">${h}</span>
        </li>
    `).join('');

    return `
        <article class="stage-card-compact shadow-sm hover:shadow-xl transition duration-300">
            <!-- Image de Couverture -->
            <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <img src="${stage.coverImage}" alt="${stage.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <!-- Badge Numéro & Catégorie -->
                <div class="absolute top-3 left-3 flex items-center gap-1.5">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md bg-white/95 text-teal-950 backdrop-blur-sm">
                        ${iconEmoji} Étape ${TRIP_STAGES.indexOf(stage) + 1}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-md bg-teal-900/80 text-white backdrop-blur-sm border border-white/20">
                        ${stage.island || 'Polynésie'}
                    </span>
                </div>

                <!-- Date en bas sur l'image -->
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span class="flex items-center gap-1">
                        <i class="fas fa-calendar-day text-amber-300"></i> ${stage.dates}
                    </span>
                    <span class="text-[11px] text-teal-100 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        ${stage.weather || '28°C'}
                    </span>
                </div>
            </div>

            <!-- Corps de la carte -->
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="font-display font-bold text-lg sm:text-xl text-teal-950 mb-2 leading-snug">
                        ${stage.title}
                    </h3>
                    
                    <p class="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
                        ${stage.summary}
                    </p>

                    <!-- Infos logistiques clés -->
                    <div class="bg-gray-50 rounded-xl p-2.5 mb-3 text-xs text-gray-700 flex items-center gap-2 border border-gray-100">
                        <i class="fas fa-hotel text-teal-600 flex-shrink-0"></i>
                        <span class="truncate font-medium">${stage.hotel || stage.airline || 'Liaison directe'}</span>
                    </div>

                    <!-- Puces Highlights -->
                    <ul class="space-y-1 mb-4">
                        ${highlightsSnippet}
                    </ul>
                </div>

                <!-- Bouton d'Action Principal "En savoir plus" -->
                <div class="pt-3 border-t border-gray-100">
                    <button onclick="openStageModal('${stage.id}')" class="w-full py-2.5 px-4 bg-teal-50 hover:bg-teal-600 text-teal-800 hover:text-white font-bold rounded-xl text-xs sm:text-sm border border-teal-200/80 transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm">
                        <span>Découvrir cette étape</span>
                        <i class="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition duration-200"></i>
                    </button>
                </div>
            </div>
        </article>
    `;
}

// CARTE DÉPLIÉE (Affichage complet au fil de la page si l'utilisateur le choisit)
function renderStageExpandedCard(stage, idx) {
    const highlightsHtml = (stage.highlights || []).map(h => `
        <li class="flex items-center gap-2 text-xs sm:text-sm text-teal-950 mb-1">
            <span class="text-teal-600 font-bold">✓</span> ${h}
        </li>
    `).join('');

    const programHtml = (stage.programDetails || []).map(p => `
        <li class="text-xs sm:text-sm text-gray-700 mb-1.5 pl-3 border-l-2 border-teal-300">
            ${p}
        </li>
    `).join('');

    return `
        <article class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-900 px-3 py-1 rounded-full">
                    Étape ${TRIP_STAGES.indexOf(stage) + 1} • ${stage.island || 'Liaison'}
                </span>
                <span class="text-xs text-gray-500 font-medium">
                    <i class="fas fa-calendar-alt text-teal-600 mr-1"></i> ${stage.dates}
                </span>
            </div>

            <h3 class="font-display font-bold text-2xl text-teal-950 mb-3">${stage.title}</h3>
            <p class="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">${stage.story}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div class="bg-teal-50 p-4 rounded-2xl border border-teal-100 text-xs sm:text-sm">
                    <strong>Hébergement / Transport :</strong>
                    <p class="text-gray-700 mt-1">${stage.hotel || stage.airline}</p>
                </div>
                ${stage.familyTips ? `
                    <div class="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm">
                        <strong class="text-amber-950">Conseil Famille & Enfants :</strong>
                        <p class="text-gray-700 mt-1">${stage.familyTips}</p>
                    </div>
                ` : ''}
            </div>

            ${programHtml ? `
                <div class="my-4">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-teal-900 mb-2">Au fil des journées :</h4>
                    <ul class="space-y-1">${programHtml}</ul>
                </div>
            ` : ''}

            <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <button onclick="highlightMapStage('${stage.id}')" class="btn-secondary text-xs">
                    <i class="fas fa-map-pin mr-1"></i> Situer sur la carte
                </button>
            </div>
        </article>
    `;
}

// -----------------------------------------------------------------------------
// 7. Grande Modale Détaillée d'Étape ("En savoir plus")
// -----------------------------------------------------------------------------
function openStageModal(stageId) {
    if (typeof TRIP_STAGES === 'undefined') return;

    const stage = TRIP_STAGES.find(s => s.id === stageId);
    if (!stage) return;

    const modalBackdrop = document.getElementById('stage-detail-modal');
    const modalContent = document.getElementById('stage-modal-content');
    if (!modalBackdrop || !modalContent) return;

    const isFlight = stage.category === 'flight';
    const isTransfer = stage.category === 'transfer';

    const highlightsHtml = (stage.highlights || []).map(h => `
        <li class="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
            <span class="text-teal-600 font-bold text-sm">✓</span>
            <span>${h}</span>
        </li>
    `).join('');

    const programHtml = (stage.programDetails || []).map(item => `
        <li class="text-xs sm:text-sm text-gray-700 pl-3.5 border-l-2 border-teal-400 leading-relaxed">
            ${item}
        </li>
    `).join('');

    const externalLinksHtml = (stage.externalLinks || []).map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-teal-50 text-teal-950 font-bold text-xs border border-teal-200 shadow-sm transition">
            <i class="fas ${link.icon || 'fa-external-link-alt'} text-teal-600"></i> ${link.label}
            <i class="fas fa-external-link-alt text-[10px] text-gray-400 ml-1"></i>
        </a>
    `).join('');

    const galleryHtml = (stage.gallery || []).map(img => `
        <img src="${img}" alt="${stage.title}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover cursor-pointer hover:opacity-85 hover:scale-105 transition shadow-sm" onclick="openLightboxFromUrl('${img}')" />
    `).join('');

    modalContent.innerHTML = `
        <!-- Image Héroïque de la Modale -->
        <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-teal-950">
            <img src="${stage.coverImage}" alt="${stage.title}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6 text-white">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-teal-950 shadow">
                        Étape ${TRIP_STAGES.indexOf(stage) + 1} sur 15
                    </span>
                    <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                        📍 ${stage.island || 'Liaison'}
                    </span>
                    <span class="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-teal-200 backdrop-blur-sm">
                        <i class="fas fa-calendar-alt text-amber-300 mr-1"></i> ${stage.dates}
                    </span>
                </div>
                <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-white drop-shadow-md">
                    ${stage.title}
                </h2>
            </div>
        </div>

        <!-- Corps Détaillé de la Modale -->
        <div class="p-6 sm:p-8 space-y-6">
            
            <!-- Récit Complet -->
            <div>
                <h3 class="text-xs font-bold uppercase tracking-widest text-teal-800 mb-2 flex items-center gap-1.5">
                    <i class="fas fa-book-open text-teal-600"></i> Le Récit de l'Étape
                </h3>
                <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
                    ${stage.story}
                </p>
            </div>

            <!-- Hébergement & Transport -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-teal-50/70 p-5 rounded-2xl border border-teal-100 text-xs sm:text-sm">
                <div>
                    <strong class="text-teal-950 block mb-1 flex items-center gap-1.5">
                        <i class="fas fa-hotel text-teal-600"></i> Hébergement & Formule
                    </strong>
                    <p class="text-gray-700">${stage.hotel || 'Non applicable'}</p>
                    ${stage.roomType ? `<p class="text-gray-600 mt-1 italic">${stage.roomType}</p>` : ''}
                </div>
                <div>
                    <strong class="text-teal-950 block mb-1 flex items-center gap-1.5">
                        <i class="fas fa-plane-arrival text-teal-600"></i> Logistique & Transferts
                    </strong>
                    <p class="text-gray-700">${stage.transport || stage.airline || 'Inclus'}</p>
                </div>
            </div>

            <!-- Programme Heure par Heure -->
            ${programHtml ? `
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3 flex items-center gap-1.5">
                        <i class="fas fa-list-check text-teal-600"></i> Déroulé & Programme Détaillé
                    </h3>
                    <ul class="space-y-2.5">
                        ${programHtml}
                    </ul>
                </div>
            ` : ''}

            <!-- Points Forts -->
            ${highlightsHtml ? `
                <div class="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-amber-950 mb-3 flex items-center gap-1.5">
                        <i class="fas fa-star text-amber-500"></i> Moments Inoubliables
                    </h3>
                    <ul class="space-y-2">
                        ${highlightsHtml}
                    </ul>
                </div>
            ` : ''}

            <!-- Conseil Spécial Famille & Bébé -->
            ${stage.familyTips ? `
                <div class="bg-rose-50/80 p-5 rounded-2xl border border-rose-200 text-xs sm:text-sm text-gray-700 flex items-start gap-3">
                    <span class="text-2xl mt-0.5">👶</span>
                    <div>
                        <strong class="text-rose-950 block mb-1 font-bold">Conseils Famille pour les Jumeaux (7 ans) & Bébé (20 mois) :</strong>
                        <p class="text-gray-700 leading-relaxed">${stage.familyTips}</p>
                    </div>
                </div>
            ` : ''}

            <!-- Liens Utiles & Suivis en Direct -->
            ${externalLinksHtml ? `
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3 flex items-center gap-1.5">
                        <i class="fas fa-arrow-up-right-from-square text-teal-600"></i> Liens Utiles & Suivi en Direct
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${externalLinksHtml}
                    </div>
                </div>
            ` : ''}

            <!-- Galerie Photo de l'Étape -->
            ${galleryHtml ? `
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3 flex items-center gap-1.5">
                        <i class="fas fa-images text-teal-600"></i> Galerie Photos de l'Étape
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        ${galleryHtml}
                    </div>
                </div>
            ` : ''}

            <!-- Pied de Modale -->
            <div class="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <button onclick="highlightMapStage('${stage.id}'); closeStageModal();" class="btn-primary text-xs sm:text-sm py-2.5 px-5">
                    <i class="fas fa-map-pin"></i> Situer sur la carte interactive
                </button>
                <button onclick="closeStageModal()" class="btn-secondary text-xs sm:text-sm py-2.5 px-5">
                    Fermer la fiche
                </button>
            </div>
        </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStageModal() {
    const modalBackdrop = document.getElementById('stage-detail-modal');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
}

function closeStageModalOnBackdrop(e) {
    if (e.target.id === 'stage-detail-modal') {
        closeStageModal();
    }
}

function initModalKeyListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeStageModal();
            closeLightbox();
        }
    });
}

// -----------------------------------------------------------------------------
// 8. Filtres par Île & Catégorie
// -----------------------------------------------------------------------------
function renderFilters() {
    const filterContainer = document.getElementById('island-filters');
    if (!filterContainer) return;

    const filters = [
        { id: 'all', label: '🌴 Toutes les étapes (15)' },
        { id: 'flights', label: '✈️ Vols & Trajets (8)' },
        { id: 'islands', label: '🌺 Îles & Séjours (7)' },
        { id: 'Tahiti', label: 'Tahiti' },
        { id: 'Moorea', label: 'Moorea' },
        { id: 'Rangiroa', label: 'Rangiroa' },
        { id: 'Raiatea', label: 'Raiatea' },
        { id: 'Taha\'a', label: 'Taha\'a' },
        { id: 'Maupiti', label: 'Maupiti' }
    ];

    filterContainer.innerHTML = filters.map((f, i) => `
        <button onclick="setFilter('${f.id}')" data-filter="${f.id}" class="filter-btn px-4 py-1.5 rounded-full text-xs font-semibold transition ${f.id === currentFilter ? 'bg-teal-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-teal-50 border border-gray-200'}">
            ${f.label}
        </button>
    `).join('');
}

function setFilter(filterId) {
    currentFilter = filterId;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === filterId) {
            btn.className = 'filter-btn px-4 py-1.5 rounded-full text-xs font-semibold transition bg-teal-700 text-white shadow-sm';
        } else {
            btn.className = 'filter-btn px-4 py-1.5 rounded-full text-xs font-semibold transition bg-white text-gray-700 hover:bg-teal-50 border border-gray-200';
        }
    });

    renderTimeline();
}

function resetFilters() {
    currentFilter = 'all';
    currentSearchQuery = '';
    const searchInput = document.getElementById('stage-search-input');
    if (searchInput) searchInput.value = '';
    renderFilters();
    renderTimeline();
}

// -----------------------------------------------------------------------------
// 9. Liste des Vols Inter-Îles Air Tahiti
// -----------------------------------------------------------------------------
function renderFlightsList() {
    const container = document.getElementById('flights-list');
    if (!container || typeof TRIP_FLIGHTS === 'undefined') return;

    container.innerHTML = TRIP_FLIGHTS.map((flight) => {
        const isInter = flight.category === 'international';
        const badgeColor = isInter ? 'bg-teal-100 text-teal-900 border-teal-200' : 'bg-amber-100 text-amber-900 border-amber-200';

        return `
            <div class="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-teal-50/50 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <span class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm ${badgeColor} border">
                        ✈
                    </span>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-teal-950 text-sm sm:text-base">${flight.route}</span>
                            <span class="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">${flight.flightNumber}</span>
                        </div>
                        <span class="text-xs text-gray-500 block">
                            ${flight.date} • ${flight.times} • ${flight.airline} (${flight.aircraft})
                        </span>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-600 w-full sm:w-auto justify-end">
                    <span class="text-[11px] bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                        🧳 Soute : 23 kg/pers
                    </span>
                    ${flight.flightNumber.startsWith('TN') ? `
                        <a href="https://www.flightaware.com/live/flight/${flight.flightNumber === 'TN57' ? 'THT57' : 'THT8'}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-teal-600 text-white font-semibold text-[11px] hover:bg-teal-700 transition">
                            Suivre
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// -----------------------------------------------------------------------------
// 10. Carte Interactive Leaflet
// -----------------------------------------------------------------------------
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer || typeof L === 'undefined' || typeof TRIP_STAGES === 'undefined') return;

    if (map) {
        map.remove();
        markers = [];
    }

    // Centrer sur la Société / Tuamotu
    map = L.map('map', { scrollWheelZoom: false }).setView([-16.8, -149.8], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(map);

    const islandStages = TRIP_STAGES.filter(s => s.coords && s.coords.length === 2);
    const coordsList = islandStages.map(s => s.coords);

    if (coordsList.length > 0) {
        polyline = L.polyline(coordsList, {
            color: '#028090',
            weight: 3,
            dashArray: '8, 8',
            opacity: 0.8
        }).addTo(map);
    }

    islandStages.forEach((stage, index) => {
        const iconEmoji = (index + 1);

        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `<span>${iconEmoji}</span>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
            popupAnchor: [0, -20]
        });

        const marker = L.marker(stage.coords, { icon: customIcon }).addTo(map);

        const popupContent = `
            <div style="width: 240px; font-family: inherit;">
                <img src="${stage.coverImage}" alt="${stage.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px 8px 0 0;" />
                <div style="padding: 12px;">
                    <h4 style="font-weight: 700; font-size: 0.95rem; color: #264653; margin-bottom: 2px;">${stage.island || stage.title}</h4>
                    <p style="font-size: 0.8rem; color: #52796F; margin-bottom: 6px;"><strong>${stage.dates}</strong></p>
                    <p style="font-size: 0.75rem; color: #555; line-height: 1.3; margin-bottom: 10px;">${stage.summary}</p>
                    <button onclick="openStageModal('${stage.id}')" style="display: block; width: 100%; text-align: center; background: #028090; color: white; padding: 6px 10px; border-radius: 8px; border: none; font-size: 0.8rem; font-weight: 600; cursor: pointer;">
                        Découvrir l'étape →
                    </button>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent);
        markers.push({ stageId: stage.id, marker: marker });
    });

    if (coordsList.length > 0) {
        map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
    }
}

function highlightMapStage(stageId) {
    if (!map) return;

    const item = markers.find(m => m.stageId === stageId);
    if (item) {
        const mapEl = document.getElementById('carte');
        if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            map.flyTo(item.marker.getLatLng(), 9, { duration: 1.2 });
            item.marker.openPopup();
        }, 300);
    }
}

// -----------------------------------------------------------------------------
// 11. Galerie Photos Plein Écran (Lightbox)
// -----------------------------------------------------------------------------
function renderGallery() {
    const container = document.getElementById('photo-gallery');
    if (!container || typeof TRIP_STAGES === 'undefined') return;

    const photos = [];
    TRIP_STAGES.forEach(stage => {
        if (stage.coverImage) photos.push({ url: stage.coverImage, caption: `${stage.island} • ${stage.title}` });
        (stage.gallery || []).forEach(img => {
            if (img !== stage.coverImage) photos.push({ url: img, caption: `${stage.island}` });
        });
    });

    currentLightboxImages = photos.map(p => p.url);

    container.innerHTML = photos.map((p, idx) => `
        <div class="gallery-item rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer relative group" onclick="openLightbox(${idx})">
            <img src="${p.url}" alt="${p.caption}" class="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div class="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-semibold">
                ${p.caption}
            </div>
        </div>
    `).join('');
}

function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#lightbox-close')) {
            closeLightbox();
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.add('active');
}

function openLightboxFromUrl(url) {
    const idx = currentLightboxImages.indexOf(url);
    if (idx !== -1) {
        openLightbox(idx);
    } else {
        currentLightboxImages.push(url);
        openLightbox(currentLightboxImages.length - 1);
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.remove('active');
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
// 12. Bouton Retour en Haut
// -----------------------------------------------------------------------------
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}
