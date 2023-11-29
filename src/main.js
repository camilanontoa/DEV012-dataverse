import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { sortData } from "./dataFunctions.js";

import data from "./data/dataset.js";

//console.log(example, renderItems(data), data);

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);
let dataManipulada = [...data];

const selectedFilter = document.querySelector("select[name='mainField']");
selectedFilter.addEventListener("change", (event) => {
  const optionSelected = event.target.value;
  dataManipulada = filterData(dataManipulada, "mainField", optionSelected);
  root.innerHTML = "";
  root.innerHTML = renderItems(dataManipulada);
});

const organized = document.querySelector("select[name='abc']");
organized.addEventListener("change", (event) => {
  dataManipulada = sortData(dataManipulada, "name", event.target.value);
  root.innerHTML = "";
  root.innerHTML = renderItems(dataManipulada);
});

const buttonClear = document.querySelector('[data-testid="button-clear"]');
buttonClear.addEventListener("click", () => {
  root.innerHTML = "";
  root.innerHTML = renderItems(data);
});
