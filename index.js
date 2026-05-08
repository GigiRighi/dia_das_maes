// Listas de conteúdo
const listaFrases = [
    "Réveillon com a família", "Festa com a mamis", "Vovó no chá de bebê da Heleninha",
    "Interlagos com a família", "Réveillon com a mamis", "Mamis dançando no baile de formatura com o Biel",
    "Mamãe e papai no nosso aniversário, prestes a comer pizza", "Eu e a mamis", 
    "Eu e a mamis na fonte", "Vovó no seu aniversário com o seu novo presentinho", 
    "Vovó e sua netinha com penteado pela primeira vez", "Aniversário do Lulu com a Heleninha de vestido rosinha", 
    "Viagem para Serra Negra", "Primeiro Réveillon da vovó com a netinha", 
    "Mamis pedindo pra tirar foto e não gostando de nenhuma", "Vovó e Heleninha se divertindo na piscina de bolinha", 
    "Vovó e Heleninha se divertindo na piscina de bolinha parte 2", "Eu e a mamis na Roda Gigante", 
    "Minha festa de um aninho com o Biel vida louca", "Família da mamãe"
];

const listaImagens = [
    "fotos/f1.JPG", "fotos/f2.JPG", "fotos/f3.JPG", "fotos/f4.JPG", "fotos/f5.jpg",
    "fotos/f6.jpg", "fotos/f7.jpg", "fotos/f8.jpg", "fotos/f9.jpg", "fotos/f10.jpg",
    "fotos/f11.jpg", "fotos/f12.jpg", "fotos/f13.JPG", "fotos/f14.jpg", "fotos/f15.jpg",
    "fotos/f16.jpg", "fotos/f17.jpg", "fotos/f18.jpg", "fotos/f19.jpg", "fotos/f20.jpg"
];

// Seleção de elementos do DOM
const fraseElement = document.getElementById('frase');
const imagemElement = document.getElementById('imagem');
const musica = document.getElementById('musicaFundo');
const btnMusica = document.getElementById('btnMusica');
const iconePlay = document.getElementById('icone-play');
const iconePause = document.getElementById('icone-pause');
const landingPage = document.getElementById('landing-page');

let indiceAtual = 0;
const totalFotos = listaFrases.length;

/**
 * FUNÇÃO DA LANDING PAGE
 * Chamada ao clicar no coração da página inicial
 */
function entrarNoSite() {
    // Esconde a tela de entrada com o efeito definido no CSS
    landingPage.classList.add('esconder-landing');
    
    // Inicia a música (os navegadores permitem o áudio após este clique)
    if (musica.paused) {
        toggleMusica();
    }
}

/**
 * FUNÇÃO PARA ATUALIZAR FOTO E FRASE
 */
function atualizarConteudo() {
    // Efeito de sumir
    imagemElement.style.opacity = 0;
    
    setTimeout(() => {
        fraseElement.textContent = listaFrases[indiceAtual];
        imagemElement.src = listaImagens[indiceAtual];
        // Efeito de aparecer
        imagemElement.style.opacity = 1;
    }, 200);
}

/**
 * FUNÇÃO PARA MUDAR PARA A PRÓXIMA FOTO
 */
function proximaFoto() {
    indiceAtual++;
    
    // Se chegar no fim da lista, volta para a primeira foto (índice 0)
    if (indiceAtual >= totalFotos) {
        indiceAtual = 0;
    }
    
    atualizarConteudo();
}

/**
 * FUNÇÃO DE CONTROLE DO PLAYER DE ÁUDIO
 */
function toggleMusica() {
    if (musica.paused) {
        musica.play().catch(e => console.log("Aguardando interação para tocar áudio."));
        btnMusica.classList.add('tocando');
        iconePlay.classList.add('escondido');
        iconePause.classList.remove('escondido');
    } else {
        musica.pause();
        btnMusica.classList.remove('tocando');
        iconePlay.classList.remove('escondido');
        iconePause.classList.add('escondido');
    }
}

// Inicializa a primeira imagem e frase assim que a página carregar
window.onload = atualizarConteudo;