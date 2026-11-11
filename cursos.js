/**
 * ============================================================================
 * PORTAL ACADÊMICO EAD - PARCEIRO OFICIAL UNICV
 * ARQUIVO: cursos.js
 * Base de Dados Estruturada dos Cursos e Matrizes Curriculares
 * Credenciamento MEC: Portaria nº 962
 * ============================================================================
 */

// 1. Definição das 5 Modalidades Oficiais e Metadados
const MODALIDADES = {
  "tec-para-tecnologo": {
    id: "tec-para-tecnologo",
    nome: "Técnico para Tecnólogo (Aproveitamento)",
    tag: "Aproveitamento Técnico",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    descricao: "Convalide as disciplinas do seu Curso Técnico concluído e conquiste o Diploma de Graduação Superior (Tecnólogo) em tempo recorde: de 12 a 15 meses.",
    tempoMedio: "12 a 15 meses",
    equivalencia: "Diploma de Ensino Superior reconhecido pelo MEC"
  },
  "tecnologo": {
    id: "tecnologo",
    nome: "Graduação Tecnológica",
    tag: "Tecnólogo EAD",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    descricao: "Cursos superiores focados na prática profissional e alta empregabilidade, com duração ágil de 2 a 3 anos e formação rápida para o mercado.",
    tempoMedio: "2 a 3 anos",
    equivalencia: "Graduação Superior com foco no mercado corporativo"
  },
  "graduacao": {
    id: "graduacao",
    nome: "Bacharelados e Licenciaturas",
    tag: "Graduação Tradicional",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300",
    descricao: "Formação acadêmica robusta e completa para quem busca ampla atuação no mercado corporativo ou docência na educação básica.",
    tempoMedio: "4 a 5 anos",
    equivalencia: "Diploma de Bacharel ou Licenciado com registro em órgãos de classe"
  },
  "segunda-graduacao": {
    id: "segunda-graduacao",
    nome: "Segunda Graduação e R2",
    tag: "R2 & Aproveitamento",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
    descricao: "Aceleração de carreira para quem já possui um diploma superior. Formação pedagógica (R2) ou nova graduação aproveitando sua carga horária anterior em 6 a 12 meses.",
    tempoMedio: "6 a 12 meses",
    equivalencia: "Novo Diploma Universitário em tempo acelerado"
  },
  "pos": {
    id: "pos",
    nome: "Pós-Graduação e MBA",
    tag: "Pós / MBA EAD",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-300",
    descricao: "Especializações lato sensu e MBAs executivos com certificação imediata após conclusão em 4 a 10 meses e TCC facultativo conforme Resolução MEC.",
    tempoMedio: "4 a 10 meses",
    equivalencia: "Certificado de Especialista / MBA Lato Sensu Nacional"
  }
};

