export function personaje(props) {
  const head_title = document.querySelector("title");
  head_title.textContent="PELiSINFO | Personaje";

  const viewEl = document.createElement('div');
  viewEl.textContent = `PÁGINA DEL PERSONAJE: ${props}`;
  console.log(props);
  
  return viewEl;
}
