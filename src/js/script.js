

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



 
  function ModoEScuro(){
    document.body.style.backgroundColor = "#3236ab"; 
    document.getElementById('textoSobreNos').style.color="white";
    document.getElementById('textoLocalização1').style.color="white";
    document.getElementById('textoCliente').style.color="white";
    document.getElementById('textoCliente2').style.color="white";
    document.getElementById('textoCliente3').style.color="white";
    document.getElementById('textoCliente4').style.color="white";
    document.getElementById("textoEspecialidadesTecnologicas").style.color = "white"; 
    document.getElementById("textoEspecialidadesTecnologicas2").style.color = "white";
    document.getElementById("textoEspecialidadesTecnologicas3").style.color = "white"; 
    document.getElementById("TextoConvitetrocacor").style.color = "white";
    document.getElementById("conteudo_footer").style.backgroundColor="black" 
    document.getElementById('coluna1').style.color='white';
    document.querySelectorAll("#conteudo_footer a").forEach(link => {
      link.style.color = "white"; 
  });
    document.querySelectorAll("h1").forEach(elemento => {
      elemento.style.color = "orange";
    });

      document.querySelectorAll("#header a").forEach(link => {
        link.style.color = "white"; 
    });
    document.getElementById("claro").style.display = "none";
    document.getElementById("colorButton").style.display = "block";
   
    document.getElementById('navegacao').style.backgroundColor="black";    
    document.querySelector('a').style.hover="#ff6600";
    document.querySelectorAll("a").forEach(link => {
     
        link.addEventListener("mouseover", function () {
            link.style.color = "#ff6600"; 
            link.style.textDecoration = "underline"; 
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "white"; 
            link.style.textDecoration = "none"; 
        });
    });
  }
  
  function ModoClaro(){
    document.body.style.backgroundColor = "#b2caec"; 
    document.getElementById('textoSobreNos').style.color="black";
    document.getElementById('textoLocalização1').style.color="black";
    document.getElementById('textoCliente').style.color="black";
    document.getElementById('textoCliente2').style.color="black";
    document.getElementById('textoCliente3').style.color="black";
    document.getElementById('textoCliente4').style.color="black";
    document.getElementById("textoEspecialidadesTecnologicas").style.color = "black"; 
    document.getElementById("textoEspecialidadesTecnologicas2").style.color = "black"; 
    document.getElementById("textoEspecialidadesTecnologicas3").style.color = "black"; 
    document.getElementById("TextoConvitetrocacor").style.color = "black";
    document.getElementById("conteudo_footer").style.backgroundColor="#82aee3" 
    document.getElementById('coluna1').style.color='black';
    document.querySelectorAll("#conteudo_footer a").forEach(link => {
      link.style.color = "black"; 
  });
    document.querySelectorAll("h1").forEach(elemento => {
      elemento.style.color = "black";
    });

      document.querySelectorAll("#header a").forEach(link => {
        link.style.color = "black"; 
    });
    document.getElementById("claro").style.display = "block";
   
    document.getElementById("colorButton").style.display = "none";
    document.getElementById('navegacao').style.backgroundColor="#7792ff";
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("mouseover", function () {
          link.style.color = "#ff6600"; 
          link.style.textDecoration = "underline"; 
      });

      link.addEventListener("mouseout", function () {
          link.style.color = "black"; 
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



  



  
