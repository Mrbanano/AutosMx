// Variables

//getelements
const marcaSelect = document.getElementById('marca');
const yearSelect = document.getElementById('year');
const minPrecioSelect = document.getElementById('minimo');
const maxPrecioSelect = document.getElementById('maximo');
const puertasSelect = document.getElementById('puertas');
const colorSelect = document.getElementById('color');
const transmisionSelect = document.getElementById('transmision');
const resultContainer = document.getElementById('result');

//DateCreate
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

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
  fillYear();
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
function showCars(cars) {
  cleanResultContainer();
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
    console.log(maxPrecio);
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
