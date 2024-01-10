import { home } from "./homeExtras.js";

export const inicio = () => {

  const inicioContainer = document.createElement("section");
  inicioContainer.innerHTML = `
    <nav>
        <label for="type-select">Categorías:</label>
        <select name="type" id="type-select">
        <option value="">Elegir una opcion</option>
        <option value="Terror">Terror</option>
        <option value="Comedia Romántica">Comedia Romántica</option>
        <option value="Infantil">Infantil</option>
        <option value="Kdrama">Kdrama</option>
        </select>

        <label for="temporality-select">Filtrar por:</label>
        <select name="temporality" id="temporality-select" data-testid="select-filter">
        <option value="">Año de estreno</option>
        <option value="actual">2010-actualidad</option>
        <option value="anterior">1980-2010</option>
        </select>

        <label for="sort-select">Ordenar por:</label>
        <select name="name" id="sort-select" data-testid="select-sort">
        <option value="none">Elige una opcion</option>
        <option value="asc"> A - Z</option>
        <option value="desc"> Z - A</option>
        </select>

        <button data-testid="button-clear" id="button-clear">Limpiar filtro</button>
        <button id="button-api">API key</button>
     </nav>

    <div id="estadisticas">
        <p></p>
        <button id="button-chat" data-testid="chat">Chat Grupal</button>
    </div>

    <div id="tarjetas">
    </div>
      `
  inicioContainer.setAttribute("id", "inicio");

  //window.addEventListener("DOMContentLoaded", () => {
  home(inicioContainer);
  //console.log("main and cards fully loaded");
  //});

  return inicioContainer;
};
