/**
 * ============================================================================
 * PORTAL NACIONAL EDUBRASIL EAD - PARCEIRO OFICIAL UNICV
 * ARQUIVO: cursos.js
 * Base de Dados Estruturada e Regras de Convalidação de Disciplinas
 * Credenciamento Oficial: Centro Universitário Cidade Verde (Portaria MEC nº 962)
 * ============================================================================
 */

// 1. OBJETO GLOBAL: dadosModalidades
const dadosModalidades = {
  // --------------------------------------------------------------------------
  // a) TÉCNICO PARA TECNÓLOGO (12 A 15 MESES)
  // --------------------------------------------------------------------------
  "tec-para-tecnologo": {
    id: "tec-para-tecnologo",
    nome: "Técnico para Tecnólogo (Aproveitamento)",
    tag: "Aproveitamento Técnico",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    tempoMedio: "12 a 15 meses",
    descricao: "Convalidação direta de matérias para quem concluiu Curso Técnico. Conquiste seu Diploma de Ensino Superior (Tecnólogo) reconhecido pelo MEC em tempo recorde de 1 ano.",
    cursos: [
      {
        id: "tt-logistica",
        nome: "Logística (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Alta demanda em cadeias de suprimento e terminais de carga",
        descricaoCurta: "Valide seu técnico em logística ou áreas afins para obter diploma superior com foco em supply chain, gestão de frotas e armazenagem.",
        disciplinas: [
          "Gestão Estratégica da Cadeia de Suprimentos (Supply Chain)",
          "Logística Integrada e Modais de Transporte",
          "Gestão Portuária, Cabotagem e Terminais de Cargas",
          "Custos Logísticos, Tributação e Comércio Exterior",
          "Planejamento, Programação e Controle da Produção (PCP)"
        ]
      },
      {
        id: "tt-gestao-portuaria",
        nome: "Gestão Portuária (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Especialização para o Maior Complexo Portuário do País",
        descricaoCurta: "Convalidação acelerada para atuar em operadoras portuárias, armadores, alfândega e recintos alfandegados.",
        disciplinas: [
          "Legislação Aduaneira e Operações Marítimas",
          "Administração de Terminais Portuários e Retroportuários",
          "Afretamento, Cabotagem e Direito Marítimo",
          "Logística de Cargas Especiais e Contêineres",
          "Segurança Operacional e Meio Ambiente Portuário (ISPS Code)"
        ]
      },
      {
        id: "tt-comex",
        nome: "Comércio Exterior (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Foco em Câmbio, Despacho Aduaneiro e Negociações",
        descricaoCurta: "Aproveite seu técnico em administração ou comércio para atuar em tradings, câmbio internacional e multinacionais.",
        disciplinas: [
          "Sistemática de Importação e Exportação (Siscomex / Portal Único)",
          "Classificação Fiscal de Mercadorias e NCM",
          "Operações de Câmbio, Financiamento e Seguros Internacionais",
          "Acordos Comerciais Internacionais e Geopolítica",
          "Logística Integrada e Incoterms 2020"
        ]
      },
      {
        id: "tt-seguranca-trabalho",
        nome: "Segurança no Trabalho (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "2.400h",
        area: "Saúde e Segurança Ocupacional",
        destaque: "Ascensão Salarial e Cargo Superior para Técnicos (TST)",
        descricaoCurta: "Evolua de Técnico para Tecnólogo em Segurança do Trabalho e amplie sua assinatura técnica e liderança em SESMT corporativo.",
        disciplinas: [
          "Gestão Integrada de Riscos Ocupacionais e Normas Regulamentadoras (NRs)",
          "Higiene Ocupacional: Ruído, Calor e Agentes Químicos",
          "Ergonomia Aplicada e PGR (Programa de Gerenciamento de Riscos)",
          "Auditorias em SST, ISO 45001 e Perícias Trabalhistas",
          "Proteção Contra Incêndios, Emergências e Toxicologia Industrial"
        ]
      },
      {
        id: "tt-ads",
        nome: "Análise e Desenv. de Sistemas (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "2.000h",
        area: "Tecnologia da Informação",
        destaque: "Área mais requisitada pelo mercado tech global",
        descricaoCurta: "Convalide seu técnico em informática, desenvolvimento ou redes para conquistar seu diploma superior em ADS.",
        disciplinas: [
          "Engenharia de Software e Metodologias Ágeis (Scrum/Kanban)",
          "Estruturas de Dados e Algoritmos Avançados",
          "Desenvolvimento Web Full Stack (Back-end e Front-end Moderno)",
          "Banco de Dados Relacionais (SQL) e NoSQL",
          "Arquitetura de Nuvem (Cloud Computing) e Práticas DevOps"
        ]
      },
      {
        id: "tt-gestao-ambiental",
        nome: "Gestão Ambiental (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Meio Ambiente e Sustentabilidade",
        destaque: "Licenciamento Ambiental e Práticas ESG",
        descricaoCurta: "Convalidação de matérias para técnicos em meio ambiente ou química que desejam emitir laudos e gerenciar projetos ESG.",
        disciplinas: [
          "Licenciamento Ambiental e Auditoria ISO 14001",
          "Gestão de Resíduos Sólidos e Efluentes Industriais",
          "Recuperação de Áreas Degradadas e Recursos Hídricos",
          "Governança Corporativa e Sustentabilidade ESG",
          "Legislação Ambiental e Perícias Judiciais"
        ]
      },
      {
        id: "tt-rh",
        nome: "Gestão de Recursos Humanos (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Formação Executiva de Líderes de Pessoas",
        descricaoCurta: "Aproveite seu técnico para conquistar graduação superior focada em People Analytics, recrutamento ágil e legislação trabalhista.",
        disciplinas: [
          "Recrutamento, Seleção e People Analytics",
          "Cargos, Salários e Benefícios Competitivos",
          "Legislação Trabalhista, Previdenciária e eSocial",
          "Treinamento, Desenvolvimento e Gestão por Competências",
          "Clima Organizacional e Saúde Mental no Trabalho"
        ]
      },
      {
        id: "tt-processos-gerenciais",
        nome: "Processos Gerenciais (Aproveitamento de Técnico)",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Versatilidade e Conclusão Acelerada",
        descricaoCurta: "Aproveite matérias de administração para obter um diploma de graduação superior com foco em gestão de negócios e processos.",
        disciplinas: [
          "Mapeamento e Modelagem de Processos Organizacionais (BPMN)",
          "Planejamento Estratégico e Indicadores de Desempenho (KPIs)",
          "Gestão Financeira, Controladoria e Fluxo de Caixa",
          "Gestão de Pessoas, Liderança e Negociação",
          "Inovação Corporativa e Transformação Digital"
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // b) GRADUAÇÃO TECNOLÓGICA (2 A 3 ANOS)
  // --------------------------------------------------------------------------
  "tecnologo": {
    id: "tecnologo",
    nome: "Graduação Tecnológica",
    tag: "Tecnólogo EAD",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    tempoMedio: "2 a 3 anos",
    descricao: "Cursos superiores com foco prático, alta aceitação corporativa e formação rápida para acelerar sua inserção no mercado de trabalho.",
    cursos: [
      {
        id: "tec-ads",
        nome: "Análise e Desenvolvimento de Sistemas (ADS)",
        duracao: "2,5 anos (5 semestres)",
        cargaHoraria: "2.100h",
        area: "Tecnologia da Informação",
        destaque: "Formação completa com foco em Empregabilidade Tech",
        descricaoCurta: "Aprenda a projetar, programar, testar e implantar sistemas corporativos e aplicativos com as tecnologias mais requisitadas.",
        disciplinas: [
          "Lógica de Programação e Orientação a Objetos",
          "Engenharia de Requisitos e Arquitetura de Software",
          "Desenvolvimento Mobile e Aplicações Web",
          "Segurança da Informação e LGPD",
          "Inteligência Artificial Aplicada e Engenharia de Dados"
        ]
      },
      {
        id: "tec-gestao-portuaria",
        nome: "Gestão Portuária",
        duracao: "2 anos (4 semestres)",
        cargaHoraria: "1.800h",
        area: "Gestão e Logística",
        destaque: "Formação direcionada ao Comércio Marítimo e Terminais",
        descricaoCurta: "Capacitação para liderar a gestão operacional de terminais de cargas, atracação, alfandegamento e navegação.",
        disciplinas: [
          "Infraestrutura, Dragagem e Engenharia Portuária",
          "Comércio Internacional e Logística Aduaneira",
          "Operações de Carga Geral, Granéis e Contêineres",
          "Direito Marítimo, Portuário e Seguros",
          "Gestão Ambiental Portuária e Sustentabilidade ESG"
        ]
      },
      {
        id: "tec-logistica",
        nome: "Logística",
        duracao: "2 anos (4 semestres)",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Alta demanda em transporte rodoviário, ferroviário e aéreo",
        descricaoCurta: "Gestão moderna de estoques, armazenagem automatizada, compras, roteirização de transportes e logística reversa.",
        disciplinas: [
          "Gestão de Estoques e Centros de Distribuição (WMS)",
          "Logística Internacional e Cabotagem",
          "Planejamento de Transportes e Frotas",
          "Sistemas de Apoio à Decisão e ERP na Cadeia de Suprimentos",
          "Gestão da Qualidade e Métodos Lean Six Sigma"
        ]
      },
      {
        id: "tec-comex",
        nome: "Comércio Exterior",
        duracao: "2 anos (4 semestres)",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Atuação em Tradings, Armadores e Despachantes",
        descricaoCurta: "Domínio das operações de compra e venda internacional, negociações multiculturais e conformidade aduaneira.",
        disciplinas: [
          "Práticas e Despacho Aduaneiro em Zonas Primárias e Secundárias",
          "Câmbio Comercial, Cartas de Crédito e Financiamentos",
          "Direito Internacional e Tratados Globais",
          "Marketing Internacional e Prospecção de Mercados",
          "Logística de Exportação e Importação"
        ]
      },
      {
        id: "tec-seguranca-trabalho",
        nome: "Segurança no Trabalho",
        duracao: "3 anos (6 semestres)",
        cargaHoraria: "2.400h",
        area: "Saúde e Segurança Ocupacional",
        destaque: "Diploma Superior para Coordenação de SESMT",
        descricaoCurta: "Formação completa para planejar e coordenar políticas de saúde e segurança em indústrias, portos e construção civil.",
        disciplinas: [
          "Legislação Ocupacional e Normas Regulamentadoras",
          "Avaliação de Riscos Físicos, Químicos e Biológicos",
          "Ergonomia e Psicologia Organizacional do Trabalho",
          "Planos de Resposta a Emergências e Proteção Coletiva",
          "Perícias Judiciais Trabalhistas e Laudos Técnicos"
        ]
      },
      {
        id: "tec-gestao-ambiental",
        nome: "Gestão Ambiental",
        duracao: "2 anos (4 semestres)",
        cargaHoraria: "1.800h",
        area: "Meio Ambiente e Sustentabilidade",
        destaque: "Auditoria Ambiental, ESG e Consultoria",
        descricaoCurta: "Atue no planejamento sustentável de empresas, licenciamento ambiental, perícia ecológica e tratamento de resíduos.",
        disciplinas: [
          "Políticas Públicas e Direito Ambiental",
          "Auditorias e Certificações ISO 14000",
          "Educação Ambiental e Responsabilidade Social",
          "Gestão de Bacias Hidrográficas e Clima",
          "Sistemas de Gestão Ambiental Corporativa"
        ]
      },
      {
        id: "tec-recursos-humanos",
        nome: "Gestão de Recursos Humanos",
        duracao: "2 anos (4 semestres)",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Gestão de Pessoas e Cultura Organizacional",
        descricaoCurta: "Estratégias de atração de talentos, treinamento corporativo, relações trabalhistas e People Analytics.",
        disciplinas: [
          "Recrutamento, Seleção e People Analytics",
          "Cargos, Salários e Benefícios Competitivos",
          "Legislação Trabalhista, Previdenciária e eSocial",
          "Treinamento, Desenvolvimento e Gestão por Competências",
          "Clima Organizacional e Saúde Mental no Trabalho"
        ]
      },
      {
        id: "tec-processos-gerenciais",
        nome: "Processos Gerenciais",
        duracao: "2 anos (4 semestres)",
        cargaHoraria: "1.800h",
        area: "Gestão e Negócios",
        destaque: "Gestão Executiva e Empreendedorismo",
        descricaoCurta: "Formação versátil para gerenciar micro, médias e grandes empresas, otimizando finanças e operações.",
        disciplinas: [
          "Diagnóstico e Consultoria Organizacional",
          "Controladoria, Custos e Precificação",
          "Modelagem de Negócios e Startups",
          "Gestão de Vendas, Marketing e Clientes",
          "Liderança Estratégica e Tomada de Decisão"
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // c) GRADUAÇÃO TRADICIONAL (BACHARELADO E LICENCIATURA - 4 A 5 ANOS)
  // --------------------------------------------------------------------------
  "graduacao": {
    id: "graduacao",
    nome: "Bacharelados e Licenciaturas",
    tag: "Graduação Tradicional",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300",
    tempoMedio: "4 a 5 anos",
    descricao: "Formação universitária tradicional e completa, habilitando para conselhos profissionais (CFA, CRC, CREA) e concursos públicos de alta remuneração.",
    cursos: [
      {
        id: "grad-administracao",
        nome: "Administração (Bacharelado)",
        duracao: "4 anos (8 semestres)",
        cargaHoraria: "3.200h",
        area: "Gestão e Negócios",
        destaque: "Registro no CFA/CRA e Ampla Atuação Executiva",
        descricaoCurta: "Formação ampla e generalista para liderar corporações, planejar estratégias financeiras, mercadológicas e de inovação.",
        disciplinas: [
          "Teoria Geral da Administração e Estratégia Corporativa",
          "Administração Financeira, Orçamento e Controladoria",
          "Marketing Estratégico e Comportamento do Consumidor",
          "Gestão de Operações, Produção e Logística",
          "Direito Empresarial, Tributário e Trabalhista"
        ]
      },
      {
        id: "grad-ciencias-contabeis",
        nome: "Ciências Contábeis (Bacharelado)",
        duracao: "4 anos (8 semestres)",
        cargaHoraria: "3.200h",
        area: "Finanças e Contabilidade",
        destaque: "Habilitação Oficial para o Exame do CRC",
        descricaoCurta: "Capacitação completa em contabilidade societária, auditoria independente, perícia contábil e planejamento tributário.",
        disciplinas: [
          "Contabilidade Geral, Societária e IFRS (Padrão Internacional)",
          "Contabilidade Tributária e Planejamento Fiscal Avançado",
          "Auditoria Contábil e Controles Internos",
          "Perícia Contábil, Arbitragem e Laudos Técnicos",
          "Análise de Demonstrações Contábeis e Valuation"
        ]
      },
      {
        id: "grad-pedagogia",
        nome: "Pedagogia (Licenciatura)",
        duracao: "4 anos (8 semestres)",
        cargaHoraria: "3.200h",
        area: "Educação e Docência",
        destaque: "Concursos Públicos e Gestão Escolar",
        descricaoCurta: "Habilitação legal para docência na Educação Infantil, Anos Iniciais do Ensino Fundamental e Gestão/Coordenação Escolar.",
        disciplinas: [
          "Psicologia da Educação e do Desenvolvimento Infantil",
          "Didática Geral e Metodologias Inovadoras de Ensino",
          "Alfabetização, Letramento e Práticas Pedagógicas",
          "Educação Especial, Inclusiva e Acessibilidade",
          "Gestão, Coordenação Pedagógica e Políticas Educacionais"
        ]
      },
      {
        id: "grad-engenharia-producao",
        nome: "Engenharia de Produção (Bacharelado)",
        duracao: "5 anos (10 semestres)",
        cargaHoraria: "3.800h",
        area: "Engenharia e Gestão Industrial",
        destaque: "Registro no CREA e Alta Valorização Industrial",
        descricaoCurta: "Integração de conhecimentos de engenharia, finanças e gestão para otimizar sistemas produtivos, linhas fabris e serviços.",
        disciplinas: [
          "Pesquisa Operacional e Modelagem Matemática",
          "Engenharia da Qualidade e Controle Estatístico de Processos",
          "Planejamento e Controle da Produção Industrial",
          "Engenharia Econômica, Custos e Avaliação de Investimentos",
          "Automação Industrial, Robótica e Indústria 4.0"
        ]
      },
      {
        id: "grad-letras",
        nome: "Letras - Português e Inglês (Licenciatura)",
        duracao: "4 anos (8 semestres)",
        cargaHoraria: "3.200h",
        area: "Educação e Linguística",
        destaque: "Habilitação Dupla para Ensino Fundamental e Médio",
        descricaoCurta: "Domínio linguístico e pedagógico para atuar na docência de língua portuguesa e inglesa, além de revisão e tradução textual.",
        disciplinas: [
          "Linguística Teórica e Análise do Discurso",
          "Morfossintaxe da Língua Portuguesa",
          "Língua Inglesa Aplicada e Fonologia",
          "Literatura Brasileira, Portuguesa e Infanto-Juvenil",
          "Metodologia do Ensino de Línguas e Novas Tecnologias"
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // d) SEGUNDA GRADUAÇÃO E R2 (6 A 12 MESES)
  // --------------------------------------------------------------------------
  "segunda-graduacao": {
    id: "segunda-graduacao",
    nome: "Segunda Graduação e R2",
    tag: "R2 & Aproveitamento",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    tempoMedio: "6 a 12 meses",
    descricao: "Para quem já possui um diploma de ensino superior. Conquiste uma nova graduação ou formação pedagógica (R2) em tempo reduzido aproveitando sua base anterior.",
    cursos: [
      {
        id: "r2-pedagogia",
        nome: "R2 Formação Pedagógica em Pedagogia",
        duracao: "6 a 12 meses",
        cargaHoraria: "1.200h",
        area: "Educação (Para Bacharéis e Tecnólogos)",
        destaque: "Licenciatura Rápida para Concursos de Docência",
        descricaoCurta: "Formação pedagógica acelerada com base na Resolução CNE para quem já tem diploma superior e deseja lecionar na educação básica.",
        disciplinas: [
          "Fundamentos Filosóficos, Históricos e Sociológicos da Educação",
          "Práticas de Alfabetização e Letramento",
          "Currículo, Avaliação e Planejamento Educacional",
          "Educação Inclusiva e Atendimento Educacional Especializado",
          "Estágio Supervisionado em Docência Infantil e Fundamental"
        ]
      },
      {
        id: "r2-letras-ingles",
        nome: "R2 Formação Pedagógica em Letras-Inglês",
        duracao: "6 a 12 meses",
        cargaHoraria: "1.200h",
        area: "Educação (Para Graduados)",
        destaque: "Habilitação Oficial para Docência de Inglês",
        descricaoCurta: "Complementação pedagógica para graduados que buscam atuar no ensino formal da língua inglesa em escolas públicas e privadas.",
        disciplinas: [
          "Didática do Ensino da Língua Inglesa",
          "Linguística Aplicada ao Ensino de Línguas Estrangeiras",
          "Literaturas Anglófonas no Contexto Escolar",
          "Políticas Públicas da Educação Básica e BNCC",
          "Prática de Ensino e Estágio Curricular Supervisionado"
        ]
      },
      {
        id: "seg-grad-administracao",
        nome: "Segunda Graduação em Administração",
        duracao: "12 meses",
        cargaHoraria: "1.600h",
        area: "Gestão e Negócios",
        destaque: "Aproveitamento Curricular com Novo Diploma e CRA",
        descricaoCurta: "Para quem já é graduado em qualquer área e deseja o título de Bacharel em Administração com registro no Conselho Regional.",
        disciplinas: [
          "Estratégia Empresarial e Governança Corporativa",
          "Gestão Financeira, Orçamento de Capital e Riscos",
          "Gestão de Cadeias Produtivas e Sustentabilidade",
          "Liderança Ágil, Transformação Digital e Inovação",
          "Direito Societário, Contratos e Compliance"
        ]
      },
      {
        id: "seg-grad-contabeis",
        nome: "Segunda Graduação em Ciências Contábeis",
        duracao: "12 a 15 meses",
        cargaHoraria: "1.800h",
        area: "Finanças e Contabilidade",
        destaque: "Direito ao Exame de Suficiência do CRC",
        descricaoCurta: "Especialmente indicado para administradores e gestores que precisam de habilitação plena para assinar balanços contábeis.",
        disciplinas: [
          "Contabilidade Societária e Normas Internacionais (CPC/IFRS)",
          "Contabilidade Tributária e Sped Fiscal",
          "Auditoria das Demonstrações Financeiras",
          "Perícia Contábil e Laudos Judiciais",
          "Controladoria Estratégica e Sistemas Integrados"
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // e) PÓS-GRADUAÇÃO LATO SENSU E MBA (4 A 10 MESES)
  // --------------------------------------------------------------------------
  "pos": {
    id: "pos",
    nome: "Pós-Graduação e MBA",
    tag: "Pós / MBA EAD",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-300",
    tempoMedio: "4 a 10 meses",
    descricao: "Especializações executivas com emissão de certificado imediato, pontuação para concursos públicos e TCC facultativo conforme Resolução MEC.",
    cursos: [
      {
        id: "pos-mba-logistica-portuaria",
        nome: "MBA em Gestão Estratégica de Logística e Portos",
        duracao: "4 a 10 meses",
        cargaHoraria: "420h a 720h",
        area: "Logística e Infraestrutura",
        destaque: "Especialização Executiva de Alto Nível",
        descricaoCurta: "Formação de executivos para liderar grandes operações intermodais, terminais marítimos, navegação e cadeias globais de suprimento.",
        disciplinas: [
          "Planejamento Estratégico de Hubs Portuários e Retroportuários",
          "Gestão Avançada da Cadeia de Suprimentos Global (Global SCM)",
          "Direito Marítimo, Seguros Internacionais e Regulação da ANTAQ",
          "Inovação Tecnológica e Portos Inteligentes (Smart Ports / IoT)",
          "Gestão de Custos Logísticos, Tarifas e Negociações Internacionais"
        ]
      },
      {
        id: "pos-mba-comex",
        nome: "MBA em Comércio Exterior e Gestão Aduaneira",
        duracao: "4 a 10 meses",
        cargaHoraria: "420h a 720h",
        area: "Comércio Exterior",
        destaque: "Compliance Aduaneiro e Negócios Globais",
        descricaoCurta: "Direcionado a gestores que atuam em importação, exportação, tributação internacional e regimes aduaneiros especiais.",
        disciplinas: [
          "Sistemas Informatizados do Comércio Exterior e Novo Processo de Importação",
          "Tributação, Regimes Aduaneiros Especiais (Drawback, Recof, Entreposto)",
          "Gestão de Riscos Aduaneiros e Programa OEA (Operador Econômico Autorizado)",
          "Negociações Internacionais e Resolução de Conflitos Comerciais",
          "Logística Internacional, Afretamento e Contratos Marítimos"
        ]
      },
      {
        id: "pos-seguranca-trabalho",
        nome: "Pós-Graduação em Engenharia de Segurança do Trabalho",
        duracao: "6 a 12 meses",
        cargaHoraria: "600h",
        area: "Engenharia e Saúde Ocupacional",
        destaque: "Exclusivo para Engenheiros e Arquitetos (Título no CREA)",
        descricaoCurta: "Habilitação legal para engenheiros e arquitetos obterem a atribuição profissional de Engenheiro de Segurança do Trabalho.",
        disciplinas: [
          "Legislação, Normas e Perícias em Segurança do Trabalho",
          "Higiene Ocupacional Avançada (Vibrações, Ruídos e Agentes Tóxicos)",
          "Segurança em Obras, Espaços Confinados e Trabalho em Altura",
          "Proteção e Prevenção Contra Sinistros e Incêndios",
          "Gestão Ambiental, Toxicologia e Ergonomia Industrial"
        ]
      },
      {
        id: "pos-mba-controladoria",
        nome: "MBA em Controladoria, Auditoria e Compliance Fiscal",
        duracao: "4 a 10 meses",
        cargaHoraria: "420h a 720h",
        area: "Finanças e Controladoria",
        destaque: "Formação de Heads Financeiros e Controllers",
        descricaoCurta: "Desenvolva visão analítica profunda sobre governança corporativa, auditoria interna/externa e planejamento tributário.",
        disciplinas: [
          "Controladoria Estratégica e Indicadores Econômico-Financeiros",
          "Auditoria Contábil e Governança Corporativa (SOX e ESG)",
          "Planejamento Tributário e Gestão de Riscos Fiscais",
          "Compliance Empresarial e Prevenção a Fraudes Corporativas",
          "Valuation, Fusões e Aquisições (M&A) e Análise de Investimentos"
        ]
      },
      {
        id: "pos-gestao-escolar",
        nome: "Pós-Graduação em Gestão Escolar e Orientação Educacional",
        duracao: "4 a 10 meses",
        cargaHoraria: "420h a 720h",
        area: "Educação",
        destaque: "Pontuação para Concursos e Progressão Salarial",
        descricaoCurta: "Qualificação de educadores para liderança de equipes pedagógicas, direção escolar, supervisão e orientação aos alunos e famílias.",
        disciplinas: [
          "Gestão Democrática e Legislação da Educação Básica",
          "Supervisão e Orientação Educacional no Século XXI",
          "Mediação de Conflitos e Relações Interpessoais na Escola",
          "Avaliação Institucional e Gestão de Resultados Educacionais",
          "Uso de Metodologias Ativas e Tecnologias na Prática Pedagógica"
        ]
      },
      {
        id: "pos-mba-ia-dados",
        nome: "MBA em Inteligência Artificial e Ciência de Dados Aplicada",
        duracao: "4 a 10 meses",
        cargaHoraria: "420h a 720h",
        area: "Tecnologia da Informação",
        destaque: "A Especialização mais Requisitada da Era Digital",
        descricaoCurta: "Aplicação prática de Machine Learning, LLMs, Business Intelligence e Big Data na tomada de decisão corporativa.",
        disciplinas: [
          "Fundamentos de Inteligência Artificial e Modelos Preditivos",
          "Machine Learning e Processamento de Linguagem Natural (NLP)",
          "Engenharia de Prompts e Soluções com Modelos Generativos",
          "Business Intelligence, Dashboards e Storytelling com Dados",
          "Ética, Segurança e Governança de Dados Corporativos (LGPD)"
        ]
      }
    ]
  }
};

// 2. OBJETO GLOBAL: mapaConvalidacao (Para o Simulador de Técnicos)
const mapaConvalidacao = [
  {
    tecnico: "Técnico em Logística",
    descricaoOrigem: "Base curricular em cadeia de suprimentos, frotas e armazenagem",
    tecnologosCompativeis: [
      {
        cursoId: "tt-logistica",
        nome: "Tecnólogo em Logística EAD",
        duracao: "12 meses",
        materiasEliminadas: "Até 60% da carga horária convalidada (cerca de 8 a 10 disciplinas eliminadas)",
        vantagem: "Economia de até 1 ano e meio de estudos e mensalidades."
      },
      {
        cursoId: "tt-gestao-portuaria",
        nome: "Tecnólogo em Gestão Portuária EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento direto de transportes, distribuição e armazenagem",
        vantagem: "Diploma superior direcionado ao polo portuário e comércio marítimo."
      },
      {
        cursoId: "tt-comex",
        nome: "Tecnólogo em Comércio Exterior EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento de bases de transporte internacional e suprimentos",
        vantagem: "Expansão da carreira para logística internacional e despacho aduaneiro."
      }
    ]
  },
  {
    tecnico: "Técnico em Segurança do Trabalho",
    descricaoOrigem: "Base em NRs, higiene ocupacional, medicina do trabalho e prevenção de sinistros",
    tecnologosCompativeis: [
      {
        cursoId: "tt-seguranca-trabalho",
        nome: "Tecnólogo em Segurança no Trabalho EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento de até 50% da grade (NRs, Laudos, Higiene Ocupacional e Ergonomia)",
        vantagem: "Elevação imediata do nível técnico para cargo de gestão com ensino superior reconhecido."
      },
      {
        cursoId: "tt-gestao-ambiental",
        nome: "Tecnólogo em Gestão Ambiental EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento de riscos químicos, resíduos perigosos e auditorias",
        vantagem: "Habilitação dupla para gerenciar Meio Ambiente, Saúde e Segurança (EHS)."
      },
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracao: "12 meses",
        materiasEliminadas: "Aproveitamento de disciplinas de gestão de equipes, normas e auditorias",
        vantagem: "Diploma superior de gestão corporativa em apenas 1 ano."
      }
    ]
  },
  {
    tecnico: "Técnico em Informática / Redes",
    descricaoOrigem: "Base em algoritmos, arquitetura de computadores, redes e bancos de dados",
    tecnologosCompativeis: [
      {
        cursoId: "tt-ads",
        nome: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Convalidação de lógica de programação, banco de dados, redes e engenharia básica",
        vantagem: "Diploma superior de TI exigido para vagas de pleno/sênior e concursos públicos."
      },
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracao: "12 meses",
        materiasEliminadas: "Aproveitamento de gestão de sistemas e modelagem de processos",
        vantagem: "Transição para cargos de Gestor de Projetos de TI ou Product Owner."
      }
    ]
  },
  {
    tecnico: "Técnico em Administração / Contabilidade",
    descricaoOrigem: "Base em finanças, contabilidade básica, recursos humanos e marketing",
    tecnologosCompativeis: [
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracao: "12 meses",
        materiasEliminadas: "Convalidação de até 60% das disciplinas introdutórias de administração e economia",
        vantagem: "Conquista do diploma universitário com graduação completa em 12 meses."
      },
      {
        cursoId: "tt-rh",
        nome: "Tecnólogo em Gestão de Recursos Humanos EAD",
        duracao: "12 meses",
        materiasEliminadas: "Aproveitamento de departamento pessoal, legislação trabalhista e liderança",
        vantagem: "Especialização superior em gestão de talentos e clima corporativo."
      },
      {
        cursoId: "tt-logistica",
        nome: "Tecnólogo em Logística EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento de finanças empresariais, compras e custos operacionais",
        vantagem: "Diplomação superior em setor logístico altamente remunerado."
      }
    ]
  },
  {
    tecnico: "Técnico em Transações Imobiliárias / Comércio",
    descricaoOrigem: "Base em contratos, vendas, direito imobiliário, negociação e marketing",
    tecnologosCompativeis: [
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracao: "12 meses",
        materiasEliminadas: "Convalidação expressa de negociação comercial, contratos e marketing",
        vantagem: "Diploma de Ensino Superior em 1 ano para alavancar gestão de negócios."
      },
      {
        cursoId: "tt-comex",
        nome: "Tecnólogo em Comércio Exterior EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento de técnicas de vendas, negociação e direito contratual",
        vantagem: "Transição da carreira local para o mercado corporativo internacional."
      }
    ]
  },
  {
    tecnico: "Técnico em Meio Ambiente / Química",
    descricaoOrigem: "Base em ecologia, química ambiental, monitoramento de efluentes e coleta de amostras",
    tecnologosCompativeis: [
      {
        cursoId: "tt-gestao-ambiental",
        nome: "Tecnólogo em Gestão Ambiental EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento direto de até 50% da grade de química, solos e resíduos",
        vantagem: "Diploma superior habilitado para assinar laudos e relatórios de impacto (RIMA)."
      },
      {
        cursoId: "tt-seguranca-trabalho",
        nome: "Tecnólogo em Segurança no Trabalho EAD",
        duracao: "12 a 15 meses",
        materiasEliminadas: "Aproveitamento de agentes químicos, toxicologia e proteção ao trabalhador",
        vantagem: "Formação completa de EHS (Environment, Health & Safety)."
      }
    ]
  }
];

// Tornar disponível globalmente no navegador
if (typeof window !== "undefined") {
  window.dadosModalidades = dadosModalidades;
  window.mapaConvalidacao = mapaConvalidacao;
}
