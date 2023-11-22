export function personaje(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'PÁGINA DEL PERSONAJE';
    return viewEl;
  }
/*
  // import navigateTo

export const Home = (props) => {
    // ...
    linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
    // return el
  }
  //En sus vistas, puede utilizar enlaces de anclaje <a> o <button> con navigateTo para navegar a diferentes rutas. Recuerde que navigateTo debe tomar argumentos para pathname y props


  export const Home = (props) => {
    const el = document.createElement('div');
    el.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
    console.log(props.id);
    return el;
  }
  //En una de sus vistas, experimente leyendo los parámetros de search de la URL y utilizándolos en el vista. Las funciones de vista deben tener un parámetro, llamémos props, que es un objeto con que podemos pasar información a las vistas.

  //Luego, en la URL, agregue los parámetros de búsqueda http://localhost[PORT]/?name=Xochitl&id=100.

//Recuerde que también puede pasar props con navigateTo con el segundo argumento.

navigateTo("/", { nombre: "Xóchitl", id: "100"});
*/