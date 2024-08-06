const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual a importancia da prevenção ambiental?
    ",
        alternativas: [
            {
                texto: "Causar impactos negativos na natureza",
                afirmacao: "Há não, ouve alteração do clima negativamente. "
            },
            {
                texto: " Preservar os recursos narurais para futuras gerações",
                afirmacao: "Isso mesmo! Preservar a natureza melhora a qualidade de vida. "
            }
        ]
    },
    {
        enunciado: "Quai são algumas práticas de prevenção ambiental?",
        alternativas: [
            {
                texto: "Reciclar materiais e reduzir o consumo de plásticos",
                afirmacao: "Parabens! Recursos naturais bem geridos podem sustentar economias locais e globais a longo prazo."
            },
            {
                texto: "Descartar lixo em locais inadquados",
                afirmacao: "Essa não, ouve perda e biodiversidade e desequilíbrio nos ecosistemas."
            }
        ]
    },
    {
        enunciado:  "O que podemos fazer para contribuir com a prevenção ambiental?",
        alternativas: [
            {
                texto: "Ignorar os problemas ambientais ",
                afirmacao: "Ocorreu contaminção de ar, água e solo, afetando a saúde de seres vivos."
            },
            {
                texto: "Plantar árvores e participar de ações de limpeza ",
                afirmacao: "Isso mesmo, A conservação de florestas e outros ecossistemas ajudam a regular o clima."
            }
        ]
    },
      ];
script.js 







let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();
