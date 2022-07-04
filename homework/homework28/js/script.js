
'use strict'
const SOCKET_URL = 'wss://fep-app.herokuapp.com';
let socket;
const btn = document.getElementById('sendBtn');
const nameEl = document.getElementById('name');
const messageEl = document.getElementById('message');
btn.addEventListener('click', () => {
    console.log('click');
    sendMessage();
    messageEl.value = "";

});
initConnection();

function initConnection() {
    socket = new WebSocket(SOCKET_URL);
    socket.onopen = () => {
        console.log('Connection established');

    };
    socket.onmessage = onMessage;
   
    socket.onclose = () => {
        initConnection();

    };
    socket.onerror = (event) => {
        console.log('error', event);
    };
}

function onMessage({data}) {
   
     const {
         payload: {author, message},

     } = JSON.parse(data);
    
document.body.insertAdjacentHTML(
    'beforeEnd',
    `<div>${author}: ${message}</div>`);

}

function sendMessage() {
    const mes = {
        action: 'message',
        payload: {
            author: nameEl.value,
            message: messageEl.value,
        },
    };
    socket.send(JSON.stringify(mes));
}
