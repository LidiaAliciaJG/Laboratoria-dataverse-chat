import { textchat } from "./chatExtras.js";

export function chatgrupal() {
  const chatgContainer = document.createElement("section");
  chatgContainer.innerHTML = `
    <div id="personajes">
    </div>

    <div id="chatGrupal">
      <div id="chatGrupal-container">
        <div id="messages">
        </div>

        <div id="chatGrupal-menu">
          <div id="characters-status">
          </div>

          <form id="message-form">
            <input type="text" id="message-input" placeholder="Escribe un mensaje..."/>
            <button class="button-send"><img src="https://img.icons8.com/metro/104/757575/long-arrow-up.png" alt="enviar"/></button>
          </form>
        </div>
      </div>

      <div id="errores">
      </div>

      <div id="instrucciones">
      <h5>Instrucciones:</h5>
      <p></p>
      </div>
    </div>
      `
  chatgContainer.setAttribute("id", "chat-grupal");

  window.addEventListener("DOMContentLoaded", () => {
    textchat();
    console.log("chat fully loaded");
    localStorage.removeItem("history");
  });

  //https://codepen.io/gnevin/pen/rNBbevW

  return chatgContainer;
}