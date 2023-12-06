//En este archivo vas a manejar el enrutamiento de tu aplicación.

let ROUTES = {}; //GUARDA/MAPEA LAS RUTAS DEL SITIO
let rootElement = ""; //REFERENCIA DEL OBJETO HTML DONDE SE PINTARÁ EL CONTENIDO QUE SE ESTÉ GENERANDO

//SETTERS -> setear un valor a nuestras variables / éstas sí se exportan a diferencia de las anteriores
export const setRootElement = (newRootElementValue) => {
  // se exportan para validar si el valor que se desea asignar es: objeto html, si existe
  //objeto html?
  //existe?
  // (re)asignar rootElement:
  rootElement = newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {// optional Throw errors if routes doesn't define an /error route
      // assign ROUTES:
      ROUTES = newRoutesValue;
    }
  }
}

//OPCIONAL: [Se utiliza para crear la url compleja, o solo se puede utilizar una url básica de path sin más parametros]
//const queryStringToObject = (queryString) => {
// convert query string to URLSearchParams
// convert URLSearchParams to an object
// return the object
//}

const renderView = (pathname, props = {}) => { //props={} -> truco: si sucede el caso que no se ingresa un segundo valor a la función, se define que sea objeto vacío para evitar que sea indefinido u otro error
  // clear the root element:
  const root = rootElement;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname:
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    // add the view element to the DOM root element
    root.appendChild(template);
  } else {
    // in case not found render the error view
    root.appendChild(ROUTES["/error"](props));
  }

  // render the correct view passing the value of props
}

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState:
  const URLvisited = window.location.origin + pathname;
  history.pushState({}, "", URLvisited)
  // render the view with the pathname and props (ya creamos la función que lo realiza, solo llamamos):
  renderView(pathname, props);
}


export const onURLChange = (location, props = {}) => { //CUANDO CAMBIE LA URL, SE TIENE QUE CAMBIAR LA VISTA
  // parse the location for the pathname and search params & convert the search params to an object [Cobra más sentido si la url es compleja. i.e. se utiliza querystringtoobject]
  // render the view with the pathname and object:
  navigateTo(location, props); //no tiene props/propiedades
}