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

const emptyCardCar = () => {
  return `
      <div class="Card-Empty-content">
          <div class="Card-Empty-content">
              <div class="Card-Empty-images">
                  <img src="" alt="autosMx no encontro el carro que buscar pero contactanos para brindarte asesoramiento personalizado">
              </div>
              <div class="Card-body">
                  <p class="Card-Car-marca">texto de ejemplo</p>
              </div>
          </div>
      </div>
      `;
};
