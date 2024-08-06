const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "1- qual a importancia da prevenção ambiental?
    ",
        alternativas: [
            {
                texto: "a- causar impactos negativos na natureza",
                afirmacao: "Há não, ouve alteração do clima negativamente. "
            },
            {
                texto: "b- preservar os recursos narurais para futuras gerações",
                afirmacao: "Isso mesmo! Preservar a natureza melhora a qualidade de vida. "
            }
        ]
    },
    {
        enunciado: "2-quai são algumas práticas de prevenção ambiental?",
        alternativas: [
            {
                texto: "RESPOSTA a- reciclar materiais e reduzir o consumo de plásticos",
                afirmacao: "Parabens! Recursos naturais bem geridos podem sustentar economias locais e globais a longo prazo."
            },
            {
                texto: "b- descartar lixo em locais inadquados",
                afirmacao: "Essa não, ouve perda e biodiversidade e desequilíbrio nos ecosistemas."
            }
        ]
    },
    {
        enunciado:  "3-o que podemos fazer para contribuir com a prevenção ambiental?",
        alternativas: [
            {
                texto: "a- ignorar os problemas ambientais ",
                afirmacao: "Ocorreu contaminção de ar, água e solo, afetando a saúde de seres vivos."
            },
            {
                texto: "b- plantar árvores e participar de ações de limpeza ",
                afirmacao: "Isso mesmo, A conservação de florestas e outros ecossistemas ajudam a regular o clima."
            }
        ]
    },
      
];