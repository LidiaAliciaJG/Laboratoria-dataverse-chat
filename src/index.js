import { onURLChange, setRootElement, setRoutes } from './router.js';
import {inicio} from './views/Inicio.js';
import {personaje} from './views/Personaje.js';
import {chat} from './views/Chat.js';
import { error } from './views/Error.js';
import { cardSelected, main } from './main.js';
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*Ejemplo de definición de rutas:*/

const routes = {
    "/": inicio,
    "/error": error,
    "/personaje": personaje,
    "/chat": chat,
}

setRoutes(routes);

const viewContainer = document.getElementById("root");
setRootElement(viewContainer);

/*
TODO:
[LISTO].- Definir rutas en router. 
[LISTO].- Pasar "root element" a router.
[LISTO].- Invocar el router para renderizar la vista correcta.
*/

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    console.log(event.target.location.pathname);
    onURLChange(event.target.location.pathname);
    main();
    cardSelected();

    
})



/*import Home from './views/Home';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(// root element //);
});


// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
    // set root element
    // invoke onURLChange 
  });
  //Asegúrese de manejar la carga de la página inicial llamando a onURLChange con window.location.


  // Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
    onURLChange(// location //);
 });

 //Asegúrese de estar escuchando popstate en index.js y llame a la función onURLChange cuando hay un popstate.
//Cuando un usuario hace clic en un enlace o navega usando los botones atrás/adelante del navegador, se llamará a esta función para actualizar la vista mostrada.
//Pruébelo usando los botones de avance y retroceso.
*/