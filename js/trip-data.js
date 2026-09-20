// =============================================================================
// CARNET DE VOYAGE POLYNÉSIE FRANÇAISE 2026 — NOTRE TRIBU EN FAMILLE
// =============================================================================
// Du 09 Octobre au 01 Novembre 2026 • 24 Jours d'Émerveillement dans les Îles
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
// =============================================================================
// PROGRAMME DÉTAILLÉ JOUR PAR JOUR (24 JOURNÉES DU 09/10 AU 01/11/2026)
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

const DAILY_PROGRAM = [
    {
        "dayNumber": 1,
        "date": "Vendredi 09 Octobre 2026",
        "island": "Tahiti",
        "type": "Vol Aller International & Arrivée",
        "icon": "✈️",
        "title": "Le Grand Envol vers le Pacifique & Arrivée sous les Tiaré",
        "description": "À 12h05, décollage de Paris Roissy CDG à bord du Boeing 787-9 Dreamliner d'Air Tahiti Nui (vol TN57). Traversée de l'Atlantique, survol des États-Unis et escale technique à Los Angeles (LAX). Arrivée magique à 21h45 à Tahiti Faa'a sous la douce brise des tropiques. Accueil traditionnel inoubliable au son des ukulélés et remise des colliers de fleurs de tiaré embaumant la nuit. Transfert privatif et nuit à l'hôtel Le Tahiti by Pearl Resort face à la baie de Matavai.",
        "hotel": "Le Tahiti by Pearl Resort 4* (Ocean View Suite)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "TN57",
            "airline": "Air Tahiti Nui",
            "route": "Paris CDG ➔ Tahiti Faa'a (via LAX)",
            "times": "12h05 ➔ 21h45 (heure locale Tahiti)",
            "links": [
                {
                    "label": "Suivi en direct FlightAware",
                    "url": "https://www.flightaware.com/live/flight/THT57",
                    "icon": "fa-satellite-dish"
                },
                {
                    "label": "Flightradar24",
                    "url": "https://www.flightradar24.com/data/flights/tn57",
                    "icon": "fa-plane"
                },
                {
                    "label": "Aéroport Tahiti Faa'a",
                    "url": "https://www.tahiti-aeroport.pf/",
                    "icon": "fa-building"
                }
            ]
        }
    },
    {
        "dayNumber": 2,
        "date": "Samedi 10 Octobre 2026",
        "island": "Tahiti Iti",
        "type": "Excursion Lagon & Presqu'île",
        "icon": "🌊",
        "title": "La Vague Mythique de Teahupoo & Snorkeling Coral Head",
        "description": "Première matinée polynésienne avec vue imprenable sur l'océan. Journée d'aventure vers la presqu'île de Tahiti Iti : embarquement en bateau pour approcher la spectaculaire vague de Teahupoo (spot des JO 2024). Découverte de la rivière Vaiau et des falaises sauvages du Pari. Pause magique de snorkeling sur le spot de Wonderful Coral Head au milieu des poissons multicolores. Déjeuner inclus les pieds dans l'eau et visite des jardins d'eau de Vaipahi.",
        "hotel": "Le Tahiti by Pearl Resort 4* (Ocean View Suite)",
        "hasFlight": false
    },
    {
        "dayNumber": 3,
        "date": "Dimanche 11 Octobre 2026",
        "island": "Tahiti ➔ Moorea",
        "type": "Traversée Maritime en Ferry",
        "icon": "⛴️",
        "title": "Traversée en Ferry vers Moorea, l'Île Sœur",
        "description": "Petit-déjeuner buffet au bord du lagon, puis transfert au port de Papeete. Traversée maritime de 35 minutes à bord du ferry Aremiti/Terevau, souvent escorté par des dauphins joueurs. Arrivée dans la baie de Vaiare à Moorea, prise en main de notre voiture familiale et installation au Moorea Sunset Beach dans notre bungalow plage les pieds dans le sable fin de Haapiti.",
        "hotel": "Moorea Sunset Beach (Bungalow Plage)",
        "hasFlight": false,
        "ferry": {
            "name": "Ferry Aremiti / Terevau",
            "route": "Port de Papeete ➔ Moorea Vaiare (35 min)",
            "links": [
                {
                    "label": "Horaires & Infos Ferry Aremiti",
                    "url": "https://www.aremiti.pf/",
                    "icon": "fa-ship"
                },
                {
                    "label": "Terevau Ferry",
                    "url": "https://www.terevau.pf/",
                    "icon": "fa-anchor"
                }
            ]
        }
    },
    {
        "dayNumber": 4,
        "date": "Lundi 12 Octobre 2026",
        "island": "Moorea",
        "type": "Sortie Lagon en Famille",
        "icon": "🐠",
        "title": "Bateau à Fond de Verre & Pique-Nique sur un Motu",
        "description": "Journée de pure féerie sur le lagon pour toute la tribu. Sortie en bateau à fond de verre, idéale pour les jumeaux et bébé qui découvrent les tortues et les coraux sans plonger. Baignade mémorable avec les raies pastenagues et les petits requins à pointes noires inoffensifs. Pique-nique tahitien les pieds dans l'eau sur un motu inhabité avec poisson cru au lait de coco préparé devant nous.",
        "hotel": "Moorea Sunset Beach (Bungalow Plage)",
        "hasFlight": false
    },
    {
        "dayNumber": 5,
        "date": "Mardi 13 Octobre 2026",
        "island": "Moorea",
        "type": "Observation des Cétacés",
        "icon": "🐋",
        "title": "La Rencontre Majestueuse avec les Baleines à Bosse",
        "description": "Le moment fort en émotion du séjour ! Sortie respectueuse en petit comité pour observer les géantes des mers venues mettre bas dans les eaux calmes du Pacifique. Organisation alternée pour que Papa et Maman puissent nager avec les baleines chacun leur tour tout en veillant sur bébé et les enfants. Écoute de leur chant envoûtant grâce à l'hydrophone sous-marin.",
        "hotel": "Moorea Sunset Beach (Bungalow Plage)",
        "hasFlight": false
    },
    {
        "dayNumber": 6,
        "date": "Mercredi 14 Octobre 2026",
        "island": "Moorea",
        "type": "Plage & Souvenirs",
        "icon": "📸",
        "title": "Plage des Tipaniers & Séance Photo dans le Lagon",
        "description": "Matinée sur la carte postale de la plage des Tipaniers : eau transparente à 29°C, sable blanc et cocotiers penchés. Séance photo privative dans l'eau translucide avec les enfants et les raies pour immortaliser cette aventure en famille. Après-midi châteaux de sable avec bébé et dégustation de fruits frais sur la terrasse.",
        "hotel": "Moorea Sunset Beach (Bungalow Plage)",
        "hasFlight": false
    },
    {
        "dayNumber": 7,
        "date": "Jeudi 15 Octobre 2026",
        "island": "Moorea",
        "type": "Exploration Intérieure & Nature",
        "icon": "🍍",
        "title": "Belvédère d'Opunohu, Baie de Cook & Champs d'Ananas",
        "description": "Découverte de l'intérieur luxuriant de l'île en voiture : montée au Belvédère avec un panorama époustouflant sur le mont Rotui et les baies jumelles de Cook et d'Opunohu. Visite des marae ancestraux sous les arbres centenaires, halte au lycée agricole pour goûter les sorbets artisanaux à la vanille de Moorea et balade au milieu des plantations d'ananas Queen Tahiti.",
        "hotel": "Moorea Sunset Beach (Bungalow Plage)",
        "hasFlight": false
    },
    {
        "dayNumber": 8,
        "date": "Vendredi 16 Octobre 2026",
        "island": "Moorea ➔ Rangiroa",
        "type": "Vol Air Tahiti vers les Tuamotu",
        "icon": "✈️",
        "title": "L'Envol vers l'Atoll Géant de Rangiroa",
        "description": "Traversée retour en ferry vers Tahiti puis envol à 14h00 à bord du vol Air Tahiti VT244 vers Rangiroa, le plus grand atoll de Polynésie. Le survol aérien des couronnes de corail et des nuances infinies de bleu est un choc visuel absolu ! Atterrissage sur la fine bande de corail et installation au Raira Lagon en bungalow jardin au bord de l'eau.",
        "hotel": "Raira Lagon (Bungalow Jardin - Demi-pension)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "VT244",
            "airline": "Air Tahiti",
            "route": "Tahiti Faa'a (PPT) ➔ Rangiroa (RGI)",
            "times": "14h00 ➔ 15h00 (Vol direct 1h00)",
            "links": [
                {
                    "label": "Site Officiel Air Tahiti",
                    "url": "https://www.airtahiti.fr/",
                    "icon": "fa-plane"
                },
                {
                    "label": "Suivi Flotte Air Tahiti (Flightradar24)",
                    "url": "https://www.flightradar24.com/data/airlines/vt-vta",
                    "icon": "fa-satellite-dish"
                }
            ]
        }
    },
    {
        "dayNumber": 9,
        "date": "Samedi 17 Octobre 2026",
        "island": "Rangiroa",
        "type": "Faune Marine & Atoll",
        "icon": "🐬",
        "title": "Le Ballet des Dauphins Sauvages de la Passe de Tiputa",
        "description": "Immersion dans la sérénité totale des Tuamotu. Snorkeling dans 'l'Aquarium' naturel au milieu de milliers de poissons multicolores. En fin d'après-midi, spectacle féerique depuis la passe de Tiputa où une famille de grands dauphins sauvages vient jouer et sauter dans les vagues du courant sortant. Dîner savoureux sous les étoiles.",
        "hotel": "Raira Lagon (Bungalow Jardin - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 10,
        "date": "Dimanche 18 Octobre 2026",
        "island": "Rangiroa",
        "type": "Excursion Joyau Naturel",
        "icon": "💎",
        "title": "L'Émerveillement Absolu du Lagon Bleu & Sables Roses",
        "description": "Une journée gravée à jamais ! Traversée du grand lagon vers le mythique 'Lagon Bleu', une piscine naturelle de saphir entourée de motu aux sables roses. Baignade avec les bébés requins inoffensifs qui glissent sur le sable blanc sous les rires des jumeaux. Pique-nique de poisson grillé préparé sur les braises de coco par nos guides paumotu.",
        "hotel": "Raira Lagon (Bungalow Jardin - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 11,
        "date": "Lundi 19 Octobre 2026",
        "island": "Rangiroa ➔ Raiatea",
        "type": "Vol Inter-Îles Air Tahiti",
        "icon": "✈️",
        "title": "Cap sur Raiatea, l'Île Sacrée des Îles Sous-le-Vent",
        "description": "Dernier bain matinal dans le lagon de Rangiroa. Envol à bord du vol Air Tahiti VT471 vers Raiatea (avec escale à Tahiti). Arrivée dans l'après-midi sur cette île majestueuse et montagneuse, berceau historique du peuple ma'ohi. Installation dans notre Bungalow Famille vue mer au Raiatea Lodge Hotel au milieu d'un parc tropical fleuri.",
        "hotel": "Raiatea Lodge Hotel 3* (Bungalow Famille Vue Mer - Demi-pension)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "VT471",
            "airline": "Air Tahiti",
            "route": "Rangiroa (RGI) ➔ Raiatea (RFP) via PPT",
            "times": "Départ matin ➔ Arrivée après-midi (2h30 avec escale)",
            "links": [
                {
                    "label": "Site Officiel Air Tahiti",
                    "url": "https://www.airtahiti.fr/",
                    "icon": "fa-plane"
                },
                {
                    "label": "Suivi Flotte Air Tahiti (Flightradar24)",
                    "url": "https://www.flightradar24.com/data/airlines/vt-vta",
                    "icon": "fa-satellite-dish"
                }
            ]
        }
    },
    {
        "dayNumber": 12,
        "date": "Mardi 20 Octobre 2026",
        "island": "Raiatea",
        "type": "Culture Ma'ohi & Rivière",
        "icon": "🗿",
        "title": "Pirogue sur la Faaroa & Berceau de Taputapuatea (UNESCO)",
        "description": "Journée riche en émotions et en découvertes. Remontée en pirogue traditionnelle de la rivière Faaroa, l'unique cours d'eau navigable de Polynésie, serpentant sous une voûte de bambous et de fougères géantes. Visite du marae international de Taputapuatea, sanctuaire sacré classé par l'UNESCO d'où s'élancèrent les grands navigateurs polynésiens vers tout le Pacifique.",
        "hotel": "Raiatea Lodge Hotel 3* (Bungalow Famille Vue Mer - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 13,
        "date": "Mercredi 21 Octobre 2026",
        "island": "Raiatea",
        "type": "Montagnes & Légendes",
        "icon": "🌸",
        "title": "Plateau du Mont Temehani & La Fleur Mystique Tiare Apetahi",
        "description": "Balade sur les contreforts verdoyants du mont Temehani, à la découverte des légendes de l'île et de la célèbre Tiare Apetahi, fleur à cinq pétales unique au monde qui ne s'épanouit que sur cette montagne sacrée. Après-midi kayak et baignade face au motu Miri Miri avec vue sur les silhouettes de Bora Bora au loin.",
        "hotel": "Raiatea Lodge Hotel 3* (Bungalow Famille Vue Mer - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 14,
        "date": "Jeudi 22 Octobre 2026",
        "island": "Raiatea",
        "type": "Marché Local & Détente",
        "icon": "🥥",
        "title": "Marché Coloré d'Uturoa & Douceur de Vivre au Lodge",
        "description": "Visite du marché matinal d'Uturoa : étals de mangues juteuses, bananes douces, bouquets de fleurs tropicales et vanneries en pandanus tressées par les mamans de l'île. Après-midi détente autour de la piscine du lodge, sieste à l'ombre et dégustation de cocktails de fruits frais au coucher du soleil.",
        "hotel": "Raiatea Lodge Hotel 3* (Bungalow Famille Vue Mer - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 15,
        "date": "Vendredi 23 Octobre 2026",
        "island": "Raiatea ➔ Taha'a",
        "type": "Traversée Lagon vers l'Île Vanille",
        "icon": "⛵",
        "title": "Navigation vers Taha'a & Accueil à la Pension Anahata",
        "description": "Court transfert en bateau de 30 minutes sur les eaux cristallines du lagon partagé entre Raiatea et Taha'a. Arrivée sur 'l'Île Vanille', réputée pour sa douceur de vivre et ses senteurs envoûtantes. Installation dans notre Bungalow Plage à la Pension Anahata, les pieds dans l'eau calme du lagon face à un récif préservé.",
        "hotel": "Pension Anahata (Bungalow Plage - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 16,
        "date": "Samedi 24 Octobre 2026",
        "island": "Taha'a",
        "type": "Jardin de Corail & Vanille",
        "icon": "🤿",
        "title": "Le Fabuleux Jardin de Corail du Motu Tautau & Vanilleraie",
        "description": "L'un des plus beaux snorkeling au monde : dérive douce portée par le courant entre les deux motu au-dessus de massifs de corail multicolores intacts et de bancs de poissons-papillons. Visite passionnante d'une plantation familiale de vanille pour découvrir le secret de la pollinisation manuelle des gousses, suivie d'une ferme perlière artisanale.",
        "hotel": "Pension Anahata (Bungalow Plage - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 17,
        "date": "Dimanche 25 Octobre 2026",
        "island": "Taha'a ➔ Raiatea ➔ Maupiti",
        "type": "Vol Air Tahiti vers l'Île Préservée",
        "icon": "✈️",
        "title": "L'Arrivée à Maupiti, le Paradis Intact du Pacifique",
        "description": "Navette bateau vers Raiatea puis envol sur le vol Air Tahiti VT279 vers Maupiti. Escale visuelle magique au-dessus du lagon de Bora Bora et de son mont Otemanu. Atterrissage grandiose sur la piste étroite posée sur un motu de Maupiti ! Accueil chaleureux avec colliers de fleurs et transfert en pirogue à la Pension Papahani sur le motu Tiapaa.",
        "hotel": "Pension Papahani (Bungalow Jardin sur Motu - Demi-pension)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "VT279",
            "airline": "Air Tahiti",
            "route": "Raiatea (RFP) ➔ Maupiti (MAU) via BOB",
            "times": "Matinée ➔ Midi (Survol panoramique de Bora Bora)",
            "links": [
                {
                    "label": "Site Officiel Air Tahiti",
                    "url": "https://www.airtahiti.fr/",
                    "icon": "fa-plane"
                },
                {
                    "label": "Suivi Flotte Air Tahiti (Flightradar24)",
                    "url": "https://www.flightradar24.com/data/airlines/vt-vta",
                    "icon": "fa-satellite-dish"
                }
            ]
        }
    },
    {
        "dayNumber": 18,
        "date": "Lundi 26 Octobre 2026",
        "island": "Maupiti",
        "type": "Rencontre Sous-Marine Inoubliable",
        "icon": "🤿",
        "title": "Nage Féerique avec les Raies Manta Géantes",
        "description": "Départ matinal en pirogue vers le site de nettoyage des raies manta au cœur du lagon de Maupiti. Baignade silencieuse au milieu de ces géantes majestueuses de 3 à 4 mètres d'envergure qui planent avec une grâce surnaturelle à quelques mètres de nous. Moment de grâce absolue pour la famille. Déjeuner local les pieds dans l'eau.",
        "hotel": "Pension Papahani (Bungalow Jardin sur Motu - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 19,
        "date": "Mardi 27 Octobre 2026",
        "island": "Maupiti",
        "type": "Vélo & Lagon Turquoise",
        "icon": "🚲",
        "title": "Tour de l'Île en Vélo & Plage de Rêve de Tereia",
        "description": "Traversée vers l'île principale de Maupiti (où aucune voiture ne circule). Balade tranquille en vélo le long des chemins fleuris, découverte des pétroglyphes de Haranae et baignade à la légendaire plage de Tereia, où l'on traverse le lagon à pied avec de l'eau tiède jusqu'à la taille pour rejoindre le motu d'en face avec les enfants.",
        "hotel": "Pension Papahani (Bungalow Jardin sur Motu - Demi-pension)",
        "hasFlight": false
    },
    {
        "dayNumber": 20,
        "date": "Mercredi 28 Octobre 2026",
        "island": "Maupiti ➔ Tahiti",
        "type": "Vol Retour vers l'Île Capitale",
        "icon": "✈️",
        "title": "Derniers Regards sur Maupiti & Retour à Tahiti",
        "description": "Dernière baignade matinale sur notre motu de Maupiti. En fin d'après-midi, envol direct avec Air Tahiti (vol VT268) vers Tahiti Faa'a. Dernier survol des îles Sous-le-Vent illuminées par le soleil couchant. Transfert et installation au Studio Reva Tahiti pour les deux dernières nuits de détente avant le voyage retour.",
        "hotel": "Résidence Reva Tahiti 2* (Studio Reva)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "VT268",
            "airline": "Air Tahiti",
            "route": "Maupiti (MAU) ➔ Tahiti Faa'a (PPT)",
            "times": "16h40 ➔ 17h35 (Vol direct 55 min)",
            "links": [
                {
                    "label": "Site Officiel Air Tahiti",
                    "url": "https://www.airtahiti.fr/",
                    "icon": "fa-plane"
                },
                {
                    "label": "Suivi Flotte Air Tahiti (Flightradar24)",
                    "url": "https://www.flightradar24.com/data/airlines/vt-vta",
                    "icon": "fa-satellite-dish"
                }
            ]
        }
    },
    {
        "dayNumber": 21,
        "date": "Jeudi 29 Octobre 2026",
        "island": "Tahiti",
        "type": "Artisanat, Perles & Roulottes",
        "icon": "🛍️",
        "title": "Le Grand Marché de Papeete & Soirée aux Roulottes",
        "description": "Matinée au marché historique de Papeete : emplettes de souvenirs artisanaux, huiles de monoï traditionnelles à la fleur de tiaré, paréos peints à la main et perles noires de culture gravées. En soirée, rendez-vous incontournable sur la place Vaiete pour dîner aux fameuses roulottes polynésiennes dans une ambiance festive et populaire.",
        "hotel": "Résidence Reva Tahiti 2* (Studio Reva)",
        "hasFlight": false
    },
    {
        "dayNumber": 22,
        "date": "Vendredi 30 Octobre 2026",
        "island": "Tahiti & Vol Retour International",
        "type": "Tour de l'Île & Décollage TN8",
        "icon": "✈️",
        "title": "Cascades de Faarumai, Trou du Souffleur & Décollage TN8",
        "description": "Tour complet de l'île de Tahiti Nui en voiture familiale : arrêt à la pointe Vénus, découverte du geyser maritime du trou du souffleur d'Arahoho et marche jusqu'aux chutes d'eau de Faarumai. Dernier coucher de soleil au bord du lagon. À 21h00, arrivée à l'aéroport de Faa'a, remise des colliers de coquillages d'au revoir. À 23h45, décollage du vol TN8 vers Paris CDG via Los Angeles.",
        "hotel": "Nuit à bord du Boeing 787-9 Dreamliner Air Tahiti Nui (Vol TN8)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "TN8",
            "airline": "Air Tahiti Nui",
            "route": "Tahiti Faa'a (PPT) ➔ Paris CDG (via LAX)",
            "times": "Décollage 23h45 ➔ Arrivée J+2 à 09h05 à Paris CDG",
            "links": [
                {
                    "label": "Suivi en direct FlightAware (TN8)",
                    "url": "https://www.flightaware.com/live/flight/THT8",
                    "icon": "fa-satellite-dish"
                },
                {
                    "label": "Flightradar24 (TN8)",
                    "url": "https://www.flightradar24.com/data/flights/tn8",
                    "icon": "fa-plane"
                },
                {
                    "label": "Paris Aéroport CDG",
                    "url": "https://www.parisaeroport.fr/passagers/vols-et-compagnies",
                    "icon": "fa-building"
                }
            ]
        }
    },
    {
        "dayNumber": 23,
        "date": "Samedi 31 Octobre 2026",
        "island": "En Vol (Pacifique & USA)",
        "type": "Traversée Aérienne du Pacifique",
        "icon": "🌍",
        "title": "La Traversée du Pacifique & Escale à Los Angeles",
        "description": "Journée de voyage au-dessus de l'immensité du Pacifique. Divertissements à bord pour les enfants et repos des parents. Escale technique à Los Angeles (LAX) puis poursuite du vol de nuit vers l'Europe.",
        "hotel": "À bord du vol TN8 (Boeing 787-9 Dreamliner)",
        "hasFlight": true,
        "flight": {
            "flightNumber": "TN8",
            "airline": "Air Tahiti Nui",
            "route": "En vol Los Angeles (LAX) ➔ Paris CDG",
            "times": "Arrivée dimanche matin à 09h05 à Paris",
            "links": [
                {
                    "label": "Suivi FlightAware TN8",
                    "url": "https://www.flightaware.com/live/flight/THT8",
                    "icon": "fa-satellite-dish"
                }
            ]
        }
    },
    {
        "dayNumber": 24,
        "date": "Dimanche 01 Novembre 2026",
        "island": "Paris CDG ➔ Maison",
        "type": "Retour à la Maison",
        "icon": "🌟",
        "title": "Atterrissage à Paris & Des Souvenirs pour Toute la Vie !",
        "description": "À 09h05, atterrissage du Dreamliner sur la piste de Paris Roissy CDG. Récupération des bagages et retour à la maison la tête remplie d'étoiles, les cœurs imprégnés de la douceur du Mana et des milliers de photos et sourires inoubliables. Māuruuru roa la Polynésie !",
        "hotel": "De retour chez nous",
        "hasFlight": false
    }
];
