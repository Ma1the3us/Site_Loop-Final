

function toggleCard(card) {
    card.classList.toggle('expanded');
  }
 
  var header=document.getElementById('header');
  var nav =document.getElementById('navegacao');
  var showSideBar=false;
  
 function togglesidebar() {
    showSideBar = !showSideBar;

    if (showSideBar) {
        navegacao.style.marginLeft = '-300vw'; // Esconde a barra de navegação
    } else {
        navegacao.style.marginLeft = '-65vw'; // Mostra a barra de navegação
    }
    // Remover efeito quando a tela for maior que 768px
window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
        navegacao.style.marginLeft = '20%'; // Garante que a barra fique visível
        showSideBar = false; // Reseta o estado da variável
    }
});

if(window.innerWidth<1024){
  var links = navegacao.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', function () {
        navegacao.style.marginLeft = '-300vw'; // Esconde a barra de navegação
        showSideBar = false; // Reseta o estado da variável
    });
});
}
}



 
function alternarModo() {
    // Verifica se o modo escuro está ativo
    const isModoEscuro = document.body.style.backgroundColor === "rgb(50, 54, 171)"; 

    // Aplica os estilos para o modo claro e escuro
    const modo = isModoEscuro ? {
        bgCor: "#b2caec",
        textoCor: "black",
        footerBgCor: "#82aee3",
        navBgCor: "#7792ff",
        linkCor: "black",
        linkHoverCor: "#ff6600",
        h1Cor: "black",
        displayClaro: "block",
        displayColorButton: "none",
        botaoBarrinha2Cor: "black" // Cor do botão no modo claro
    } : {
        bgCor: "#3236ab",
        textoCor: "white",
        footerBgCor: "black",
        navBgCor: "black",
        linkCor: "white",
        linkHoverCor: "#ff6600",
        h1Cor: "orange",
        displayClaro: "none",
        displayColorButton: "block",
        botaoBarrinha2Cor: "white" // Cor do botão no modo escuro
    };

    // Aplica as cores e estilos de acordo com o modo
    document.body.style.backgroundColor = modo.bgCor;
    document.body.style.color = modo.textoCor;
    document.getElementById('textoSobreNos').style.color = modo.textoCor;
    document.getElementById('textoLocalização1').style.color = modo.textoCor;
    document.getElementById('textoCliente').style.color = modo.textoCor;
    document.getElementById('textoCliente2').style.color = modo.textoCor;
    document.getElementById('textoCliente3').style.color = modo.textoCor;
    document.getElementById('textoCliente4').style.color = modo.textoCor;
    document.getElementById("textoEspecialidadesTecnologicas").style.color = modo.textoCor;
    document.getElementById("textoEspecialidadesTecnologicas2").style.color = modo.textoCor;
    document.getElementById("textoEspecialidadesTecnologicas3").style.color = modo.textoCor;
    document.getElementById("TextoConvitetrocacor").style.color = modo.textoCor;
    document.getElementById("conteudo_footer").style.backgroundColor = modo.footerBgCor;
    document.getElementById('coluna1').style.color = modo.textoCor;
    document.getElementById('navegacao').style.backgroundColor = modo.navBgCor;

    // Atualiza a cor do botão botao_barrinha2
    const botaoBarrinha2 = document.getElementById("botao_barrinha2");
    if (botaoBarrinha2) {
        botaoBarrinha2.style.color = modo.botaoBarrinha2Cor;
    }

    // Estilos de links e h1
    document.querySelectorAll("#conteudo_footer a").forEach(link => link.style.color = modo.linkCor);
    document.querySelectorAll("h1").forEach(elemento => elemento.style.color = modo.h1Cor);
    document.querySelectorAll("#header a").forEach(link => link.style.color = modo.linkCor);

    // Alterna visibilidade dos botões
    document.getElementById("colorButton").style.display = modo.displayColorButton;

    // Adiciona eventos de hover para links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = modo.linkHoverCor;
            link.style.textDecoration = "underline";
        });

        link.addEventListener("mouseout", function () {
            link.style.color = modo.linkCor;
            link.style.textDecoration = "none";
        });
    });
}


window.onscroll = function() {
  let botao = document.getElementById("botaoTopo");
  if (document.documentElement.scrollTop > 200) {
      botao.style.opacity = "1";
      botao.style.transform = "translateY(0)";
  } else {
      botao.style.opacity = "0";
      botao.style.transform = "translateY(20px)";
  }
};


function voltarAoTopo() {
  let posicaoAtual = document.documentElement.scrollTop;
  let tempo = 500; 
  let inicio = null;

  function animarRolagem(timestamp) {
      if (!inicio) inicio = timestamp;
      let progresso = timestamp - inicio;
      let percorrido = progresso / tempo;

      
      document.documentElement.scrollTop = posicaoAtual * (1 - percorrido);

      if (progresso < tempo) {
          requestAnimationFrame(animarRolagem);
      } else {
          document.documentElement.scrollTop = 0; 
      }
  }

  requestAnimationFrame(animarRolagem);
}



  



  
