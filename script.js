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

let ativardiv = (evento) => {
    let letra = evento.target.id; //Pega o id do elemento clicado, que seria uma das letras do drumkit
    tocarsom(letra);
}

exibir(sons); 

document.getElementById('container').addEventListener('click', ativardiv);