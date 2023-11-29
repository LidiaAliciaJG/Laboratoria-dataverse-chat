import { textchat } from "./chatExtras.js";

export function chatgrupal(props) {
  const chatgContainer = document.createElement("section");
  chatgContainer.innerHTML = `
    <div id="personajes">
      <h3>PERSONAJE</h3>
    </div>

    <div id="chatGrupal">
      <div id="chatGrupal-container">
        <div id="messages">
        </div>
        <div id="character-status">
        <h6>Personaje escribiendo...</h6>
        </div>
          <form id="message-form">
            <input type="text" id="message-input" placeholder="Escribe un mensaje..."/>
            <button type="submit" class="button-send"><img src="https://img.icons8.com/metro/104/757575/long-arrow-up.png" alt="enviar"/></button>
          </form>
      </div>

      <div id="instrucciones">
      <h5>Instrucciones:</h5>
      </div>
    </div>
      `
  chatgContainer.setAttribute("id", "chat-grupal");

  window.addEventListener("DOMContentLoaded", () => {
    textchat();
    console.log("chat fully loaded");
    let keySaved = localStorage.getItem("key");
    console.log("key guardada:"+keySaved);
  });

  //https://codepen.io/gnevin/pen/rNBbevW

  return chatgContainer;
};