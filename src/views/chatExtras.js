import { data } from '../data/dataset.js';
import { renderCharactersPreview } from '../lib/view.js';

function addMessage(message, user, messagesContainer) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(user);
    messageElement.innerHTML = message;

    messagesContainer.appendChild(messageElement);
    //messagesContainer.scrollTo(0, messagesContainer.scrollHeigth); //que nos envíe hasta abajo de todo
}

function sendMessage(message) {
        const context = "interactua como si fueras la protagonista de mulan";
        const response = fetch("/api/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message, context })
        });
        let data = response.json();
        addMessage(data.reply, 'bot');
}

const renderChar = (dataset, elementDOM) => {
    elementDOM.innerHTML = "";
    elementDOM.appendChild(renderCharactersPreview(dataset));
  };

export const textchat = () => {
    console.log("Cargando funciones del chat.js");

    const dataChar = document.querySelector("#personajes");
    renderChar(data, dataChar);

    const messagesContainer = document.querySelector("#messages");
    const messageForm = document.querySelector("#message-form");
    const messageInput = document.querySelector("#message-input");
    
    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let message = messageInput.value.trim(); //eliminar espacios en blanco, para evitar que se cobren los caracteres o solo provoque error
        if (!message) return; //si el mensaje esta vacío, no hagas nada; aqui finaliza el código, si no, ejecuta lo siguiente:
        addMessage(message, "user", messagesContainer);
        messageInput.value = ""; //limpiar la caja de texto cada que se envía
        sendMessage(message);
    })

}