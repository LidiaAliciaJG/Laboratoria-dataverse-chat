import { computeStats } from '../lib/dataFunctions.js';

export const renderStats = (data) => {
  const dataNum = document.querySelector("p");
  dataNum.innerHTML = "Número de películas: " + computeStats(data).numMovies + "<br>Promedio de aprobación: " + computeStats(data).criticMovies + "%";
};