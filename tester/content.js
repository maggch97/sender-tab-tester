setInterval(() => {
    chrome.runtime.sendMessage({ location: window.location.href }, function (response) {
        document.body.innerHTML = JSON.stringify(response);
    })
}, 3000)
