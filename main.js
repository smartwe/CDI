const {app, ipcMain, dialog, Notification, Tray, session, Menu, webContents} = require('electron')
const path = require('path')
const {BrowserWindow} = require('electron-acrylic-window')
const {autoUpdater} = require("electron-updater")




function createWindow () {  
  let win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true
      
    },
    icon: path.join(__dirname, 'cdi.ico')
  })
  win.setMenu(null);

  
  win.loadURL('https://learning.chungdahm.com/')
  
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // macOS에서는 사용자가 명확하게 Cmd + Q를 누르기 전까지는
  // 애플리케이션이나 메뉴 바가 활성화된 상태로 머물러 있는 것이 일반적입니다.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOS에서는 dock 아이콘이 클릭되고 다른 윈도우가 열려있지 않았다면
  // 앱에서 새로운 창을 다시 여는 것이 일반적입니다.
  if (win === null) {
    createWindow()
  }
})
