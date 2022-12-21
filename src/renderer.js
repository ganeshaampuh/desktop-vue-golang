// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

window.loadBackend()

function loadApi() {
    const url = "http://localhost:4000/"
    fetch(url).then(response => response.json()).then(function (response) {
        console.log(response)
    })
}

loadApi()
