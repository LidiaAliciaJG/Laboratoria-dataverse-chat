import { data } from '../data/dataset.js';
import { headTitle } from '../components/title.js';
import { renderStats } from '../components/stats.js'
import { resetFilters, filters, sorts, renderData } from '../components/filters.js'
import { navigateTo } from '../router.js';

const clear = (dataset, filterState, filterType, filterDate, sortName, elementDOM) => {
  const btnClear = elementDOM.querySelector("#button-clear");
  btnClear.addEventListener("click", () => {
    resetFilters(filterState, filterType, filterDate, sortName);
    renderData(dataset, elementDOM);
    renderStats(dataset, elementDOM);
  })
}

const clickToChat = (elementDOM) => {
  const btnChat = elementDOM.querySelector("#button-chat");
  btnChat.addEventListener("click", () => {
    const keySaved = localStorage.getItem("key");
    if (!keySaved) {
      //window.location = "/api";
      navigateTo("/api")
      localStorage.setItem("vistaBtn", "/panel");
    } else {
      //window.location = "/panel";
      navigateTo("/panel")
    }
  })
}

const clickToAPI = (elementDOM) => {
  const btnAPI = elementDOM.querySelector("#button-api");
  btnAPI.addEventListener("click", () => {
    //window.location = "/api";
    navigateTo("/api")
    localStorage.setItem("vistaBtn", "/");
  })
}



export const home = (elementDOM) => {
  //console.log("Loading main.js");

  headTitle("Inicio");

  renderData(data, elementDOM);
  renderStats(data, elementDOM);

  const original = Array.from(data);

  const filterState = {
    filterByType: "",
    filterByTypeValue: "",
    filterByDate: "",
    filterByDateValue: "",
    sortOrder: "",
  };

  const filterType = elementDOM.querySelector("#type-select");
  const filterDate = elementDOM.querySelector("#temporality-select");
  filters(filterType, filterDate, filterState, elementDOM);

  const sortName = elementDOM.querySelector("#sort-select");
  sorts(sortName, filterState, elementDOM)

  clear(original, filterState, filterType, filterDate, sortName, elementDOM);

  clickToChat(elementDOM);
  clickToAPI(elementDOM);
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
