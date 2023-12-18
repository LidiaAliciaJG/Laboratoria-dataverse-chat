import { data } from '../data/dataset.js';
import { headTitle } from '../components/title.js';
import { renderStats } from '../components/stats.js'
import { resetFilters, filters, sorts, renderData } from '../components/filters.js'

const clear = (dataset, filterState, filterType, filterDate, sortName) => {
  const btnClear = document.querySelector("#button-clear");
  btnClear.addEventListener("click", () => {
    resetFilters(filterState, filterType, filterDate, sortName);
    renderData(dataset);
    renderStats(dataset);
  })
}

const clickToChat = () => {
  const btnChat = document.querySelector("#button-chat");
  btnChat.addEventListener("click", () => {
    const keySaved = localStorage.getItem("key");
    if (!keySaved) {
      window.location = "/api";
      localStorage.setItem("vistaBtn", "/panel");
    } else {
      window.location = "/panel";
    }
  })
}

const clickToAPI = () => {
  const btnAPI = document.querySelector("#button-api");
  btnAPI.addEventListener("click", () => {
    window.location = "/api";
    localStorage.setItem("vistaBtn", "/");
  })
}



export const home = () => {
  console.log("Loading main.js");

  headTitle("Inicio");

  renderData(data);
  renderStats(data);

  const original = Array.from(data);

  const filterState = {
    filterByType: "",
    filterByTypeValue: "",
    filterByDate: "",
    filterByDateValue: "",
    sortOrder: "",
  };

  const filterType = document.querySelector("#type-select");
  const filterDate = document.querySelector("#temporality-select");
  filters(filterType, filterDate, filterState);

  const sortName = document.querySelector("#sort-select");
  sorts(sortName, filterState)

  clear(original, filterState, filterType, filterDate, sortName);

  clickToChat();
  clickToAPI();
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
