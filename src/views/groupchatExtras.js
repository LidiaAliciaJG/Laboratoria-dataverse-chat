import { headTitle } from '../components/title.js';
import { data } from '../data/dataset.js';
import { renderCharactersPreview } from '../components/cardsPreview.js';
import { renderError, saveHistory, sendMessage } from '../components/chat.js';

function typingStatus(elementDOM, status) {
  //<img src="${props.maincharacter.imageURL}" alt=${props.maincharacter.name}">
  if (status === "none") {
    elementDOM.innerHTML = "";
  } else {
    elementDOM.innerHTML = `<h6>${status}</h6>`;
  }
}

//function addMessage(message, user, messagesContainer, characterName, chars_statusContainer) {
function addMessage(message, user, messagesContainer, characterName) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(user);
  //const time = (Math.floor(Math.random() * 10)) * 1000;
  if (user === "assistant") {
    //typingStatus(chars_statusContainer, "están escribiendo...")
    //setTimeout(() => {
    messageElement.innerHTML = message;
    const nameElement = document.createElement("div");
    nameElement.classList.add(user + "-name");
    nameElement.innerHTML = characterName;
    messagesContainer.appendChild(messageElement);
    messagesContainer.appendChild(nameElement);
    //}, time);
  } else {
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
  }
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
  saveHistory(message, user)
}


const renderChar = (dataset, elementDOM) => {
  elementDOM.innerHTML = "";
  elementDOM.appendChild(renderCharactersPreview(dataset));
};


export const textchat = (elementDOM) => {
  //console.log("Cargando funciones del chat.js");

  //const head_title = document.querySelector("title");
  //head_title.textContent = "PELiSINFO | Chat grupal";
  headTitle("Chat Grupal")

  const dataChar = elementDOM.querySelector("#personajes");
  renderChar(data, dataChar);

  const messagesContainer = elementDOM.querySelector("#messages");
  const messageForm = elementDOM.querySelector("#message-form");
  const messageInput = elementDOM.querySelector("#message-input");
  const errorContainer = elementDOM.querySelector("#errores");

  const chars_statusContainer = elementDOM.querySelector("#characters-status");


  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = messageInput.value.trim(); //eliminar espacios en blanco
    if (!message) return; //si el mensaje esta vacío
    addMessage(message, "user", messagesContainer, "");
    messageInput.value = ""; //limpiar la caja de texto cada que se envía

    typingStatus(chars_statusContainer, "escribiendo...");

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
      //typingStatus(chars_statusContainer, "escribiendo...", element.maincharacter.name);
      return sendMessage(message, element).then((response) => {
        //response.json().then((response2) => {
        //console.log(response2);
        if (response.error) {
          const messageError = response.error.message;
          renderError(messageError, errorContainer);
        } else {
          const messageResponse = response.choices[0].message.content;
          addMessage(messageResponse, "assistant", messagesContainer, element.maincharacter.name, chars_statusContainer);

          messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
        }
        //});
      }).catch((error) => {
        renderError(error, errorContainer);
      });
    }
    //typingStatus(chars_statusContainer, "none", element);
    //})

    const messagePromises = data.map((element) => sendMessageWithStatus(element));

    Promise.all(messagePromises).then(() => {
      //console.log("todos los mensajes recibidos");
      //setTimeout(() => {
      typingStatus(chars_statusContainer, "none");
      //}, 8000)
    });

  })
}