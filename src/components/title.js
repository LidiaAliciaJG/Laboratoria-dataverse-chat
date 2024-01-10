export const headTitle = (view) => {
  const head_title = document.querySelector("title");
  if (head_title) { //EL TEST NO RECONOCE EL HEAD
    head_title.textContent = `PELiSINFO | ${view}`;
  }
}
