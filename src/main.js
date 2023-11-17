//SE TIENE QUE REFACTORIZAR para adaptarse a las vistas y componentes específicos de tu proyecto.
import { data } from './data/dataset.js';
import { renderItems } from './lib/view.js';
import { computeStats, filterData, sortData } from './lib/dataFunctions.js';


export const main = () => {
  console.log("Cargando funciones de main.js");

  const dataList = document.querySelector("#tarjetas");
  //const renderData = (dataset) => {
  dataList.appendChild(renderItems(data));
  //dataList.innerHTML = "";
  //};

  const dataNum = document.querySelector("p");
  const renderStats = (data) => {
    dataNum.innerHTML = "Número de películas: " + computeStats(data).numMovies + "<br>Promedio de aprobación: " + computeStats(data).criticMovies + "%";
  };

  renderStats(data);

  const original = Array.from(data);

  const filterState = {
    filterByType: "",
    filterByTypeValue: "",
    filterByDate: "",
    filterByDateValue: "",
    sortOrder: "",
  };

  const resetFilters = () => {
    filterState.filterByType = "";
    filterState.filterByDate = "";
    filterState.sortOrder = "none";
    filterType.value = "";
    filterDate.value = "";
    sortName.value = "none";
  };

  const filterType = document.querySelector("#type-select");
  filterType.addEventListener("change", function (event) {
    //dataList.innerHTML = "";
    const filterBy = filterType.name;
    filterState.filterByType = filterBy;
    const value = event.target.value; //filterType.value;
    filterState.filterByTypeValue = value;
    const renderFilter = filterData(data, filterBy, value);
    if (filterState.filterByDate === "") {
      dataList.innerHTML = "";
      dataList.appendChild(renderItems(renderFilter));
      renderStats(renderFilter);
    } else {
      dataList.innerHTML = "";
      const filterBy = filterState.filterByDate;
      const value = filterState.filterByDateValue;
      const renderFilter2 = filterData(renderFilter, filterBy, value);
      //renderData(renderFilter2);
      dataList.appendChild(renderItems(renderFilter2));
      renderStats(renderFilter2);
    }
  });

  const filterDate = document.querySelector("#temporality-select");
  filterDate.addEventListener("change", function (event) {
    //dataList.innerHTML=""
    const filterBy = filterDate.name;
    filterState.filterByDate = filterBy;
    const value = event.target.value; //filterDate.value;
    filterState.filterByDateValue = value;
    const renderFilter = filterData(data, filterBy, value);
    if (filterState.filterByType === "") {
      dataList.innerHTML = "";
      //renderData(renderFilter);
      dataList.appendChild(renderItems(renderFilter));
      renderStats(renderFilter);
    } else {
      dataList.innerHTML = "";
      const filterBy = filterState.filterByType;
      const value = filterState.filterByTypeValue;
      const renderFilter2 = filterData(renderFilter, filterBy, value);
      //renderData(renderFilter2);
      dataList.appendChild(renderItems(renderFilter2));
      renderStats(renderFilter2);
    }
  });

  const sortName = document.querySelector("#sort-select");
  sortName.addEventListener("change", function (event) {
    //dataList.innerHTML=""
    const sortOrder = event.target.value; //sortName.value;
    filterState.sortOrder = sortOrder;
    const sortBy = sortName.name;
    const sortedData = sortData(data, sortBy, sortOrder);
    if (filterState.filterByType === "" && filterState.filterByDate === "") {
      dataList.innerHTML = "";
      dataList.appendChild(renderItems(sortedData));
    } else if (filterState.filterByType === "") {
      dataList.innerHTML = "";
      const filterByDate = filterState.filterByDate;
      const valueDate = filterState.filterByDateValue;
      const renderFilterLast = filterData(data, filterByDate, valueDate);
      dataList.appendChild(renderItems(renderFilterLast));
    } else if (filterState.filterByDate === "") {
      dataList.innerHTML = "";
      const filterByType = filterState.filterByType;
      const valueType = filterState.filterByTypeValue;
      const renderFilterLast = filterData(data, filterByType, valueType);
      dataList.appendChild(renderItems(renderFilterLast));
    } else {
      dataList.innerHTML = "";
      const filterByType = filterState.filterByType;
      const valueType = filterState.filterByTypeValue;
      const renderFilterType = filterData(data, filterByType, valueType);
      const filterByDate = filterState.filterByDate;
      const valueDate = filterState.filterByDateValue;
      const renderFilterLast = filterData(renderFilterType, filterByDate, valueDate);
      dataList.appendChild(renderItems(renderFilterLast));
    }
  });

  const btnClear = document.querySelector("#button-clear");
  btnClear.addEventListener("click", function () {
    dataList.innerHTML = ""
    resetFilters();
    //renderData(original);
    dataList.appendChild(renderItems(original));
    renderStats(data);
  });


}
