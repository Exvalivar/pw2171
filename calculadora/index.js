//Agrega al código (un enlace) al main.js
const rq=require('electron-require');
const main=rq.remote('./main.js');
var botonesNumero=["btn00","btn01","btn02","btn03","btn04",
					"btn05","btn06","btn07","btn08","btn09"]
var botonesOp=["btnSumar","btnRestar","btnMultiplicar","btnDividir"]

function numeros(){
	alert(this.value);
	alert(this.id);
}

function operadores(){

}

function igual(){

}

function borrar(){

}

//Asignación de eventos a los botones número
for(var i=0;i<botonesNumero.length;i++){
	document.getElementByID(botonesNumero[i]).addEventListener('click',numeros);
}

for(var i=0;i<botonesOp.length;i++){
	document.getElementByID(botonesOp[i]).addEventListener('click',operadores);
}

document.getElementByID("btnIgual").addEventListener('click',igual);

document.getElementByID("btnCE").addEventListener('click',borrar);