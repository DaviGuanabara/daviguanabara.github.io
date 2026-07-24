import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "skyweaver",
    title: "SkyWeaver",
    summary: "Dynamic airspace configuration platform for UTM/U-Space.",
    motivation: "Primary research platform for dynamic airspace configuration.",
    architecture:
      "The public portfolio currently exposes the verified project scope and keeps the structure ready for future public architecture material.",
    engineeringDecisions: [
      "Reactive runtime",
      "Software architecture",
      "Graph optimization",
      "Droneport placement",
      "Airspace topology",
      "Decision-support systems"
    ],
    technologies: [
      "Reactive Runtime",
      "Graph Optimization",
      "Airspace Topology",
      "Decision Support"
    ],
    links: [],
    screenshots: []
  },
  {
    slug: "reed",
    title: "Reed",
    summary: "Reactive runtime for deterministic dataflow execution.",
    motivation: "A runtime-oriented project centered on deterministic reactive computation.",
    architecture:
      "The structure is ready for deeper technical documentation as public repository materials become available.",
    engineeringDecisions: [
      "Dependency tracking",
      "Event-driven execution",
      "Reactive computation",
      "Strong typing",
      "Software architecture"
    ],
    technologies: [
      "Deterministic Dataflow",
      "Reactive Computation",
      "Dependency Tracking",
      "Strong Typing"
    ],
    links: [],
    screenshots: []
  },
  {
    slug: "dronechase",
    title: "dronechase",
    summary:
      "Multi-stage simulation framework for training loyal wingmen in defense scenarios with deep reinforcement learning.",
    motivation:
      "Developed as part of a master's thesis at ITA for threat-engagement scenarios involving loyal wingmen and loitering munitions.",
    problem:
      "Autonomous threat engagement in aerial defense scenarios requires policies that can learn from high-dimensional, evolving observations inside realistic simulation loops.",
    architecture:
      "The repository is organized into stage-based training applications, a core `threatengage` simulation package, and experimental `threatsense` perception modules.",
    engineeringDecisions: [
      "Stable Baselines3 for reinforcement learning workflows",
      "PyFlyt and PyBullet for 3D simulation",
      "Curriculum-style stages from stage01 to stage03",
      "Separate support and documentation artifacts for experimental stages"
    ],
    lessonsLearned: [
      "Stage-based progression helps isolate complexity during policy development.",
      "Simulation infrastructure becomes a first-class engineering concern in applied reinforcement learning."
    ],
    technologies: [
      "Python",
      "Deep Reinforcement Learning",
      "Stable Baselines3",
      "PyFlyt",
      "PyBullet"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DaviGuanabara/dronechase" },
      { label: "Documentation", href: "https://github.com/DaviGuanabara/dronechase/blob/main/README.md" },
      { label: "Paper", href: "https://doi.org/10.1109/SBR/WRE63066.2024.10837749" },
      { label: "Publication", href: "https://doi.org/10.1007/s10846-026-02415-8" }
    ],
    image:
      "https://raw.githubusercontent.com/DaviGuanabara/dronechase/main/src/threatsense/level5/components/tasks_management/tasks/level5_task.svg",
    screenshots: []
  },
  {
    slug: "ondevale",
    title: "OndeVale",
    summary:
      "Web application that estimates the price per square meter of real estate in São Paulo using only geographic location.",
    motivation:
      "Developed as a data science case study for PO-235 at ITA and UNIFESP, with emphasis on methodology, validation, and deployment.",
    problem:
      "The project investigates how much signal about real estate value can be extracted exclusively from spatial location.",
    architecture:
      "The public repository separates dataset handling, KNN training artifacts, a FastAPI backend, and a Vue frontend for interactive map-based inference.",
    engineeringDecisions: [
      "KNeighborsRegressor trained only on projected metric coordinates",
      "FastAPI inference service separated from the frontend",
      "Vue interface built around map interaction and prediction feedback",
      "Report, artifacts, and tests kept alongside the application code"
    ],
    lessonsLearned: [
      "A simple baseline model can still become a serious engineering artifact when validation and deployment are handled rigorously.",
      "Separating modeling, service, and interface layers makes data products easier to explain and maintain."
    ],
    technologies: ["Python", "FastAPI", "Vue", "TypeScript", "KNN", "GIS"],
    links: [
      { label: "GitHub", href: "https://github.com/DaviGuanabara/OndeVale" },
      { label: "Documentation", href: "https://github.com/DaviGuanabara/OndeVale/blob/main/README.md" }
    ],
    image:
      "https://raw.githubusercontent.com/DaviGuanabara/OndeVale/main/artifacts/stats/geographic_distribution.png",
    screenshots: [
      "https://raw.githubusercontent.com/DaviGuanabara/OndeVale/main/artifacts/stats/price_histogram.png",
      "https://raw.githubusercontent.com/DaviGuanabara/OndeVale/main/artifacts/stats/price_m2_histogram.png"
    ]
  },
  {
    slug: "loyal-wingmen-gat",
    title:
      "Deep Reinforcement Learning with Graph Attention for Cooperative Loyal Wingmen",
    summary:
      "Published research on cooperative loyal wingmen under shared spatio-temporal observations.",
    motivation:
      "Research focused on multi-agent autonomy with graph attention mechanisms and richer situational awareness.",
    problem:
      "Cooperative threat engagement requires policies that can reason over shared spatio-temporal observations in dynamic aerial combat scenarios.",
    architecture:
      "The publication combines supervised pre-training with reinforcement-learning fine-tuning and uses graph attention networks to process shared observations.",
    engineeringDecisions: [
      "Graph Attention Networks for shared observations",
      "Two-stage pipeline with supervised pre-training and RL fine-tuning",
      "Focus on cooperative autonomy in CTEDS scenarios"
    ],
    lessonsLearned: [
      "Perception quality and representation design strongly influence cooperative autonomy.",
      "Expanding observation richness raises both modeling opportunity and systems complexity."
    ],
    technologies: [
      "Deep Reinforcement Learning",
      "Graph Attention Networks",
      "Multi-Agent Systems",
      "Autonomous UAVs",
      "Simulation"
    ],
    links: [
      { label: "Repository", href: "https://github.com/DaviGuanabara/dronechase" },
      { label: "Paper", href: "https://doi.org/10.1007/s10846-026-02415-8" },
      { label: "Conference Paper", href: "https://doi.org/10.1109/SBR/WRE63066.2024.10837749" }
    ],
    screenshots: []
  },
  {
    slug: "wildfire-pyro",
    title: "Deep Learning for Geo-Temporal Environmental Modeling",
    summary:
      "Spatio-temporal data analysis and simulation framework using deep attention mechanisms and uncertainty-aware supervised learning workflows.",
    motivation:
      "Framework for simulating, analyzing, and predicting spatiotemporal phenomena from sparse sensor data.",
    problem:
      "Geo-temporal prediction systems need architectures that support uncertain, sparse observations while keeping the training and evaluation workflow inspectable.",
    architecture:
      "The framework centers on SensorManager, a Gymnasium-style environment, a wrapper-inspired training interface, and deep learning models built around sets of random neighbors and attention.",
    engineeringDecisions: [
      "Farama Gymnasium-inspired workflow for supervised learning",
      "Wrapper-based interaction model influenced by Stable Baselines-style interfaces",
      "Bootstrap evaluation for more realistic uncertainty analysis"
    ],
    lessonsLearned: [
      "Borrowing structure from reinforcement learning can improve clarity in supervised geo-temporal workflows.",
      "Architecture changes can be as important as model changes in research software."
    ],
    technologies: [
      "Python",
      "Deep Learning",
      "Deep Sets",
      "Attention Mechanisms",
      "Bayesian Optimization"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/DaviGuanabara/wildfire_pyro" },
      { label: "Documentation", href: "https://github.com/DaviGuanabara/wildfire_pyro/blob/main/README.md" }
    ],
    image:
      "https://raw.githubusercontent.com/DaviGuanabara/wildfire_pyro/main/src/wildfire_pyro/models/figures/neural_network_architecture.png",
    screenshots: []
  }
];
