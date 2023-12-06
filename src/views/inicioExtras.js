//SE TIENE QUE REFACTORIZAR para adaptarse a las vistas y componentes específicos de tu proyecto.
import { data } from '../data/dataset.js';
import { renderCards } from '../lib/view.js';
import { computeStats, filterData, sortData } from '../lib/dataFunctions.js';

const renderData = (dataset, elementDOM) => {
  elementDOM.innerHTML = "";
  elementDOM.appendChild(renderCards(dataset));
};

const renderStats = (data, elementDOM) => {
  elementDOM.innerHTML = "Número de películas: " + computeStats(data).numMovies + "<br>Promedio de aprobación: " + computeStats(data).criticMovies + "%";
};

const resetFilters = (filterState, filterType, filterDate, sortName) => {
  filterState.filterByType = "";
  filterState.filterByDate = "";
  filterState.sortOrder = "none";
  filterType.value = "";
  filterDate.value = "";
  sortName.value = "none";
};

const clear = (dataset, dataList, elementDOM, filterState, filterType, filterDate, sortName) => {
  const btnClear = document.querySelector("#button-clear");
  btnClear.addEventListener("click", () => {
    resetFilters(filterState, filterType, filterDate, sortName);
    renderData(dataset, dataList);
    renderStats(dataset, elementDOM);
  })
}

const clickToChat = () => {
  const btnChat = document.querySelector("#button-chat");
  btnChat.addEventListener("click", () => {
    const keySaved = localStorage.getItem("key");
    if (!keySaved) {
      window.location = "/api";
    } else {
      window.location = "/chat";
      localStorage.clear(); // PARA PRUEBAS
    }
  })
}

const filters = (filterType, filterDate, dataList, dataNum, filterState) => {

  filterType.addEventListener("change", function (event) {
    const filterBy = filterType.name;
    filterState.filterByType = filterBy;
    const value = event.target.value;
    filterState.filterByTypeValue = value;
    const renderFilter = filterData(data, filterBy, value);
    if (filterState.filterByDate === "") {
      renderData(renderFilter, dataList);
      renderStats(renderFilter, dataNum);
    } else {
      const filterBy = filterState.filterByDate;
      const value = filterState.filterByDateValue;
      const renderFilter2 = filterData(renderFilter, filterBy, value);
      renderData(renderFilter2, dataList);
      renderStats(renderFilter2, dataNum);
    }
  });

  filterDate.addEventListener("change", function (event) {
    const filterBy = filterDate.name;
    filterState.filterByDate = filterBy;
    const value = event.target.value;
    filterState.filterByDateValue = value;
    const renderFilter = filterData(data, filterBy, value);
    if (filterState.filterByType === "") {
      renderData(renderFilter, dataList);
      renderStats(renderFilter, dataNum);
    } else {
      const filterBy = filterState.filterByType;
      const value = filterState.filterByTypeValue;
      const renderFilter2 = filterData(renderFilter, filterBy, value);
      renderData(renderFilter2, dataList);
      renderStats(renderFilter2, dataNum);
    }
  });
}

const sorts = (sortName, dataList, filterState) =>
  sortName.addEventListener("change", function (event) {
    const sortOrder = event.target.value;
    filterState.sortOrder = sortOrder;
    const sortBy = sortName.name;
    const sortedData = sortData(data, sortBy, sortOrder);
    if (filterState.filterByType === "" && filterState.filterByDate === "") {
      renderData(sortedData, dataList);
    } else if (filterState.filterByType === "") {
      const filterByDate = filterState.filterByDate;
      const valueDate = filterState.filterByDateValue;
      const renderFilterLast = filterData(data, filterByDate, valueDate);
      renderData(renderFilterLast, dataList);
    } else if (filterState.filterByDate === "") {
      const filterByType = filterState.filterByType;
      const valueType = filterState.filterByTypeValue;
      const renderFilterLast = filterData(data, filterByType, valueType);
      renderData(renderFilterLast, dataList);
    } else {
      const filterByType = filterState.filterByType;
      const valueType = filterState.filterByTypeValue;
      const renderFilterType = filterData(data, filterByType, valueType);
      const filterByDate = filterState.filterByDate;
      const valueDate = filterState.filterByDateValue;
      const renderFilterLast = filterData(renderFilterType, filterByDate, valueDate);
      renderData(renderFilterLast, dataList);
    }
  });



export const main = () => {
  console.log("Loading main.js");
  
  const head_title = document.querySelector("title");
  head_title.textContent="PELiSINFO | Inicio";

  const dataList = document.querySelector("#tarjetas");
  renderData(data, dataList);

  const original = Array.from(data);

  const dataNum = document.querySelector("p");
  renderStats(data, dataNum);

  const filterState = {
    filterByType: "",
    filterByTypeValue: "",
    filterByDate: "",
    filterByDateValue: "",
    sortOrder: "",
  };

  const filterType = document.querySelector("#type-select");
  const filterDate = document.querySelector("#temporality-select");
  filters(filterType, filterDate, dataList, dataNum, filterState);

  const sortName = document.querySelector("#sort-select");
  sorts(sortName, dataList, filterState)

  clear(original, dataList, dataNum, filterState, filterType, filterDate, sortName);
  clickToChat();

}

/*const cardSelected = () => {
  const card = document.querySelectorAll("li");
  card.forEach((element) =>
    element.addEventListener("click", () => {
      console.log(element.id);
      return element.id;
    })
  );
}*/
