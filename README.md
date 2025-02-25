# 🚀 Gestión de Cohetes SpaceX

## 🎯 Objetivo
Desarrollar una interfaz interactiva para mostrar información sobre los cohetes de SpaceX, utilizando su API para obtener datos en tiempo real y permitiendo a los usuarios explorar los diferentes cohetes disponibles.

## 📦 Módulos Importados

### 🔌 Funciones API
- **getAllRockets()**: Recupera la lista completa de cohetes disponibles en SpaceX.
- **getAllRocketsId(id)**: Obtiene información detallada de un cohete específico utilizando su ID.

### 🌍 Variables Globales
- **nameRockets**: Almacena y muestra el nombre del cohete seleccionado.
- **load** y **clear**: Gestionan el estado de carga en la interfaz y limpian elementos previos antes de mostrar nueva información.

### 📊 Funciones de Información
- **informationRockets()**: Presenta el país de origen y la descripción del cohete.
- **informationLaunchCostRocket()**: Muestra el costo de lanzamiento del cohete.
- **informationFirstFlightRocket()**: Indica la fecha del primer vuelo del cohete.
- **informationWebRocket()**: Proporciona un enlace a la Wikipedia del cohete.

### 📈 Funciones de Progreso
- **progressRocketWeight()**: Representa el peso total del cohete.
- **progressPayloadWeights()**: Muestra el peso del payload que puede transportar el cohete.
- **progressHeightRocket()**: Visualiza la altura total del cohete.
- **progressDiameterRocket()**: Muestra el diámetro del cohete.
- **progressSecondStageDiameterRocket()**: Representa el diámetro de la segunda etapa del cohete.
- **progressSecondStageHeightRocket()**: Muestra la altura de la segunda etapa del cohete.

### 🗃️ Funciones de Tablas
- **tableRocketColum1()** y **tableRocketColum2()**: Presentan la información del cohete en tablas organizadas.

### 🖼️ Imágenes
- **imageRockets()**: Muestra imágenes relevantes del cohete, mejorando la visualización y comprensión de los modelos.

## ⚙️ Funciones Principales

### 📜 getRocketsId(e)
- **Descripción**: Maneja el evento de clic en los elementos de la paginación para cada cohete.
- **Proceso**: Resalta el cohete seleccionado y actualiza la interfaz con su información detallada.

### 📖 paginationRockets()
- **Descripción**: Crea una interfaz de paginación para navegar entre los diferentes cohetes.
- **Proceso**: Genera enlaces para cada cohete y activa automáticamente el primer cohete.

## 📝 Consideraciones Técnicas
- **Interacción Dinámica**: Proporciona una experiencia fluida al interactuar con los datos en tiempo real.
- **Organización del Código**: Estructurado en módulos para facilitar el mantenimiento.
- **Responsividad**: Adaptable a diferentes dispositivos y tamaños de pantalla.
_____
### 📬 Contacto
- 📧 Correo electrónico: cristanchodayana062017@gmail.com

- 💼 LinkedIn: [Elidallana Cristancho Caceres](https://www.linkedin.com/in/elidallanacristancho/)

¡Gracias por ser parte de esta aventura! 🚀✨

