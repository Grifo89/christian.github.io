// Un mesaje de bienvenida personalizado

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
	var miNombre = prompt('Por favor, ingresa tu nombre.');
	localStorage.setItem('nombre',miNombre);
	miTitulo.innerHTML = 'Tu eres el mejor!,' + miNombre;
}

if(!localStorage.getItem('nombre')){
	estableceNombreUsuario();
}else{
	var nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.innerHTML = 'Tu eres el mejor!' + nombreAlmacenado;
}

miBoton.onclick = function(){
	estableceNombreUsuario();
}