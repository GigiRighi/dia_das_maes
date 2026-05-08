const listaFrases = [
    "Réveillon com a família",
    "Festa com a mamis",
    "Vovó no chá de bebê da Heleninha",
    "Interlagos com a família",
    "Réveillon com a mamis",
    "Mamis dançando no baile de formatura com o Biel",
    "Mamãe e papai no nosso aniversário, prestes a comer pizza",
    "Eu e a mamis", 
    "Eu e a mamis na fonte",
    "Vovó no seu aniversário com o seu novo presentinho",
    "Vovó e sua netinha com penteado pela primeira vez",
    "Aniversário do Lulu com a Heleninha de vestido rosinha",
    "Viagem para Serra Negra",
    "Primeiro Réveillon da vovó com a netinha",
    "Mamis pedindo pra tirar foto e não gostando de nenhuma",
    "Vovó e Heleninha se divertindo na piscina de bolinha",
    "Vovó e Heleninha se divertindo na piscina de bolinha parte 2",
    "Eu e a mamis na Roda Gigante",
    "Minha festa de um aninho com o Biel vida louca", 
    "Família da mamãe"
];

const listaImagens = [
    "fotos/f1.jpg", "fotos/f2.JPG", "fotos/f3.JPG", "fotos/f4.JPG", "fotos/f5.jpg",
    "fotos/f6.jpg", "fotos/f7.jpg", "fotos/f8.jpg", "fotos/f9.jpg", "fotos/f10.jpg",
    "fotos/f11.jpg", "fotos/f12.jpg", "fotos/f13.JPG", "fotos/f14.jpg", "fotos/f15.jpg",
    "fotos/f16.jpg", "fotos/f17.jpg", "fotos/f18.jpg", "fotos/f19.jpg", "fotos/f20.jpg"
];

const fraseElement = document.getElementById('frase');
const imagemElement = document.getElementById('imagem');

let indiceAtual = 0;
const totalFotos = listaFrases.length;

// Função para atualizar a tela
function atualizarConteudo() {
    // Adiciona uma pequena animação de sumir e aparecer
    imagemElement.style.opacity = 0;
    
    setTimeout(() => {
        fraseElement.textContent = listaFrases[indiceAtual];
        imagemElement.src = listaImagens[indiceAtual];
        imagemElement.style.opacity = 1;
    }, 200);
}

// Inicia o primeiro conteúdo
atualizarConteudo();

function proximaFoto() {
    indiceAtual++;
    
    // Se chegar no fim, volta para o zero
    if (indiceAtual >= totalFotos) {
        indiceAtual = 0;
    }
    
    atualizarConteudo();
}

// Estilo extra via JS para o efeito de fade suave
imagemElement.style.transition = "opacity 0.4s ease";
