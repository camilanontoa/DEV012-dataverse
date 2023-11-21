export const renderItems = (data) => {
  let cartas ="";
  data.forEach((element) => {
    cartas += `<li class="Info">
    <dl itemscope itemtype="WomenInTech">
  <img src="${element.imageUrl}" alt="${element.name}" />
  <dt>Nombre</dt><dd itemprop="name">${element.name}</dd>
  <dt>Descripción</dt><dd itemprop="description">${element.description}</dd>
  <dt>Año de nacimiento</dt><dd itemprop="yearOfBirth">${element.yearOfBirth}</dd>
  <dt>Lugar de nacimiento</dt><dd itemprop="placeOfBirth">${element.placeOfBirth}</dd>
  <dt>Campo de desempeño</dt><dd itemprop="mainField">${element.facts.mainField}</dd>
</dl>  </li>

    `
  }
  )
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  return `<ul> ${cartas} </ul>`;
};

