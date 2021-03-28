var electron = require('electron')
var app = electron.app //引用app
var BrowserWindow = electron.BrowserWindow //窗口引用

var mainWindow = null   //声明要打开的主窗口
app.on('ready',()=>{
    mainWindow = new BrowserWindow(
        {
            width:300,
            height:300,
            webPreferences:{
                nodeIntegration:true,
                contextIsolation:false,
                enableRemoteModule:true
            }
        }
    )
    mainWindow.webContents.openDevTools()
    require('./main/menu.js')
    mainWindow.loadFile('demo2.html')
    mainWindow.on('closed',()=>{
        mainWindow = null
    })
})
// app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') app.quit()
// })

