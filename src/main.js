import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
//import { sortData } from './dataFunctions.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

const root= document.querySelector ("#root") ;
root.innerHTML= renderItems(data)

const selectedFilter =document.querySelector("select[name='mainField']");
selectedFilter.addEventListener("change",(event)=>{
    const optionSelected = event.target.value
    const dataFiltered = filterData(
        data, "mainField",optionSelected
    )
    root.innerHTML=""
    root.innerHTML= renderItems(dataFiltered)
})

const organized = document.querySelector("select[name='name']");

organized.addEventListener("change", (event) => {
    order = sortData(data, "name", event.target.value);
    root.innerHTML = "";
    root.innerHTML = renderItems(order);
});