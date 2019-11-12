// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, ipcMain, dialog} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 450,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('web/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null

    stopServer()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const { spawn } = require('child_process')

let server = null
let inGame = false

const menu = Menu.buildFromTemplate([
  {
    label: 'Server',
    submenu: [
      { label: 'Server Status...', id: 'server-status', enabled: false, click: serverStatus },
      { type: 'separator' },
      { label: 'Start Server...', id: 'start-server', click: () => mainWindow.loadFile('web/start.html') },
      { label: 'Stop Server', id: 'stop-server', enabled: false, click: stopServer }
    ]
  },
  {
    label: 'Game',
    submenu: [
      { label: 'Join Game...', id: 'join-game', click: () => mainWindow.loadFile('web/join.html') },
      { label: 'Leave Game', id: 'leave-game', enabled: false, click: leaveGame }
    ]
  },
  {
    label: 'Debug',
    submenu: [
      { role: 'toggledevtools' },
      { label: 'test', click: test }
    ]
  }
])

const startServerMenu = menu.getMenuItemById('start-server')
const stopServerMenu = menu.getMenuItemById('stop-server')
const serverStatusMenu = menu.getMenuItemById('server-status')
const joinGameMenu = menu.getMenuItemById('join-game')
const leaveGameMenu = menu.getMenuItemById('leave-game')

function serverStatus() {
  let msg = ''
  for (let k of Object.keys(server.options)) {
    msg += k + ' : ' + server.options[k] + '\n'
  }
  dialog.showMessageBox(mainWindow, {
    title: 'Server Status',
    message: 'Local Server',
    detail: msg,
    buttons: ['Stop Server', 'OK']
  }).then(r => {
    if (r.response == 0) {
      stopServer()
    }
  })
}

function startServer(options) {
  if (!server) {
    startServerMenu.enabled = false
    stopServerMenu.enabled = true
    serverStatusMenu.enabled = true
    let process = spawn('java', [
      '-jar',
      'server/server.jar',
      ...options.startWebServer ? ['client'] : []
    ])
    process.stdout.on('data', d => {
      if (!server.started) {
        server.started = true
        if (options.join) {
          joinGame()
        } else {
          mainWindow.loadFile('web/index.html')
          serverStatus()
        }
      }
      console.log('[stdout] ' + d)
    })
    process.stderr.on('data', d => console.log('[stderr] ' + d))
    process.on('error', er => console.log('[error] ' + er))
    process.on('exit', (code, signal) => {
      removeServer()
      console.log('[exit] code=' + code + ',signal=' + signal)
    })
    server = {
      process,
      started: false,
      options
    }
  }
}

function stopServer() {
  if (server) {
    server.process.kill()
  }
}

function removeServer() {
  server = null
  if (!inGame) {
    startServerMenu.enabled = true
  }
  stopServerMenu.enabled = false
  serverStatusMenu.enabled = false
}

function createGame() {
  if (server) {
    serverStatus()
  } else {
    mainWindow.loadFile('web/start.html')
  }
}

function joinGame(host) {
  if (!inGame) {
    inGame = true
    joinGameMenu.enabled = false
    leaveGameMenu.enabled = true
    startServerMenu.enabled = false
    mainWindow.loadFile('client/index.html', host ? { query: { wshost: host } } : undefined)
  }
}

function leaveGame() {
  if (inGame) {
    inGame = false
    joinGameMenu.enabled = true
    leaveGameMenu.enabled = false
    startServerMenu.enabled = server == null
    mainWindow.loadFile('web/index.html')
  }
}

function test() {
  dialog.showMessageBox(mainWindow, {
    title: 'My Dialog',
    message: 'Hello world!',
    detail: 'Hello XJTU!',
    buttons: ['OK']
  })
}

Menu.setApplicationMenu(menu)
ipcMain.on('start-server', (e, a) => startServer(a))
ipcMain.on('stop-server', stopServer)
ipcMain.on('create-game', createGame)
ipcMain.on('join-game', (e, a) => joinGame(a))
ipcMain.on('exit', () => mainWindow.close())
ipcMain.handle('server-status', () => {
  return server ? server.options : null
})
