// Variables
const resultContainer = document.getElementById('result');
// Events
document.addEventListener('DOMContentLoaded', () => {
  showCars();
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

const cardCar = (car) => {
  const { marca, modelo, year, precio, puertas, color, transmision } = car;
  return `
    <div class="Card-content">
        <div class="Card-content">
            <div class="Card-images">
                <img src="" alt="">
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
