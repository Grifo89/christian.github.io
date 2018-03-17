

// Añadiendo un cambiador de imagen
/* Añadiremos otra imagen a nuestro sitio usando la DOM API y agregando
un poco de código para cambiar entre imágenes al hacer click.
	1. buscar otra imagen del mismo tamaño
	2.guardar la image en la carpeta de imagen
	3.ranombra esta imagen
	4.analiza el siguiente código */
	
var miImage = document.querySelector('img');

miImage.onclick = function(){
	var miSrc = miImage.getAttribute('src');
	if(miSrc === '../images/test-image.png'){
		miImage.setAttribute('src','../images/android_robot.png')
	}else if(miSrc === '../images/android_robot.png'){
		miImage.setAttribute('src','../images/bmw-icon.png')
	}else if(miSrc === '../images/bmw-icon.png'){
		miImage.setAttribute('src','../images/shenlong.png')
	}else if(miSrc === '../images/shenlong.png'){
		miImage.setAttribute('src','../images/capitan-america.png')
	}else if(miSrc === '../images/capitan-america.png'){
		miImage.setAttribute('src','../images/fission.png')
	}else if(miSrc === '../images/fission.png'){
		miImage.setAttribute('src','../images/test-image.png')
	}
}


