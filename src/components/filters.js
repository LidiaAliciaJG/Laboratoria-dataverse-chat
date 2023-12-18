import { filterData, sortData } from '../lib/dataFunctions.js';
import { data } from '../data/dataset.js';
import { renderStats } from '../components/stats.js'
import { renderCards } from '../components/cardsMovie.js';

export const renderData = (dataset) => {
    const dataList = document.querySelector("#tarjetas");
    dataList.innerHTML = "";
    dataList.appendChild(renderCards(dataset));
  };

export const resetFilters = (filterState, filterType, filterDate, sortName) => {
    filterState.filterByType = "";
    filterState.filterByDate = "";
    filterState.sortOrder = "none";
    filterType.value = "";
    filterDate.value = "";
    sortName.value = "none";
  };

export const filters = (filterType, filterDate, filterState) => {

    filterType.addEventListener("change", function (event) {
        const filterBy = filterType.name;
        filterState.filterByType = filterBy;
        const value = event.target.value;
        filterState.filterByTypeValue = value;
        const renderFilter = filterData(data, filterBy, value);
        if (filterState.filterByDate === "") {
            renderData(renderFilter);
            renderStats(renderFilter);
        } else {
            const filterBy = filterState.filterByDate;
            const value = filterState.filterByDateValue;
            const renderFilter2 = filterData(renderFilter, filterBy, value);
            renderData(renderFilter2);
            renderStats(renderFilter2);
        }
    });

    filterDate.addEventListener("change", function (event) {
        const filterBy = filterDate.name;
        filterState.filterByDate = filterBy;
        const value = event.target.value;
        filterState.filterByDateValue = value;
        const renderFilter = filterData(data, filterBy, value);
        if (filterState.filterByType === "") {
            renderData(renderFilter);
            renderStats(renderFilter);
        } else {
            const filterBy = filterState.filterByType;
            const value = filterState.filterByTypeValue;
            const renderFilter2 = filterData(renderFilter, filterBy, value);
            renderData(renderFilter2);
            renderStats(renderFilter2);
        }
    });
}

export const sorts = (sortName, filterState) =>
    sortName.addEventListener("change", function (event) {
        const sortOrder = event.target.value;
        filterState.sortOrder = sortOrder;
        const sortBy = sortName.name;
        const sortedData = sortData(data, sortBy, sortOrder);
        if (filterState.filterByType === "" && filterState.filterByDate === "") {
            renderData(sortedData);
        } else if (filterState.filterByType === "") {
            const filterByDate = filterState.filterByDate;
            const valueDate = filterState.filterByDateValue;
            const renderFilterLast = filterData(data, filterByDate, valueDate);
            renderData(renderFilterLast);
        } else if (filterState.filterByDate === "") {
            const filterByType = filterState.filterByType;
            const valueType = filterState.filterByTypeValue;
            const renderFilterLast = filterData(data, filterByType, valueType);
            renderData(renderFilterLast);
        } else {
            const filterByType = filterState.filterByType;
            const valueType = filterState.filterByTypeValue;
            const renderFilterType = filterData(data, filterByType, valueType);
            const filterByDate = filterState.filterByDate;
            const valueDate = filterState.filterByDateValue;
            const renderFilterLast = filterData(renderFilterType, filterByDate, valueDate);
            renderData(renderFilterLast);
        }
    });




