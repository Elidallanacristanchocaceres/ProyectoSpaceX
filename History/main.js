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
    
    // Agregar imágenes específicas para los eventos 1, 2, 3 y 4
    const image = document.createElement('img');
    image.style.height = '150px'; // Ajustar el tamaño de la imagen aquí
    image.style.width = '100%'; // Mantener el ancho al 100%
    
    if (index === 0) {
      image.src = 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_Flight3_Launch_Remote_Gateway_129_A9251_5b57c3c6be.jpg';
      image.alt = 'Falcon reaches Earth orbit';
    } else if (index === 1) {
      image.src = 'https://sxcontent9668.azureedge.us/cms-assets/assets/Crew_9_outsideloop_IMG_9794_desktop_6efa2efe57.jpg';
      image.alt = 'Falcon delivers payload to orbit';
    } else if (index === 2) {
      image.src = 'https://ichef.bbci.co.uk/ace/standard/226/mcs/media/images/48013000/gif/_48013511_falcon9_226x400.gif';
      image.alt = 'First successfull Dragon launch';
    } else if (index === 3) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2015/12/23604164970_b573f4d0f4_k-768x512.jpg';
      image.alt = 'Dragon capsule births with ISS';
    } else if (index === 4) {
      image.src = 'http://www.newspacejournal.com/wp-content/uploads/2013/03/dragon-splashdown.jpg';
      image.alt = 'First Falcon 9 GTO mission';
    } else if (index == 5) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2015/12/f9liftoff-768x478.png';
      image.alt = 'Successfull Falcon 9 landing';
    } else if (index === 6) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2016/04/26289200916_a0b82385f8_z.jpg';
      image.alt = 'Successfull Falcon 9 droneship landing'
    } else if (index === 7) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/03/IMG_0304-1-copy-678x451.jpg';
      image.alt = 'First Falcon 9 reflight';
    } else if (index === 8) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/03/C8Kw-QSVwAAm8FA-2-678x509.jpg';
      image.alt = 'Fairing recovered successfully'
    } else if (index === 9) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/06/35038651646_4b83ab7dce_k-678x452.jpg';
      image.alt = 'First Dragon reflight'
    } else if (index === 10) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2018/02/40126461411_a6e49a61f2_k-678x452.jpg';
      image.alt = 'First Falcon Heavy heliocentric mission'
    } else if (index === 11) {
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2019/03/WS-SpaceX-Dragon-DM1-0121-1.jpeg';
      image.alt = 'Successfull Dragon 2 docking with ISS'
    
    } else if(index === 12){
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2018/02/25254688767_b67e0bf2ac_k.jpg';
      image.alt = 'First flight of Raptor engine'
    
    } else if(index === 13){
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/06/DBap58FUMAAOFU8-678x452.jpg';
      image.alt = 'First Falcon 9 fairing reuse'

    } else if(index === 14){
      image.src = 'https://spaceflightnow.com/wp-content/uploads/2020/05/NASA-DM2-7748.jpeg';
      image.alt = 'SpaceX successfully launches humans to ISS'
    }
     else {
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
