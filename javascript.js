function informationLink() {
var informativo = document.getElementById("informativo");
informativo.style.display = "flex";
}
function resetPagina() {
location.reload();
}
setTimeout(function() {
    alert("Obrigado por acessar nosso site!")
}, 5000);