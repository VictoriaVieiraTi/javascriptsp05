//Exemplo de animação com o Java Script 

function movimentoAnimacao(){
const elemento = document.querySelector(".animacao");
let id = null;
let posicao = 0;

clearInterval(id);

id = setInterval(quadro, 10);

function quadro(){
    if (posicao == 300){
        clearInterval(id);
    }else {
            posicao++;
            elemento.style.top = posicao + "px";
            elemento.style.left = posicao + "px";
        
        
        }
    } 

    
}

elementoBotao.addEventListener("click",movimentoAnimacao);


