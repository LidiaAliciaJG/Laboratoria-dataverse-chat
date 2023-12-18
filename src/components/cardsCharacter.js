export const renderCharacterInfo = (element) => {
    const itemContainerPreview = document.createElement("dl");
    itemContainerPreview.setAttribute("id", element.id);
      itemContainerPreview.innerHTML = `
      <div id="portada">
      <img src=${element.maincharacter.imageURL} alt=${element.maincharacter.name} />
      <h4>${element.maincharacter.name}</h4>
      </div>
      <dt>Edad:</dt><dd itemprop="age">${element.maincharacter.age}</dd>
      <dt>Rol:</dt><dd itemprop="rol">${element.maincharacter.rol}</dd>
      <dt>Misión:</dt><dd itemprop="mision">${element.maincharacter.mision}</dd>
      <dt>Dato curioso:</dt><dd itemprop="funFact">${element.maincharacter.funFact}</dd>
      <dt>Actor:</dt><dd itemprop="actor">${element.maincharacter.actor}</dd>
      `
      return itemContainerPreview;
  }