const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
//init win
let win;

function createWinodw(){
    //create browser window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/icon.png'});
    //load index
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //open dev tool
    //win.webContents.openDevTools();

    win.on('closed', ()=>{
        win = null;
    });
}

//create winow function
app.on('ready', createWinodw);

//quir when all win are closed

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});