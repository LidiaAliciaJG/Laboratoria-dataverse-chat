export const error = () => {
  const errorContainer = document.createElement("section");
  errorContainer.innerHTML = `
        <img class="img-error" src="../images/Error404.png" alt="Error 404: Página no encontrada">
          `
  errorContainer.setAttribute("id", "error");
  return errorContainer;
};