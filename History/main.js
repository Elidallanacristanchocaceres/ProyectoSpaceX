// Variables globales para paginación
let historia = [];
const eventosPorPagina = 5; // Cambia esto si deseas más eventos por página
let paginaActual = 1;

// Función para obtener los datos del API de SpaceX
async function obtenerHistoria() {
  const url = 'https://api.spacexdata.com/v4/history';
  
  try {
    const response = await fetch(url);
    historia = await response.json();
    mostrarHistoria();
    crearBotonesPaginacion();
  } catch (error) {
    console.error('Error al obtener la información:', error);
  }
}

// Función para mostrar los eventos históricos en el DOM
// Función para mostrar los eventos históricos en el DOM
function mostrarHistoria() {
  const historySection = document.getElementById('history');
  historySection.innerHTML = ''; // Limpiar la sección de historia

  // Calcular el índice de inicio y fin
  const inicio = (paginaActual - 1) * eventosPorPagina;
  const fin = inicio + eventosPorPagina;
  
  const eventosPagina = historia.slice(inicio, fin); // Obtener eventos de la página actual

  eventosPagina.forEach((evento, index) => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    
    const title = document.createElement('h2');
    title.textContent = evento.title;
    
    const details = document.createElement('p');
    details.textContent = evento.details ? evento.details : 'No hay detalles disponibles.';
    
    const date = document.createElement('small');
    const eventDate = new Date(evento.event_date_utc);
    date.textContent = `Fecha del evento: ${eventDate.toLocaleDateString()}`;
    
    // Agregar imágenes específicas para los eventos
    const image = document.createElement('img');
    image.style.height = '150px';
    image.style.width = '100%';

    // Lógica de las imágenes según el índice del evento en la lista
    const eventoIndex = inicio + index; // Índice absoluto del evento
    if (eventoIndex < historia.length) {
      switch (eventoIndex) {
        case 0:
          image.src = 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_Flight3_Launch_Remote_Gateway_129_A9251_5b57c3c6be.jpg';
          image.alt = 'Falcon reaches Earth orbit';
          break;
        case 1:
          image.src = 'https://sxcontent9668.azureedge.us/cms-assets/assets/Crew_9_outsideloop_IMG_9794_desktop_6efa2efe57.jpg';
          image.alt = 'Falcon delivers payload to orbit';
          break;
        case 2:
          image.src = 'https://ichef.bbci.co.uk/ace/standard/226/mcs/media/images/48013000/gif/_48013511_falcon9_226x400.gif';
          image.alt = 'First successful Dragon launch';
          break;
        case 3:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2015/12/23604164970_b573f4d0f4_k-768x512.jpg';
          image.alt = 'Dragon capsule births with ISS';
          break
        case 4:
          image.src = 'http://www.newspacejournal.com/wp-content/uploads/2013/03/dragon-splashdown.jpg';
          image.alt = 'First Falcon 9 GTO mission';
          break;
        case 5:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2015/12/f9liftoff-768x478.png';
          image.alt = 'Successfull Falcon 9 landing';
          break;
        case 6:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2016/04/26289200916_a0b82385f8_z.jpg';
          image.alt = 'Successfull Falcon 9 droneship landing'
          break;
        case 7:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/03/IMG_0304-1-copy-678x451.jpg';
          image.alt = 'First Falcon 9 reflight';
          break;
        case 8:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/03/C8Kw-QSVwAAm8FA-2-678x509.jpg';
          image.alt = 'Fairing recovered successfully'
          break;
        case 9:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/06/35038651646_4b83ab7dce_k-678x452.jpg';
          image.alt = 'First Dragon reflight'
          break;
        case 10:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2018/02/40126461411_a6e49a61f2_k-678x452.jpg';
          image.alt = 'First Falcon Heavy heliocentric mission'
          break;
        case 11:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2019/03/WS-SpaceX-Dragon-DM1-0121-1.jpeg';
          image.alt = 'Successfull Dragon 2 docking with ISS'
          break;
        case 12:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2018/02/25254688767_b67e0bf2ac_k.jpg';
          image.alt = 'First flight of Raptor engine'
          break;
        case 13:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2017/06/DBap58FUMAAOFU8-678x452.jpg';
          image.alt = 'First Falcon 9 fairing reuse'
        break;
        case 14:
          image.src = 'https://spaceflightnow.com/wp-content/uploads/2020/05/NASA-DM2-7748.jpeg';
          image.alt = 'SpaceX successfully launches humans to ISS'
        break;
        // Añade los demás casos según el índice...
        default:
          image.src = obtenerImagenAleatoria(); // Función para obtener una imagen aleatoria si no hay una específica
          image.alt = 'Imagen del evento de SpaceX';
      }
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
      articleLink.classList.add('article-link');
      eventDiv.appendChild(articleLink);
    }

    historySection.appendChild(eventDiv); 
  });
}


// Crear botones de paginación
function crearBotonesPaginacion() {
  const paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = ''; // Limpiar los botones de paginación

  const totalPaginas = Math.ceil(historia.length / eventosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('pagination-button');
    button.onclick = () => {
      paginaActual = i; // Cambiar a la página seleccionada
      mostrarHistoria(); // Mostrar la historia de la página seleccionada
    };

    paginationDiv.appendChild(button);
  }

  // Añadir un indicador de página actual
  const currentPageIndicator = document.createElement('span');
  currentPageIndicator.textContent = `Página ${paginaActual} de ${totalPaginas}`;
  paginationDiv.appendChild(currentPageIndicator);
}

// Función para devolver una imagen aleatoria local
function obtenerImagenAleatoria() {
  const imagenes = [
    './images/spacex1.jpg',
    './images/spacex2.jpg',
    './images/spacex3.jpg'
  ];
  
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  return imagenes[indiceAleatorio];
}

// Llamar a la función para obtener la historia
obtenerHistoria();
