const rq	=require('electron-require');
const main	=rq.remote('./main.js');
const $		=require("jquery");

var buscarPersonaje = function(){
	var personaje = $("#txtPersonaje").val();
	var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	var cantidadComics = 0
	var cadenaComics = ""
	if(personaje == ""){
		alert("ingrese personaje porfa plis")
		$("#txtPersonaje").focus();
		return//ya no continua después del if, se sale de la función
	}
	url = url+personaje;
	$.ajax({
		dataType: "json",
		url: url,
		success:function(response){//data es la respuesta json
			if(response.code=200){//ok.cat
				$("#imgFoto").show("slow");
				$("#imgFoto").attr("src",response.data.results[0].thumbnail.path+"."+
										response.data.results[0].thumbnail.extension);
				$("#txtNom").html(response.data.results[0].name);
				$("#txtDes").html("<br>");
				if(response.data.results[0].description!=""){
					$("#txtDes").html("<b>Descripción: </b>"+response.data.results[0].description);
				}
				cantidadComics=response.data.results[0].comics.returned;
				for(var i=0;i<cantidadComics;i++){
					cadenaComics+=response.data.results[0].comics.items[i].name+"<br>"
				}
				$("#txtComics").html("<b>Comics: </b>"+cadenaComics)
			}
		}
	})
}

$("#txtPersonaje").focus(); //darle el foco a la wea de texto
//evento de botón click
$("#btn").on("click",buscarPersonaje);