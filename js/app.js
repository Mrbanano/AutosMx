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
  showCars();
  fillYear();
});

//EventListener Selects
marcaSelect.addEventListener('change', (e) => {
  dataSearch.marca = e.target.value;
});
yearSelect.addEventListener('change', (e) => {
  dataSearch.year = e.target.value;
});
minPrecioSelect.addEventListener('change', (e) => {
  dataSearch.minPrecio = e.target.value;
});
maxPrecioSelect.addEventListener('change', (e) => {
  dataSearch.maxPrecio = e.target.value;
});
puertasSelect.addEventListener('change', (e) => {
  dataSearch.puertas = e.target.value;
});
transmisionSelect.addEventListener('change', (e) => {
  dataSearch.transmision = e.target.value;
});
colorSelect.addEventListener('change', (e) => {
  dataSearch.color = e.target.value;
  console.log(dataSearch);
});

// Funtions
function showCars() {
  cars.forEach((car) => {
    const carHtml = document.createElement('div');
    carHtml.className = 'Card';
    carHtml.innerHTML = cardCar(car);
    resultContainer.appendChild(carHtml);
  });
}

function fillYear() {
  for (let i = maxYear; i > minYear - 1; i--) {
    const yearOption = document.createElement('option');
    yearOption.value = i;
    yearOption.textContent = i;
    year.appendChild(yearOption);
  }
}

//utils
const cardCar = (car) => {
  const { image, marca, modelo, year, precio, puertas, color, transmision } =
    car;
  return `
    <div class="Card-content">
        <div class="Card-content">
            <div class="Card-images">
                <img src="${image}" alt="autosMx Vende este carro ${marca} modelo ${modelo} contactanos para mas informacion">
            </div>
            <div class="Card-body">
                <p class="Card-Car-marca">${marca}</p>
                <p class="Card-Car-year">${year}</p>
                <p class="Card-Car-modelo">${modelo}</p>
                <p class="Card-Car-precio">${precio}</p>
                <p class="Card-Car-puertas">${puertas}</p>
                <p class="Card-Car-color">${color}</p>
                <p class="Card-Car-transmision">${transmision}</p>
            </div>
        </div>
    </div>
    `;
};
