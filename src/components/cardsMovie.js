import { navigateTo } from "../router.js";

export const renderCards = (data) => {
  const list = document.createElement("ul");
  list.classList.add("ul-card");
  data.forEach(element => {

    const itemList = document.createElement("li");
    itemList.classList.add("card");
    itemList.setAttribute("id", element.id);

    const itemContainerMovie = document.createElement("dl");

    itemContainerMovie.innerHTML = `
          <img src=${element.imageUrl} alt=${element.name} />
          <dt></dt><dd itemprop="type">${element.type.imageEmoji}</dd>
          <dt></dt><dd itemprop="name">${element.name}</dd>
          <dt></dt><dd itemprop="description">${element.shortDescription}</dd>
          <dt>Fecha de Estreno:</dt><dd itemprop="releaseDate">${element.facts.releaseDate}</dd>
          <dt>Actores Principales:</dt><dd itemprop="mainActors">${element.facts.mainActors.join(", ")}</dd>
          <dt>Premios:</dt><dd itemprop="awards">${element.facts.awards.join(", ")}</dd>
          <dt>Presupuesto:</dt><dd itemprop="budget">${element.facts.budget}</dd>
          <dt>Calificación de la Crítica:</dt><dd itemprop="criticRating">${element.facts.criticRating}</dd>
          <dt>Calificación de la Audiencia:</dt><dd itemprop="audienceRating">${element.facts.audienceRating}</dd>
        `

    itemList.addEventListener("click", () => {
      //const cardSelected = JSON.stringify(element);//volverlo string
      //console.log("Click on: " + cardSelected);
      //localStorage.setItem("prop-character",cardSelected);//localStorage solo acepta string
      const keySaved = localStorage.getItem("key");
      if (!keySaved) {
        window.location = "/api";
        localStorage.setItem("vistaBtn", "/personaje");
      } else {
        //window.location = "/personaje"; //recarga la pagina nuevamente
        //onURLChange("/personaje", props);
        const props = { "id": element.id };
        navigateTo("/personaje", props)
      }
    })

    const itemContainerChar = document.createElement("dl");
    itemContainerChar.classList.add("tarjeta-protagonista");
    itemContainerChar.innerHTML = `
        <img src=${element.maincharacter.imageURL} alt=${element.maincharacter.name} />
        <dt>Charla con:</dt><dd itemprop="character">${element.maincharacter.name}</dd>
      `


    itemList.setAttribute("itemscope", "");
    itemList.setAttribute("itemtype", "tarjeta-películas");
    itemContainerMovie.setAttribute("itemscope", "");
    itemContainerMovie.setAttribute("itemtype", "película");
    itemContainerChar.setAttribute("itemscope", "");
    itemContainerChar.setAttribute("itemtype", "protagonista");

    itemList.appendChild(itemContainerMovie);
    itemList.appendChild(itemContainerChar);
    list.appendChild(itemList);
  });

  return list;
};