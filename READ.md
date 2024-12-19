# Vue 3 Composition API

## Introducción

En este repositorio se encuentra el ejemplo de la documentación de Vue 3 Composition API.
y un back end de ejemplo para el ejemplo.

## Instalación

Para instalar el ejemplo, primero debes clonar el repositorio y luego ejecutar los siguientes comandos:

```bash
npm install
npm run serve
```

Luego abre el navegador en http://localhost:8080/

## Ejemplo

El ejemplo está dividido en tres partes:

- La parte front-end, que se encuentra en la carpeta `view-libreria`.
- El back end, que se encuentra en la carpeta `back`.
- El archivo `db.json`, que contiene los datos de ejemplo.

### Parte front-end

La parte front-end se encuentra en la carpeta `view-libreria`. En esta parte se encuentra el siguiente archivo:

- `App.vue`: Es la entrada principal de la aplicación. Contiene la configuración de Vue y el componente `RouterLink` y `RouterView` que se utilizan para navegar entre las diferentes vistas.
- `main.js`: Contiene la configuración de Vue y el componente `RouterLink` y `RouterView` que se utilizan para navegar entre las diferentes vistas.
- `router/index.js`: Contiene la configuración de Vue Router y las rutas de la aplicación.
- `views/LibrosView.vue`: Es la vista principal de la aplicación. Contiene la lista de libros y las acciones para agregar, editar y eliminar libros.
- `views/NuevoLibroView.vue`: Es la vista para agregar un nuevo libro. Contiene un formulario para agregar los datos del libro.
- `views/EditarLibroView.vue`: Es la vista para editar un libro. Contiene un formulario para editar los datos del libro.

### Parte back-end

La parte back-end se encuentra en la carpeta `back`. En esta parte se encuentra el siguiente archivo:

- `app.js`: Contiene la configuración de Express y el servidor de la aplicación.
- `db.json`: Contiene los datos de ejemplo.
- `libros.js`: Contiene la función para agregar, eliminar, actualizar y obtener los datos de los libros.

### Archivo db.json

Este archivo contiene los datos de ejemplo para los libros. Cada libro está representado por un objeto con las siguientes propiedades:

- `id`: Identificador único del libro.
- `titulo`: Título del libro.
- `autor`: Autor del libro.
- `editorial`: Editorial del libro.
- `categoria`: Categoría del libro.
- `fecha`: Fecha de publicación del libro.
- `paginas`: Número de páginas del libro.
- `stock`: Número de stock del libro.
- `imagen`: URL de la imagen del libro.
- `disponibilidad`: Indica si el libro está disponible o no.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Puedes ver el archivo `LICENSE` para más detalles.

## Autor

[GatroxM](https://github.com/tavox)  
[Portafolio](https://gatroxm.github.io/)
