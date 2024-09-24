// Valor de los medidores
const values = {
  'fill-1': 2.69,   
  'fill-2': 2.41,   
  'fill-3': 14.00,  
  'fill-4': 0.07,   
  'fill-5': 26.53,  
  'fill-6': 20.00,  
  'fill-7': 0.00,   
  'fill-8': 0.00    
};

function setManometro(id, value, maxValue) {
  const manometro = document.getElementById(id);
  const dashoffset = 251 - (value / maxValue) * 251;
  manometro.style.strokeDashoffset = dashoffset;
  document.getElementById('value-' + id.split('-')[1]).textContent = value.toFixed(2);
}

function updateManometro() {
  setManometro('fill-1', values['fill-1'], 15); // PPO2
  setManometro('fill-2', values['fill-2'], 50); // CABIN TEMP
  setManometro('fill-3', values['fill-3'], 30); // CABIN PRESSURE
  setManometro('fill-4', values['fill-4'], 1);  // CO2
  setManometro('fill-5', values['fill-5'], 50); // LOOP A
  setManometro('fill-6', values['fill-6'], 50); // LOOP B
  setManometro('fill-7', values['fill-7'], 100); // NET PWR 1
  setManometro('fill-8', values['fill-8'], 100); // NET PWR 2
}

updateManometro(); 
