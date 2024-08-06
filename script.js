const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: " qual a importancia da prevenção ambiental?
    ",
        alternativas: [
            {
                texto: "a- causar impactos negativos na natureza",
                afirmacao: "AFIRMATIVA DA RESPOSTA 1r. "
            },
            {
                texto: "b- preservar os recursos narurais para futuras gerações",
                afirmacao: "AFIRMATIVA RESPOSTA 2."
            }
        ]
    },
    {
        enunciado: "quai são algumas práticas de prevenção ambiental?",
        alternativas: [
            {
                texto: "RESPOSTA a- reciclar materiais e reduzir o consumo de plásticos",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "b- descartar lixo em locais inadquados",
                afirmacao: "AFIRMATIVA RESPOSTA 2"
            }
        ]
    },
    {
        enunciado: "o que podemos fazer para contribuir com a prevenção ambiental?",
        alternativas: [
            {
                texto: "a- ignorar os problemas ambientais ",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "b- plantar árvores e participar de ações de limpeza ",
                afirmacao: "AFIRMATIVA RESPOSTA 2."
            }
        ]
    },
      
];