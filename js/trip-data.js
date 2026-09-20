// =============================================================================
// DONNÉES DU VOYAGE EN POLYNÉSIE FRANÇAISE 2026 — NOTRE TRIBU
// =============================================================================
// 2 Adultes, 2 Enfants & 1 Bébé (20 mois)
// Du 09 au 30 Octobre 2026 (Arrivée le 01 Novembre en France)
// Agence : Tribu d'Explorateurs | Vols Air Tahiti Nui & Air Tahiti
// =============================================================================

const TRIP_CONFIG = {
    tripTitle: "Notre Aventure Polynésienne en Famille",
    travelers: "Papa, Maman, les Jumeaux (7 ans) & Bébé (20 mois) 🌺",
    startDate: "2026-10-09",
    endDate: "2026-10-30",
    homeBase: "France",
    destination: "Polynésie Française",
    description: "Bienvenue sur notre carnet de bord interactif ! Suivez notre périple de 3 semaines et 15 étapes chronologiques à travers 6 îles et atolls du Pacifique : Tahiti, Moorea, Rangiroa, Raiatea, Taha'a et Maupiti.",
};

// =============================================================================
// FIL CONDUCTEUR CHRONOLOGIQUE COMPLET (15 ÉTAPES : VOLS, ÎLES & LIAISONS)
// =============================================================================
const TRIP_STAGES = [
    // -------------------------------------------------------------------------
    // ÉTAPE 1 : VOL ALLER INTERNATIONAL TN57
    // -------------------------------------------------------------------------
    {
        id: "vol-aller-tn57",
        category: "flight",
        flightType: "international",
        title: "Vol Aller International : Paris CDG ➔ Tahiti Faa'a",
        island: "Tahiti",
        flightNumber: "TN57",
        airline: "Air Tahiti Nui",
        aircraft: "Boeing 787-9 Dreamliner",
        status: "upcoming",
        dates: "09 Octobre 2026",
        departureDate: "Vendredi 09 Octobre 2026",
        departureTime: "12h05",
        departureAirport: "Paris Roissy Charles de Gaulle (CDG)",
        transit: "Escale technique à Los Angeles (LAX) • Formalité ESTA",
        arrivalDate: "Vendredi 09 Octobre 2026",
        arrivalTime: "21h45 (heure locale de Tahiti)",
        arrivalAirport: "Tahiti Faa'a (PPT)",
        duration: "Env. 22h de voyage (décalage horaire -12h)",
        baggage: "Soute : 1 bagage 23 kg/pers (bébé 10 kg) • Cabine : 10 kg + 3 kg accessoire",
        coords: [-17.5536, -149.6069],
        hotel: "Nuitée d'arrivée : Le Tahiti by Pearl Resort 4*",
        summary: "Le grand décollage vers le Pacifique Sud ! 22h de voyage à bord du Dreamliner et accueil traditionnel aux colliers de fleurs fraîches de tiaré.",
        story: "Vendredi 09 octobre 2026 à 12h05 : le rêve devient réalité ! Toute la tribu embarque à bord du Boeing 787-9 Dreamliner d'Air Tahiti Nui. Après la traversée de l'Atlantique et une escale technique à Los Angeles (LAX), l'avion plonge dans l'immensité du Pacifique. À 21h45 (heure locale de Tahiti, soit -12h de décalage avec la France), les roues touchent la piste de Faa'a au son chaleureux des ukulélés. Accueil traditionnel inoubliable avec remise des colliers de fleurs fraîches de tiaré embaumant la nuit tropicale. Transfert privatif immédiat vers notre Ocean View Suite face à la baie de Matavai pour un repos bien mérité.",
        coverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>09/10 à 12h05</strong> : Décollage de Paris Roissy CDG sur le vol TN57, repas à bord et divertissements enfants.",
            "<strong>09/10 après-midi</strong> : Escale technique et contrôle des passeports à Los Angeles (LAX).",
            "<strong>09/10 à 21h45</strong> : Atterrissage à Tahiti Faa'a sous la brise des tropiques.",
            "<strong>09/10 à 22h30</strong> : Accueil au ukulélé, remise des colliers de tiaré et transfert au Pearl Resort."
        ],
        familyTips: "Berceau bébé réservé au premier rang cabine, biberon d'eau tiède prêt pour le décollage et l'atterrissage (déglutition des oreilles de bébé), vêtements d'été légers prévus dans les sacs cabine pour l'arrivée sous 28°C.",
        highlights: [
            "Décollage de Paris CDG à 12h05 sur le Dreamliner Air Tahiti Nui",
            "Traversée de l'Atlantique et transit à Los Angeles (LAX)",
            "Atterrissage féerique à 21h45 à l'aéroport international de Tahiti Faa'a",
            "Accueil traditionnel au ukulélé et colliers de fleurs de tiaré fraîches"
        ],
        externalLinks: [
            { label: "Suivi en direct FlightAware (TN57)", url: "https://www.flightaware.com/live/flight/THT57", icon: "fa-satellite-dish", color: "amber" },
            { label: "Flightradar24 (TN57)", url: "https://www.flightradar24.com/data/flights/tn57", icon: "fa-plane", color: "teal" },
            { label: "Aéroport Tahiti Faa'a", url: "https://www.tahiti-aeroport.pf/", icon: "fa-building", color: "blue" }
        ],
        mood: "✈️ Le Grand Départ",
        weather: "28°C • Nuit étoilée"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 2 : TAHITI ITI & TEAHUPOO
    // -------------------------------------------------------------------------
    {
        id: "tahiti-iti",
        category: "island",
        title: "Tahiti Iti & La Vague de Teahupoo",
        island: "Tahiti",
        status: "upcoming",
        dates: "09 - 11 Octobre 2026",
        hotel: "Le Tahiti by Pearl Resort 4*",
        roomType: "Ocean View Suite (Petits-déjeuners inclus)",
        pension: "Petits-déjeuners inclus + Déjeuner excursion inclus",
        transport: "Transfert privatif aéroport/hôtel + Bateau excursion",
        coords: [-17.7500, -149.2667],
        summary: "Arrivée à Faa'a, bateau pour la vague de Teahupoo, snorkeling Wonderful Coral Head & spectacle.",
        story: "Première matinée polynésienne face à la baie de Matavai ! Le samedi 10 octobre, journée exceptionnelle à la presqu'île de Tahiti Iti : approche en bateau au plus près de la mythique vague de Teahupoo (spot légendaire des JO 2024), découverte de la rivière Vaiau, jardins d'eau de Vaipahi et snorkeling sur le spot magique de 'Wonderful Coral Head'. Soirée festive avec le grand dîner-spectacle traditionnel de danses et percussions à l'hôtel.",
        coverImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>10/10 Matin</strong> : Excursion en bateau à Teahupoo, approche de la vague olympique et rivière Vaiau.",
            "<strong>10/10 Midi</strong> : Déjeuner local inclus et balade ombragée dans les jardins d'eau de Vaipahi.",
            "<strong>10/10 Après-midi</strong> : Snorkeling féerique à 'Wonderful Coral Head' parmi les poissons tropicaux.",
            "<strong>10/10 Soir</strong> : Grand dîner-spectacle de danses traditionnelles polynésiennes au Pearl Resort.",
            "<strong>11/10 Matin</strong> : Matinée douce face à la baie de Matavai puis transfert au port maritime."
        ],
        familyTips: "Gilet de sauvetage adapté prévu pour notre bébé sur le bateau à Teahupoo. Sentiers de Vaipahi très agréables à l'ombre de la végétation tropicale.",
        culinaryTips: "Poisson cru au lait de coco frais (Ia Ota), fruits de la passion (maracudja) et premier jus d'ananas de Moorea.",
        highlights: [
            "Approche en bateau de la vague mondiale de Teahupoo",
            "Snorkeling sur le spot féerique 'Wonderful Coral Head'",
            "Jardins d'eau de Vaipahi & rivière Vaiau",
            "Spectacle de danses polynésiennes au Tahiti by Pearl Resort"
        ],
        externalLinks: [
            { label: "Tahiti Tourisme — Presqu'île", url: "https://tahititourisme.fr/fr-fr/iles/tahiti/", icon: "fa-compass", color: "teal" },
            { label: "Météo-France Polynésie (Tahiti)", url: "https://meteo.pf/", icon: "fa-sun", color: "amber" }
        ],
        mood: "🤩 Émerveillement & Excitation",
        weather: "28°C • Ensoleillé"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 3 : LIAISON FERRY TAHITI ➔ MOOREA
    // -------------------------------------------------------------------------
    {
        id: "ferry-moorea",
        category: "transfer",
        transferType: "ferry",
        title: "Liaison Ferry : Traversée vers l'Île Magique de Moorea",
        island: "Moorea",
        status: "upcoming",
        dates: "11 Octobre 2026",
        departureDate: "Dimanche 11 Octobre 2026",
        departureTime: "Matinée",
        departureAirport: "Gare Maritime de Papeete (Tahiti)",
        arrivalAirport: "Quai de Vaiare (Moorea)",
        transit: "Catamaran rapide Aremiti / Terevau",
        duration: "30 minutes de navigation abritée",
        baggage: "Bagages enregistrés en chariot maritime à quai",
        vehicle: "Prise en main du Peugeot Rifter familial avec siège bébé à l'embarcadère",
        coords: [-17.5388, -149.8295],
        hotel: "Moorea Sunset Beach 2* (Bungalow Plage)",
        summary: "Traversée de 30 minutes en ferry entre Tahiti et Moorea. Prise de notre véhicule familial Rifter et installation en bungalow plage.",
        story: "Dimanche 11 octobre : après notre première escale sur la presqu'île de Tahiti, transfert au port maritime de Papeete. Embarquement sur le ferry rapide pour franchir le chenal qui sépare Tahiti de son île sœur Moorea. Pendant les 30 minutes de navigation, le profil dentelé des pics majestueux de Moorea surgit de l'océan, entouré de son lagon turquoise. Dès l'arrivée au quai de Vaiare, récupération de notre véhicule de location familial (Peugeot Rifter spacieux avec siège adapté pour bébé) qui nous accompagnera pendant 5 jours. Cap sur la côte ouest pour nous installer dans notre bungalow plage au Moorea Sunset Beach !",
        coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>11/10 à 10h00</strong> : Transfert de l'hôtel au quai des ferries de Papeete.",
            "<strong>11/10 à 11h00</strong> : Traversée en catamaran rapide avec vue grandiose sur les reliefs verdoyants de Moorea.",
            "<strong>11/10 à 11h45</strong> : Prise en main du Peugeot Rifter familial à Vaiare et route vers la plage de Haapiti.",
            "<strong>11/10 après-midi</strong> : Installation en bungalow plage au Moorea Sunset Beach, première baignade lagon."
        ],
        familyTips: "La traversée en catamaran est très stable et confortable pour bébé. Les grands peuvent monter sur le pont supérieur pour admirer la vue sur les montagnes et guetter les poissons volants.",
        highlights: [
            "Traversée spectaculaire de 30 min face aux pics montagneux de Moorea",
            "Prise en main directe du véhicule familial Rifter avec siège bébé",
            "Installation les pieds dans l'eau au Moorea Sunset Beach"
        ],
        externalLinks: [
            { label: "Catamaran Aremiti Express", url: "https://www.aremiti.pf/", icon: "fa-ship", color: "cyan" },
            { label: "Ferry Terevau", url: "https://www.terevau.pf/", icon: "fa-anchor", color: "teal" }
        ],
        mood: "🚢 Cap sur les Îles",
        weather: "29°C • Lagon émeraude"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 4 : MOOREA — BALEINES, LAGON & TIKI VILLAGE
    // -------------------------------------------------------------------------
    {
        id: "moorea-baleines",
        category: "island",
        title: "Baleines, Lagon & Tiki Village",
        island: "Moorea",
        status: "upcoming",
        dates: "11 - 16 Octobre 2026",
        hotel: "Moorea Sunset Beach 2*",
        roomType: "Bungalow Plage (Cuisine équipée / Self-catering)",
        pension: "Formule autonome en bungalow + Déjeuner bateau à fond de verre inclus",
        transport: "Peugeot Rifter familial avec siège bébé",
        coords: [-17.5388, -149.8295],
        summary: "Séjour en bungalow plage, sortie baleines le 13/10, shooting photo lagon et ateliers au Tiki Village pour les enfants.",
        story: "Séjour en bungalow plage au Moorea Sunset Beach les pieds dans le sable. Le 12 octobre : sortie découverte en bateau à fond de verre dans les baies de Cook et d'Opunohu. Le 13 octobre, réalisation d'un grand rêve : la sortie d'observation des baleines à bosse (un parent le matin, l'autre l'après-midi pour se relayer auprès des enfants). Les 14/15 octobre : séance photo souvenir de notre tribu sur le lagon cristallin, baignade avec les raies et requins inoffensifs, et ateliers traditionnels pour les jumeaux au Tiki Village.",
        coverImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>12/10</strong> : Journée en bateau à fond de verre dans les baies de Cook et d'Opunohu, pique-nique motu inclus.",
            "<strong>13/10</strong> : Sortie baleines à bosse en haute mer en rotation parentale (un parent le matin, l'autre l'après-midi).",
            "<strong>14/10 ou 15/10</strong> : Séance photo souvenir privative sur le lagon avec les raies et requins pointes noires inoffensifs.",
            "<strong>15/10</strong> : Ateliers traditionnels au Tiki Village pour les jumeaux (couronnes de fleurs, percussions) et Belvédère d'Opunohu.",
            "<strong>16/10 matin</strong> : Dernier bain matinal et restitution du véhicule à Moorea."
        ],
        familyTips: "La cuisine équipée du bungalow permet de préparer facilement les repas et compotes de notre bébé. Le lagon devant la plage est calme et peu profond.",
        culinaryTips: "Ananas Queen Tahiti de Moorea (le plus doux au monde), glaces artisanales locales et poissons grillés du lagon.",
        highlights: [
            "Sortie magique d'observation des baleines le 13 octobre",
            "Shooting photo de famille sur le lagon",
            "Bateau à fond de verre et nage avec les raies",
            "Ateliers créatifs traditionnels au Tiki Village"
        ],
        externalLinks: [
            { label: "Guide Moorea — Tahiti Tourisme", url: "https://tahititourisme.fr/fr-fr/iles/moorea/", icon: "fa-compass", color: "teal" },
            { label: "Tiki Village Théâtre", url: "https://www.tikivillage.pf/", icon: "fa-masks-theater", color: "amber" }
        ],
        mood: "🐋 Émotions & Joie",
        weather: "29°C • Lagon turquoise"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 5 : VOL INTER-ÎLES #1 TAHITI ➔ RANGIROA
    // -------------------------------------------------------------------------
    {
        id: "vol-rangiroa",
        category: "flight",
        flightType: "domestic",
        title: "Vol Inter-Îles #1 : Envol vers l'Atoll Géant des Tuamotu",
        island: "Rangiroa",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 72-600",
        status: "upcoming",
        dates: "16 Octobre 2026",
        departureDate: "Vendredi 16 Octobre 2026",
        departureTime: "Matinée / Après-midi",
        departureAirport: "Tahiti Faa'a (PPT) (après ferry retour Moorea)",
        arrivalDate: "Vendredi 16 Octobre 2026",
        arrivalTime: "Même journée",
        arrivalAirport: "Rangiroa (RGI)",
        transit: "Vol direct vers les Tuamotu",
        duration: "Env. 1h00 de vol",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg strict",
        coords: [-14.9822, -147.7166],
        hotel: "Raira Lagon 2* (Bungalow Jardin, demi-pension)",
        summary: "Ferry retour vers Tahiti puis premier vol en ATR 72 vers les Tuamotu. Approche vertigineuse au-dessus du lagon infini de Rangiroa.",
        story: "Vendredi 16 octobre : restitution de notre véhicule à Moorea et traversée matinale en ferry vers Tahiti, avant de rejoindre l'aéroport de Faa'a pour activer notre Pass Inter-Îles Air Tahiti. Embarquement à bord de l'ATR 72-600. L'arrivée aux Tuamotu est un choc visuel absolu : à travers les hublots, les reliefs volcaniques laissent place à un immense anneau de corail suspendu entre ciel et mer. L'atoll de Rangiroa est si gigantesque que l'île de Tahiti tout entière tiendrait dans son lagon intérieur ! Atterrissage tout en douceur sur la bande de corail et transfert vers la chaleureuse pension Raira Lagon.",
        coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>16/10 matin</strong> : Restitution du véhicule Rifter à Moorea et ferry retour vers Tahiti.",
            "<strong>16/10 midi</strong> : Enregistrement sur le vol Air Tahiti à l'aéroport de Faa'a.",
            "<strong>16/10 après-midi</strong> : Décollage en ATR 72 et survol panoramique de l'anneau de corail des Tuamotu.",
            "<strong>16/10 fin d'après-midi</strong> : Atterrissage à Rangiroa, accueil chaleureux et transfert au Raira Lagon."
        ],
        familyTips: "Attention à la franchise cabine d'Air Tahiti : 5 kg max par bagage à main. Penser à placer les doudous et les petits livres des enfants à portée de main dans un petit tote bag léger.",
        highlights: [
            "Survol inoubliable de l'anneau de corail et des motus des Tuamotu",
            "Premier décollage en ATR 72 avec le Pass Inter-Îles",
            "Arrivée dans le 2e plus grand atoll du monde"
        ],
        externalLinks: [
            { label: "Air Tahiti (Pass Tuamotu)", url: "https://www.airtahiti.com/", icon: "fa-plane", color: "teal" },
            { label: "Guide Bagages Air Tahiti", url: "https://www.airtahiti.com/fr/bagages", icon: "fa-suitcase", color: "amber" }
        ],
        mood: "🐬 Émerveillement Corallien",
        weather: "29°C • Grand bleu"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 6 : RANGIROA — L'IMMENSITÉ DES TUAMOTU & LE LAGON BLEU
    // -------------------------------------------------------------------------
    {
        id: "rangiroa-atoll",
        category: "island",
        title: "L'Immensité des Tuamotu & Le Lagon Bleu",
        island: "Rangiroa",
        status: "upcoming",
        dates: "16 - 19 Octobre 2026",
        hotel: "Raira Lagon 2*",
        roomType: "Bungalow Jardin (Demi-pension : petits-déjeuners et dîners)",
        pension: "Demi-pension familiale à la pension + Déjeuner Lagon Bleu inclus",
        transport: "Vélos familiaux + Bateau d'excursion lagon",
        coords: [-14.9822, -147.7166],
        summary: "Atoll infini des Tuamotu, dauphins bondissants à la passe de Tiputa, aquarium naturel et excursion au Lagon Bleu.",
        story: "Rangiroa est le deuxième plus grand atoll de la planète ! Logés en bungalow jardin au Raira Lagon en demi-pension. Dès notre arrivée, émerveillement devant les grands dauphins sauvages bondissant dans les vagues de la passe de Tiputa. Le 17 octobre : balade paisible à vélo et session magique de snorkeling dans 'l'Aquarium naturel'. Le dimanche 18 octobre, moment phare du séjour : journée complète en bateau vers le mythique Lagon Bleu, un lagon miniature bordé de motus aux sables roses au milieu de l'atoll !",
        coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>16/10</strong> : Fin d'après-midi magique à la passe de Tiputa pour observer les grands dauphins jouer dans le courant.",
            "<strong>17/10</strong> : Balade familiale à vélo, baignade et snorkeling dans les eaux calmes de l'Aquarium naturel.",
            "<strong>18/10</strong> : Journée complète d'excursion en bateau au Lagon Bleu : motus de sable rose, baignade avec les bébés requins inoffensifs et déjeuner local.",
            "<strong>19/10</strong> : Dernier lever de soleil sur le lagon avant le vol vers les îles Sous-le-Vent."
        ],
        familyTips: "L'excursion au Lagon Bleu se déroule dans des eaux très peu profondes et tièdes, idéales pour que les jumeaux et notre bébé barbotent en toute sécurité.",
        culinaryTips: "Dégustation du vin de corail unique au monde de Rangiroa (Domaine Dominique Auroy) et poissons du large grillés.",
        highlights: [
            "Journée d'excursion au fabuleux Lagon Bleu",
            "Spectacle des dauphins sauvages à la passe de Tiputa",
            "Snorkeling dans 'l'Aquarium' naturel de Tiputa",
            "Ambiance intimiste et familiale au Raira Lagon"
        ],
        externalLinks: [
            { label: "Guide Rangiroa — Tahiti Tourisme", url: "https://tahititourisme.fr/fr-fr/iles/rangiroa/", icon: "fa-water", color: "cyan" },
            { label: "Météo Rangiroa & Tuamotu", url: "https://meteo.pf/", icon: "fa-cloud-sun", color: "teal" }
        ],
        mood: "🏝️ Éblouissement & Sérénité",
        weather: "29°C • Brise alizée"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 7 : VOL INTER-ÎLES #2 RANGIROA ➔ RAIATEA
    // -------------------------------------------------------------------------
    {
        id: "vol-raiatea",
        category: "flight",
        flightType: "domestic",
        title: "Vol Inter-Îles #2 : Des Tuamotu vers les Îles Sous-le-Vent",
        island: "Raiatea",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 72-600",
        status: "upcoming",
        dates: "19 Octobre 2026",
        departureDate: "Lundi 19 Octobre 2026",
        departureTime: "Matinée",
        departureAirport: "Rangiroa (RGI)",
        transit: "Escale de correspondance à Tahiti Faa'a (PPT)",
        arrivalDate: "Lundi 19 Octobre 2026",
        arrivalTime: "Après-midi",
        arrivalAirport: "Raiatea - Uturoa (RFP)",
        duration: "Env. 2h30 (incluant escale)",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg max",
        coords: [-16.7214, -151.4649],
        hotel: "Raiatea Lodge 3* (Bungalow Famille vue mer, demi-pension)",
        summary: "Vol Air Tahiti de Rangiroa vers Raiatea via Tahiti. Arrivée dans le berceau sacré de la culture polynésienne et vue sur Bora Bora.",
        story: "Lundi 19 octobre : au revoir aux eaux calmes de Rangiroa. Décollage en ATR pour notre deuxième vol inter-îles avec une escale technique à Tahiti. Depuis les airs, la transition entre les atolls plats des Tuamotu et les montagnes luxuriantes des îles Sous-le-Vent est saisissante. Atterrissage sur la piste d'Uturoa à Raiatea, l'île sacrée (Havai'i) d'où partirent jadis les grandes pirogues de colonisation vers Hawaï et la Nouvelle-Zélande. Transfert et installation au superbe Raiatea Lodge Hotel face au coucher de soleil sur Bora Bora.",
        coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>19/10 matin</strong> : Décollage de Rangiroa et survol des atolls.",
            "<strong>19/10 midi</strong> : Escale de transit à Tahiti Faa'a, pause collation pour les enfants.",
            "<strong>19/10 après-midi</strong> : Court vol vers Raiatea et approche majestueuse entre le mont Temehani et le lagon.",
            "<strong>19/10 à 16h30</strong> : Arrivée à Uturoa, accueil fleuri et installation au Raiatea Lodge."
        ],
        familyTips: "L'escale à Tahiti Faa'a permet de changer bébé confortablement et de faire déguster aux enfants un jus de fruit frais local avant le court vol final vers Raiatea.",
        highlights: [
            "Contraste géographique vu du ciel : atoll plat vs îles hautes volcaniques",
            "Arrivée sur l'île sacrée berceau de la civilisation ma'ohi",
            "Vue panoramique sur Bora Bora depuis le Raiatea Lodge"
        ],
        externalLinks: [
            { label: "Air Tahiti (Pass Sous-le-Vent)", url: "https://www.airtahiti.com/", icon: "fa-plane", color: "teal" },
            { label: "Aéroport Raiatea Uturoa", url: "https://www.tahiti-aeroport.pf/", icon: "fa-building", color: "blue" }
        ],
        mood: "🛶 Immersion Sacrée",
        weather: "28°C • Brise parfumée"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 8 : RAIATEA — MARAE ROYAL & PIROGUE FAAROA
    // -------------------------------------------------------------------------
    {
        id: "raiatea-sacree",
        category: "island",
        title: "Raiatea la Sacrée, Marae Royal & Pirogue Faaroa",
        island: "Raiatea",
        status: "upcoming",
        dates: "19 - 23 Octobre 2026",
        hotel: "Raiatea Lodge 3*",
        roomType: "Bungalow Famille vue mer (Demi-pension)",
        pension: "Demi-pension au restaurant réputé du lodge + Déjeuner pirogue inclus",
        transport: "Pirogue traditionnelle à balancier + Voiture de location (2 jours)",
        coords: [-16.7214, -151.4649],
        summary: "Remontée de la rivière Faaroa en pirogue à balancier, grand Marae de Taputapuatea (UNESCO) et voiture.",
        story: "Raiatea, l'île sacrée aux légendes polynésiennes millénaires. Séjour au réputé Raiatea Lodge en bungalow famille vue mer. Le 20 octobre : journée en pirogue traditionnelle sur la rivière Faaroa, seule rivière navigable de Polynésie au cœur d'une forêt tropicale luxuriante, avec pique-nique les pieds dans l'eau sur un motu. Les 21 et 22 octobre : exploration complète en voiture de location, pèlerinage au sanctuaire du Marae Royal de Taputapuatea (classé UNESCO) et découverte du marché coloré d'Uturoa.",
        coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>20/10</strong> : Excursion guidée en pirogue traditionnelle sur la rivière Faaroa, flore sauvage et pique-nique tahitien sur motu.",
            "<strong>21/10</strong> : Prise du véhicule de location : visite émouvante du site sacré de Taputapuatea (berceau des navigateurs polynésiens) et côte est sauvage.",
            "<strong>22/10</strong> : Marché d'Uturoa, recherche de la fleur endémique Tiare Apetahi sur les flancs du Temehani et coucher de soleil sur Bora Bora.",
            "<strong>23/10 matin</strong> : Restitution du véhicule et transfert au quai pour la navette vers Taha'a."
        ],
        familyTips: "La pirogue glisse très doucement sur la rivière Faaroa sans aucune secousse, bercée par le chant des oiseaux tropicaux, parfait pour notre bébé.",
        culinaryTips: "Carpaccio de thon rouge mariné au gingembre, mahi-mahi sauce vanille et confitures artisanales de goyave.",
        highlights: [
            "Remontée de la rivière Faaroa en pirogue à balancier",
            "Visite du grand Marae de Taputapuatea classé UNESCO",
            "Pique-nique polynésien les pieds dans l'eau sur un motu",
            "Deux journées d'autonomie en voiture de location"
        ],
        externalLinks: [
            { label: "Marae Taputapuatea (UNESCO)", url: "https://whc.unesco.org/fr/list/1529/", icon: "fa-landmark", color: "amber" },
            { label: "Guide Raiatea — Tahiti Tourisme", url: "https://tahititourisme.fr/fr-fr/iles/raiatea/", icon: "fa-compass", color: "teal" }
        ],
        mood: "🌿 Spiritualité & Nature",
        weather: "28°C • Végétation luxuriante"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 9 : LIAISON LAGON NAVETTE RAIATEA ➔ TAHA'A
    // -------------------------------------------------------------------------
    {
        id: "navette-tahaa",
        category: "transfer",
        transferType: "boat",
        title: "Liaison Lagon : Navette en Bateau vers Taha'a l'Île Vanille",
        island: "Taha'a",
        status: "upcoming",
        dates: "23 Octobre 2026",
        departureDate: "Vendredi 23 Octobre 2026",
        departureTime: "Matinée",
        departureAirport: "Quai d'Uturoa (Raiatea)",
        arrivalAirport: "Ponton de la Pension Anahata (Taha'a)",
        transit: "Bateau-navette lagon abrité",
        duration: "20 minutes de traversée",
        baggage: "Transfert direct des valises sur le bateau",
        coords: [-16.6067, -151.4988],
        hotel: "Pension Anahata (Bungalow Plage, demi-pension)",
        summary: "Courte navigation de 20 minutes sur le lagon partagé entre Raiatea et Taha'a. Arrivée directe sur le ponton de notre pension.",
        story: "Vendredi 23 octobre : après 4 jours riches en histoire et en balades à Raiatea, nous rejoignons le quai d'Uturoa pour embarquer à bord de la navette maritime lagon. Raiatea et Taha'a partagent le même écrin turquoise à l'intérieur d'une unique barrière de corail. La traversée est un moment de pure quiétude : les eaux calmes oscillent du bleu céleste au vert émeraude. Le bateau accoste directement au ponton de la Pension Anahata, accueillis avec le sourire par nos hôtes. Bienvenue sur l'île Vanille, sans aéroport ni agitation, bercée par les alizés.",
        coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>23/10 à 10h30</strong> : Embarquement au quai d'Uturoa sur la navette lagon.",
            "<strong>23/10 à 11h00</strong> : Navigation paisible au-dessus des patates de corail entre les deux îles sœurs.",
            "<strong>23/10 à 11h20</strong> : Accostage direct au ponton en bois de la Pension Anahata.",
            "<strong>23/10 après-midi</strong> : Installation dans notre bungalow plage les pieds dans l'eau."
        ],
        familyTips: "Traversée très courte et sans aucune houle car intégralement abritée à l'intérieur du lagon. Idéal pour faire observer à bébé les fonds coralliens translucides sous la coque.",
        highlights: [
            "Navigation sur le lagon partagé entre Raiatea et Taha'a",
            "Accostage direct sur le ponton de la Pension Anahata",
            "Déconnexion insulaire totale sur une île sans piste d'aviation"
        ],
        externalLinks: [
            { label: "Guide Taha'a l'Île Vanille", url: "https://tahititourisme.fr/fr-fr/iles/tahaa/", icon: "fa-leaf", color: "emerald" }
        ],
        mood: "⛵ Douceur Insulaire",
        weather: "29°C • Parfum de vanille"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 10 : TAHA'A — L'ÎLE VANILLE & JARDIN DE CORAIL
    // -------------------------------------------------------------------------
    {
        id: "tahaa-vanille",
        category: "island",
        title: "Taha'a l'Île Vanille & Jardin de Corail",
        island: "Taha'a",
        status: "upcoming",
        dates: "23 - 25 Octobre 2026",
        hotel: "Pension Anahata",
        roomType: "Bungalow Plage (Demi-pension : petits-déjeuners et dîners)",
        pension: "Demi-pension gourmande les pieds dans le sable",
        transport: "Pirogue lagon",
        coords: [-16.6067, -151.4988],
        summary: "Île préservée sans aéroport, visite d'une vanilleraie artisanale, ferme perlière et snorkeling dérivant au motu Tautau.",
        story: "Taha'a partage le même lagon féerique que Raiatea mais cultive une douceur de vivre hors du temps. Notre bungalow plage à la Pension Anahata offre une vue féerique sur les eaux translucides. Le 24 octobre, immersion dans les parfums envoûtants de l'île : découverte des secrets de fécondation de la vanille de Tahiti dans une plantation familiale, visite d'une ferme perlière et point d'orgue inoubliable : le snorkeling dérivant dans le célèbre Jardin de Corail du motu Tautau, où le courant nous transporte sans effort au-dessus d'une féerie sous-marine multicolore.",
        coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>23/10</strong> : Accueil chaleureux à la Pension Anahata, baignade dans le lagon et dîner les pieds dans le sable.",
            "<strong>24/10 Matin</strong> : Visite d'une vanilleraie artisanale familiale (80% de la production polynésienne) et ferme de perles noires.",
            "<strong>24/10 Après-midi</strong> : Snorkeling dérivant extraordinaire au Jardin de Corail entre deux motus face à Bora Bora.",
            "<strong>25/10 Matin</strong> : Dernier bain matinal avant la traversée retour vers Raiatea pour l'envol vers Maupiti."
        ],
        familyTips: "Pour le snorkeling dérivant au motu Tautau, équiper les jumeaux de masques complets Easybreath. Des chaussons de récif sont obligatoires pour marcher sans risque sur les débris coralliens.",
        culinaryTips: "Gousses de vanille fraîche de Taha'a (variété Vanilla Tahitensis très parfumée), poissons du lagon au lait de coco et fafaru.",
        highlights: [
            "Snorkeling dérivant féerique au Jardin de Corail du motu Tautau",
            "Visite d'une authentique plantation de vanille de Tahiti",
            "Découverte d'une ferme perlière traditionnelle",
            "Bungalow plage les pieds dans le sable à la Pension Anahata"
        ],
        externalLinks: [
            { label: "Vanille de Tahiti (AOP)", url: "https://www.vanilledetahiti.com/", icon: "fa-seedling", color: "emerald" },
            { label: "Guide Jardin de Corail Tautau", url: "https://tahititourisme.fr/fr-fr/iles/tahaa/", icon: "fa-fish", color: "cyan" }
        ],
        mood: "🌺 Envoûtement & Douceur",
        weather: "29°C • Grand bleu"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 11 : VOL INTER-ÎLES #3 RAIATEA ➔ BORA BORA ➔ MAUPITI
    // -------------------------------------------------------------------------
    {
        id: "vol-maupiti",
        category: "flight",
        flightType: "domestic",
        title: "Vol Inter-Îles #3 : Survol de Bora Bora & Atterrissage à Maupiti",
        island: "Maupiti",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 42 / ATR 72",
        status: "upcoming",
        dates: "25 Octobre 2026",
        departureDate: "Dimanche 25 Octobre 2026",
        departureTime: "Matinée",
        departureAirport: "Raiatea - Uturoa (RFP) (après navette lagon depuis Taha'a)",
        transit: "Escale technique et survol spectaculaire de Bora Bora (BOB)",
        arrivalDate: "Dimanche 25 Octobre 2026",
        arrivalTime: "Midi",
        arrivalAirport: "Maupiti (MAU)",
        duration: "Env. 1h15 (avec survol inoubliable du mont Otemanu)",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg strict",
        coords: [-16.4440, -152.2530],
        hotel: "Pension Papahani (Bungalow Jardin, demi-pension)",
        summary: "Navette vers Raiatea, puis vol spectaculaire avec survol du mont Otemanu de Bora Bora et atterrissage sur la piste corallienne du motu de Maupiti.",
        story: "Dimanche 25 octobre : retour en navette de Taha'a vers l'aéroport de Raiatea pour le vol le plus spectaculaire de tout le voyage. L'ATR s'élève dans les cieux et effectue un survol légendaire au-dessus du lagon de Bora Bora et des crêtes du mont Otemanu : un panorama féerique mondialement réputé que les jumeaux dévorent des yeux à travers le hublot. Quelques minutes plus tard, apparaît Maupiti la secrète : sa piste d'atterrissage unique est posée directement sur un motu corallien entre lagon et vagues océaniques. À la sortie de l'avion, transfert direct en pirogue à moteur vers le motu Tiapaa et la chaleureuse Pension Papahani.",
        coverImage: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>25/10 matin</strong> : Navette bateau de Taha'a vers le quai d'Uturoa puis aéroport de Raiatea.",
            "<strong>25/10 à 11h00</strong> : Décollage Air Tahiti : survol magistral du lagon et du mont Otemanu de Bora Bora.",
            "<strong>25/10 à 12h00</strong> : Atterrissage sur la piste corallienne du motu de Maupiti.",
            "<strong>25/10 midi</strong> : Transfert en pirogue vers la Pension Papahani sur le motu Tiapaa, accueil au collier de fleurs."
        ],
        familyTips: "Demander si possible des sièges côté gauche au décollage de Raiatea pour une vue imprenable sur Bora Bora ! Prévoir des espèces (XPF) avant d'embarquer : zéro distributeur de billets à Maupiti.",
        highlights: [
            "Survol aérien magistral du mont Otemanu et du lagon de Bora Bora",
            "Atterrissage spectaculaire sur la piste corallienne du motu de Maupiti",
            "Accueil authentique et navette lagon vers la Pension Papahani"
        ],
        externalLinks: [
            { label: "Air Tahiti — Liaisons Maupiti", url: "https://www.airtahiti.com/", icon: "fa-plane", color: "teal" },
            { label: "Infos Aérodrome Maupiti", url: "https://www.tahiti-aeroport.pf/", icon: "fa-info-circle", color: "amber" }
        ],
        mood: "🏖️ Paradis Sauvage",
        weather: "28°C • Brise tropicale"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 12 : MAUPITI — LA SECRÈTE & LES RAIES MANTA
    // -------------------------------------------------------------------------
    {
        id: "maupiti-authenticite",
        category: "island",
        title: "Maupiti la Secrète & Les Raies Manta",
        island: "Maupiti",
        status: "upcoming",
        dates: "25 - 28 Octobre 2026",
        hotel: "Pension Papahani",
        roomType: "Bungalow Jardin (Demi-pension : petits-déjeuners et dîners)",
        pension: "Demi-pension familiale à la pension",
        transport: "Pirogue lagon",
        coords: [-16.4440, -152.2530],
        summary: "Arrivée sur une île sans voiture ni grands hôtels, nage matinale avec les raies manta géantes et plage de sable blanc de Tereia.",
        story: "Maupiti est le joyau secret et préservé des îles Sous-le-Vent. Zéro grand complexe hôtelier, uniquement la chaleur des pensions familiales. Installation à la Pension Papahani en demi-pension sur le motu Tiapaa. Sortie en bateau au petit matin organisée par la pension pour nager au-dessus des majestueuses raies manta géantes sur leur station de nettoyage. Balades sur la sublime plage de Tereia où notre bébé barbote dans une eau turquoise tiède et peu profonde sur des centaines de mètres.",
        coverImage: "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>25/10</strong> : Atterrissage sur la piste corallienne de Maupiti, transfert en bateau vers la Pension Papahani, accueil sans voiture ni foule.",
            "<strong>26/10</strong> : Sortie matinale en bateau sur la station de nettoyage des raies manta géantes : nage au-dessus de ces géantes paisibles.",
            "<strong>27/10</strong> : Journée de rêve sur la splendide plage de Tereia : hauts-fonds tièdes et sable farineux pour bébé, panorama du mont Teurafaatiu.",
            "<strong>28/10</strong> : Dernier bain matinal avant le vol retour vers Tahiti."
        ],
        familyTips: "Prévoir impérativement des espèces (XPF) car il n'y a aucun distributeur bancaire sur Maupiti. La plage de Tereia a de l'eau tiède jusqu'aux chevilles sur 200m, parfait pour bébé.",
        culinaryTips: "Beignets polynésiens Firi Firi du matin trempés dans le chocolat, bénitiers cuisinés au lait de coco et poissons du lagon.",
        highlights: [
            "Nage avec les grandes raies manta sur le lagon",
            "Baignade sur la sublime plage de sable blanc de Tereia",
            "Accueil familial polynésien à la Pension Papahani",
            "L'authenticité absolue d'une île sans voitures ni hôtels"
        ],
        externalLinks: [
            { label: "Guide Maupiti — Tahiti Tourisme", url: "https://tahititourisme.fr/fr-fr/iles/maupiti/", icon: "fa-umbrella-beach", color: "teal" },
            { label: "Météo Maupiti & Sous-le-Vent", url: "https://meteo.pf/", icon: "fa-sun", color: "amber" }
        ],
        mood: "🌊 Sérénité & Paradis préservé",
        weather: "28°C • Brise tropicale"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 13 : VOL INTER-ÎLES #4 MAUPITI ➔ TAHITI
    // -------------------------------------------------------------------------
    {
        id: "vol-tahiti",
        category: "flight",
        flightType: "domestic",
        title: "Vol Inter-Îles #4 : Bouclage du Pass & Retour vers Tahiti",
        island: "Tahiti",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 42-600",
        status: "upcoming",
        dates: "28 Octobre 2026",
        departureDate: "Mercredi 28 Octobre 2026",
        departureTime: "Après-midi",
        departureAirport: "Maupiti (MAU)",
        transit: "Vol direct vers Tahiti",
        arrivalDate: "Mercredi 28 Octobre 2026",
        arrivalTime: "Fin d'après-midi",
        arrivalAirport: "Tahiti Faa'a (PPT)",
        duration: "Env. 55 minutes de vol",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg max",
        coords: [-17.5350, -149.5695],
        hotel: "Reva Tahiti 2* (Studio Reva, centre-ville de Papeete)",
        summary: "Dernier vol inter-îles du voyage. Adieu à Maupiti et atterrissage à Tahiti pour les trois derniers jours de notre grand périple.",
        story: "Mercredi 28 octobre : après un dernier bain matinal dans le lagon turquoise de Tereia, pirogue navette vers le motu de l'aérodrome. Décollage sur notre 4e et dernier vol du Pass Inter-Îles Air Tahiti en direction de l'île reine de Tahiti. Un vol direct de 55 minutes au-dessus de l'immensité bleue du Pacifique. Atterrissage à Faa'a en fin d'après-midi, transfert au centre de Papeete et installation dans notre appartement-studio au Reva Tahiti. Promenade au coucher du soleil sur le front de mer.",
        coverImage: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>28/10 à 14h00</strong> : Pirogue navette vers l'aérodrome du motu de Maupiti.",
            "<strong>28/10 à 15h30</strong> : Décollage Air Tahiti : adieu aux atolls et survol direct du Pacifique.",
            "<strong>28/10 à 16h25</strong> : Atterrissage à Tahiti Faa'a, transfert en ville au Reva Tahiti.",
            "<strong>28/10 soir</strong> : Première promenade sur le front de mer de Papeete au coucher du soleil."
        ],
        familyTips: "Installation centrale au Reva Tahiti avec kitchenette pratique pour dîner tranquillement et organiser le repos des enfants avant la grande journée de découverte de Tahiti Nui.",
        highlights: [
            "Dernier décollage depuis la piste sur le motu de Maupiti",
            "Survol direct du Pacifique Sud vers l'île principale de Tahiti",
            "Installation à Papeete pour clore l'aventure en douceur"
        ],
        externalLinks: [
            { label: "Air Tahiti (Pass Inter-Îles)", url: "https://www.airtahiti.com/", icon: "fa-plane", color: "teal" },
            { label: "Arrivées Aéroport Faa'a", url: "https://www.tahiti-aeroport.pf/", icon: "fa-plane-arrival", color: "blue" }
        ],
        mood: "🏙️ Douce Nostalgie",
        weather: "28°C • Coucher de soleil doré"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 14 : TAHITI NUI — GRAND TOUR EN VOITURE & ROULOTTES DE PAPEETE
    // -------------------------------------------------------------------------
    {
        id: "tahiti-retour",
        category: "island",
        title: "Tahiti Nui en Voiture & Les Roulottes de Papeete",
        island: "Tahiti",
        status: "upcoming",
        dates: "28 - 30 Octobre 2026",
        hotel: "Reva Tahiti 2* (Studio Reva, pdj inclus)",
        roomType: "Studio Reva (Centre-ville de Papeete)",
        pension: "Petits-déjeuners inclus + Dîner aux roulottes",
        transport: "Voiture de location avec siège bébé le 30/10",
        coords: [-17.5350, -149.5695],
        summary: "Papeete, grands jardins de Paofai, grand tour de Tahiti Nui en voiture de location et dîner aux roulottes de Vaiete.",
        story: "Séjour à Papeete au Reva Tahiti. Le 29 octobre : flânerie familiale dans les grands jardins de Paofai le long de la mer avec leurs magnifiques aires de jeux pour les 3 enfants. Le vendredi 30 octobre : prise en main de notre voiture de location avec siège bébé pour réaliser le grand tour complet de Tahiti Nui : le phare historique de la Pointe Vénus sur sa plage de sable noir, le Trou du Souffleur d'Arahoho, et les vertigineuses cascades de Faarumai. Derniers achats artisanaux au marché municipal de Papeete et ultime dîner convivial aux célèbres roulottes de la place Vaiete.",
        coverImage: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>29/10</strong> : Balade familiale aux jardins arborés de Paofai (aires de jeux pour les 3 enfants) et marché artisanal.",
            "<strong>30/10 Matin</strong> : Prise du véhicule : Pointe Vénus sur sable noir et trou du souffleur d'Arahoho.",
            "<strong>30/10 Midi</strong> : Pique-nique aux pieds des cascades de Faarumai entourées de fougères géantes.",
            "<strong>30/10 Après-midi</strong> : Marché de Papeete (monoï frais, vanille, sculptures en nacre).",
            "<strong>30/10 Soir</strong> : Dîner festif aux roulottes de la place Vaiete (poisson cru, chao men, crêpes pour les enfants)."
        ],
        familyTips: "La voiture du dernier jour permet de stocker les valises en sécurité dans le coffre et de garder poussette et vêtements de rechange pour les enfants avant la nuit d'avion.",
        culinaryTips: "Dîner authentique aux roulottes de Vaiete : poisson cru à la chinoise, crêpes banane-chocolat pour les enfants.",
        highlights: [
            "Tour complet de Tahiti Nui en voiture de location",
            "Pointe Vénus, trou du souffleur & cascades de Faarumai",
            "Aires de jeux familiales des jardins de Paofai",
            "Marché de Papeete & dîner d'adieu aux roulottes de Vaiete"
        ],
        externalLinks: [
            { label: "Marché de Papeete (Mapuru a Paraita)", url: "https://www.papeete.pf/le-marche-de-papeete", icon: "fa-store", color: "amber" },
            { label: "Office de Tourisme de Tahiti", url: "https://tahititourisme.fr/", icon: "fa-compass", color: "teal" }
        ],
        mood: "🌺 Nostalgie & Cœurs comblés",
        weather: "28°C • Douceur des tropiques"
    },

    // -------------------------------------------------------------------------
    // ÉTAPE 15 : VOL RETOUR INTERNATIONAL TN8
    // -------------------------------------------------------------------------
    {
        id: "vol-retour-tn8",
        category: "flight",
        flightType: "international",
        title: "Vol Retour International : Tahiti Faa'a ➔ Paris CDG",
        island: "Tahiti",
        flightNumber: "TN8",
        airline: "Air Tahiti Nui",
        aircraft: "Boeing 787-9 Dreamliner",
        status: "upcoming",
        dates: "30 Octobre - 01 Novembre 2026",
        departureDate: "Vendredi 30 Octobre 2026",
        departureTime: "23h45",
        departureAirport: "Tahiti Faa'a (PPT)",
        transit: "Escale technique à Los Angeles (LAX)",
        arrivalDate: "Dimanche 01 Novembre 2026",
        arrivalTime: "09h05 (heure locale de Paris)",
        arrivalAirport: "Paris Roissy Charles de Gaulle (CDG)",
        duration: "Env. 21h20 de vol (+2 jours calendaires)",
        baggage: "Soute : 1 bagage 23 kg/pers (bébé 10 kg) • Cabine : 10 kg + 3 kg accessoire",
        coords: [-17.5536, -149.6069],
        hotel: "Nuitée à bord du Dreamliner TN8",
        summary: "L'ultime étape du voyage : décollage de nuit sur le vol TN8 à 23h45, colliers de coquillages traditionnels d'au revoir et atterrissage à Paris le dimanche matin.",
        story: "Vendredi 30 octobre vers 20h30 : restitution de notre véhicule de location à l'aéroport de Tahiti Faa'a après notre magnifique journée de tour de l'île. Enregistrement sur le vol Air Tahiti Nui TN8. Remise des colliers de coquillages traditionnels, symbole polynésien d'au revoir qui promet qu'un jour l'on reviendra. Décollage à 23h45 dans la nuit pacifique. Les enfants s'endorment rapidement bercés par le ronronnement du Dreamliner. Traversée de la nuit, escale à Los Angeles et arrivée à Paris Roissy CDG le dimanche 01 novembre à 09h05, les yeux remplis d'étoiles, de lagons et de 22 jours d'un bonheur familial inestimable. Récupération de notre auto au parking PR Eco pour rentrer à la maison.",
        coverImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80"
        ],
        programDetails: [
            "<strong>30/10 à 20h30</strong> : Restitution du véhicule à l'aéroport de Faa'a et enregistrement des bagages.",
            "<strong>30/10 à 22h00</strong> : Embarquement et colliers de coquillages d'au revoir.",
            "<strong>30/10 à 23h45</strong> : Décollage du vol TN8 dans la nuit polynésienne.",
            "<strong>31/10</strong> : Journée et nuit en vol, transit à Los Angeles (LAX).",
            "<strong>01/11 à 09h05</strong> : Atterrissage à Paris Roissy CDG, navette CDGVAL vers le Parking PR Eco."
        ],
        familyTips: "Habiller les enfants en pyjamas confortables avant l'embarquement à 23h45. Récupération de la voiture au Parking PR Eco CDG facilitée grâce à la navette automatique CDGVAL.",
        highlights: [
            "Colliers de coquillages d'au revoir à l'aéroport de Faa'a",
            "Nuit à bord du Dreamliner TN8 au-dessus du Pacifique",
            "Atterrissage à Paris CDG le dimanche matin avec 22 jours de souvenirs gravés à tout jamais"
        ],
        mood: "🌺 Cœurs Comblés & Souvenirs Éternels",
        weather: "28°C à Faa'a ➔ 12°C à Paris"
    }
];

