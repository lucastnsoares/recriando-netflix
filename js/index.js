var btnAssistir = document.getElementById("assistir");
var btnModalClose = document.getElementById("video-close");
var mdContainer = document.getElementsByClassName("modal-container")[0];
var containerPrincipal = document.querySelector('#container-principal');
var iframe = document.getElementById("iframe");
var btnMaisInfo = document.getElementById("mais-info");
var btnFechaMaisInfo = document.getElementById("modal2-fechar");
var containerMd2 = document.getElementById("modal2-container");

btnAssistir.addEventListener("click", abreModalVideo);
btnModalClose.addEventListener("click", fechaModalVideo);
btnMaisInfo.addEventListener("click", abreModalInfo);
btnFechaMaisInfo.addEventListener("click",fechaModalInfo);

function abreModalVideo(){
    containerPrincipal.classList.toggle("fade");
    mdContainer.style.display = "flex";
    iframe.src = "https://www.youtube.com/embed/iS5xXr-GOnM";
}

function fechaModalVideo(){
    containerPrincipal.classList.toggle("fade");
    mdContainer.style.display = "none";
    iframe.src = " ";
}

function abreModalInfo(){
    containerPrincipal.classList.toggle("fade");
    containerMd2.style.display = "flex";

}

function fechaModalInfo(){
    containerPrincipal.classList.toggle("fade");
    containerMd2.style.display = "none";
}







