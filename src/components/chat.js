import { chatCompletions } from "../lib/chatResponse.js";

const keySaved = localStorage.getItem("key");
//console.log("key guardada:" + keySaved);

export function saveHistory(content, role) {
  const elementHistory = `{ role: "${role}", content: "${content}" },`
  const messageHistory = JSON.parse(localStorage.getItem("history")) || [];
  messageHistory.push(elementHistory);
  localStorage.setItem("history", JSON.stringify(messageHistory));
}

export function sendMessage(message, element) {
  const history = JSON.parse(localStorage.getItem("history")) || []; //meterlo a la funcion como otra llamada en message,element
  const character = element.maincharacter.name;
  const movie = element.name;
  //console.log(character, movie);
  //
  const dataChat = [{
    "role": "assistant",
    "content": `Interactúa como si fueras ${character} de la película ${movie} con el fin de responder encarnando al personaje frente a preguntas que te realice el usuario. Aquí tu conversación previa con el usuario: ${history}`
  },
  {
    "role": "user",
    "content": `${message}`
  }]
  return chatCompletions(keySaved, dataChat) //**PILL DE JC: data debería ser el historial**
}

export const renderError = (messageError, elementDOM) => {
  elementDOM.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "<strong>Error - </strong>" + messageError;
  elementDOM.appendChild(paragraph);
};