// =============================================================================
// PROGRAMME DÉTAILLÉ JOUR PAR JOUR (22 JOURS SUR PLACE)
// =============================================================================
const DAILY_PROGRAM = [
    {
        dayNumber: 1,
        date: "Ven. 09 Octobre 2026",
        island: "Tahiti",
        title: "Le Grand Départ de Paris & Arrivée sous les Tiaré",
        hotel: "Le Tahiti by Pearl Resort 4* (Ocean View Suite, pdj)",
        type: "Vol international & Accueil",
        icon: "✈️",
        description: "Décollage de Paris Roissy CDG à 12h05 sur le vol Air Tahiti Nui TN57. Transit à Los Angeles (LAX) avec formalité ESTA. Arrivée à 21h45 à l'aéroport de Tahiti Faa'a. Accueil traditionnel au son des ukulélés avec remise des colliers de fleurs de tiaré fraîches. Transfert privatif et installation dans notre Ocean View Suite face à la mer."
    },
    {
        dayNumber: 2,
        date: "Sam. 10 Octobre 2026",
        island: "Tahiti",
        title: "Tahiti Iti, La Vague de Teahupoo & Soirée Polynésienne",
        hotel: "Le Tahiti by Pearl Resort 4*",
        type: "Excursion bateau & Soirée spectacle",
        icon: "🌊",
        description: "Journée d'excursion guidée en petit groupe à la presqu'île de Tahiti Iti. Bateau pour approcher au plus près la vague mondiale de Teahupoo, découverte de la rivière Vaiau, jardins d'eau de Vaipahi et snorkeling sur le spot 'Wonderful Coral Head' (déjeuner inclus). Soirée : Dîner spectacle polynésien aux rythmes des percussions à l'hôtel."
    },
    {
        dayNumber: 3,
        date: "Dim. 11 Octobre 2026",
        island: "Moorea",
        title: "Ferry vers Moorea & Prise du Peugeot Rifter",
        hotel: "Moorea Sunset Beach 2* (Bungalow Plage, self-catering)",
        type: "Traversée ferry & Installation",
        icon: "🚢",
        description: "Transfert au port de Papeete et traversée en ferry (30 min) vers Moorea, l'île magique aux pics découpés. Prise en main de notre véhicule familial (Peugeot Rifter avec siège bébé). Installation en bungalow plage au Moorea Sunset Beach les pieds dans le sable."
    },
    {
        dayNumber: 4,
        date: "Lun. 12 Octobre 2026",
        island: "Moorea",
        title: "Journée Bateau à Fond de Verre & Baies Légendaires",
        hotel: "Moorea Sunset Beach 2*",
        type: "Excursion lagon",
        icon: "🤿",
        description: "Excursion en petit groupe en bateau à fond de verre sur le lagon émeraude de Moorea. Observation de la faune aquatique, navigation dans les mythiques baies de Cook et d'Opunohu. Pique-nique tahitien les pieds dans l'eau inclus."
    },
    {
        dayNumber: 5,
        date: "Mar. 13 Octobre 2026",
        island: "Moorea",
        title: "Sortie Rêve : Observation des Baleines à Bosse",
        hotel: "Moorea Sunset Beach 2*",
        type: "Activité phare faune sauvage",
        icon: "🐋",
        description: "Sortie en haute mer pour observer les majestueuses baleines à bosse et leurs baleineaux avec guide naturaliste ! Organisation alternée pour garder les enfants : un parent le matin, l'autre l'après-midi. Moment d'émotion pure et inoubliable."
    },
    {
        dayNumber: 6,
        date: "Mer. 14 Octobre 2026",
        island: "Moorea",
        title: "Shooting Photo de Famille & Baignade avec les Raies",
        hotel: "Moorea Sunset Beach 2*",
        type: "Souvenirs en famille",
        icon: "📸",
        description: "Séance photo privative de notre petite tribu dans les eaux translucides du lagon avec les raies pastenagues et requins pointes noires inoffensifs. Après-midi farniente sur la plage de sable blanc du bungalow."
    },
    {
        dayNumber: 7,
        date: "Jeu. 15 Octobre 2026",
        island: "Moorea",
        title: "Culture & Ateliers au Tiki Village pour les Enfants",
        hotel: "Moorea Sunset Beach 2*",
        type: "Immersion culturelle",
        icon: "🌺",
        description: "Journée au Tiki Village : ateliers ludiques pour les jumeaux (tressage de couronnes de fleurs, sculpture, initiation aux percussions). Ascension en voiture au Belvédère avec panorama grandiose sur le Mont Rotui."
    },
    {
        dayNumber: 8,
        date: "Ven. 16 Octobre 2026",
        island: "Rangiroa",
        title: "Ferry vers Tahiti & Vol vers l'Atoll Géant de Rangiroa",
        hotel: "Raira Lagon 2* (Bungalow Jardin, demi-pension)",
        type: "Vol inter-îles & Tuamotu",
        icon: "🐬",
        description: "Restitution du véhicule à Moorea, ferry retour vers Tahiti puis décollage Air Tahiti vers les Tuamotu ! Rangiroa apparaît tel un collier de corail infini. Installation au Raira Lagon. En fin d'après-midi, spectacle des grands dauphins sauvages bondissant à la passe de Tiputa."
    },
    {
        dayNumber: 9,
        date: "Sam. 17 Octobre 2026",
        island: "Rangiroa",
        title: "Snorkeling dans l'Aquarium Naturel & Balade en Vélo",
        hotel: "Raira Lagon 2*",
        type: "Découverte atoll",
        icon: "🚲",
        description: "Balade familiale à vélo le long de la passe, session de snorkeling féerique dans l'Aquarium naturel de Tiputa au milieu de nuées de poissons exotiques. Découverte de l'artisanat et douceur de vivre des Tuamotu."
    },
    {
        dayNumber: 10,
        date: "Dim. 18 Octobre 2026",
        island: "Rangiroa",
        title: "Excursion Inoubliable au Célèbre Lagon Bleu",
        hotel: "Raira Lagon 2*",
        type: "Journée excursion motu",
        icon: "🏝️",
        description: "Journée complète en bateau vers le mythique Lagon Bleu : un véritable lagon miniature aux eaux fluorescentes à l'intérieur de l'atoll. Motus de sables roses, baignade avec les bébés requins de récif inoffensifs et délicieux déjeuner local inclus."
    },
    {
        dayNumber: 11,
        date: "Lun. 19 Octobre 2026",
        island: "Raiatea",
        title: "Vol vers les Îles Sous-le-Vent & Raiatea la Sacrée",
        hotel: "Raiatea Lodge 3* (Bungalow Famille vue mer, demi-pension)",
        type: "Vol inter-îles",
        icon: "🛶",
        description: "Vol Air Tahiti de Rangiroa vers Raiatea (via Tahiti). Transfert au superbe Raiatea Lodge, havre de paix tropical. Installation en bungalow famille avec vue imprenable sur le coucher de soleil et l'île de Bora Bora au loin."
    },
    {
        dayNumber: 12,
        date: "Mar. 20 Octobre 2026",
        island: "Raiatea",
        title: "Journée en Pirogue Traditionnelle & Rivière Faaroa",
        hotel: "Raiatea Lodge 3*",
        type: "Excursion pirogue",
        icon: "🌿",
        description: "Journée complète en pirogue à balancier traditionnelle (va'a) en petit groupe. Remontée de la rivière Faaroa, seule rivière navigable de Polynésie au cœur d'une jungle luxuriante. Baignade sur un motu et pique-nique local les pieds dans l'eau."
    },
    {
        dayNumber: 13,
        date: "Mer. 21 Octobre 2026",
        island: "Raiatea",
        title: "Le Grand Marae Royal de Taputapuatea (UNESCO)",
        hotel: "Raiatea Lodge 3*",
        type: "Histoire & Voiture de location",
        icon: "🗿",
        description: "Prise de notre voiture de location pour la journée. Visite du sanctuaire spirituel polynésien : le grand Marae de Taputapuatea classé UNESCO. Découverte des légendes ancestrales des grands navigateurs ma'ohi et tour des baies sauvages de l'est."
    },
    {
        dayNumber: 14,
        date: "Jeu. 22 Octobre 2026",
        island: "Raiatea",
        title: "Randonnées aux Cascades, Tiare Apetahi & Uturoa",
        hotel: "Raiatea Lodge 3*",
        type: "Nature & Marché local",
        icon: "🌸",
        description: "Deuxième journée avec la voiture de location. Découverte du marché local d'Uturoa, recherche de la fleur mythique et unique au monde 'Tiare Apetahi' sur les pentes du mont Temehani, baignade et détente au lodge."
    },
    {
        dayNumber: 15,
        date: "Ven. 23 Octobre 2026",
        island: "Taha'a",
        title: "Bateau Navette vers Taha'a, l'Île Vanille",
        hotel: "Pension Anahata (Bungalow Plage, demi-pension)",
        type: "Traversée lagon",
        icon: "⛵",
        description: "Courte traversée en bateau navette vers l'île sœur de Taha'a qui partage le même lagon. Installation dans notre bungalow plage les pieds dans l'eau à la charmante Pension Anahata. Première baignade et déconnexion totale."
    },
    {
        dayNumber: 16,
        date: "Sam. 24 Octobre 2026",
        island: "Taha'a",
        title: "Plantation de Vanille, Perles Noires & Jardin de Corail",
        hotel: "Pension Anahata",
        type: "Parfums & Snorkeling dérivant",
        icon: "🐠",
        description: "Visite d'une vanilleraie artisanale qui embaume toute l'île et d'une ferme perlière familiale. Point culminant : snorkeling dérivant dans le fabuleux Jardin de Corail du motu Tautau, en se laissant porter par le courant au-dessus des coraux multicolores."
    },
    {
        dayNumber: 17,
        date: "Dim. 25 Octobre 2026",
        island: "Maupiti",
        title: "Bateau vers Raiatea & Vol Magique vers Maupiti",
        hotel: "Pension Papahani (Bungalow Jardin, demi-pension)",
        type: "Vol & Accueil authentique",
        icon: "🌴",
        description: "Traversée retour vers Raiatea puis décollage Air Tahiti avec survol splendide de Bora Bora, avant d'atterrir sur la piste corallienne de Maupiti. Transfert en bateau à la Pension Papahani. Accueil familial sur une île sans voiture ni grands hôtels."
    },
    {
        dayNumber: 18,
        date: "Lun. 26 Octobre 2026",
        island: "Maupiti",
        title: "Nage Magistrale avec les Raies Manta Géantes",
        hotel: "Pension Papahani",
        type: "Sortie lagon privée",
        icon: "🌊",
        description: "Sortie matinale en bateau avec la pension vers le site de nettoyage des raies manta au milieu du lagon. Nage inoubliable aux côtés de ces géantes paisibles et majestueuses. Après-midi détente sur le motu."
    },
    {
        dayNumber: 19,
        date: "Mar. 27 Octobre 2026",
        island: "Maupiti",
        title: "La Splendide Plage de Tereia & Mont Teurafaatiu",
        hotel: "Pension Papahani",
        type: "Baignade féerique & Panorama",
        icon: "🏖️",
        description: "Journée de rêve sur la plage de Tereia : eau turquoise translucide et peu profonde parfaite pour que notre bébé barbote en toute sérénité. Randonnée vers les crêtes du mont Teurafaatiu avec un panorama 360° à couper le souffle sur tout le lagon."
    },
    {
        dayNumber: 20,
        date: "Mer. 28 Octobre 2026",
        island: "Tahiti",
        title: "Vol Retour vers Tahiti & Installation à Papeete",
        hotel: "Reva Tahiti 2* (Studio Reva, pdj inclus)",
        type: "Vol retour & Ville",
        icon: "🏙️",
        description: "Vol Air Tahiti de Maupiti vers Tahiti. Accueil et transfert à notre studio au Reva Tahiti dans le centre de Papeete. Promenade en fin d'après-midi sur le front de mer et détente."
    },
    {
        dayNumber: 21,
        date: "Jeu. 29 Octobre 2026",
        island: "Tahiti",
        title: "Flânerie à Papeete, Jardins de Paofai & Préparatifs",
        hotel: "Reva Tahiti 2*",
        type: "Détente en famille",
        icon: "🛍️",
        description: "Journée tranquille en famille : balade dans les grands jardins de Paofai le long de la mer avec ses grandes aires de jeux pour les 3 enfants. Achats des derniers souvenirs artisanaux au marché."
    },
    {
        dayNumber: 22,
        date: "Ven. 30 Octobre 2026",
        island: "Tahiti",
        title: "Grand Tour de Tahiti Nui, Roulottes & Vol Retour",
        hotel: "Nuit à bord (Vol TN8)",
        type: "Tour en voiture & Vol retour",
        icon: "✨",
        description: "Prise de notre voiture de location avec siège bébé pour le tour complet de Tahiti Nui : phare de la Pointe Vénus sur sa plage de sable noir, trou du souffleur d'Arahoho, cascades de Faarumai. Dernier dîner festif aux célèbres roulottes de la place Vaiete. Transfert vers 20h30 à l'aéroport de Faa'a. Décollage à 23h45 sur le vol Air Tahiti Nui TN8 vers Paris (via LAX)."
    }
];

