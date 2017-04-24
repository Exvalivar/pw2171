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
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file', //le estamos diciendo que es un archivo de nosotros y respete las diagonales (?)
		slashes: true
	}))
	PantallaPrincipal.show()
}
//la aplicación ejecuta este evento cuando
//el archivo main.js se carga en memoria.
app.on('ready',muestraPantallaPrincipal)