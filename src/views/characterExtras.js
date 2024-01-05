import { headTitle } from '../components/title.js';
import { renderCharacterInfo } from '../components/cardsCharacter.js';
import { renderError, saveHistory, sendMessage } from '../components/chat.js';

function typingStatus(elementDOM, status, props) {
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

const renderChar = (dataset, elementDOM) => {
  elementDOM.innerHTML = "";
  elementDOM.appendChild(renderCharacterInfo(dataset));
};



export const contentChar = (props, elementDOM) => {
  //console.log("Cargando funciones de personaje.js");
  //console.log(props);

  //const propsInfo = data.find(item => item.id=props);
  //console.log(propsInfo);

  //const head_title = document.querySelector("title");
  //head_title.textContent = "PELiSINFO | Personaje";
  headTitle("Detalles")


  const dataChar = elementDOM.querySelector("#personaje");
  renderChar(props, dataChar);

  const messagesContainer = elementDOM.querySelector("#messages");
  const messageForm = elementDOM.querySelector("#message-form");
  const messageInput = elementDOM.querySelector("#message-input");
  const errorContainer = elementDOM.querySelector("#errores");

  const char_statusContainer = elementDOM.querySelector("#character-status");
  typingStatus(char_statusContainer, "en línea", props);

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = messageInput.value.trim(); //eliminar espacios en blanco
    if (!message) return; //si el mensaje esta vacío
    addMessage(message, "user", messagesContainer);
    messageInput.value = ""; //limpiar la caja de texto cada que se envía

    typingStatus(char_statusContainer, "escribiendo...", props);

    /*sendMessage(message, props).then((response) => {
      response.json().then((response2) => {
        //console.log(response2);
        if (response2.error) {
          const messageError = response2.error.message;
          renderError(messageError, errorContainer);
        } else {
          const messageResponse = response2.choices[0].message.content;
          addMessage(messageResponse, "assistant", messagesContainer);
        }
      })
      typingStatus(char_statusContainer, "en línea", props);
    */
    sendMessage(message, props).then((resolved) => {
      if (resolved.error) {
        const messageError = resolved.error.message;
        renderError(messageError, errorContainer);
      } else {
        const messageResponse = resolved.choices[0].message.content;
        addMessage(messageResponse, "assistant", messagesContainer);
      }
    }).catch((error) => {
      const errorContainer = elementDOM.querySelector("#errores");
      renderError(error, errorContainer);
      //console.log("se ha informado al usuario de un error");
      //DUDA: ES CORRECTO? CÓMO PODRÍA PROBARLO?
    });
    typingStatus(char_statusContainer, "en línea", props);
  })
}