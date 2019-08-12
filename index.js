const {app, BrowserWindow } = require('electron')

let window

const createWindow = () => {

    window = new BrowserWindow ({width: 800, height : 600})
    window.loadURL(`file://${__dirname}/index.html`)

} 

app.on('ready',createWindow)