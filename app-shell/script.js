let instanceUrlInput = document.getElementById("instanceUrlInput");
let loadButton = document.getElementById("loadButton");
let iframeElement = document.getElementById("iframeElement");

loadButton.addEventListener('click', loadInstance);

function loadInstance(){
    const instanceUrl = instanceUrlInput.value;
    if(instanceUrl){
        iframeElement.src = instanceUrl;
    }
}

instanceUrlInput.value = "http://localhost:8080/"