/**
 * ============================================================================
 * PORTAL NACIONAL EDUBRASIL EAD - PARCEIRO OFICIAL UNICV
 * ARQUIVO: app.js
 * Lógica de Negócio, Filtros Reativos, Simulador e Integração WhatsApp
 * ============================================================================
 */

// Configuração do WhatsApp Oficial da Secretaria Acadêmica
const WHATSAPP_NUMERO = "5513999999999";

(function () {
  "use strict";

  // Estado Central da Aplicação
  const state = {
    modalidadeAtiva: "tec-para-tecnologo",
    termoBusca: "",
    cursoSelecionado: null,
    isRegionalBaixada: false
  };

  /**
   * Utilitário: Escapa texto para inserção segura no DOM
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
   */
  function aplicarPersonalizacaoRegional() {
    const urlParams = new URLSearchParams(window.location.search);
    const regiaoParam = (urlParams.get("regiao") || "").toLowerCase().trim();

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

    const heroBadge = document.getElementById("hero-badge");
    const topbarRegiao = document.getElementById("topbar-regiao");
    const footerRegiao = document.getElementById("footer-regiao-texto");
    const inputCidade = document.getElementById("form-cidade");

    if (isBaixada) {
      if (heroBadge) {
        heroBadge.innerHTML = `<i class="fa-solid fa-map-location-dot text-emerald-400 mr-1.5"></i> Polo Autorizado Baixada Santista • Santos, Guarujá e Região`;
      }
      if (topbarRegiao) {
        topbarRegiao.innerHTML = `<i class="fa-solid fa-location-dot text-[10px] text-emerald-400 mr-1"></i> Polo Baixada Santista`;
      }
      if (footerRegiao) {
        footerRegiao.innerHTML = `<i class="fa-solid fa-map-pin mr-1 text-emerald-400"></i> Polo de Apoio Autorizado: Atendimento exclusivo em Santos, Guarujá, Cubatão e Região.`;
      }
      if (inputCidade && !inputCidade.value) {
        inputCidade.value = "Guarujá / Santos e Baixada Santista - SP";
      }
    } else {
      if (heroBadge) {
        heroBadge.innerHTML = `<i class="fa-solid fa-bullhorn text-emerald-400 mr-1.5"></i> Polo Oficial UniCV • Atendimento Universitário em Todo o Brasil`;
      }
      if (topbarRegiao) {
        topbarRegiao.innerHTML = `<i class="fa-solid fa-location-dot text-[10px] text-emerald-400 mr-1"></i> Atendimento Nacional`;
      }
      if (footerRegiao) {
        footerRegiao.innerHTML = `<i class="fa-solid fa-map-pin mr-1 text-emerald-400"></i> Atendimento e polos parceiros em todo o território nacional.`;
      }
    }
  }

  /**
   * 2. RENDERIZAÇÃO DO CATÁLOGO DE CURSOS E ABAS
   */
  function atualizarContadoresAbas() {
    if (!window.dadosModalidades) return;
    Object.keys(window.dadosModalidades).forEach((key) => {
      const el = document.getElementById(`count-${key}`);
      const mod = window.dadosModalidades[key];
      if (el && mod && mod.cursos) {
        el.textContent = mod.cursos.length;
      }
    });
  }

  function atualizarBoxModalidade() {
    const box = document.getElementById("box-modalidade");
    if (!box || !window.dadosModalidades) return;

    const modalidade = window.dadosModalidades[state.modalidadeAtiva];
    if (!modalidade) return;

    box.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-black border ${modalidade.badgeClass}">
            ${escapeHTML(modalidade.tag)}
          </span>
          <h3 class="text-base sm:text-lg font-black text-slate-900">${escapeHTML(modalidade.nome)}</h3>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">${escapeHTML(modalidade.descricao)}</p>
      </div>
      <div class="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
        <span class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Tempo Médio:</span>
        <span class="text-sm font-black text-brand-green bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">${escapeHTML(modalidade.tempoMedio)}</span>
      </div>
    `;
  }

  function atualizarVisualAbas() {
    const botoes = document.querySelectorAll(".tab-btn");
    botoes.forEach((btn) => {
      const id = btn.id.replace("tab-", "");
      if (id === state.modalidadeAtiva) {
        btn.className = "tab-btn px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-2 bg-brand-green text-white border-brand-green shadow-md";
        const badge = btn.querySelector("span:last-child");
        if (badge) badge.className = "text-xs bg-emerald-900 text-emerald-100 px-2 py-0.5 rounded-full";
      } else {
        btn.className = "tab-btn px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-2 bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50";
        const badge = btn.querySelector("span:last-child");
        if (badge) badge.className = "text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full";
      }
    });
  }

  function filtrarCursos() {
    if (!window.dadosModalidades) return [];
    const mod = window.dadosModalidades[state.modalidadeAtiva];
    const listaCursos = mod ? mod.cursos : [];
    const termo = state.termoBusca.toLowerCase().trim();

    if (!termo) return listaCursos;

    return listaCursos.filter((curso) => {
      const nomeMatch = curso.nome.toLowerCase().includes(termo);
      const areaMatch = curso.area.toLowerCase().includes(termo);
      const descMatch = (curso.descricaoCurta || "").toLowerCase().includes(termo);
      const disciplinaMatch = (curso.disciplinas || []).some((d) =>
        d.toLowerCase().includes(termo)
      );
      return nomeMatch || areaMatch || descMatch || disciplinaMatch;
    });
  }

  function renderizarCursos() {
    const grid = document.getElementById("grid-cursos");
    const emptyState = document.getElementById("empty-state");
    if (!grid) return;

    const cursosFiltrados = filtrarCursos();

    if (cursosFiltrados.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    const modalidadeInfo = window.dadosModalidades[state.modalidadeAtiva];

    grid.innerHTML = cursosFiltrados
      .map((curso) => {
        const top3Disciplinas = (curso.disciplinas || []).slice(0, 3);

        return `
          <div class="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            <!-- Conteúdo Superior do Card -->
            <div class="p-6">
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="inline-block text-[11px] font-black px-2.5 py-0.5 rounded-full border ${modalidadeInfo ? modalidadeInfo.badgeClass : 'bg-slate-100 text-slate-700'}">
                  ${escapeHTML(curso.area)}
                </span>
                <span class="text-xs font-extrabold text-brand-green bg-emerald-50 px-2 py-0.5 rounded-md">
                  <i class="fa-regular fa-clock mr-1 text-[11px]"></i>${escapeHTML(curso.duracao)}
                </span>
              </div>

              <h3 class="text-lg font-black text-slate-900 group-hover:text-brand-green transition-colors leading-snug">
                ${escapeHTML(curso.nome)}
              </h3>

              <p class="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                ${escapeHTML(curso.descricaoCurta)}
              </p>

              <!-- Grade Curricular Prévia (Top 3) -->
              <div class="mt-4 pt-4 border-t border-slate-100">
                <p class="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">Principais Disciplinas:</p>
                <ul class="space-y-1.5">
                  ${top3Disciplinas
                    .map(
                      (d) => `
                    <li class="text-xs text-slate-700 flex items-start gap-1.5">
                      <i class="fa-solid fa-check text-emerald-600 mt-1 text-[11px] flex-shrink-0"></i>
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
                onclick="window.appPortal.abrirModal('${escapeHTML(curso.id)}')" 
                class="px-4 py-2 text-xs font-bold text-white bg-slate-900 group-hover:bg-brand-green rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-1.5"
              >
                <span>Ver Grade & Matrícula</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>

          </div>
        `;
      })
      .join("");
  }

  function selecionarModalidade(modalidadeId, rolarParaCatalogo = false) {
    if (!window.dadosModalidades || !window.dadosModalidades[modalidadeId]) return;

    state.modalidadeAtiva = modalidadeId;
    atualizarVisualAbas();
    atualizarBoxModalidade();
    renderizarCursos();

    if (rolarParaCatalogo) {
      const secaoCursos = document.getElementById("cursos");
      if (secaoCursos) {
        secaoCursos.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  /**
   * 3. LÓGICA DO SIMULADOR DE CONVALIDAÇÃO DE TÉCNICOS
   */
  function inicializarSimulador() {
    const select = document.getElementById("select-tecnico");
    if (!select || !window.mapaConvalidacao) return;

    select.innerHTML = `
      <option value="">Selecione o seu Curso Técnico Concluído...</option>
      ${window.mapaConvalidacao.map(
        (item) => `<option value="${escapeHTML(item.tecnico)}">${escapeHTML(item.tecnico)}</option>`
      ).join("")}
    `;

    select.addEventListener("change", function () {
      atualizarSimulador(this.value);
    });

    // Inicia com o primeiro curso técnico para exibição imediata
    if (window.mapaConvalidacao.length > 0) {
      select.value = window.mapaConvalidacao[0].tecnico;
      atualizarSimulador(window.mapaConvalidacao[0].tecnico);
    }
  }

  function atualizarSimulador(tecnicoNome) {
    const container = document.getElementById("resultado-simulador");
    const contador = document.getElementById("contador-simulador");
    if (!container) return;

    if (!tecnicoNome) {
      container.innerHTML = `
        <div class="text-center py-8 text-slate-400 text-sm">
          Selecione uma formação técnica acima para simular a convalidação de disciplinas.
        </div>
      `;
      if (contador) contador.textContent = "Aguardando seleção";
      return;
    }

    const item = window.mapaConvalidacao.find((i) => i.tecnico === tecnicoNome);
    if (!item) return;

    if (contador) {
      contador.textContent = `${item.tecnologosCompativeis.length} formações superiores compatíveis`;
    }

    container.innerHTML = item.tecnologosCompativeis
      .map((elegivel) => `
        <div class="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-black bg-brand-green text-white">
                <i class="fa-solid fa-bolt mr-1 text-[10px]"></i> Aproveitamento Garantido
              </span>
              <span class="text-xs font-semibold text-slate-600">
                Conclusão estimada em: <strong class="text-brand-green">${escapeHTML(elegivel.duracao)}</strong>
              </span>
            </div>
            <h4 class="text-base font-black text-slate-900">${escapeHTML(elegivel.nome)}</h4>
            <p class="text-xs text-slate-600">
              <strong>Equivalência Curricular:</strong> ${escapeHTML(elegivel.materiasEliminadas)}.
            </p>
            <p class="text-xs text-brand-green font-semibold">
              <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> ${escapeHTML(elegivel.vantagem)}
            </p>
          </div>

          <div class="flex-shrink-0">
            <button 
              onclick="window.appPortal.abrirModal('${escapeHTML(elegivel.cursoId)}')" 
              class="w-full md:w-auto px-5 py-2.5 rounded-xl font-black text-xs text-white bg-brand-green hover:bg-brand-greenDark shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Aproveitar Meu Técnico</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      `)
      .join("");
  }

  /**
   * 4. MODAL DE SECRETARIA DIGITAL E GRADE CURRICULAR
   */
  function abrirModal(cursoId) {
    let curso = null;
    let modalidadeKey = "";

    // Procura o curso em todas as modalidades
    if (window.dadosModalidades) {
      for (const [key, mod] of Object.entries(window.dadosModalidades)) {
        const match = (mod.cursos || []).find((c) => c.id === cursoId);
        if (match) {
          curso = match;
          modalidadeKey = key;
          break;
        }
      }
    }

    if (!curso) {
      console.warn("Curso não encontrado:", cursoId);
      return;
    }

    state.cursoSelecionado = { ...curso, modalidadeKey };

    const modal = document.getElementById("modal-inscricao");
    const modalBadge = document.getElementById("modal-modalidade");
    const modalNome = document.getElementById("modal-curso-nome");
    const modalDuracao = document.getElementById("modal-duracao");
    const modalCarga = document.getElementById("modal-carga");
    const modalArea = document.getElementById("modal-area");
    const modalDisciplinas = document.getElementById("modal-disciplinas");

    const modalidadeInfo = window.dadosModalidades[modalidadeKey];

    if (modalBadge) {
      modalBadge.textContent = modalidadeInfo ? modalidadeInfo.tag : "EAD UniCV";
    }
    if (modalNome) modalNome.textContent = curso.nome;
    if (modalDuracao) modalDuracao.innerHTML = `<i class="fa-regular fa-clock mr-1 text-emerald-400"></i> Duração: ${escapeHTML(curso.duracao)}`;
    if (modalCarga) modalCarga.innerHTML = `<i class="fa-solid fa-book-open mr-1 text-emerald-400"></i> Carga: ${escapeHTML(curso.cargaHoraria)}`;
    if (modalArea) modalArea.textContent = curso.area;

    // Renderiza a lista das 5 disciplinas
    if (modalDisciplinas) {
      modalDisciplinas.innerHTML = (curso.disciplinas || [])
        .map(
          (disc, idx) => `
          <div class="flex items-start gap-2 text-xs text-slate-800">
            <span class="w-4 h-4 rounded-full bg-emerald-100 text-brand-green font-black flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
              ${idx + 1}
            </span>
            <span class="font-medium">${escapeHTML(disc)}</span>
          </div>
        `
        )
        .join("");
    }

    // Pré-preenche Cidade com foco na Baixada Santista se o parâmetro regional estiver ativo
    const inputCidade = document.getElementById("form-cidade");
    if (inputCidade && state.isRegionalBaixada && !inputCidade.value) {
      inputCidade.value = "Guarujá / Santos e Baixada Santista - SP";
    }

    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      setTimeout(() => document.getElementById("form-nome")?.focus(), 100);
    }
  }

  function abrirModalComAssunto(assunto = "Orientações Acadêmicas") {
    state.cursoSelecionado = {
      id: "atendimento-geral",
      nome: assunto,
      modalidadeKey: state.modalidadeAtiva,
      duracao: "Flexível",
      cargaHoraria: "Conforme o curso",
      area: "Secretaria Acadêmica",
      disciplinas: [
        "Análise e aproveitamento gratuito de histórico escolar",
        "Apresentação da plataforma virtual AVA UniCV",
        "Credenciamento MEC Portaria nº 962 e Nota Máxima 5",
        "Condições de bolsas e valores promocionais de matrícula",
        "Orientações para colação de grau e emissão de diploma digital"
      ]
    };

    abrirModal("atendimento-geral");
  }

  function fecharModal() {
    const modal = document.getElementById("modal-inscricao");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  /**
   * 5. INTEGRAÇÃO COM WHATSAPP (API wa.me)
   */
  function enviarWhatsApp(event) {
    if (event) event.preventDefault();

    const nome = (document.getElementById("form-nome")?.value || "").trim();
    const whatsapp = (document.getElementById("form-whatsapp")?.value || "").trim();
    const cidade = (document.getElementById("form-cidade")?.value || "").trim();
    const formacao = (document.getElementById("form-formacao")?.value || "").trim();

    if (!nome || !whatsapp || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, WhatsApp e Cidade).");
      return;
    }

    const curso = state.cursoSelecionado || {
      nome: "Curso EAD UniCV",
      modalidadeKey: state.modalidadeAtiva,
      duracao: "A consultar",
      cargaHoraria: "A consultar"
    };

    const modalidadeInfo = window.dadosModalidades
      ? window.dadosModalidades[curso.modalidadeKey]
      : null;
    const modalidadeNome = modalidadeInfo ? modalidadeInfo.nome : "Graduação EAD";

    const regiaoOrigem = state.isRegionalBaixada
      ? "Polo Baixada Santista (Santos / Guarujá e Região)"
      : "Atendimento Nacional EduBrasil EAD";

    // Formatação profissional e estruturada da mensagem
    const mensagemTexto = [
      "🎓 *SOLICITAÇÃO DE MATRÍCULA E GRADE CURRICULAR*",
      "--------------------------------------------------",
      `*Portal:* EduBrasil EAD (Polo Parceiro Oficial UniCV)`,
      `*Credenciamento:* Portaria MEC nº 962 (Nota 5)`,
      `*Curso de Interesse:* ${curso.nome}`,
      `*Modalidade:* ${modalidadeNome}`,
      `*Duração Estimada:* ${curso.duracao}`,
      `*Carga Horária:* ${curso.cargaHoraria}`,
      "",
      "👤 *DADOS DO CANDIDATO:*",
      `• *Nome Completo:* ${nome}`,
      `• *WhatsApp:* ${whatsapp}`,
      `• *Cidade / UF:* ${cidade}`,
      `• *Formação Atual:* ${formacao}`,
      `• *Canal de Origem:* ${regiaoOrigem}`,
      "--------------------------------------------------",
      "Olá! Gostaria de receber a matriz curricular oficial, consultar os valores promocionais e verificar as opções de aproveitamento de disciplinas pela Portaria MEC nº 962."
    ].join("\n");

    const textoCodificado = encodeURIComponent(mensagemTexto);
    const urlWa = `https://wa.me/${WHATSAPP_NUMERO}?text=${textoCodificado}`;

    fecharModal();
    window.open(urlWa, "_blank");
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
    const inputBusca = document.getElementById("input-busca");
    const btnLimpar = document.getElementById("btn-limpar-busca");
    if (!inputBusca) return;

    inputBusca.addEventListener("input", function () {
      state.termoBusca = this.value;
      if (btnLimpar) {
        btnLimpar.classList.toggle("hidden", state.termoBusca.length === 0);
      }
      renderizarCursos();
    });

    btnLimpar?.addEventListener("click", limparBusca);
  }

  function limparBusca() {
    const inputBusca = document.getElementById("input-busca");
    const btnLimpar = document.getElementById("btn-limpar-busca");
    if (inputBusca) inputBusca.value = "";
    if (btnLimpar) btnLimpar.classList.add("hidden");
    state.termoBusca = "";
    renderizarCursos();
  }

  /**
   * 8. ATALHOS DE TECLADO (ESC fecha modal)
   */
  function setupTeclado() {
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") fecharModal();
    });
  }

  /**
   * 9. INICIALIZAÇÃO
   */
  function init() {
    aplicarPersonalizacaoRegional();
    atualizarContadoresAbas();
    atualizarVisualAbas();
    atualizarBoxModalidade();
    renderizarCursos();
    inicializarSimulador();
    setupBusca();
    setupMascaraTelefone();
    setupTeclado();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Exporta interface pública para cliques no HTML
  window.appPortal = {
    selecionarModalidade,
    abrirModal,
    abrirModalComAssunto,
    fecharModal,
    enviarWhatsApp,
    limparBusca
  };
})();
