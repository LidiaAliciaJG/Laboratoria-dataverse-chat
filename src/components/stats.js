import { computeStats } from '../lib/dataFunctions.js';

export const renderStats = (data, elementDOM) => {
  const dataNum = elementDOM.querySelector("p");
  dataNum.innerHTML = "Número de películas: " + computeStats(data).numMovies + "<br>Promedio de aprobación: " + computeStats(data).criticMovies + "%";
};