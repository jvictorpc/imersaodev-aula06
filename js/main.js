const tabelaJogadores = document.querySelector('#tabelaJogadores');
const btnVitoria = document.querySelector('.btn-vitoria');
const btnEmpate = document.querySelector('.btn-empate');
const btnDerrota = document.querySelector('.btn-derrota');

const jogador = { nome: "", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }

let jogadores = [];

const calculaPontos = (jogadorDaVez, tdPontos) => {
    jogadorDaVez.pontos += (3 * jogadorDaVez.vitorias) + jogadorDaVez.empates - jogadorDaVez.derrotas;
    tdPontos.innerHTML += jogadorDaVez.pontos;

    for (let i = 0; i < jogadores.length; i++){
        jogadores[i].pontos = (3 * jogadores[i].vitorias) + jogadores[i].empates - jogadores[i].derrotas;
    }

    tabelaJogadores.innerHTML = "";

    for (let i = 0; i < jogadores.length; i++){
        montaElementoJogador(jogadores[i]);
    }
}

const atribuiVitorias = (jogadorDaVez, tdVitorias) => {
    jogadorDaVez.vitorias += 1;
    tdVitorias.innerHTML = jogadorDaVez.vitorias;

    for (let i = 0; i < jogadores.length; i++){
        if(jogadorDaVez.nome == jogadores[i].nome){
            continue;
        }
        jogadores[i].derrotas += 1;
    }

    tabelaJogadores.innerHTML = "";
    
    for(let i = 0; i < jogadores.length; i++){
        montaElementoJogador(jogadores[i]);
    }
    
}

const atribuiDerrotas = ( jogadorDaVez, tdDerrotas) => {
    jogadorDaVez.derrotas += 1;
    tdDerrotas.innerHTML = jogadorDaVez.derrotas;

    for (let i = 0; i < jogadores.length; i++){
        if(jogadorDaVez.nome == jogadores[i].nome){
            continue;
        }
        jogadores[i].vitorias += 1;
    }

    tabelaJogadores.innerHTML = "";
    
    for(let i = 0; i < jogadores.length; i++){
        montaElementoJogador(jogadores[i]);
    }
}

const atribuiEmpates = (jogadorDaVez, tdEmpates)=> {
    
    jogadorDaVez.empates += 1;
    tdEmpates.innerHTML = jogadorDaVez.empates;

    for (let i = 0; i < jogadores.length; i++){
        if(jogadorDaVez.nome == jogadores[i].nome){
            continue;
        }
        jogadores[i].empates += 1;
    }

    tabelaJogadores.innerHTML = "";
    
    for(let i = 0; i < jogadores.length; i++){
        montaElementoJogador(jogadores[i]);
    }
} 

const montaElementoJogador = (jogadorDaVez) => {

    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    tdNome.innerHTML = jogadorDaVez.nome;
    const tdVitorias = document.createElement("td");
    tdVitorias.innerHTML = jogadorDaVez.vitorias;
    const tdEmpates = document.createElement("td");
    tdEmpates.innerHTML = jogadorDaVez.empates;
    const tdDerrotas = document.createElement("td");
    tdDerrotas.innerHTML = jogadorDaVez.derrotas;
    const tdPontos = document.createElement("td");
    tdPontos.innerHTML = jogadorDaVez.pontos;

    const tdAcoesVitoria = document.createElement("td");
    const btnVitoria = document.createElement("button");
    btnVitoria.type = "submit";
    btnVitoria.classList.add("btn-vitoria");
    btnVitoria.innerText = "Vitória";
    tdAcoesVitoria.insertAdjacentElement("beforeend", btnVitoria);
    btnVitoria.addEventListener("click", (event) => {
        event.preventDefault();
        atribuiVitorias(jogadorDaVez, tdVitorias);
        calculaPontos(jogadorDaVez, tdPontos);

    })

    const tdAcoesDerrota = document.createElement("td");
    const btnDerrota = document.createElement("button");
    btnDerrota.type = "submit";
    btnDerrota.classList.add("btn-derrota");
    btnDerrota.innerText = "Derrota"
    tdAcoesDerrota.insertAdjacentElement("beforeend", btnDerrota);
    btnDerrota.addEventListener("click", (event) => {
        event.preventDefault();
        atribuiDerrotas(jogadorDaVez,tdDerrotas);
        calculaPontos(jogadorDaVez, tdPontos);
    })

    const tdAcoesEmpate = document.createElement("td");
    const btnEmpate = document.createElement("button");
    btnEmpate.type = "submit";
    btnEmpate.classList.add("btn-empate");
    btnEmpate.innerText = "Empate";
    tdAcoesEmpate.insertAdjacentElement("beforeend", btnEmpate);
    btnEmpate.addEventListener("click", (event) => {
        event.preventDefault();
        atribuiEmpates(jogadorDaVez,tdEmpates);
        calculaPontos(jogadorDaVez, tdPontos);
    })

    tr.insertAdjacentElement("beforeend", tdNome);
    tr.insertAdjacentElement("beforeend", tdVitorias);
    tr.insertAdjacentElement("beforeend", tdEmpates);
    tr.insertAdjacentElement("beforeend", tdDerrotas);
    tr.insertAdjacentElement("beforeend", tdPontos);
    tr.insertAdjacentElement("beforeend", tdAcoesVitoria);
    tr.insertAdjacentElement("beforeend", tdAcoesEmpate);
    tr.insertAdjacentElement("beforeend", tdAcoesDerrota);

    tabelaJogadores.insertAdjacentElement("beforeend", tr);
}



jogadores[0] = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

jogadores[1] = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

jogadores[2] = {
    nome: "Ashe",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

montaElementoJogador(jogadores[0]);
montaElementoJogador(jogadores[1]);
montaElementoJogador(jogadores[2]);