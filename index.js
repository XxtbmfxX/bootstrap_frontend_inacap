// Importar clases desde objects.js
import { Producto, Cesta } from './objects.js';

// Creando productos
const completoNormal = new Producto('Completo', 'normal', ['queso', 'americana'], ['ajo', 'mostaza']);
const completoXL = new Producto('Completo', 'XL', ['queso', 'americana'], ['ajo', 'queso']);
const churrascoNormal = new Producto('Churrasco', 'normal', ['queso', 'chucrut'], ['queso', 'aceituna', 'ketchup']);
const churrascoXL = new Producto('Churrasco', 'XL', ['queso', 'chucrut'], ['queso', 'aceituna']);
const asNormal = new Producto('As', 'normal', ['americana'], ['ajo', 'queso']);
const asXL = new Producto('As', 'XL', ['americana'], ['ajo', 'queso']);


const collapseOne = document.getElementById("collapseOne")

// Gestionando la cesta
const miCesta = new Cesta();

// Añadiendo productos a la cesta
miCesta.añadirProducto(completoNormal);
miCesta.añadirProducto(completoXL);
miCesta.añadirProducto(churrascoNormal);
miCesta.añadirProducto(churrascoXL);
miCesta.añadirProducto(asNormal);
miCesta.añadirProducto(asXL);


// crear una función para listar de una sola vez

const producto = `
    <div class="card">
                <img src="" alt="imagen de la comida" srcset="" />
                <div class="d-flex justify-content-between">
                  <h4>Nombre de la comida</h4>
                  <p>$$$precio</p>
                </div>
                <p>Descripción de la comida en cuestión</p>
              </div>
          
`


const listaProductos = miCesta.devolverComponentesProductos()

console.log(listaProductos)

function agregarACesta(listaProductos) {
    listaProductos.forEach(element => {
        
        collapseOne.innerHTML += element
    });
}


agregarACesta(listaProductos)
