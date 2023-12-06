import { onURLChange, setRootElement, setRoutes } from './router.js';
import { inicio } from './views/Inicio.js';
import { personaje } from './views/Personaje.js';
import { chatgrupal } from './views/Chat.js';
import { error } from './views/Error.js';
import { getKey } from './views/ApiKey.js';

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

const routes = {
  "/": inicio,
  "/error": error,
  "/personaje": personaje,
  "/chat": chatgrupal,
  "/api": getKey,
}

setRoutes(routes);

const viewContainer = document.getElementById("root");
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  console.log(event.target.location.pathname);
  const prop=localStorage.getItem("prop-character");
  onURLChange(event.target.location.pathname, prop);
})

const logotoHome = document.querySelector("header");
logotoHome.addEventListener("click", function () {
  window.location = "/";
});