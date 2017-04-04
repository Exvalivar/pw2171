var operador=""; //variable global

function borrar(){
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}

function operadores(op){
	operador=op;
}

function numeros(num){
	//alert(num);
	if(operador == ""){//Escribir en operando 1
		var valorInicial = document.calculadora.operando1.value;
		if(valorInicial=="0"){
			document.calculadora.operando1.value = "";
		}
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	}
	else{//Escribir en operando 1
		var valorInicial = document.calculadora.operando2.value;
		if(valorInicial=="0"){
			document.calculadora.operando2.value = "";
		}
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	}
}

function igual(){
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;
	document.calculadora.resultado.value=eval(valor1+operador+valor2);
}