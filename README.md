# Dataverse Chat
![Logo del proyecto](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/c847600f51222a6e4c4ff75f9e125a845056eab8/src/imagenes/LogoConNombre.png)

Proyecto desarrollado para el Bootcamp de Laboratoria en Desarrollo Web.

Esta Single Page Application (SPA) permite visualizar un conjunto de datos cuya temática es "películas", esta información fue generada con prompting utilizando ChatGPT. Permite filtrar por categoría y año de estreno, ordenar de ascendente y descendente según su nombre, y se visualizan dos estadísticas: número de películas mostradas y su porcentaje promedio de aceptación según la crítica. Contiene una vista para consultar información detallada de cada película y su protagonista con la posibilidad de interactuar con éste o todos los incluidos a través de un sistema de chat impulsado por la [API de OpenAI](https://openai.com/product).

***

## Índice

* [1. Descripción del proyecto](#descripción-del-proyecto)
* [2. Características técnicas](#características-técnicas)
* [3. Deploy](#deploy)
* [4. Pruebas](#pruebas)
* [5. Tecnologías](#tecnologías)
* [6. Autora](#autora)

## Descripción del proyecto
La SPA realizada se ha desarrollado para ser utilizada por un usuario que desee encontrar diversos datos sobre películas. Este proyecto es aplicable en el ámbito del entretenimiento para un usuario que disfrute de conocer más sobre películas, así como en el ámbito académico de un estudiante que desee recabar información sobre el arte del cine.

![Definicion de producto](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/definicionproducto.png)

Con el fin de descubrir las necesidades el usuario, se realizaron 5 historias de usuario.
![Historias de usuario](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/historiasdeusuario.png)

A partir de lo anterior, se realizó un prototipado de alta fidelidad con interacción a través de Figma. A continuación se encuentra la versión mobile y la de escritorio que se crearon con el fin de seguir la metodología Mobile First:
[Prototipo de alta resolución para móviles](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=393-361&t=OfUPieCaUroi7FCw-1&scaling=scale-down&page-id=393%3A23&starting-point-node-id=393%3A361&mode=design)
//
[Prototipo de alta resolución para escritorio](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=237-144&t=Z1IuBdZn4yvCWZkQ-1&scaling=scale-down&page-id=4%3A23&starting-point-node-id=237%3A144&mode=design)

Para su desarrollo se realizó una planeación con los objetivos que se pueden observar en las siguientes imágenes, éstos se plantearon en la organización de la definición de terminado según los requerimientos del bootcamp y los descubiertos por las historias de usuario.

![Planificación del proyecto](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/planeacion.png)

![Definicion de terminado](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/definicionterminado.png)

Tras el inicio del proyecto se eligió la temática de películas, por lo que, con apoyo de ChatGPT, se generaron 24 datos cuyas características eran basadas en 4 géneros y los siguientes:
![Prompt utilizado](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/Laboratoria%20Prototipos.gif)

Una vez desarrollado el prototipado se realizaron test de usabilidad a través del link ya compartido, se recibieron comentarios tanto del diseño como la facilidad de acceso a las opciones que se solicitaron explorar. A continuación un listado de los problemas presentados:
- [ ] No se ubicaba el botón de "datos extra" fácilmente.
- [ ] Se cuestionó la forma de visualizar la categoría elegida más un filtro extra.
- [ ] Se consideró poco intuitivo el elegir un tipo de filtro y después elegir la opción de aquel tipo.
- [ ] Se consideró una ruta larga elegir una categoría y en otro menú elegir el filtrado extra.

Tras los comentarios se optó por emplear un sitio web más simple con el fin de mostrar el contenido y menú en un solo sitio, los filtros se disminuyeron y facilitaron su acceso, además en una primer etapa se decidió por eliminar el primer filtrado "obligatorio" por categoría. Ya desarrollado el proyecto se realizó una prueba de usabilidad a una menor cantidad de personas, en ésta se recibieron comentarios sobre la facilidad de entendimiento sobre el uso del sitio web.

## Características técnicas
El boilerplate del proyecto se divide en un archivo `dataset.js` que contiene el conjunto de datos generados a través de ChatGPT sobre 24 películas de 4 diferentes géneros, en un archivo `index.html`, `style.css` que mantienen la estructura básica y diseño del sitio web, y en tres archivos de JavaScript; `dataFunctions.js`, contiene tres funciones para el filtrado, ordenado y calculo de dos estadísticas, `view.js` en el cual se renderiza el conjunto de datos y `main.js`, el cual mantiene la interacción con el DOM.

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
  vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

### Funcionalidades del proyecto
- `filterData(data, filterBy, value)`: esta función recibe tres parámetros. El primer parámetro, data, entrega los datos. El segundo parámetro, filterBy, indica con respecto a cuál de los campos de la data se quiere filtrar. El tercer parámetro, value, indica el valor de campo que se desea filtrar.
- `sortData(data, sortBy, sortOrder)`: esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, entrega los datos. El segundo parámetro, sortBy, indica con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, refiere si se desea ordenar de manera ascendente o descendente.
- `computeStats(data)`: la función compute o calcular, realiza dos cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada, esta función incluye la cantidad de películas visualizadas y el cálculo del promedio del porcentaje de aceptación según la crítica de las películas visualizadas.
- `test/dataFunctions.spec.js`: En este archivo se crearon las pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js (filterBy, sortBy, computeStats).
-  `renderItems(data)`: esta función recibe el arreglo de data para renderizar los elementos de cada item según las características requeridas.

## Deploy
La aplicación se encuentra publicado a través de Netlify, accesible a todo usuario: [Link](https://lidiaaliciajg.github.io/Laboratoria-dataverse/src/index.html).

![Vista del sitio web](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/vista.png)


## Pruebas
El proyecto contiene una configuración de 3 test donde se evalúa el funcionamiento y requirimientos esperados. Además se incluyó un test de pruebas unitarias, realizado con Jest, para evaluar las funciones realizadas de filtrado, ordenado y calculo de estadísticas.

## Tecnologías
* HTML
* CSS
* JavaScript
* Jest
* Figma
* OpenAI - API y ChatGPT
* Netlify

## Autora

| [<img src="https://github.com/LidiaAliciaJG.png?size=139">](https://github.com/LidiaAliciaJG) | [Lidia Alicia JG](https://github.com/LidiaAliciaJG) <br> <sub>[Sitio web](https://lidiaaliciajg.github.io/)</sub> <br> <sub>[LinkedIn](https://www.linkedin.com/in/lidiaaliciajg/)</sub> |
| :---: | :---: |



* Tiene un `README.md` con la siguiente:
  - [ ] _Definición del producto_ clara e informativa
  - [ ] Historias de usuaria
  - [ ] Un _sketch_ de la solución (prototipo de baja fidelidad) y
    _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [ ] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`
