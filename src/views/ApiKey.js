export function getKey() {
    const getKeyContainer = document.createElement("section");
  getKeyContainer.innerHTML = `
        <div id="key-instruction">
        <h5>Instrucciones:</h5>
        <p>Para acceder al chat con los personajes, debes ingresar tu API key de OpenAI.</p>
        <p>Para obtenerla, debes crear una cuenta en OpenAI e ingresar a https://platform.openai.com/api-keys.</p>
        </div>

        <form id="key-form">
          <input type="text" id="key-input" placeholder="Ingresa una API key"/>
          <button type="submit" class="button-send"><img src="https://img.icons8.com/metro/104/757575/long-arrow-up.png" alt="enviar"/></button>
        </form>
      `
  getKeyContainer.setAttribute("id", "get-api");

  window.addEventListener("DOMContentLoaded", () => {
    
    const keyForm = document.querySelector("#key-form");
    const keyInput = document.querySelector("#key-input");
    
    keyForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let key = keyInput.value.trim();
        if (!key) return;
        keyInput.value = "";
        localStorage.setItem("key",key);
        console.log("getting key");
        window.location = "/chat";
    })

    let keySaved = localStorage.getItem("key");
    console.log("key guardada:"+keySaved);
  });

  return getKeyContainer;
}