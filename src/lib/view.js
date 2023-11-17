//SE TIENE QUE REFACTORIZAR para adaptarse a las vistas y componentes específicos de tu proyecto.
export const renderItems = (data) => {
  const list = document.createElement("ul");
  data.forEach(element => {

    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemList.classList.add("card");

    itemContainer.innerHTML = `
        <img src=${element.imageUrl} alt=${element.name} />
        <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
        <dt>Categoría:</dt><dd itemprop="type">${element.type}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${element.shortDescription}</dd>
        <dt>Fecha de Estreno:</dt><dd itemprop="releaseDate">${element.facts.releaseDate}</dd>
        <dt>Actores Principales:</dt><dd itemprop="mainActors">${element.facts.mainActors.join(", ")}</dd>
        <dt>Premios:</dt><dd itemprop="awards">${element.facts.awards.join(", ")}</dd>
        <dt>Presupuesto:</dt><dd itemprop="budget">${element.facts.budget}</dd>
        <dt>Calificación de la Crítica:</dt><dd itemprop="criticRating">${element.facts.criticRating}</dd>
        <dt>Calificación de la Audiencia:</dt><dd itemprop="audienceRating">${element.facts.audienceRating}</dd>
      `

    itemList.setAttribute("itemscope", "");
    itemList.setAttribute("itemtype","película");
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "películas");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList);
  });

  return list;
};