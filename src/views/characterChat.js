import { contentChar } from "./characterExtras.js";
import { data } from "../data/dataset.js";

export function personaje(props) {
  //console.log("console de personaje:", props);

  const characterInfo = data.find(item => item.id === props.id);
  //console.log(characterInfo);


  const charContainer = document.createElement("section");
  charContainer.innerHTML = `
  <div id="personaje">
  </div>

  <div id="chatIndividual"> 

    <div id="chatIndividual-container" data-testid="chat-element">
        <div id="character-status">
        </div>

        <div id="messages">
        </div>

        <form id="message-form" data-testid="message-element">
          <input type="text" id="message-input" placeholder="Escribe un mensaje..."/>
          <button class="button-send"><img src="https://img.icons8.com/metro/104/757575/long-arrow-up.png" alt="enviar"/></button>
        </form>
    </div>

    <div id="errores">
    </div>

    <div id="instrucciones">
      <h5>Instrucciones:</h5>
      <p>Al interactuar con nuestro chatbot impulsado por la API de OpenAI pueden surgir errores, a continuación, te proporcionamos información sobre posibles errores y cómo resolverlos:</p>

      <h6>Cuota de Tokens Alcanzada:</h6>
      
      <p>Causa: Has alcanzado la cuota máxima de tokens permitidos por minuto.</p>
      <p>Solución: Espera unos minutos antes de continuar. Si el problema persiste, es posible que hayas superado los límites permitidos para tu plan. Considera actualizar tu plan o contactarnos para obtener más información.</p>
      
      <h6>Problemas de Autenticación:</h6>
      
      <p>Causa: La clave de API es incorrecta, caducó o no se proporcionó.</p>
      <p>Solución: Verifica que has ingresado la clave de API correctamente. Si es una clave caducada, genera una nueva desde tu cuenta de OpenAI y actualízala en la configuración de tu perfil en nuestro sitio.</p>
    
      <h6>Errores Temporales del Servidor:</h6>
      
      <p>Causa: Problemas temporales del servidor de OpenAI.</p>
      <p>Solución: Inténtalo de nuevo en unos minutos. Si el problema persiste, estamos trabajando para solucionarlo. Puedes ponerte en contacto con nosotros para obtener asistencia adicional.</p>
    </div>
  </div>
      `
  charContainer.setAttribute("id", "personaje-detalles");

  //window.addEventListener("DOMContentLoaded", () => {
  contentChar(characterInfo, charContainer);
  //console.log("personaje fully loaded");
  localStorage.removeItem("history");
  //});



  return charContainer;

}