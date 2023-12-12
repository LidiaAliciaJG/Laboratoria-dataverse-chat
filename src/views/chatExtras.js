//require('dotenv').config();
import { data } from '../data/dataset.js';
import { renderCharactersPreview } from '../lib/view.js';

//const apiKey = process.env.OPENAI_API_KEY;
const keySaved = localStorage.getItem("key");
console.log("key guardada:" + keySaved);

function saveHistory(content, role) {
  const elementHistory = `{ role: "${role}", content: "${content}" },`
  const messageHistory = JSON.parse(localStorage.getItem("history")) || [];
  messageHistory.push(elementHistory);
  localStorage.setItem("history", JSON.stringify(messageHistory));
}

function typingStatus(elementDOM, status, props) {
  //<img src="${props.maincharacter.imageURL}" alt=${props.maincharacter.name}">
  if (status === "none") {
    elementDOM.innerHTML = "";
  } else {
    elementDOM.innerHTML = `<h6>${status}</h6>`;
  }
}

function addMessage(message, user, messagesContainer, characterName) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(user);
  //messageElement.innerHTML = message;
  if (user==="assistant") {
    messageElement.innerHTML = `${characterName}: ${message}`;
  } else {
    messageElement.innerHTML = message;
  }
  

  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight); //envía la visualización hasta abajo de todo, como whatsapp

  saveHistory(message, user)
}

function sendMessage(message, element) {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const character = element.maincharacter.name;
  const movie = element.name; //documentacion api, obtener id //
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
  elementDOM.appendChild(renderCharactersPreview(dataset));
};

const renderError = (messageError, elementDOM) => {
  elementDOM.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "<strong>Error - </strong>" + messageError;
  elementDOM.appendChild(paragraph);
};

export const textchat = () => {
  console.log("Cargando funciones del chat.js");

  const head_title = document.querySelector("title");
  head_title.textContent = "PELiSINFO | Chat grupal";

  const dataChar = document.querySelector("#personajes");
  renderChar(data, dataChar);

  const messagesContainer = document.querySelector("#messages");
  const messageForm = document.querySelector("#message-form");
  const messageInput = document.querySelector("#message-input");
  const errorContainer = document.querySelector("#errores");

  const chars_statusContainer = document.querySelector("#characters-status");

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = messageInput.value.trim(); //eliminar espacios en blanco
    if (!message) return; //si el mensaje esta vacío
    addMessage(message, "user", messagesContainer, "");
    messageInput.value = ""; //limpiar la caja de texto cada que se envía

    //typingStatus(chars_statusContainer, "escribiendo...");

    /*const arrayPromesas = data.map((personaje) => {
      return sendMessage(message, personaje)
    })

    //investigar promise.race
    Promise.all(arrayPromesas).then((responseSet) => {
      console.log(responseSet); //iterar json //otro array de promesas, promiseall
      const arrayPromesas2 = responseSet.map((response) => response.json())
      Promise.all(arrayPromesas2).then((responseSet2) => {
        responseSet2.forEach((response2) => {
          console.log(response2);
            if (response2.error) {
              const messageError = response2.error.message;
              renderError(messageError, errorContainer);
            } else {
              const messageResponse = response2.choices[0].message.content;
              addMessage(messageResponse, "assistant", messagesContainer);
            }
        })
        typingStatus(chars_statusContainer, "none");
      })
    })*/


    //data.forEach((element) => {
    const sendMessageWithStatus = (element) => {
      typingStatus(chars_statusContainer, "escribiendo...");
      return sendMessage(message, element).then((response) => {
        response.json().then((response2) => {
          console.log(response2);
          if (response2.error) {
            const messageError = response2.error.message;
            renderError(messageError, errorContainer);
          } else {
            const messageResponse = response2.choices[0].message.content;
            addMessage(messageResponse, "assistant", messagesContainer,element.maincharacter.name);
          }
        });
      });
    }
    //typingStatus(chars_statusContainer, "none", element);
    //})

    const messagePromises = data.map((element) => sendMessageWithStatus(element));

    Promise.all(messagePromises).then(() => {
      console.log("todos los mensajes enviados");
      typingStatus(chars_statusContainer, "none");
    });

  })
}