function muestra_oculta(id){
if (document.getElementById){
var division = document.getElementById(id);
division.style.display = (division.style.display == 'none') ? 'block' : 'none'; 
}
}

window.onload = function(){
muestra_oculta('menu-movil-desplegado');
}