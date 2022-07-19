
window.onscroll = function () { fixarCabecalhoTop() };

var cabecalho = document.getElementById("navSitePrincipal");
var sticky = cabecalho.offsetTop;
function fixarCabecalhoTop() {

  singlePagePost();
  if (window.pageYOffset > sticky) {
    cabecalho.classList.add("nav-site-principal-top");
  } else {
    cabecalho.classList.remove("nav-site-principal-top");

  }
}

function singlePagePost() {
  if (typeof headerSinglePage != 'undefined' ) {
    if (window.pageYOffset > sticky) {
      cabecalho.classList.remove("single-page-post");
    } else {
      cabecalho.classList.add("single-page-post");
    }
  }
}