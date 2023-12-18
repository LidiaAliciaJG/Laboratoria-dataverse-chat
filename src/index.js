import { onURLChange, setRootElement, setRoutes } from './router.js';
import { inicio } from './views/home.js';
import { personaje } from './views/characterChat.js';
import { chatgrupal } from './views/groupChat.js';
import { error } from './views/error.js';
import { getKey } from './views/apiKey.js';

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

const routes = {
  "/": inicio,
  "/error": error,
  "/personaje": personaje,
  "/panel": chatgrupal,
  "/api": getKey,
}

setRoutes(routes);

const viewContainer = document.getElementById("root");
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  const propsaved = localStorage.getItem("prop-character"); //obtener el string guardado
  const prop = JSON.parse(propsaved); //regresar el string a objeto
  onURLChange(event.target.location.pathname, prop);
  console.log(event.target.location.pathname, prop);
})

const logotoHome = document.querySelector("header");
logotoHome.addEventListener("click", function () {
  window.location = "/";
});