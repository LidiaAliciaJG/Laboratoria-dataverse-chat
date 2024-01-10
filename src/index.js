import { onURLChange, setRootElement, setRoutes, queryStringToObject, navigateTo } from './router.js';
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
  console.log("DOM fully loaded and parsed"); //PRIMER INGRESO DEL USUARIO
  //const propsaved = localStorage.getItem("prop-character"); //obtener el string guardado
  //const prop = JSON.parse(propsaved); //regresar el string a objeto
  //console.log(event.target.location);
  const props = queryStringToObject(event.target.location.search);
  onURLChange(event.target.location.pathname, props);
})

window.addEventListener("popstate", (event) => {
  const props = queryStringToObject(event.target.location.search);
  onURLChange(event.target.location.pathname, props);
  console.log("popstate done");
})

const logotoHome = document.querySelector("header");
logotoHome.addEventListener("click", function () {
  navigateTo("/")
});