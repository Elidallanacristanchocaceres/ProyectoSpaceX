// Función para obtener los datos del API de SpaceX
async function obtenerHistoria() {
  const url = 'https://api.spacexdata.com/v4/history';
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    mostrarHistoria(data);
  } catch (error) {
    console.error('Error al obtener la información:', error);
  }
}

// Función para mostrar los eventos históricos en el DOM
// Función para mostrar los eventos históricos en el DOM
// Función para mostrar los eventos históricos en el DOM
// Función para mostrar los eventos históricos en el DOM
function mostrarHistoria(historia) {
  const historySection = document.getElementById('history');
  
  historia.forEach((evento, index) => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    
    const title = document.createElement('h2');
    title.textContent = evento.title;
    
    const details = document.createElement('p');
    details.textContent = evento.details ? evento.details : 'No hay detalles disponibles.';
    
    const date = document.createElement('small');
    const eventDate = new Date(evento.event_date_utc);
    date.textContent = `Fecha del evento: ${eventDate.toLocaleDateString()}`;
    
    // Agregar imágenes específicas para el primer y segundo evento
    const image = document.createElement('img');
    image.style.height = '150px'; // Ajustar el tamaño de la imagen aquí
    image.style.width = '100%'; // Mantener el ancho al 100%
    
    if (index === 0) {
      image.src = 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_Flight3_Launch_Remote_Gateway_129_A9251_5b57c3c6be.jpg';
      image.alt = 'Imagen del primer evento de SpaceX';
    } else if (index === 1) {
      image.src = 'https://sxcontent9668.azureedge.us/cms-assets/assets/Crew_9_outsideloop_IMG_9794_desktop_6efa2efe57.jpg';
      image.alt = 'Imagen del segundo evento de SpaceX';
    } else {
      image.src = obtenerImagenAleatoria(); // Función para obtener una imagen
      image.alt = 'Imagen del evento de SpaceX';
    }

    eventDiv.appendChild(image); // Añadir la imagen al div del evento
    eventDiv.appendChild(title);
    eventDiv.appendChild(details);
    eventDiv.appendChild(date);
    
    // Agregar enlaces si están disponibles al final
    if (evento.links && evento.links.article) {
      const articleLink = document.createElement('a');
      articleLink.href = evento.links.article;
      articleLink.target = '_blank';
      articleLink.textContent = 'Ver artículo';
      articleLink.classList.add('article-link'); // Puedes agregar una clase para estilizar si lo deseas
      eventDiv.appendChild(articleLink); // Mover aquí
    }

    historySection.appendChild(eventDiv); 
  });
}




// Función para devolver una imagen aleatoria local
function obtenerImagenAleatoria() {
  const imagenes = [
    './images/spacex1.jpg', // Reemplaza con el nombre de tus imágenes locales
    './images/spacex2.jpg',
    './images/spacex3.jpg'
  ];
  
  // Seleccionar una imagen aleatoria de la lista
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  return imagenes[indiceAleatorio];
}


// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', obtenerHistoria);
