import { contentChar } from "./personajeExtras.js";

export function personaje(props) {

  const charContainer = document.createElement("section");
  charContainer.innerHTML = `
  <div id="personaje">
  </div>

  <div id="chatIndividual"> 

    <div id="chatIndividual-container">
        <div id="character-status">
        </div>

        <div id="messages">
        </div>

        <form id="message-form">
          <input type="text" id="message-input" placeholder="Escribe un mensaje..."/>
          <button class="button-send"><img src="https://img.icons8.com/metro/104/757575/long-arrow-up.png" alt="enviar"/></button>
        </form>
    </div>

    <div id="errores">
    </div>

    <div id="instrucciones">
      <h5>Instrucciones:</h5>
      <p></p>
    </div>
  </div>
      `
  charContainer.setAttribute("id", "personaje-detalles");

  window.addEventListener("DOMContentLoaded", () => {
    contentChar(props);
    console.log("personaje fully loaded");
    localStorage.removeItem("history");
  });

  return charContainer;

}