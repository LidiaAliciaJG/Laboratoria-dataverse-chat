export function getKey() {
  const getKeyContainer = document.createElement("section");
  getKeyContainer.innerHTML = `
        <div id="key-instruction">
        <h5>Instrucciones:</h5>
        <p>Para acceder al chat con los personajes, debes ingresar tu API key de OpenAI.</p>
        <p>Para obtenerla, debes crear una cuenta en OpenAI e ingresar a https://platform.openai.com/api-keys.</p>
        </div>

        <form id="key-form">
          <input type="text" id="key-input"/>
          <button type="submit" class="button-send"><img src="https://img.icons8.com/metro/104/757575/long-arrow-up.png" alt="enviar"/></button>
          <button class="button-delete"><img src="https://img.icons8.com/fluency-systems-filled/96/757575/delete-forever.png" alt="borrar"/></button>
        </form>
      `
  getKeyContainer.setAttribute("id", "get-api");

  window.addEventListener("DOMContentLoaded", () => {

    const keyForm = document.querySelector("#key-form");
    const keyInput = document.querySelector("#key-input");

    keyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const key = keyInput.value.trim();
      if (!key) return;
      keyInput.value = "";
      localStorage.setItem("key", key);
      //console.log("getting key");
      const vista = localStorage.getItem("vistaBtn");
      window.location = vista;
    })

    const key = localStorage.getItem("key")
    if (key) {
      keyInput.setAttribute("placeholder", "***-*****-********-*******");
    } else {
      keyInput.setAttribute("placeholder", "Ingresa una API key");
    }

    const btnClearAPI = document.querySelector(".button-delete");
    btnClearAPI.addEventListener("click", () => {
      localStorage.clear();
    })

  });

  return getKeyContainer;
}

//descargar postman -> https://insomnia.rest/ https://www.postman.com/
//endpoints en imagen