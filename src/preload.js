// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron')

function loadBackend() {
    var { exec } = require('child_process');
    const path = require('path')
    exec(path.join(__dirname, 'backend/crud'), function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data.toString());
    });
};

contextBridge.exposeInMainWorld('loadBackend', loadBackend)
