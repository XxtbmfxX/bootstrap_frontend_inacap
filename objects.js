// Clase Producto
class Producto {
    constructor(nombre, tamaño, agregados, salsas) {
        this.nombre = nombre;
        this.tamaño = tamaño; // "normal" o "XL"
        this.agregados = agregados; // array de agregados
        this.salsas = salsas; // array de salsas
        this.precio = this.calcularPrecio();
    }

    // Método para calcular el precio basado en el nombre, tamaño del producto y salsas
    calcularPrecio() {
        const preciosBase = {
            'Completo': { 'normal': 2000, 'XL': 3000 },
            'Churrasco': { 'normal': 4990, 'XL': 8000 },
            'As': { 'normal': 3500, 'XL': 6000 }
        };

        let precio = preciosBase[this.nombre][this.tamaño] || 0;

        // Salsas que tienen un costo adicional
        const salsasPagas = ['queso', 'americana', 'chucrut', 'ajo', 'aceituna'];
        this.salsas.forEach(salsa => {
            if (salsasPagas.includes(salsa.toLowerCase())) {
                precio += 200;
            }
        });

        return precio;
    }
}

// Clase Cesta
class Cesta {
    constructor() {
        this.productos = [];
    }

    // Método para añadir producto a la cesta
    añadirProducto(producto) {
        this.productos.push(producto);
    }

    // Método para eliminar producto de la cesta por índice
    eliminarProducto(index) {
        if (index > -1 && index < this.productos.length) {
            this.productos.splice(index, 1);
        } else {
            console.log("Índice de producto no válido");
        }
    }


    devolverComponentesProductos() {
        if (this.productos.length === 0) {
            return "la cesta está vacía"
        }
        else {

            let listaProductos = [];


            this.productos.forEach((producto, index) => {
                listaProductos.push( 
                    `
                <div class="card">
                    <img src="" alt="imagen de la comida" srcset="" />
                    <div class="d-flex justify-content-between">
                        <h4>${producto.nombre} -- ${index} </h4>
                        <p>${producto.precio}</p>
                        <p>${producto.tamaño}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h4>Agregados: ${producto.agregados.join(', ')}</h4>
                        <h4>Salsas: ${producto.salsas.join(', ')}</h4>
                    </div>
                    <p>Descripción de la comida en cuestión</p>
                </div>`
            )
            });

            return listaProductos;

        }
    }

    // Método para obtener el precio total de la cesta
    obtenerTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

}

// Exportar clases
export { Producto, Cesta };
