function crearMensaje(texto, tipo){
    const nuenvoElemento = document.createElement('div');
    nuenvoElemento.innerText = texto;
    nuenvoElemento.classList.add('alert', 'alert-' + tipo);
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuenvoElemento);
    setTimeout(function(){
        nuenvoElemento.remove();
    }, 3000);
}