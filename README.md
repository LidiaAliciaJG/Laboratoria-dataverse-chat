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

A partir de lo anterior, se realizó un prototipado de alta fidelidad con interacción a través de Figma. A continuación se encuentra la versión mobile creado con el fin de seguir la metodología Mobile First:
[Prototipo de alta resolución para móviles](https://www.figma.com/proto/KfLFmZHdVpAyXlQqDKmcKV/Dataverse-Chat-Project?type=design&node-id=393-361&t=lPhM18fH6y4CJzXe-1&scaling=scale-down&page-id=393%3A23&starting-point-node-id=393%3A361&mode=design)

Para su desarrollo se realizó una planeación con los objetivos que se pueden observar en las siguientes imágenes, éstos se plantearon en la organización de la definición de terminado según los requerimientos del bootcamp y los descubiertos por las historias de usuario.

![Planificación del proyecto](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/planeacion.png)

![Definicion de terminado](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/definicionterminado.png)

Tras el inicio del proyecto se eligió la temática de películas, por lo que, con apoyo de ChatGPT, se generaron 24 datos cuyas características eran basadas en 4 géneros y los siguientes:
![Prompt utilizado](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/Laboratoria%20Prototipos.gif)

Una vez desarrollado el prototipado se realizaron test de usabilidad a través del link ya compartido, se recibieron comentarios tanto del diseño como la facilidad de acceso a las opciones que se solicitaron explorar. A continuación un listado de los problemas presentados:
- [ ] No se accedía facilmente al botón hamburguesa para ingresar al menú, solicitaron un menú que permaneciera abierto.
- [ ] Se cuestionó la forma de visualizar las tarjetas de las películas ya que en movil la imagen abarcaba más vista.
- [ ] La vista de personajes en el chat grupal no era intuitivo de explorar aún con los botones.
- [ ] El chat deba a entender que era entre los usuarios.

Tras los comentarios se optó por emplear un sitio web más simple con el fin de mostrar el contenido y menú en un solo sitio. Se realizó un diseño de tarjetas para visualizar la imagen e información a la par, con un pequeño banner inferior que indica "charlar con el protagonista". En cuando a la vista del chat grupal se optó por una visualización de la mitad de un personaje al final para dar a entender el movimiento del scroll. Al finalizar el proyecto se realizó un último test de usabilidad, cuyos resultados fue una mayor facilidad de uso.

## Características técnicas
El boilerplate del proyecto se divide en un archivo `dataset.js` dentro de la carpeta `data` que contiene el conjunto de datos generados a través de ChatGPT sobre 24 películas de 4 diferentes géneros, en un archivo `index.html`, `style.css` que mantienen la estructura básica y diseño del sitio web. En la carpeta `views` se encuentran las vistas a renderizar, la carpeta `lib` contiene las funciones de filtrado, ordenado y sus estadísticas además de la solicitud para la API de OpenAI. También se encuentra la carpeta `components` donde se colocaron diversos componentes a utilizar en las vistas. Finalmente contiene un `router.js` para la navegación en la SPA.

### Funcionalidades del proyecto
Este proyecto se desarrolla como una Single Page Application (SPA), con este fin se realizó un router que permite la navegación que renderiza las diferentes vistas sin cargar el sitio web nuevamente, simulando las URL visitadas y guardando el historial.

Se integró una API de OpenAI para crear una chat que se visualiza en la vista `/panel` y `/personaje?id`. Este permite la interacción con el personaje elegido o todos del dataset creado ya que se envía un prompt indicando el personaje que debe representar junto con el historial de conversación.

Este proyecto trabaja con asíncronía en JavaScript y contiene responsividad en sus vistas.

## Deploy
La aplicación se encuentra publicado a través de Netlify, accesible a todo usuario: [Link](dataverse-chat-by-lajg.netlify.app/).

![Vista del sitio web](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/5559e14614f99dea2a75926fa49f1223a883f35b/src/imagenes/vista.png)


## Pruebas
El proyecto contiene una configuración de 3 test realizados en Jest donde se evalúa el funcionamiento y requirimientos esperados como las funciones realizadas de filtrado, ordenado y calculo de estadísticas, el uso de la API y el contenido de ciertos elementos en las vistas. Evaluandose a través de `npm test`

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