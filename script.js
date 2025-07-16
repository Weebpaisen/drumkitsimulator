'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

let criardiv = (texto) => {
    let div = document.createElement('div'); //Cria um elemento, nesse caso, uma div
    div.classList.add('key'); //Adiciona a classe key à div
    div.textContent = texto; //Define o texto dentro da div
    div.id = texto; //Define o id da div 
    document.getElementById('container').appendChild(div); //Adiciona a div ao container no html
}

let exibir = (sons) => {
    Object.keys(sons).forEach(criardiv); //Para cada tecla do objeto sons, chama a função criardiv
}

let tocarsom = (letra) => {
    let audio = new Audio(`./sounds/${sons[letra]}`); //Cria um novo objeto Audio com o caminho do som correspondente à 
    audio.play();
    }

let adicionarefeito = (letra) => {
    document.getElementById(letra).classList.add('active'); //Adiciona a classe active ao elemento com o id correspondente à letra
    }

let removerefeito = (letra) => {
    let div = document.getElementById(letra)
    let removeActive = () => div.classList.remove('active'); //Remove a classe active do elemento com id correspondente à letra
    div.addEventListener('transitionend',removeActive);
    }
    
let ativardiv = (evento) => {
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    let letrapermitida = sons.hasOwnProperty(letra); //Verifica se a letra existe no objeto sons ao ser clicado e ser alvo da ação acima, para caso não clique nas letras, não haja erros
    if (letrapermitida) {
        adicionarefeito(letra)
        tocarsom(letra);
        removerefeito(letra);
    }
    
}

exibir(sons); 

document.getElementById('container').addEventListener('click', ativardiv);

window.addEventListener('keydown',ativardiv);