// 2. Base de Cursos por Modalidade
const CURSOS_DATABASE = {
  // --------------------------------------------------------------------------
  // MODALIDADE 1: TÉCNICO PARA TECNÓLOGO (12 A 15 MESES)
  // --------------------------------------------------------------------------
  "tec-para-tecnologo": [
    {
      id: "tt-logistica",
      nome: "Logística (Aproveitamento de Técnico)",
      modalidade: "tec-para-tecnologo",
      duracao: "12 a 15 meses",
      cargaHoraria: "1.800h",
      area: "Gestão e Negócios",
      destaque: "Alta Demanda Portuária e Hubs de Carga",
      descricaoCurta: "Validação do seu técnico para obter grau superior com foco em cadeia de suprimentos, supply chain e operações integradas.",
      disciplinas: [
        "Gestão Estratégica da Cadeia de Suprimentos (Supply Chain)",
        "Logística de Distribuição e Modais de Transporte",
        "Gestão Portuária, Cabotagem e Terminais Retroportuários",
        "Custos Logísticos, Tributação e Comércio Exterior",
        "Planejamento, Programação e Controle da Produção (PCP)"
      ]
    },
    {
      id: "tt-gestao-portuaria",
      nome: "Gestão Portuária (Aproveitamento de Técnico)",
      modalidade: "tec-para-tecnologo",
      duracao: "12 a 15 meses",
      cargaHoraria: "1.800h",
      area: "Gestão e Negócios",
      destaque: "Foco no Complexo Portuário e Comércio Marítimo",
      descricaoCurta: "Convalidação ágil para atuar em operadoras portuárias, armadores, alfândega e recintos alfandegados.",
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
      modalidade: "tec-para-tecnologo",
      duracao: "12 a 15 meses",
      cargaHoraria: "1.800h",
      area: "Gestão e Negócios",
      destaque: "Foco em Câmbio, Despacho Aduaneiro e Negociações",
      descricaoCurta: "Valide seu curso técnico em Administração ou Comex para conquistar o diploma superior e atuar no mercado global.",
      disciplinas: [
        "Sistemática de Importação e Exportação (Siscomex e Portal Único)",
        "Classificação Fiscal de Mercadorias e NCM",
        "Operações de Câmbio, Financiamento e Seguros Internacionais",
        "Acordos Comerciais Internacionais e Geopolítica",
        "Logística Integrada e Incoterms 2020"
      ]
    },
    {
      id: "tt-seguranca-trabalho",
      nome: "Segurança no Trabalho (Aproveitamento de Técnico)",
      modalidade: "tec-para-tecnologo",
      duracao: "12 a 15 meses",
      cargaHoraria: "2.400h",
      area: "Saúde e Segurança Ocupacional",
      destaque: "Ascensão Salarial para Técnicos de Segurança",
      descricaoCurta: "Evolua de Técnico para Tecnólogo em Segurança do Trabalho e amplie sua assinatura técnica e liderança em SESMT corporativo.",
      disciplinas: [
        "Gestão Integrada de Riscos Ocupacionais e Normas Regulamentadoras (NRs)",
        "Higiene Ocupacional: Ruído, Agentes Químicos e Biológicos",
        "Ergonomia Aplicada e PGR (Programa de Gerenciamento de Riscos)",
        "Auditorias em SST, ISO 45001 e Perícias Trabalhistas",
        "Proteção Contra Incêndios, Emergências e Toxicologia Industrial"
      ]
    },
    {
      id: "tt-ads",
      nome: "Análise e Desenv. de Sistemas (Aproveitamento de Técnico)",
      modalidade: "tec-para-tecnologo",
      duracao: "12 a 15 meses",
      cargaHoraria: "2.000h",
      area: "Tecnologia da Informação",
      destaque: "Área mais requisitada pelo mercado de TI",
      descricaoCurta: "Aproveite seu técnico em Informática, Redes ou Desenvolvimento para conquistar seu diploma superior em ADS.",
      disciplinas: [
        "Engenharia de Software e Metodologias Ágeis (Scrum/Kanban)",
        "Estruturas de Dados e Algoritmos Avançados",
        "Desenvolvimento Web Full Stack (Back-end e Front-end Moderno)",
        "Banco de Dados Relacionais (SQL) e NoSQL",
        "Arquitetura de Nuvem (Cloud Computing) e DevOps"
      ]
    },
    {
      id: "tt-processos-gerenciais",
      nome: "Processos Gerenciais (Aproveitamento de Técnico)",
      modalidade: "tec-para-tecnologo",
      duracao: "12 a 15 meses",
      cargaHoraria: "1.800h",
      area: "Gestão e Negócios",
      destaque: "Versatilidade e Empreendedorismo",
      descricaoCurta: "Eleve seu currículo com foco em diagnóstico empresarial, mapeamento de processos e liderança de equipes.",
      disciplinas: [
        "Mapeamento e Modelagem de Processos Organizacionais (BPMN)",
        "Planejamento Estratégico e Indicadores de Desempenho (KPIs)",
        "Gestão Financeira, Controladoria e Fluxo de Caixa",
        "Gestão de Pessoas, Liderança e Negociação",
        "Inovação Corporativa e Transformação Digital"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // MODALIDADE 2: TECNÓLOGO REGULAR (2 A 3 ANOS)
  // --------------------------------------------------------------------------
  "tecnologo": [
    {
      id: "tec-ads",
      nome: "Análise e Desenvolvimento de Sistemas (ADS)",
      modalidade: "tecnologo",
      duracao: "2,5 anos (5 semestres)",
      cargaHoraria: "2.100h",
      area: "Tecnologia da Informação",
      destaque: "Formação completa com foco em Empregabilidade Tech",
      descricaoCurta: "Aprenda a projetar, programar, testar e implantar sistemas corporativos e aplicativos com as tecnologias mais buscadas.",
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
      modalidade: "tecnologo",
      duracao: "2 anos (4 semestres)",
      cargaHoraria: "1.800h",
      area: "Gestão e Logística",
      destaque: "Referência no Polo Portuário Nacional",
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
      modalidade: "tecnologo",
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
      modalidade: "tecnologo",
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
      modalidade: "tecnologo",
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
      id: "tec-recursos-humanos",
      nome: "Gestão de Recursos Humanos",
      modalidade: "tecnologo",
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
    }
  ],

  // --------------------------------------------------------------------------
  // MODALIDADE 3: GRADUAÇÃO TRADICIONAL (BACHARELADO E LICENCIATURA - 4 A 5 ANOS)
  // --------------------------------------------------------------------------
  "graduacao": [
    {
      id: "grad-administracao",
      nome: "Administração (Bacharelado)",
      modalidade: "graduacao",
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
      modalidade: "graduacao",
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
      modalidade: "graduacao",
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
      modalidade: "graduacao",
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
      modalidade: "graduacao",
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
  ],

  // --------------------------------------------------------------------------
  // MODALIDADE 4: SEGUNDA GRADUAÇÃO E R2 (6 A 12 MESES)
  // --------------------------------------------------------------------------
  "segunda-graduacao": [
    {
      id: "r2-pedagogia",
      nome: "R2 Formação Pedagógica em Pedagogia",
      modalidade: "segunda-graduacao",
      duracao: "6 a 12 meses",
      cargaHoraria: "1.200h",
      area: "Educação (Para Bacharéis e Tecnólogos)",
      destaque: "Licenciatura Rápida para Concursos de Docência",
      descricaoCurta: "Formação pedagógica acelerada com base na Resolução CNE para quem já tem diploma superior e quer lecionar.",
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
      modalidade: "segunda-graduacao",
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
      modalidade: "segunda-graduacao",
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
      modalidade: "segunda-graduacao",
      duracao: "12 a 15 meses",
      cargaHoraria: "1.800h",
      area: "Finanças e Contabilidade",
      destaque: "Direito ao Exame de Suficiência do CRC",
      descricaoCurta: "Especialmente indicado para administradores, economistas e gestores que precisam de habilitação plena para assinar balanços contábeis.",
      disciplinas: [
        "Contabilidade Societária e Normas Internacionais (CPC/IFRS)",
        "Contabilidade Tributária e Sped Fiscal",
        "Auditoria das Demonstrações Financeiras",
        "Perícia Contábil e Laudos Judiciais",
        "Controladoria Estratégica e Sistemas Integrados"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // MODALIDADE 5: PÓS-GRADUAÇÃO E MBA LATO SENSU (4 A 10 MESES)
  // --------------------------------------------------------------------------
  "pos": [
    {
      id: "pos-mba-logistica-portuaria",
      nome: "MBA em Gestão Estratégica de Logística e Portos",
      modalidade: "pos",
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
      modalidade: "pos",
      duracao: "4 a 10 meses",
      cargaHoraria: "420h a 720h",
      area: "Comércio Exterior",
      destaque: "Compliance Aduaneiro e Negócios Globais",
      descricaoCurta: "Direcionado a analistas e gestores que atuam em importação, exportação, tributação internacional e logística aduaneira.",
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
      modalidade: "pos",
      duracao: "6 a 12 meses",
      cargaHoraria: "600h",
      area: "Engenharia e Saúde Ocupacional",
      destaque: "Exclusivo para Engenheiros e Arquitetos (Título Oficial)",
      descricaoCurta: "Habilitação legal para engenheiros e arquitetos obterem a atribuição profissional de Engenheiro de Segurança do Trabalho no CREA/CAU.",
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
      modalidade: "pos",
      duracao: "4 a 10 meses",
      cargaHoraria: "420h a 720h",
      area: "Finanças e Controladoria",
      destaque: "Formação de Heads Financeiros e Controllers",
      descricaoCurta: "Desenvolva visão analítica profunda sobre governança, auditoria interna e externa, conformidade tributária e valuation.",
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
      modalidade: "pos",
      duracao: "4 a 10 meses",
      cargaHoraria: "420h a 720h",
      area: "Educação",
      destaque: "Pontuação para Concursos e Progressão de Carreira",
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
      modalidade: "pos",
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
};

// 3. Base do Simulador de Convalidação (Técnico -> Tecnólogo)
// Mapeamento dos cursos técnicos concluídos para graduações superiores elegíveis
const SIMULADOR_CONVALIDACAO = [
  {
    tecnicoId: "tec-logistica",
    tecnicoNome: "Técnico em Logística / Portos",
    cursosElegiveis: [
      {
        cursoId: "tt-logistica",
        nome: "Tecnólogo em Logística EAD",
        duracaoEstimada: "12 meses",
        aproveitamentoMedio: "Até 60% da carga horária convalidada",
        vantagem: "Economia de até 1 ano e meio de estudos e mensalidades."
      },
      {
        cursoId: "tt-gestao-portuaria",
        nome: "Tecnólogo em Gestão Portuária EAD",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Até 50% de aproveitamento de matérias afins",
        vantagem: "Diploma superior direcionado a portos e retroportos."
      },
      {
        cursoId: "tt-comex",
        nome: "Tecnólogo em Comércio Exterior EAD",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Aproveitamento das bases de transportes e compras",
        vantagem: "Expansão para comércio internacional e despacho aduaneiro."
      }
    ]
  },
  {
    tecnicoId: "tec-seguranca",
    tecnicoNome: "Técnico em Segurança do Trabalho (TST)",
    cursosElegiveis: [
      {
        cursoId: "tt-seguranca-trabalho",
        nome: "Tecnólogo em Segurança no Trabalho EAD",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Aproveitamento direto de até 50% das NRs e Higiene",
        vantagem: "Elevação imediata do nível técnico para cargo de gestão e ensino superior."
      },
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracaoEstimada: "12 meses",
        aproveitamentoMedio: "Aproveitamento de disciplinas administrativas do SESMT",
        vantagem: "Habilitação superior para liderança corporativa e auditorias."
      }
    ]
  },
  {
    tecnicoId: "tec-informatica",
    tecnicoNome: "Técnico em Informática / Redes / Desenvolvimento",
    cursosElegiveis: [
      {
        cursoId: "tt-ads",
        nome: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Convalidação de lógica, algoritmos e banco de dados",
        vantagem: "Diploma superior de TI exigido para vagas plenas/sênior e concursos."
      },
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracaoEstimada: "12 meses",
        aproveitamentoMedio: "Foco em Gestão de TI e Projetos",
        vantagem: "Transição para cargos de Product Owner ou Gestão de TI."
      }
    ]
  },
  {
    tecnicoId: "tec-administracao",
    tecnicoNome: "Técnico em Administração / Contabilidade",
    cursosElegiveis: [
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracaoEstimada: "12 meses",
        aproveitamentoMedio: "Convalidação expressa de fundamentos da administração",
        vantagem: "Conquista do diploma universitário em apenas 1 ano."
      },
      {
        cursoId: "tt-logistica",
        nome: "Tecnólogo em Logística EAD",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Aproveitamento de finanças, suprimentos e custos",
        vantagem: "Especialização superior em setor logístico aquecido."
      },
      {
        cursoId: "tt-comex",
        nome: "Tecnólogo em Comércio Exterior EAD",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Aproveitamento de economia, gestão e contratos",
        vantagem: "Abertura para atuar em multinacionais e tradings."
      }
    ]
  },
  {
    tecnicoId: "tec-recursos-humanos",
    tecnicoNome: "Técnico em Recursos Humanos",
    cursosElegiveis: [
      {
        cursoId: "tt-processos-gerenciais",
        nome: "Tecnólogo em Processos Gerenciais EAD",
        duracaoEstimada: "12 meses",
        aproveitamentoMedio: "Aproveitamento de gestão de pessoas e legislação",
        vantagem: "Diploma superior rápido com registro profissional."
      },
      {
        cursoId: "tt-seguranca-trabalho",
        nome: "Tecnólogo em Segurança no Trabalho EAD",
        duracaoEstimada: "12 a 15 meses",
        aproveitamentoMedio: "Aproveitamento de saúde ocupacional e eSocial",
        vantagem: "Dupla qualificação para liderar RH e Departamento Pessoal integrado."
      }
    ]
  }
];

// 4. Configuração Institucional do Polo Parceiro Oficial UniCV
const INSTITUCIONAL_CONFIG = {
  parceiroNome: "Polo Autorizado UniCV - Centro Universitário Cidade Verde",
  credenciamentoMEC: "Portaria MEC nº 962 | Reconhecimento Nacional",
  notaMEC: "Nota Máxima no MEC (Conceito Institucional EAD)",
  whatsappOficial: "5513997864321", // Número institucional de atendimento
  whatsappMensagemPadrao: "Olá! Gostaria de informações sobre os cursos EAD da UniCV.",
  avaUrl: "https://ava.unicv.edu.br",
  portalAlunoUrl: "https://aluno.unicv.edu.br",
  
  // Customização Regional (ativada via ?regiao=baixada na URL)
  regionalizacao: {
    nacional: {
      tagRegiao: "Atendimento Universitário em Todo o Brasil",
      tituloHero: "Graduação e Pós-Graduação EAD Nota Máxima no MEC com Certificação UniCV",
      subtituloHero: "Acelere seu diploma superior com flexibilidade total. Convalidação expressa de cursos técnicos em 12 meses, bacharelados, licenciaturas e MBAs com nota máxima no MEC.",
      cidadePadrao: "Minha Cidade / Brasil",
      destaquePolo: "Mais de 500 polos de apoio presencial em todo o território nacional."
    },
    baixada: {
      tagRegiao: "Polo Autorizado Baixada Santista • Santos, Guarujá e Região",
      tituloHero: "Polo Oficial UniCV Baixada Santista: Cursos EAD com Foco Portuário e Corporativo",
      subtituloHero: "Conquiste seu diploma superior na maior instituição EAD parceira da Baixada. Especialistas em Gestão Portuária, Logística, Comércio Exterior, ADS e Aproveitamento de Curso Técnico em 1 ano.",
      cidadePadrao: "Guarujá / Santos e Baixada Santista - SP",
      destaquePolo: "Atendimento presencial e suporte local dedicado para Santos, Guarujá, São Vicente, Cubatão e Praia Grande."
    }
  }
};

// Tornar disponível globalmente no navegador
if (typeof window !== "undefined") {
  window.MODALIDADES = MODALIDADES;
  window.CURSOS_DATABASE = CURSOS_DATABASE;
  window.SIMULADOR_CONVALIDACAO = SIMULADOR_CONVALIDACAO;
  window.INSTITUCIONAL_CONFIG = INSTITUCIONAL_CONFIG;
}
