let instanceUrlInput = document.getElementById("instanceUrlInput");
let loadButton = document.getElementById("loadButton");
let iframeElement = document.getElementById("iframeElement");

loadButton.addEventListener('click', loadInstance);

function loadInstance() {
    const instanceUrl = instanceUrlInput.value;
    if (instanceUrl) {
        iframeElement.src = instanceUrl;
    }
}

iframeElement.addEventListener('load', () => {
    const iframeDocument = iframeElement.contentWindow.document;
    iframeDocument.addEventListener('click', (e) => { console.log(e.srcElement.value || e.srcElement.innerHtml || e.srcElement.innerText); })
});

instanceUrlInput.value = "http://127.0.0.1:5500/app-one/index.html";
loadInstance();