/**
 * ============================================================================
 * PORTAL ACADÊMICO EAD - PARCEIRO OFICIAL UNICV
 * ARQUIVO: app.js
 * Regras de Negócio, Filtros Reativos, Simulador e Integração WhatsApp
 * ============================================================================
 */

(function () {
  "use strict";

  // Estado Central da Aplicação
  const state = {
    modalidadeAtiva: "tec-para-tecnologo",
    termoBusca: "",
    cursoSelecionado: null,
    isRegionalBaixada: false,
    dadosRegionais: null
  };

  /**
   * Utilitário: Escapa strings para inserção segura no HTML
   */
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * 1. PERSONALIZAÇÃO REGIONAL POR QUERY PARAMS (?regiao=baixada)
   * Analisa a URL e adapta dinamicamente as mensagens do portal
   */
  function aplicarPersonalizacaoRegional() {
    const urlParams = new URLSearchParams(window.location.search);
    const regiaoParam = (urlParams.get("regiao") || "").toLowerCase().trim();

    // Verifica se o parâmetro indica Baixada Santista
    const isBaixada = [
      "baixada",
      "baixada-santista",
      "santos",
      "guaruja",
      "guarujá",
      "saovicente",
      "sao-vicente",
      "cubatao",
      "praiagrande"
    ].includes(regiaoParam);

    state.isRegionalBaixada = isBaixada;
    state.dadosRegionais = isBaixada
      ? window.INSTITUCIONAL_CONFIG.regionalizacao.baixada
      : window.INSTITUCIONAL_CONFIG.regionalizacao.nacional;

    // Atualiza elementos da interface
    const heroTag = document.getElementById("hero-tag-regiao");
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const topbarBadge = document.getElementById("topbar-regiao-badge");
    const footerTexto = document.getElementById("footer-regiao-texto");
    const inputCidade = document.getElementById("form-cidade");

    if (heroTag) heroTag.textContent = state.dadosRegionais.tagRegiao;
    if (heroTitle) heroTitle.textContent = state.dadosRegionais.tituloHero;
    if (heroSubtitle) heroSubtitle.textContent = state.dadosRegionais.subtituloHero;
    if (topbarBadge) topbarBadge.textContent = isBaixada ? "Polo Baixada Santista" : "Atendimento Nacional";
    if (footerTexto) footerTexto.textContent = state.dadosRegionais.destaquePolo;

    // Pré-preenche o campo de cidade no formulário se for a região Baixada
    if (inputCidade && isBaixada) {
      inputCidade.value = state.dadosRegionais.cidadePadrao;
    }
  }

  /**
   * 2. RENDERIZAÇÃO DO CATÁLOGO DE CURSOS E FILTROS
   */
  function atualizarContadoresAbas() {
    Object.keys(window.MODALIDADES).forEach((key) => {
      const el = document.getElementById(`count-${key}`);
      if (el && window.CURSOS_DATABASE[key]) {
        el.textContent = window.CURSOS_DATABASE[key].length;
      }
    });
  }

  function atualizarBannerModalidade() {
    const banner = document.getElementById("banner-modalidade-ativa");
    if (!banner) return;

    const modalidade = window.MODALIDADES[state.modalidadeAtiva];
    if (!modalidade) return;

    banner.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${modalidade.badgeClass}">
            ${escapeHTML(modalidade.tag)}
          </span>
          <h3 class="text-base sm:text-lg font-bold text-slate-900">${escapeHTML(modalidade.nome)}</h3>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">${escapeHTML(modalidade.descricao)}</p>
      </div>
      <div class="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
        <span class="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Tempo Médio:</span>
        <span class="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">${escapeHTML(modalidade.tempoMedio)}</span>
      </div>
    `;
  }

  function atualizarVisualAbas() {
    const botoes = document.querySelectorAll(".tab-btn");
    botoes.forEach((btn) => {
      const id = btn.id.replace("tab-", "");
      if (id === state.modalidadeAtiva) {
        btn.className = "tab-btn px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-2 bg-emerald-700 text-white border-emerald-700 shadow-md";
        const badge = btn.querySelector("span:last-child");
        if (badge) badge.className = "text-xs bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded-full";
      } else {
        btn.className = "tab-btn px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-2 bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50";
        const badge = btn.querySelector("span:last-child");
        if (badge) badge.className = "text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full";
      }
    });
  }

  function filtrarCursos() {
    const listaCursos = window.CURSOS_DATABASE[state.modalidadeAtiva] || [];
    const termo = state.termoBusca.toLowerCase().trim();

    if (!termo) {
      return listaCursos;
    }

    return listaCursos.filter((curso) => {
      const nomeMatch = curso.nome.toLowerCase().includes(termo);
      const areaMatch = curso.area.toLowerCase().includes(termo);
      const descMatch = (curso.descricaoCurta || "").toLowerCase().includes(termo);
      const disciplinaMatch = curso.disciplinas.some((disc) =>
        disc.toLowerCase().includes(termo)
      );
      return nomeMatch || areaMatch || descMatch || disciplinaMatch;
    });
  }

  function renderizarCardsCursos() {
    const grid = document.getElementById("grid-cursos");
    const emptyState = document.getElementById("empty-state-cursos");
    if (!grid) return;

    const cursosFiltrados = filtrarCursos();

    if (cursosFiltrados.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    const modalidadeInfo = window.MODALIDADES[state.modalidadeAtiva];

    grid.innerHTML = cursosFiltrados
      .map((curso) => {
        // Exibe as 3 primeiras disciplinas no card
        const disciplinasPrev = curso.disciplinas.slice(0, 3);

        return `
          <div class="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            <!-- Topo do Card -->
            <div class="p-6">
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${modalidadeInfo ? modalidadeInfo.badgeClass : 'bg-slate-100 text-slate-700'}">
                  ${escapeHTML(curso.area)}
                </span>
                <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  ${escapeHTML(curso.duracao)}
                </span>
              </div>

              <h3 class="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                ${escapeHTML(curso.nome)}
              </h3>

              <p class="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                ${escapeHTML(curso.descricaoCurta)}
              </p>

              <!-- Grade Curricular Resumida -->
              <div class="mt-4 pt-4 border-t border-slate-100">
                <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Principais Disciplinas:</p>
                <ul class="space-y-1.5">
                  ${disciplinasPrev
                    .map(
                      (d) => `
                    <li class="text-xs text-slate-700 flex items-start gap-1.5">
                      <svg class="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      <span class="line-clamp-1">${escapeHTML(d)}</span>
                    </li>
                  `
                    )
                    .join("")}
                </ul>
              </div>
            </div>

            <!-- Rodapé do Card com CTA -->
            <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <div class="text-[11px] text-slate-500">
                <span>Carga: <strong>${escapeHTML(curso.cargaHoraria)}</strong></span>
              </div>
              <button 
                onclick="window.appPortal.abrirModalCurso('${escapeHTML(curso.id)}')" 
                class="px-4 py-2 text-xs font-bold text-white bg-slate-900 group-hover:bg-emerald-700 rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-1.5"
              >
                <span>Ver Grade & Matrícula</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

          </div>
        `;
      })
      .join("");
  }

  function selecionarModalidade(modalidadeId, rolarParaCatalogo = false) {
    if (!window.MODALIDADES[modalidadeId]) return;

    state.modalidadeAtiva = modalidadeId;
    atualizarVisualAbas();
    atualizarBannerModalidade();
    renderizarCardsCursos();

    if (rolarParaCatalogo) {
      const secaoCatalogo = document.getElementById("catalogo");
      if (secaoCatalogo) {
        secaoCatalogo.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  /**
   * 3. LÓGICA DO SIMULADOR DE CONVALIDAÇÃO DE TÉCNICOS
   */
  function initSimulador() {
    const select = document.getElementById("select-curso-tecnico");
    if (!select || !window.SIMULADOR_CONVALIDACAO) return;

    select.innerHTML = `
      <option value="">Selecione o seu Curso Técnico Concluído...</option>
      ${window.SIMULADOR_CONVALIDACAO.map(
        (item) => `<option value="${escapeHTML(item.tecnicoId)}">${escapeHTML(item.tecnicoNome)}</option>`
      ).join("")}
    `;

    select.addEventListener("change", function () {
      atualizarSimulador(this.value);
    });

    // Seleciona o primeiro por padrão para já demonstrar interatividade imediata
    if (window.SIMULADOR_CONVALIDACAO.length > 0) {
      select.value = window.SIMULADOR_CONVALIDACAO[0].tecnicoId;
      atualizarSimulador(window.SIMULADOR_CONVALIDACAO[0].tecnicoId);
    }
  }

  function atualizarSimulador(tecnicoId) {
    const container = document.getElementById("container-resultado-simulador");
    const contador = document.getElementById("contador-simulador");
    if (!container) return;

    if (!tecnicoId) {
      container.innerHTML = `
        <div class="text-center py-8 text-slate-400 text-sm">
          Selecione uma formação técnica acima para simular a convalidação de disciplinas.
        </div>
      `;
      if (contador) contador.textContent = "Aguardando seleção";
      return;
    }

    const item = window.SIMULADOR_CONVALIDACAO.find((i) => i.tecnicoId === tecnicoId);
    if (!item) return;

    if (contador) {
      contador.textContent = `${item.cursosElegiveis.length} formações superiores compatíveis`;
    }

    container.innerHTML = item.cursosElegiveis
      .map((elegivel) => {
        return `
          <div class="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-700 text-white">
                  ⚡ Aproveitamento Garantido
                </span>
                <span class="text-xs font-semibold text-slate-500">
                  Formação estimada em: <strong class="text-emerald-800">${escapeHTML(elegivel.duracaoEstimada)}</strong>
                </span>
              </div>
              <h4 class="text-base font-black text-slate-900">${escapeHTML(elegivel.nome)}</h4>
              <p class="text-xs text-slate-600">
                <strong>Equivalência Curricular:</strong> ${escapeHTML(elegivel.aproveitamentoMedio)}.
              </p>
              <p class="text-xs text-emerald-800 font-medium">
                💡 ${escapeHTML(elegivel.vantagem)}
              </p>
            </div>

            <div class="flex-shrink-0">
              <button 
                onclick="window.appPortal.abrirModalCurso('${escapeHTML(elegivel.cursoId)}')" 
                class="w-full md:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-700 hover:bg-emerald-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Aproveitar Meu Técnico</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  /**
   * 4. MODAL DE SECRETARIA DIGITAL E GRADE CURRICULAR
   */
  function abrirModalCurso(cursoId) {
    let curso = null;
    let modalidadeKey = "";

    // Procura o curso em todas as modalidades
    for (const [key, lista] of Object.entries(window.CURSOS_DATABASE)) {
      const match = lista.find((c) => c.id === cursoId);
      if (match) {
        curso = match;
        modalidadeKey = key;
        break;
      }
    }

    if (!curso) {
      console.warn("Curso não encontrado:", cursoId);
      return;
    }

    state.cursoSelecionado = curso;

    const modal = document.getElementById("modal-secretaria");
    const modalBadge = document.getElementById("modal-modalidade-badge");
    const modalNome = document.getElementById("modal-curso-nome");
    const modalDuracao = document.getElementById("modal-duracao");
    const modalCarga = document.getElementById("modal-carga-horaria");
    const modalArea = document.getElementById("modal-area");
    const modalDisciplinas = document.getElementById("modal-disciplinas-lista");

    const modalidadeInfo = window.MODALIDADES[modalidadeKey];

    if (modalBadge) {
      modalBadge.textContent = modalidadeInfo ? modalidadeInfo.tag : "EAD UniCV";
    }
    if (modalNome) modalNome.textContent = curso.nome;
    if (modalDuracao) modalDuracao.textContent = `⏱️ Duração: ${curso.duracao}`;
    if (modalCarga) modalCarga.textContent = `📚 Carga Horária: ${curso.cargaHoraria}`;
    if (modalArea) modalArea.textContent = curso.area;

    // Renderiza as 5 disciplinas obrigatórias da grade curricular
    if (modalDisciplinas) {
      modalDisciplinas.innerHTML = curso.disciplinas
        .map(
          (disc, idx) => `
          <div class="flex items-start gap-2 text-xs text-slate-800">
            <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
              ${idx + 1}
            </span>
            <span class="font-medium">${escapeHTML(disc)}</span>
          </div>
        `
        )
        .join("");
    }

    // Configura valor do campo de cidade se já definido por regionalização
    const inputCidade = document.getElementById("form-cidade");
    if (inputCidade && state.isRegionalBaixada && !inputCidade.value) {
      inputCidade.value = state.dadosRegionais.cidadePadrao;
    }

    // Exibe o modal
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Trava scroll da página
      setTimeout(() => {
        document.getElementById("form-nome")?.focus();
      }, 100);
    }
  }

  function abrirModalGenerico(assunto = "Orientações Acadêmicas") {
    state.cursoSelecionado = {
      id: "atendimento-geral",
      nome: assunto,
      modalidade: state.modalidadeAtiva,
      duracao: "Flexível",
      cargaHoraria: "Conforme o curso",
      area: "Atendimento Geral",
      disciplinas: [
        "Análise e aproveitamento gratuito de histórico escolar",
        "Apresentação da plataforma virtual AVA UniCV",
        "Tira-dúvidas de portarias e credenciamento MEC nº 962",
        "Condições de bolsas e descontos para matrículas abertas",
        "Orientações para colação de grau e emissão de diploma digital"
      ]
    };

    abrirModalCurso("atendimento-geral");
  }

  function fecharModal() {
    const modal = document.getElementById("modal-secretaria");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // Destrava scroll
    }
  }

  /**
   * 5. INTEGRAÇÃO COM WHATSAPP (API wa.me)
   * Captura os dados do formulário, valida e gera mensagem estruturada
   */
  function enviarInscricaoWhatsApp(event) {
    if (event) event.preventDefault();

    const nome = (document.getElementById("form-nome")?.value || "").trim();
    const whatsapp = (document.getElementById("form-whatsapp")?.value || "").trim();
    const cidade = (document.getElementById("form-cidade")?.value || "").trim();
    const formacao = (document.getElementById("form-formacao")?.value || "").trim();

    if (!nome || !whatsapp || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const curso = state.cursoSelecionado || {
      nome: "Curso EAD UniCV",
      modalidade: state.modalidadeAtiva,
      duracao: "Consultar",
      cargaHoraria: "Consultar"
    };

    const modalidadeInfo = window.MODALIDADES[curso.modalidade] || {
      nome: "Graduação / Pós-Graduação EAD"
    };

    const regiaoNome = state.isRegionalBaixada
      ? "Polo Baixada Santista (Santos / Guarujá e Região)"
      : "Atendimento Nacional UniCV";

    // Montagem da mensagem estruturada
    const mensagemLinhas = [
      "🎓 *SOLICITAÇÃO DE MATRÍCULA E GRADE CURRICULAR - UNICV EAD*",
      "--------------------------------------------------",
      `*Curso de Interesse:* ${curso.nome}`,
      `*Modalidade:* ${modalidadeInfo.nome}`,
      `*Duração Estimada:* ${curso.duracao}`,
      `*Carga Horária:* ${curso.cargaHoraria}`,
      "",
      "👤 *DADOS DO CANDIDATO:*",
      `• *Nome:* ${nome}`,
      `• *WhatsApp:* ${whatsapp}`,
      `• *Cidade / UF:* ${cidade}`,
      `• *Formação Atual:* ${formacao}`,
      `• *Canal:* ${regiaoNome}`,
      "--------------------------------------------------",
      "Olá Secretaria Acadêmica! Gostaria de receber a matriz curricular oficial, verificar as condições especiais de matrícula e o aproveitamento de disciplinas pela Portaria MEC nº 962."
    ];

    const textoCompleto = mensagemLinhas.join("\n");
    const textoCodificado = encodeURIComponent(textoCompleto);

    const numeroWhatsApp = window.INSTITUCIONAL_CONFIG.whatsappOficial || "5513997864321";
    const waUrl = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    // Fecha o modal e abre a conversa do WhatsApp em uma nova aba
    fecharModal();
    window.open(waUrl, "_blank");
  }

  /**
   * 6. MÁSCARA AUTOMÁTICA DE TELEFONE/WHATSAPP
   */
  function setupMascaraTelefone() {
    const input = document.getElementById("form-whatsapp");
    if (!input) return;

    input.addEventListener("input", function (e) {
      let x = e.target.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      if (!x[2]) {
        e.target.value = x[1] ? `(${x[1]}` : "";
      } else if (!x[3]) {
        e.target.value = `(${x[1]}) ${x[2]}`;
      } else {
        e.target.value = `(${x[1]}) ${x[2]}-${x[3]}`;
      }
    });
  }

  /**
   * 7. BUSCA EM TEMPO REAL
   */
  function setupBusca() {
    const inputBusca = document.getElementById("input-busca-curso");
    const btnLimpar = document.getElementById("btn-limpar-busca");
    if (!inputBusca) return;

    inputBusca.addEventListener("input", function () {
      state.termoBusca = this.value;
      if (btnLimpar) {
        if (state.termoBusca.length > 0) {
          btnLimpar.classList.remove("hidden");
        } else {
          btnLimpar.classList.add("hidden");
        }
      }
      renderizarCardsCursos();
    });

    if (btnLimpar) {
      btnLimpar.addEventListener("click", function () {
        limparBusca();
      });
    }
  }

  function limparBusca() {
    const inputBusca = document.getElementById("input-busca-curso");
    const btnLimpar = document.getElementById("btn-limpar-busca");
    if (inputBusca) inputBusca.value = "";
    if (btnLimpar) btnLimpar.classList.add("hidden");
    state.termoBusca = "";
    renderizarCardsCursos();
  }

  /**
   * 8. ATALHOS DE TECLADO (ESC fecha modal)
   */
  function setupTeclado() {
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        fecharModal();
      }
    });
  }

  /**
   * 9. INICIALIZAÇÃO DA APLICAÇÃO
   */
  function init() {
    aplicarPersonalizacaoRegional();
    atualizarContadoresAbas();
    atualizarVisualAbas();
    atualizarBannerModalidade();
    renderizarCardsCursos();
    initSimulador();
    setupBusca();
    setupMascaraTelefone();
    setupTeclado();
  }

  // Inicializa quando o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Exporta a interface pública para o escopo global
  window.appPortal = {
    selecionarModalidade,
    abrirModalCurso,
    abrirModalGenerico,
    fecharModal,
    enviarInscricaoWhatsApp,
    limparBusca
  };
})();
