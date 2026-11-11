# EduBrasil EAD

Portal Acadêmico Nacional de Captação e Apoio ao Aluno EAD.
Polo Parceiro Oficial **UniCV - Centro Universitário Cidade Verde**.

Credenciamento Institucional: **Portaria MEC nº 962** | **Nota Máxima 5 no MEC (Conceito EAD)**.

---

## 🚀 Tecnologias Utilizadas
- **HTML5 Semântico**
- **Tailwind CSS (via CDN)**
- **FontAwesome 6**
- **Vanilla JavaScript (ES6+)**

---

## 📁 Estrutura de Arquivos
- **`index.html`**: Interface acadêmica de alta conversão, topbar oficial com links para AVA/Portal do Aluno UniCV, Hero corporativo com efeito grid sutil, card de orientador 24h, simulador de convalidação técnica, vitrine de cursos e modal de secretaria digital.
- **`cursos.js`**: Base de dados estruturada (`dadosModalidades`) com as 5 modalidades (Técnico para Tecnólogo, Tecnólogos, Bacharelados/Licenciaturas, Segunda Graduação/R2 e Pós/MBA) e regras de aproveitamento de disciplinas (`mapaConvalidacao`).
- **`app.js`**: Regras de negócio, filtro reativo por modalidade e busca em tempo real, lógica do simulador de técnicos, personalização regional por query string (`?regiao=baixada`) e integração com WhatsApp via `wa.me`.

---

## 🔗 Ambientes Oficiais UniCV
- Portal do Aluno: https://portal.unicv.edu.br/
- Ambiente Virtual (AVA): https://ambientevirtual.unicv.edu.br/
- Consulta Pública e-MEC: https://emec.mec.gov.br/