// Messages de bienvenue initiaux dans le carnet familial
const INITIAL_GUESTBOOK = [
    {
        id: 1,
        author: "Mamy & Papy",
        date: "Bientôt !",
        avatar: "👵👴",
        message: "Bon voyage à toute notre belle tribu ! On a hâte de suivre vos photos des baleines à Moorea et des raies manta à Maupiti. Prenez bien soin des enfants !"
    },
    {
        id: 2,
        author: "Tonton Julien",
        date: "Bientôt !",
        avatar: "🏄‍♂️",
        message: "Ramenez-moi une gousse de vanille de Taha'a et un selfie devant la vague de Teahupoo ! Profitez à fond de ces 3 semaines au paradis !"
    }
];

// =============================================================================
// PLAN DE VOLS COMPLET — INTERNATIONAL & INTER-ÎLES
// =============================================================================
const TRIP_FLIGHTS = [
    {
        category: "international",
        type: "Vol Aller International",
        flightNumber: "TN57",
        airline: "Air Tahiti Nui",
        aircraft: "Boeing 787-9 Dreamliner",
        bookingRef: "Réf. Confirmée",
        departureDate: "Vendredi 09 Octobre 2026",
        departureTime: "12h05",
        departureAirport: "Paris Roissy Charles de Gaulle (CDG)",
        transit: "Escale technique à Los Angeles (LAX) • ESTA requis",
        arrivalDate: "Vendredi 09 Octobre 2026",
        arrivalTime: "21h45 (heure locale Tahiti)",
        arrivalAirport: "Tahiti Faa'a (PPT)",
        duration: "Env. 22h de voyage (décalage horaire -12h)",
        baggage: "Soute : 1 bagage 23 kg/pers (bébé 10 kg) • Cabine : 10 kg + accessoire 3 kg",
        notes: "Accueil avec colliers de fleurs de tiaré fraîches à l'arrivée et transfert au Tahiti by Pearl Resort.",
        externalLinks: [
            { label: "Suivi FlightAware TN57", url: "https://www.flightaware.com/live/flight/THT57", icon: "fa-satellite-dish" },
            { label: "Flightradar24 TN57", url: "https://www.flightradar24.com/data/flights/tn57", icon: "fa-plane" },
            { label: "Aéroport Tahiti Faa'a", url: "https://www.tahiti-aeroport.pf/", icon: "fa-building" }
        ],
        status: "upcoming"
    },
    {
        category: "domestic",
        type: "Vol Inter-Îles #1",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 72-600",
        bookingRef: "Pass Inter-Îles",
        departureDate: "Vendredi 16 Octobre 2026",
        departureTime: "Matinée / Après-midi",
        departureAirport: "Tahiti Faa'a (PPT) (après traversée ferry depuis Moorea)",
        transit: "Vol direct vers les Tuamotu",
        arrivalDate: "Vendredi 16 Octobre 2026",
        arrivalTime: "Même journée",
        arrivalAirport: "Rangiroa (RGI)",
        duration: "Env. 1h00",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg max strict",
        notes: "Survol exceptionnel du lagon infini des Tuamotu à l'atterrissage. Transfert vers la pension Raira Lagon.",
        status: "upcoming"
    },
    {
        category: "domestic",
        type: "Vol Inter-Îles #2",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 72-600",
        bookingRef: "Pass Inter-Îles",
        departureDate: "Lundi 19 Octobre 2026",
        departureTime: "Matinée",
        departureAirport: "Rangiroa (RGI)",
        transit: "Escale de correspondance à Tahiti Faa'a (PPT)",
        arrivalDate: "Lundi 19 Octobre 2026",
        arrivalTime: "Après-midi",
        arrivalAirport: "Raiatea - Uturoa (RFP)",
        duration: "Env. 2h30 (incluant escale)",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg max",
        notes: "Arrivée sur l'île sacrée des îles Sous-le-Vent. Transfert vers le Raiatea Lodge Hotel.",
        status: "upcoming"
    },
    {
        category: "domestic",
        type: "Vol Inter-Îles #3",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 42 / ATR 72",
        bookingRef: "Pass Inter-Îles",
        departureDate: "Dimanche 25 Octobre 2026",
        departureTime: "Matinée",
        departureAirport: "Raiatea - Uturoa (RFP) (après navette lagon depuis Taha'a)",
        transit: "Escale technique à Bora Bora (BOB)",
        arrivalDate: "Dimanche 25 Octobre 2026",
        arrivalTime: "Midi",
        arrivalAirport: "Maupiti (MAU)",
        duration: "Env. 1h15 (avec survol spectaculaire du mont Otemanu de Bora Bora)",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg max",
        notes: "Atterrissage sur le motu de Maupiti, transfert en navette lagon vers le motu Tiapaa (Pension Papahani).",
        status: "upcoming"
    },
    {
        category: "domestic",
        type: "Vol Inter-Îles #4",
        flightNumber: "Air Tahiti (Pass Inter-Îles)",
        airline: "Air Tahiti",
        aircraft: "ATR 42-600",
        bookingRef: "Pass Inter-Îles",
        departureDate: "Mercredi 28 Octobre 2026",
        departureTime: "Après-midi",
        departureAirport: "Maupiti (MAU)",
        transit: "Vol direct",
        arrivalDate: "Mercredi 28 Octobre 2026",
        arrivalTime: "Fin d'après-midi",
        arrivalAirport: "Tahiti Faa'a (PPT)",
        duration: "Env. 55 minutes",
        baggage: "Soute : 23 kg/pers • Cabine : 5 kg max",
        notes: "Retour sur l'île principale de Tahiti. Transfert vers la résidence Reva Tahiti.",
        status: "upcoming"
    },
    {
        category: "international",
        type: "Vol Retour International",
        flightNumber: "TN8",
        airline: "Air Tahiti Nui",
        aircraft: "Boeing 787-9 Dreamliner",
        bookingRef: "Réf. Confirmée",
        departureDate: "Vendredi 30 Octobre 2026",
        departureTime: "23h45",
        departureAirport: "Tahiti Faa'a (PPT)",
        transit: "Escale technique à Los Angeles (LAX)",
        arrivalDate: "Dimanche 01 Novembre 2026",
        arrivalTime: "09h05 (heure locale Paris)",
        arrivalAirport: "Paris Roissy Charles de Gaulle (CDG)",
        duration: "Env. 21h20 de vol (+2 jours calendaires)",
        baggage: "Soute : 1 bagage 23 kg/pers (bébé 10 kg) • Cabine : 10 kg + accessoire 3 kg",
        notes: "Dernière nuit polynésienne à bord avec colliers de coquillages d'au revoir. Récupération du véhicule au Parking PR Eco CDG.",
        externalLinks: [
            { label: "Suivi FlightAware TN8", url: "https://www.flightaware.com/live/flight/THT8", icon: "fa-satellite-dish" },
            { label: "Flightradar24 TN8", url: "https://www.flightradar24.com/data/flights/tn8", icon: "fa-plane" },
            { label: "Paris Aéroport CDG", url: "https://www.parisaeroport.fr/passagers/vols-et-compagnies", icon: "fa-building" }
        ],
        status: "upcoming"
    }
];
