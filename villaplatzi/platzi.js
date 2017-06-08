document.addEventListener("keydown", teclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext('2d');

var cantidadVacas = aleatorio(0,9);
var cantidadPollos = aleatorio(4,15);

var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false,
	x: aleatorio(0,420),
	y: aleatorio(0,420)
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo() {
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas() {
	vaca.cargaOK = true;
	dibujar();
}

function cargarCerdo() {
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollos() {
	pollo.cargaOK = true;
	dibujar();
}

function dibujar() {
	if (fondo.cargaOK) {
		papel.drawImage(fondo.imagen, 0 , 0);
	}
	if (vaca.cargaOK) {
		for ( v = 0; v < cantidadVacas; v++) 
		{
			var x = aleatorio(0,7);
			var y = aleatorio(0,7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(vaca.imagen, x, y);
		}
	}
	if (pollo.cargaOK) {
		for ( v = 0; v < cantidadPollos; v++)
		{
			var x = aleatorio(0,7);
			var y = aleatorio(0,7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(pollo.imagen, x, y);
		}
	}
	if (cerdo.cargaOK) {
		papel.drawImage(cerdo.imagen,cerdo.x,cerdo.y)
	}
}

function teclado(evento) {
	var movimiento = 10;
	switch(evento.keyCode)
	{
		case teclas.UP:
		  cerdo.y = cerdo.y - movimiento;
		  dibujar();
		break;
		case teclas.DOWN:
		  cerdo.y = cerdo.y + movimiento;
		  dibujar();
		break;
		case teclas.LEFT:
		  cerdo.x = cerdo.x - movimiento;
		  dibujar();
		break;
		case teclas.RIGHT:
		  cerdo.x = cerdo.x + movimiento;
		  dibujar();
		break;
	}
}

function aleatorio (min, maxi) {
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}