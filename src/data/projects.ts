import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "skyweaver",
    title: {
      en: "SkyWeaver",
      pt: "SkyWeaver"
    },
    summary: {
      en: "Dynamic airspace configuration platform for UTM/U-Space.",
      pt: "Plataforma de configuração dinâmica de espaço aéreo para UTM/U-Space."
    },
    motivation: {
      en: "Primary research platform for dynamic airspace configuration.",
      pt: "Plataforma principal de pesquisa para configuração dinâmica de espaço aéreo."
    },
    architecture: {
      en:
        "The public portfolio currently exposes the verified project scope and keeps the structure ready for future public architecture material.",
      pt:
        "O portfólio público atualmente apresenta o escopo validado do projeto e mantém a estrutura pronta para futuros materiais públicos de arquitetura."
    },
    engineeringDecisions: {
      en: [
        "Reactive runtime",
        "Software architecture",
        "Graph optimization",
        "Droneport placement",
        "Airspace topology",
        "Decision-support systems"
      ],
      pt: [
        "Runtime reativo",
        "Arquitetura de software",
        "Otimização em grafos",
        "Posicionamento de droneports",
        "Topologia de espaço aéreo",
        "Sistemas de apoio à decisão"
      ]
    },
    technologies: {
      en: [
        "Reactive Runtime",
        "Graph Optimization",
        "Airspace Topology",
        "Decision Support"
      ],
      pt: [
        "Runtime Reativo",
        "Otimização em Grafos",
        "Topologia de Espaço Aéreo",
        "Apoio à Decisão"
      ]
    },
    links: [
      {
        type: "github",
        label: { en: "Source Code", pt: "Código-fonte" },
        href: "..."
      },
      {
        type: "documentation",
        label: { en: "Documentation", pt: "Documentação" },
        href: "..."
      }
    ],
    image: "/images/projects/skyweaver/frontend.png",
    screenshots: []
  },
  {
    slug: "reed",
    title: {
      en: "Reed",
      pt: "Reed"
    },
    summary: {
      en: "Reactive runtime for deterministic dataflow execution.",
      pt: "Runtime reativo para execução determinística de fluxo de dados."
    },
    motivation: {
      en: "A runtime-oriented project centered on deterministic reactive computation.",
      pt: "Projeto orientado a runtime centrado em computação reativa determinística."
    },
    architecture: {
      en:
        "The structure is ready for deeper technical documentation as public repository materials become available.",
      pt:
        "A estrutura está pronta para documentação técnica mais profunda assim que materiais públicos do repositório estiverem disponíveis."
    },
    engineeringDecisions: {
      en: [
        "Dependency tracking",
        "Event-driven execution",
        "Reactive computation",
        "Strong typing",
        "Software architecture"
      ],
      pt: [
        "Rastreamento de dependências",
        "Execução orientada a eventos",
        "Computação reativa",
        "Tipagem forte",
        "Arquitetura de software"
      ]
    },
    technologies: {
      en: [
        "Deterministic Dataflow",
        "Reactive Computation",
        "Dependency Tracking",
        "Strong Typing"
      ],
      pt: [
        "Fluxo de Dados Determinístico",
        "Computação Reativa",
        "Rastreamento de Dependências",
        "Tipagem Forte"
      ]
    },
    links: [
      {
        type: "github",
        label: { en: "Source Code", pt: "Código-fonte" },
        href: "..."
      },
      {
        type: "documentation",
        label: { en: "Documentation", pt: "Documentação" },
        href: "..."
      }
    ],
    image: "/images/projects/reed/reed-logo.svg",
    screenshots: []
  },
  {
    slug: "ondevale",
    title: {
      en: "OndeVale",
      pt: "OndeVale"
    },
    summary: {
      en:
        "Web application that estimates the price per square meter of real estate in Sao Paulo using only geographic location.",
      pt:
        "Aplicação web que estima o preço por metro quadrado de imóveis em Sao Paulo usando apenas localização geográfica."
    },
    motivation: {
      en:
        "Developed as a data science case study for PO-235 at ITA and UNIFESP, with emphasis on methodology, validation, and deployment.",
      pt:
        "Desenvolvido como estudo de caso em ciência de dados para a disciplina PO-235 no ITA e na UNIFESP, com ênfase em metodologia, validação e deploy."
    },
    problem: {
      en:
        "The project investigates how much signal about real estate value can be extracted exclusively from spatial location.",
      pt:
        "O projeto investiga quanta informação sobre valor imobiliário pode ser extraída exclusivamente da localização espacial."
    },
    architecture: {
      en:
        "The public repository separates dataset handling, KNN training artifacts, a FastAPI backend, and a Vue frontend for interactive map-based inference.",
      pt:
        "O repositório público separa manipulação de dados, artefatos de treinamento KNN, um backend em FastAPI e um frontend em Vue para inferência interativa baseada em mapa."
    },
    engineeringDecisions: {
      en: [
        "KNeighborsRegressor trained only on projected metric coordinates",
        "FastAPI inference service separated from the frontend",
        "Vue interface built around map interaction and prediction feedback",
        "Report, artifacts, and tests kept alongside the application code"
      ],
      pt: [
        "KNeighborsRegressor treinado apenas com coordenadas métricas projetadas",
        "Serviço de inferência em FastAPI separado do frontend",
        "Interface em Vue estruturada em torno da interação com mapa e retorno de previsão",
        "Relatório, artefatos e testes mantidos junto ao código da aplicação"
      ]
    },
    lessonsLearned: {
      en: [
        "A simple baseline model can still become a serious engineering artifact when validation and deployment are handled rigorously.",
        "Separating modeling, service, and interface layers makes data products easier to explain and maintain."
      ],
      pt: [
        "Um modelo baseline simples ainda pode se tornar um artefato sério de engenharia quando validação e deploy são tratados com rigor.",
        "Separar modelagem, serviço e interface torna produtos de dados mais fáceis de explicar e manter."
      ]
    },
    technologies: {
      en: ["Python", "FastAPI", "Vue", "TypeScript", "KNN", "GIS"],
      pt: ["Python", "FastAPI", "Vue", "TypeScript", "KNN", "GIS"]
    },
    links: [
      {
        type: "github",
        label: { en: "Source Code", pt: "Código-fonte" },
        href: "https://github.com/..."
      },
      {
        type: "demo",
        label: { en: "Live Demo", pt: "Demo" },
        href: "https://ondevale-frontend.onrender.com/"
      }
    ],
    image: "/images/projects/ondevale/frontend.png",
    screenshots: [
      "/images/projects/ondevale/price-histogram.png",
      "/images/projects/ondevale/price-m2-histogram.png"
    ]
  },
  {
    slug: "Drone Chase",
    title: {
      en: "Deep Reinforcement Learning with Graph Attention for Cooperative Loyal Wingmen",
      pt: "Aprendizado por Reforco Profundo com Atencao em Grafos para Loyal Wingmen Cooperativos"
    },
    summary: {
      en: "Published research on cooperative loyal wingmen under shared spatio-temporal observations.",
      pt: "Pesquisa publicada sobre loyal wingmen cooperativos sob observacoes espaco-temporais compartilhadas."
    },
    motivation: {
      en:
        "Research focused on multi-agent autonomy with graph attention mechanisms and richer situational awareness.",
      pt:
        "Pesquisa focada em autonomia multiagente com mecanismos de atencao em grafos e consciencia situacional ampliada."
    },
    problem: {
      en:
        "Cooperative threat engagement requires policies that can reason over shared spatio-temporal observations in dynamic aerial combat scenarios.",
      pt:
        "Engajamento cooperativo de ameacas exige politicas capazes de raciocinar sobre observacoes espaco-temporais compartilhadas em cenarios dinamicos de combate aereo."
    },
    architecture: {
      en:
        "The publication combines supervised pre-training with reinforcement-learning fine-tuning and uses graph attention networks to process shared observations.",
      pt:
        "A publicacao combina pre-treinamento supervisionado com refinamento via aprendizado por reforco e usa redes de atencao em grafos para processar observacoes compartilhadas."
    },
    engineeringDecisions: {
      en: [
        "Graph Attention Networks for shared observations",
        "Two-stage pipeline with supervised pre-training and RL fine-tuning",
        "Focus on cooperative autonomy in CTEDS scenarios"
      ],
      pt: [
        "Graph Attention Networks para observacoes compartilhadas",
        "Pipeline em dois estagios com pre-treinamento supervisionado e refinamento com RL",
        "Foco em autonomia cooperativa em cenarios CTEDS"
      ]
    },
    lessonsLearned: {
      en: [
        "Perception quality and representation design strongly influence cooperative autonomy.",
        "Expanding observation richness raises both modeling opportunity and systems complexity."
      ],
      pt: [
        "A qualidade da percepcao e o desenho da representacao influenciam fortemente a autonomia cooperativa.",
        "Expandir a riqueza das observacoes aumenta tanto a oportunidade de modelagem quanto a complexidade do sistema."
      ]
    },
    technologies: {
      en: [
        "Deep Reinforcement Learning",
        "Graph Attention Networks",
        "Multi-Agent Systems",
        "Autonomous UAVs",
        "Simulation"
      ],
      pt: [
        "Aprendizado por Reforco Profundo",
        "Graph Attention Networks",
        "Sistemas Multiagentes",
        "UAVs Autonomos",
        "Simulacao"
      ]
    },
    links: [
      {
        type: "github",
        label: { en: "Source Code", pt: "Codigo-fonte" },
        href: "https://github.com/DaviGuanabara/dronechase"
      },
      {
        type: "documentation",
        label: { en: "Documentation", pt: "Documentacao" },
        href: "https://github.com/DaviGuanabara/dronechase/blob/main/README.md"
      },
      {
        type: "paper",
        label: { en: "Conference Paper", pt: "Artigo em conferência" },
        href: "https://doi.org/10.1109/SBR/WRE63066.2024.10837749"
      },
      {
        type: "paper",
        label: { en: "Journal Article", pt: "Artigo em periódico" },
        href: "https://doi.org/10.1007/s10846-026-02415-8"
      }
    ],
    image: "/images/projects/dronechase/occlusion.png",
    screenshots: []
  },
  {
    slug: "wildfire-pyro",
    title: {
      en: "Deep Learning for Geo-Temporal Environmental Modeling",
      pt: "Aprendizado Profundo para Modelagem Ambiental Geo-Temporal"
    },
    summary: {
      en:
        "Spatio-temporal data analysis and simulation framework using deep attention mechanisms and uncertainty-aware supervised learning workflows.",
      pt:
        "Framework de analise e simulacao de dados espaco-temporais usando mecanismos profundos de atencao e fluxos supervisionados sensiveis a incerteza."
    },
    motivation: {
      en:
        "Framework for simulating, analyzing, and predicting spatiotemporal phenomena from sparse sensor data.",
      pt:
        "Framework para simular, analisar e prever fenomenos espaco-temporais a partir de dados esparsos de sensores."
    },
    problem: {
      en:
        "Geo-temporal prediction systems need architectures that support uncertain, sparse observations while keeping the training and evaluation workflow inspectable.",
      pt:
        "Sistemas de predicao geo-temporal exigem arquiteturas que suportem observacoes esparsas e incertas mantendo o fluxo de treinamento e avaliacao inspecionavel."
    },
    architecture: {
      en:
        "The framework centers on SensorManager, a Gymnasium-style environment, a wrapper-inspired training interface, and deep learning models built around sets of random neighbors and attention.",
      pt:
        "O framework se organiza em torno do SensorManager, de um ambiente no estilo Gymnasium, de uma interface de treinamento inspirada em wrappers e de modelos profundos baseados em conjuntos de vizinhos aleatorios e atencao."
    },
    engineeringDecisions: {
      en: [
        "Farama Gymnasium-inspired workflow for supervised learning",
        "Wrapper-based interaction model influenced by Stable Baselines-style interfaces",
        "Bootstrap evaluation for more realistic uncertainty analysis"
      ],
      pt: [
        "Fluxo de trabalho inspirado no Farama Gymnasium para aprendizado supervisionado",
        "Modelo de interacao baseado em wrappers influenciado por interfaces ao estilo Stable Baselines",
        "Avaliacao com bootstrap para analise de incerteza mais realista"
      ]
    },
    lessonsLearned: {
      en: [
        "Borrowing structure from reinforcement learning can improve clarity in supervised geo-temporal workflows.",
        "Architecture changes can be as important as model changes in research software."
      ],
      pt: [
        "Emprestar estrutura do aprendizado por reforco pode melhorar a clareza de fluxos geo-temporais supervisionados.",
        "Mudancas de arquitetura podem ser tao importantes quanto mudancas de modelo em software de pesquisa."
      ]
    },
    technologies: {
      en: [
        "Python",
        "Deep Learning",
        "Deep Sets",
        "Attention Mechanisms",
        "Bayesian Optimization"
      ],
      pt: [
        "Python",
        "Aprendizado Profundo",
        "Deep Sets",
        "Mecanismos de Atencao",
        "Otimizacao Bayesiana"
      ]
    },
    links: [
      {
        type: "github",
        label: { en: "Source Code", pt: "Codigo-fonte" },
        href: "https://github.com/DaviGuanabara/wildfire_pyro"
      },
      {
        type: "documentation",
        label: { en: "Documentation", pt: "Documentacao" },
        href: "https://github.com/DaviGuanabara/wildfire_pyro/blob/main/README.md"
      }
    ],
    image: "/images/projects/wildfire/stations_map.png",
    screenshots: []
  }
];
