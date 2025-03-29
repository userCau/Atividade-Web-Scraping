//Atividade: Obter informações ou mudar o estilo de uma página escolhida.
//Site: https://fatecrl.edu.br
//Apenas alterei a header da pagina e deixei a logo da Fatec Preta.
 
function mudarheader(){
    document.querySelector('.menu-link--vestibular').style.backgroundColor = "#2f2f22";
    document.querySelector('.header').style.background = "#777676";
    document.querySelector('.mainBar-menu').style.background = "#777676";
    document.querySelector('.auxiliaryBar').style.background = "#636060";
    document.querySelector(".header-logo").style.filter = "brightness(0)";
}
