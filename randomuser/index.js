const rq	=require('electron-require');
const main	=rq.remote('./main.js');
const $		=require("jquery");
function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	    //console.log(data);
	    $("#txtNombre").html(data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last)
	    $("#imgFoto").attr("src",data.results[0].picture.large)
	    $("#gen").html("Genero: "+data.results[0].gender)
	    $("#dom").html("Domicilio: <br>"+"No y Calle "+data.results[0].location.street+"<br>"+
	    				"Ciudad "+data.results[0].location.city+"<br>"+
	    				"Estado "+data.results[0].location.state+"<br>"+
	    				"Codigo Postal "+data.results[0].location.postcode)
	    $("#email").html("Email "+data.results[0].email)
	    $("#login").html("User "+data.results[0].login.username+"<br>Contra "+
	    				data.results[0].login.password+"<br>Salt "+
	    				data.results[0].login.salt+"<br>Md5 "+
	    				data.results[0].login.md5+"<br>Sha1 "+
	    				data.results[0].login.sha1+"<br>Sha256 "+
	    				data.results[0].login.sha256)
	    $("#dob").html(data.results[0].dob)
	    $("#reg").html(data.results[0].registered)
	    $("#tel").html(data.results[0].phone)
	    $("#cel").html(data.results[0].cell)
	    $("#id").html(data.results[0].id.name+"<br>"+
	    			data.results[0].id.value)
	    $("#info").html(data.results[0].info.seed+"<br>"+
	    				data.results[0].info.results+"<br>"+
	    				data.results[0].info.page+"<br>"+
	    				data.results[0].info.version)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}
$("#btnInfo").on("click",datosRandom);
//alert("entro al index");