// Creating web socket connection in client side.
let ws = new WebSocket("ws://localhost:3000");

ws.onopen = function() {
    setTitle('Connected to Web Chating Client');
}

ws.onclose = function() {
    setTitle("Client connection Disconnected");
}

ws.onmessage = function(payload) {
    console.log(JSON.stringify(payload));
    printMessage(payload.data);
}

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

document.forms[0].onsubmit = function() {
    let input = document.getElementById("message");
    ws.send(input.value);
    input.value = '';
};

function printMessage(message) {
    let p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.message").appendChild(p);
}