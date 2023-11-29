// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const dataFiltered = data.filter((personaje) =>
    personaje.facts[filterBy].includes(value)
  );
  return dataFiltered;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "ascendente") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === "descendente") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  } else {
    return data;
  }
};
