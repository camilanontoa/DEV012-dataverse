import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('filterData', () => {

  it('Mujeres especialistas en Matemáticas', () => {
    const mujeresMatematicas =filterData (fakeData, "mainField", "Matemáticas")
    expect(mujeresMatematicas.length).toBe(1);
  });
});

describe('filterData', () => {

  it('Mujeres especialistas en Química', () => {
    const mujeresQuimicas =filterData (fakeData, "mainField", "Química")
    expect(mujeresQuimicas.length).toBe(2);
  });
});

describe('filterData', () => {

  it('Mujeres especialistas en Física', () => {
    const mujeresFisicas =filterData (fakeData, "mainField", "Física")
    expect(mujeresFisicas.length).toBe(1);
  });
});

describe('sortData', () =>{
  it ('arreglo ordenado de forma ascendente',() => { 
    const unsortedData = [
      {name: "Sau Lan Wu"}, 
      {name: "Rosalind Franklin"}, 
      {name: "Lise Meitner"}, 
    ]
    const sortedData = sortData (unsortedData,"ascendente");

    expect(sortedData).toEqual= ([
      {name: "Lise Meitner"},
      {name: "Rosalind Franklin"},
      {name: "Sau Lan Wu"}, 
    ]);
  });
})

describe('sortData', () =>{
  it ('arreglo ordenado de forma descendente',() => { 
    const unsortedData = [
      {name: "Sau Lan Wu"}, 
      {name: "Rosalind Franklin"}, 
      {name: "Lise Meitner"}, 
    ]
    const sortedData = sortData (unsortedData,"descendente");

    expect(sortedData).toEqual= ([
      {name: "Sau Lan Wu"},
      {name: "Rosalind Franklin"},
      {name: "Lise Meitner"}, 
    ]);
  });
})