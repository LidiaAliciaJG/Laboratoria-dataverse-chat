import { renderCharacterInfo } from '../lib/view.js';

const keySaved = localStorage.getItem("key");
console.log("key guardada:" + keySaved);

function saveHistory(content, role) {
    const elementHistory = `{ role: "${role}", content: "${content}" },`
    const messageHistory = JSON.parse(localStorage.getItem("history")) || [];
    messageHistory.push(elementHistory);
    localStorage.setItem("history", JSON.stringify(messageHistory));
    console.log(messageHistory);
}

function typingStatus(elementDOM,status,props) {
    elementDOM.innerHTML = `
    <img src="${props.maincharacter.imageURL}" alt=${props.maincharacter.name}">
    <div>
    <h5>${props.maincharacter.name}</h5>
    <h6>${status}</h6>
    </div>`;   
}

function addMessage(message, user, messagesContainer) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(user);
    messageElement.innerHTML = message;

    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTo(0, messagesContainer.scrollHeight); //envía la visualización hasta abajo de todo, como whatsapp

    saveHistory(message, user)
}

function sendMessage(message, props) {

    const history = JSON.parse(localStorage.getItem("history")) || [];

    const character = props.maincharacter.name;
    const movie = props.name;
    console.log(character, movie);

    const response = fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${keySaved}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "temperature": 0.7, //nivel de creatividad 0 a 1
            "max_tokens": 100,
            "messages": [{
                "role": "assistant",
                "content": `Eres ${character} de la película ${movie}. Aquí tu conversación previa con el usuario: ${history}`,
            },
            {
                "role": "user",
                "content": `${message}`,
            }]
        })
    });

    return response;
}

const renderChar = (dataset, elementDOM) => {
    elementDOM.innerHTML = "";
    elementDOM.appendChild(renderCharacterInfo(dataset));
};

const renderError = (messageError, elementDOM) => {
    elementDOM.innerHTML = "";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "<strong>Error - </strong>" + messageError;
    elementDOM.appendChild(paragraph);
};

export const contentChar = (props) => {
    console.log("Cargando funciones de personaje.js");
    console.log(props);

    //const propsInfo = data.find(item => item.id=props);
    //console.log(propsInfo);

    const head_title = document.querySelector("title");
    head_title.textContent = "PELiSINFO | Personaje";

    const dataChar = document.querySelector("#personaje");
    renderChar(props, dataChar);

    const messagesContainer = document.querySelector("#messages");
    const messageForm = document.querySelector("#message-form");
    const messageInput = document.querySelector("#message-input");
    const errorContainer = document.querySelector("#errores");

    const char_statusContainer = document.querySelector("#character-status");
    typingStatus(char_statusContainer,"en línea",props);

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = messageInput.value.trim(); //eliminar espacios en blanco
        if (!message) return; //si el mensaje esta vacío
        addMessage(message, "user", messagesContainer);
        messageInput.value = ""; //limpiar la caja de texto cada que se envía

        typingStatus(char_statusContainer,"escribiendo...",props);

            sendMessage(message, props).then((response) => {
                response.json().then((response2) => {
                    console.log(response2);
                    if (response2.error) {
                        const messageError = response2.error.message;
                        renderError(messageError, errorContainer);
                    } else {
                        const messageResponse = response2.choices[0].message.content;
                        addMessage(messageResponse, "assistant", messagesContainer);
                    }
                })
                typingStatus(char_statusContainer,"en línea",props);
            })
    })
}