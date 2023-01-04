// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron')
const path = require('path')

function loadBackend() {
    var { exec } = require('child_process');
    var executablePath = path.join(__dirname, process.platform === 'win32' ? 'backend/crud.exe' : 'backend/crud');
    exec(executablePath, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data.toString());
    });
};

contextBridge.exposeInMainWorld('loadBackend', loadBackend)
