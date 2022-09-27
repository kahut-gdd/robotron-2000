const controle = document.querySelectorAll("[data-controle]"); //buscamos todos os controles pelo "data attribute" para adicionar aquele evento.
const estatisticas = document.querySelectorAll("[data-estatistica]"); //buscamos todos os elementos que tem as estatísticas. console.log(estatisticas);
const pecas = { //aqui os valores a serem alterados a cada click.
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //o parentNode busca o elemento pai, aqui enviamos dois blocos de informação para a função manipula dados.
        atualizaEstatisticas(evento.target.dataset.peca); //aqui passa a peça.
    });
});

function manipulaDados(operacao, controle) { //função que controla dinamicamente e busca os elementos que estão sendo clicados acima, o controle é o elemento pai que está sendo clicado.
    const peca = controle.querySelector("[data-contador]"); //procurando a peça do data-contador apenas no controle.
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;    
    } else {
        peca.value = parseInt(peca.value) + 1;    
    }
}

function atualizaEstatisticas(peca) { //função que atualiza as estatísticas com os dados das peças a cada click.
    estatisticas.forEach( (elemento) => { //percorrendo todos os nomes em estatísticas quando clicado.
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]; //console.log(elemento.dataset.estatistica);
    })
}