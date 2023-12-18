export const renderCharactersPreview = (data) => {
    const preview = document.createElement("ul");
    preview.classList.add("ul-previewPersonaje");
    data.forEach(element => {
      const itemPreview = document.createElement("li");
      itemPreview.classList.add("preview-personaje");
      itemPreview.setAttribute("id", element.id);
      const itemContainerPreview = document.createElement("dl");
      itemContainerPreview.innerHTML = `
        <img src=${element.maincharacter.imageURL} alt=${element.maincharacter.name} />
        <dd itemprop="character">${element.maincharacter.name}</dd>
      `
  
      itemPreview.addEventListener("click", () => {
        const cardSelected = JSON.stringify(element);
        console.log("Click on: " + cardSelected);
        localStorage.setItem("prop-character",cardSelected);
        window.location = "/personaje";
      })
  
      itemPreview.appendChild(itemContainerPreview);
      preview.appendChild(itemPreview);
    });
  
    return preview;
  }