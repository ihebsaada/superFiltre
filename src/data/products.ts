export interface Product {
  id: string;
  name: string;
  category: "huile" | "filtre" | "graisse";
  brand: string;
  reference: string;
  viscosity?: string;
  application: string[];
  capacity?: string;
  apiStandard?: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  // HUILES (extraites des docs)
  {
    id: "SF-001",
    name: "Shell Spirax S4 TXM",
    category: "huile",
    brand: "Shell",
    reference: "SPIRAX-S4-TXM-20L",
    application: ["agricole", "hydraulique", "transmission"],
    capacity: "20L",
    description:
      "Huile multifonctionnelle UTTO pour transmissions, hydrauliques et freins humides (tracteurs/engins).",
    image: "/products/SF-001.png",
  }, // :contentReference[oaicite:5]{index=5}
  {
    id: "SF-002",
    name: "Shell Tellus S2 M 46",
    category: "huile",
    brand: "Shell",
    reference: "TELLUS-S2M-46-1L",
    viscosity: "ISO VG 46",
    application: ["industriel", "hydraulique"],
    capacity: "1L",
    description: "Fluide hydraulique industriel haute performance.",
    image: "/products/Tellus_S2M_46.png",
  }, // :contentReference[oaicite:6]{index=6}
  {
    id: "SF-003",
    name: "Shell Omala S2 G 100",
    category: "huile",
    brand: "Shell",
    reference: "OMALA-S2G-100-20L",
    viscosity: "ISO VG 100",
    application: ["industriel", "engrenages"],
    capacity: "20L",
    description: "Lubrifiant pour engrenages industriels sous fortes charges.",
    image: "/products/Omala_S2G_100.png",
  }, // :contentReference[oaicite:7]{index=7}
  {
    id: "SF-004",
    name: "Shell Sirius X SAE 40",
    category: "huile",
    brand: "Shell",
    reference: "SIRIUS-X-SAE40-20L",
    viscosity: "SAE 40",
    application: ["industriel", "diesel", "poids lourds"],
    capacity: "20L",
    description:
      "Huile moteur monograde diesel avec protection anti-usure et anticorrosion.",
    image: "/products/Sirius_X_SAE40.png",
  }, // :contentReference[oaicite:8]{index=8}
  {
    id: "SF-005",
    name: "Spéciale Compresseur ISO 68",
    category: "huile",
    brand: "Générique",
    reference: "COMP-ISO68-2L",
    viscosity: "ISO VG 68",
    application: ["industriel", "compresseur"],
    capacity: "2L",
    description:
      "Lubrifiant compresseur (vis/palettes/pistons) haute résistance à l’oxydation.",
    image: "/products/compresseur_ISO68.png",
  }, // :contentReference[oaicite:9]{index=9}
  {
    id: "SF-006",
    name: "Texaco Texamatic 7045E ATF",
    category: "huile",
    brand: "Texaco",
    reference: "TEXAMATIC-7045E-1L",
    application: ["auto", "transmission"],
    capacity: "1L",
    description:
      "Fluide ATF assurant des passages de vitesses souples et protection anti-usure.",
    image: "/products/Texamatic_7045E.png",
  }, // :contentReference[oaicite:10]{index=10}

  // FILTRES (extraits des docs)
  {
    id: "SF-101",
    name: "Racor Parker Replacement Filter 20403R",
    category: "filtre",
    brand: "Racor Parker",
    reference: "20403R",
    application: ["diesel", "industriel", "marine", "auto"],
    description:
      "Élément de remplacement 19 µm, séparation eau/impuretés carburant.",
    image: "/products/Filter_20403R.png",
  }, // :contentReference[oaicite:11]{index=11}
  {
    id: "SF-102",
    name: "Parker Racor R90P",
    category: "filtre",
    brand: "Parker Racor",
    reference: "R90P",
    application: ["diesel", "industriel", "marine", "auto"],
    description:
      "Le Parker Racor R90P est un filtre/séparateur de carburant et d’eau de haute efficacité. Conçu pour les moteurs diesel, il assure une filtration optimale en retenant les particules et en séparant efficacement l’eau présente dans le carburant. Cela protège le système d’injection, améliore la performance du moteur et prolonge sa durée de vie. Idéal pour les applications industrielles, marines et automobiles nécessitant une alimentation en carburant propre et fiable.",
    image: "/products/Racor_R90P.png",
  },
  // :contentReference[oaicite:12]{index=12}
  {
    id: "SF-103",
    name: "Perkins Powerpart 2656F843",
    category: "filtre",
    brand: "Perkins",
    reference: "2656F843",
    application: ["diesel", "industriel"],
    description: "Filtre gasoil OEM séparant eau et impuretés.",
    image: "/products/Perkins-Powerpart-2656F843.png",
  }, // :contentReference[oaicite:13]{index=13}
  {
    id: "SF-104",
    name: "Perkins Powerpart 2656F853",
    category: "filtre",
    brand: "Perkins",
    reference: "2656F853",
    application: ["diesel", "industriel"],
    description: "Filtre gasoil OEM pour applications industrielles.",
    image: "/products/Perkins-Powerpart-2656F843.png",
  }, // :contentReference[oaicite:14]{index=14}
  {
    id: "SF-105",
    name: "Perkins Powerpart 2654403",
    category: "filtre",
    brand: "Perkins",
    reference: "2654403",
    application: ["diesel", "industriel"],
    description:
      "Filtre à carburant original Perkins, spécialement conçu pour protéger le système d’injection en séparant l’eau et les impuretés du gasoil. Il contribue à une meilleure performance et à une longévité accrue du moteur.",
    image: "/products/Perkins_2654403.png",
  },
  // :contentReference[oaicite:15]{index=15}
  {
    id: "SF-106",
    name: "MANN-FILTER W 1022",
    category: "filtre",
    brand: "MANN-FILTER",
    reference: "W1022",
    application: ["auto"],
    description: "Filtre à huile haute performance, longue durée.",
    image: "/products/MANN_W1022.png",
  }, // :contentReference[oaicite:16]{index=16}
  {
    id: "SF-107",
    name: "HIFI Filter SN 55434",
    category: "filtre",
    brand: "HIFI Filter",
    reference: "SN55434",
    application: ["industriel", "chantier", "agricole", "diesel"],
    description:
      "Filtre à carburant haute efficacité pour la protection des systèmes d’injection. Élimine efficacement les particules et l’eau présentes dans le carburant, améliorant la durabilité des injecteurs et des moteurs. Idéal pour véhicules industriels, engins de chantier et applications agricoles.",
    image: "/products/HIFI_SN55434.png",
  }, // :contentReference[oaicite:17]{index=17}
  {
    id: "SF-108",
    name: "Caterpillar Fuel Water Separator 326-1642",
    category: "filtre",
    brand: "Caterpillar",
    reference: "326-1642",
    application: ["diesel", "équipements lourds", "industriel"],
    description:
      "Séparateur de carburant et d’eau haute performance signé Caterpillar. Conçu pour éliminer efficacement l’eau et les impuretés présentes dans le carburant, il garantit une combustion propre, prolonge la durée de vie du moteur et améliore le rendement global des équipements lourds.",
    image: "/products/Caterpillar_326-1642.png",
  }, // :contentReference[oaicite:18]{index=18}
  {
    id: "SF-201",
    name: "Fricor Sportler TT36002",
    category: "filtre",
    brand: "Fricor",
    reference: "TT36002",
    application: ["auto", "industriel"],
    description:
      "Élément filtrant cylindrique conçu pour séparer efficacement l’eau et les impuretés du carburant.",
    image: "/products/Fricor_TT36002.png",
  },
  {
    id: "SF-202",
    name: "Élément Hydraulique",
    category: "filtre",
    brand: "MANN-FILTER",
    reference: "HYD-PLISSE",
    application: ["industriel", "hydraulique"],
    description:
      "Élément filtrant hydraulique à structure plissée, conçu pour retenir les particules fines dans les circuits hydrauliques et prolonger la durée de vie des composants.",
    image: "/products/MANN_Hydraulique.png",
  },
  {
    id: "SF-203",
    name: "Filtres à air industriels",
    category: "filtre",
    brand: "Générique",
    reference: "AIR-INDUSTRIEL",
    application: ["industriel", "chantier", "poids lourds"],
    description:
      "Filtres à air industriels destinés aux moteurs lourds et engins de chantier. Leur conception multicouche garantit une filtration maximale de la poussière et des particules fines, prolongeant ainsi la durée de vie du moteur.",
    image: "/products/Filtres_Air_Industriels.png",
  },
  {
    id: "SF-204",
    name: "Filtre à air métallique (cartouche perforée)",
    category: "filtre",
    brand: "Générique",
    reference: "AIR-METAL-CARTOUCHE",
    application: ["industriel", "compresseur", "moteur"],
    description:
      "Filtre à air cylindrique avec paroi métallique perforée, destiné à la protection des moteurs et compresseurs. Il retient efficacement les particules, poussières et impuretés présentes dans l’air aspiré, garantissant ainsi un fonctionnement optimal et une réduction de l’usure des composants internes.",
    image: "/products/Filtre_Air_Metallique.png",
  },
  {
    id: "SF-205",
    name: "Filtres Hydrauliques FILTREC",
    category: "filtre",
    brand: "FILTREC",
    reference: "A-2-Series",
    application: ["industriel", "hydraulique", "mobile"],
    description:
      "Filtres hydrauliques FILTREC (modèles A-2-20-C10B, A-2-30-C104L, A-2-10-C25-BM, A-2-10-C35-BM) assurant une haute efficacité de filtration pour systèmes industriels et mobiles.",
    image: "/products/Filtres_Hydrauliques_FILTREC.png",
  },
  {
    id: "SF-206",
    name: "Dent de godet (éléments bleu et marron)",
    category: "filtre",
    brand: "Générique",
    reference: "AIR-RECTANGULAIRE",
    application: ["industriel", "chantier", "poids lourds"],
    description:
      "Pièces métalliques de différentes formes destinées aux pelles mécaniques et engins de chantier. Fabriquées pour résister aux chocs et à l’abrasion lors du creusement et du terrassement. Compatibles avec différents porte-dents et systèmes d’attache.",
    image: "/products/Filtre_Air_Rectangulaire.png",
  },
  {
    id: "SF-207",
    name: "Fût Shell rouge (huile/lubrifiant industriel)",
    category: "huile",
    brand: "Shell",
    reference: "SHELL-FUT-209L",
    application: ["industriel", "atelier", "garage"],
    capacity: "209L",
    description:
      "Grand baril rouge arborant le logo jaune de Shell. Conçu pour le stockage et la distribution en grande quantité d’huiles et lubrifiants industriels. Utilisé dans les garages, ateliers mécaniques et industries lourdes.",
    image: "/products/Fut_Shell_Rouge.png",
  },
  {
    id: "SF-208",
    name: "Dent de godet (pièce d’usure excavatrice)",
    category: "filtre", // ou "pièce" si tu ajoutes une nouvelle catégorie
    brand: "Générique",
    reference: "DENT-GODET",
    application: ["chantier", "terrassement", "engins de construction"],
    description:
      "Pièces métalliques de différentes formes destinées aux pelles mécaniques et engins de chantier. Fabriquées pour résister aux chocs et à l’abrasion lors du creusement et du terrassement. Compatibles avec différents porte-dents et systèmes d’attache.",
    image: "/products/Dent_Godet.png",
  },
  {
    id: "SF-209",
    name: "Dent de godet (pièce d’usure – jaune)",
    category: "filtre", // ou "pièce" si tu ajoutes une catégorie spécifique
    brand: "Générique",
    reference: "DENT-GODET-JAUNE",
    application: ["chantier", "terrassement", "carrière", "construction"],
    description:
      "Jeu de dents de godet robustes en acier trempé, couleur jaune. Conçues pour prolonger la durée de vie des godets et améliorer la productivité. Idéales pour les travaux de terrassement, carrières et chantiers.",
    image: "/products/Dent_Godet_Jaune.png",
  },
  {
    id: "SF-210",
    name: "Filtre cartouche blanc (x2)",
    category: "filtre",
    brand: "Générique",
    reference: "CART-BLANC-INDUS",
    application: ["industriel", "hydraulique", "pneumatique"],
    description:
      "Filtre cartouche cylindrique haute performance, conçu pour la filtration des fluides industriels. Compatible avec divers systèmes hydrauliques et pneumatiques, il garantit une pureté optimale et une longue durée de vie du système.",
    image: "/products/Filtre_Cartouche_Blanc.png",
  },
  {
    id: "SF-211",
    name: "Filtre hydraulique métallique",
    category: "filtre",
    brand: "Générique",
    reference: "HYD-METAL",
    application: ["industriel", "hydraulique", "équipements lourds"],
    description:
      "Élément filtrant cylindrique en métal, robuste et plissé pour une meilleure surface de filtration. Idéal pour les circuits hydrauliques et équipements lourds, garantissant une excellente rétention des particules et une longue durée de service.",
    image: "/products/Filtre_Hydraulique_Metal.png",
  },
  {
    id: "SF-212",
    name: "Fût Texaco",
    category: "huile",
    brand: "Texaco",
    reference: "FUT-TEXACO-200L",
    capacity: "200L",
    application: ["industriel", "garage", "transport", "atelier"],
    description:
      "Bidon industriel Texaco de grande capacité, utilisé pour le stockage et le transport d’huiles et lubrifiants haute qualité. Conçu pour les environnements professionnels et industriels exigeant fiabilité et durabilité.",
    image: "/products/Fut_Texaco.png",
  },
  {
    id: "SF-213",
    name: "Pièces d’usure (Godet / Excavatrice)",
    category: "filtre",
    brand: "Générique",
    reference: "GODET-PIECES-YELLOW",
    application: ["chantier", "terrassement", "carrière", "construction"],
    description:
      "Dents et pièces de rechange pour godets d’engins de chantier. Fabriquées en acier haute résistance pour résister à l’usure extrême, elles assurent une durabilité accrue et une meilleure efficacité lors des opérations de creusement et de terrassement.",
    image: "/products/Pieces_Godet_Excavatrice.png",
  },
  {
    id: "SF-214",
    name: "Filtre à air mousse jaune",
    category: "filtre",
    brand: "Générique",
    reference: "AIR-MOUSSE-JAUNE",
    application: ["industriel", "chantier", "moteur thermique"],
    description:
      "Filtre à air en mousse haute efficacité, conçu pour moteurs industriels et engins de chantier. Il assure une filtration optimale des particules fines et poussières, garantissant une meilleure protection du moteur et une durée de vie prolongée.",
    image: "/products/Filtre_Air_Mousse_Jaune.png",
  },
];
