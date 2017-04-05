// const app = require('electron').app
// const BrowserWindow = require('electron').BrowserWindow
const {app, BrowserWindow} = require('electron')
const path=require('path') //ruta de nuestro proyecto
const url=require('url') //ruta en formato url
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal= new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal=null
	})
	PantallaPrincipal.loadURL('http://platzi.com')
	PantallaPrincipal.show()
}
//la aplicación ejecuta este evento cuando
//el archivo main.js se carga en memoria.
app.on('ready',muestraPantallaPrincipal)
