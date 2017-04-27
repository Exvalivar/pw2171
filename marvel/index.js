const rq	=require('electron-require');
const main	=rq.remote('./main.js');
const $		=require("jquery");

var buscarPersonaje = function(){

}

$("#txtPersonaje").focus(); //darle el foco a la wea de texto
//evento de botón click
$("btn").on("click",buscarPersonaje);