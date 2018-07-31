const WebSocketServer   = require("ws").Server;
const wss = new WebSocketServer({port: 3000});

wss.on("connection", (ws) => {
    ws.send("Welcome to Web Chat!!!");

    ws.on("message", (message) => {
        if (message === 'exit') {
            ws.close();
        } else {
            wss.clients.forEach((client) => {
                client.send(message);
            });
        }
    });
});