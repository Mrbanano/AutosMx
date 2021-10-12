// Variables

//getelements
//Select
const marcaSelect = document.getElementById('marca');
const yearSelect = document.getElementById('year');
const minPrecioSelect = document.getElementById('minimo');
const maxPrecioSelect = document.getElementById('maximo');
const puertasSelect = document.getElementById('puertas');
const colorSelect = document.getElementById('color');
const transmisionSelect = document.getElementById('transmision');
//Container
const resultContainer = document.getElementById('result');
const countSpan = document.getElementById('count');
//DateCreate
const maxYear = new Date().getFullYear() + 1;
const minYear = maxYear - 10;
// Current
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

//Search Object
const dataSearch = {
  marca: '',
  year: 0,
  minPrecio: 0,
  maxPrecio: 0,
  puertas: 0,
  color: '',
  transmision: '',
};

// Events
document.addEventListener('DOMContentLoaded', () => {
  showCars(cars);
  fillMarca();
  fillYear();
  fillPrecios();
});

//EventListener Selects
marcaSelect.addEventListener('change', (e) => {
  dataSearch.marca = e.target.value;
  filterData();
});
yearSelect.addEventListener('change', (e) => {
  dataSearch.year = parseInt(e.target.value);
  filterData();
});
minPrecioSelect.addEventListener('change', (e) => {
  dataSearch.minPrecio = e.target.value;
  filterData();
});
maxPrecioSelect.addEventListener('change', (e) => {
  dataSearch.maxPrecio = e.target.value;
  filterData();
});
puertasSelect.addEventListener('change', (e) => {
  dataSearch.puertas = parseInt(e.target.value);
  filterData();
});
transmisionSelect.addEventListener('change', (e) => {
  dataSearch.transmision = e.target.value;
  filterData();
});
colorSelect.addEventListener('change', (e) => {
  dataSearch.color = e.target.value;
  filterData();
});

// Funtions

function countResult(result) {
  const count = result.length;
  countSpan.innerText = count;
}

function showCars(cars) {
  cleanResultContainer();
  countResult(cars);
  cars.forEach((car) => {
    const carHtml = document.createElement('div');
    carHtml.className = 'Card';
    carHtml.innerHTML = cardCar(car);
    resultContainer.appendChild(carHtml);
  });
}
function noFoundCars() {
  cleanResultContainer();
  const carHtml = document.createElement('div');
  carHtml.className = 'Card-Empty';
  carHtml.innerHTML = emptyCardCar();
  resultContainer.appendChild(carHtml);
}

function cleanResultContainer() {
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
}

function fillYear() {
  for (let i = maxYear; i > minYear - 1; i--) {
    const yearOption = document.createElement('option');
    yearOption.value = i;
    yearOption.textContent = i;
    year.appendChild(yearOption);
  }
}

function fillMarca() {
  let Options = [];
  cars.forEach((car) => {
    const { marca } = car;
    const found = Options.includes(marca);
    if (!found) {
      Options.push(marca);
    }
  });
  const options = Options.sort();
  options.forEach((option) => {
    const marcaOption = document.createElement('option');
    marcaOption.value = option;
    marcaOption.textContent = option;
    marcaSelect.appendChild(marcaOption);
  });
}

function fillPrecios() {
  for (let i = minPrecioInitial; i < maxPrecioInitial + 10000; i += 10000) {
    const minPrecioOption = document.createElement('option');
    const maxPrecioOption = document.createElement('option');
    minPrecioOption.value = i;
    maxPrecioOption.value = i;
    minPrecioOption.textContent = formatter.format(i);
    maxPrecioOption.textContent = formatter.format(i);
    minPrecioSelect.appendChild(minPrecioOption);
    maxPrecioSelect.appendChild(maxPrecioOption);
  }
}

function filterData() {
  const result = cars
    .filter(filterMarca)
    .filter(filterYear)
    .filter(filterMin)
    .filter(filterMax)
    .filter(filterPuertas)
    .filter(filterColor)
    .filter(filterTransmision);

  if (result.length > 0) {
    showCars(result);
  } else {
    noFoundCars();
    countResult([]);
  }
}

// Higher-Order Functions
function filterMarca(car) {
  const { marca } = dataSearch;
  if (marca) {
    return car.marca === marca;
  }
  return car;
}

function filterYear(car) {
  const { year } = dataSearch;
  if (year) {
    return car.year === year;
  }
  return car;
}

function filterMin(car) {
  const { minPrecio } = dataSearch;
  if (minPrecio) {
    return car.precio >= minPrecio;
  }
  return car;
}
function filterMax(car) {
  const { maxPrecio } = dataSearch;
  if (maxPrecio) {
    return car.precio <= maxPrecio;
  }
  return car;
}
function filterPuertas(car) {
  const { puertas } = dataSearch;
  if (puertas) {
    return car.puertas === puertas;
  }
  return car;
}
function filterColor(car) {
  const { color } = dataSearch;
  if (color) {
    return car.color === color;
  }
  return car;
}
function filterTransmision(car) {
  const { transmision } = dataSearch;
  if (transmision) {
    return car.transmision === transmision;
  }
  return car;
}
