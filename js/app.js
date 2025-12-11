/**
 * URL base para consumir el backend.
 * @constant {string}
 */
const API_URL = "https://inventario-backend-production-4123.up.railway.app/api/productos";

/**
 * URL base para consumir el desde local.
 * conts API_URL = "http://localhost:8080/api/productos";
 */

/**
 * Carga todos los productos desde el backend y los inserta en la tabla HTML.
 * @function cargarProductos
 * @returns {void}
 */
function cargarProductos() {
    fetch(API_URL)
        .then(res => res.json())
        .then(productos => {
            const tabla = document.getElementById("tabla-productos");
            tabla.innerHTML = "";

            productos.forEach(p => {
                tabla.innerHTML += `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.nombre}</td>
                        <td>${p.categoria}</td>
                        <td>$${p.precio}</td>
                        <td>${p.cantidad}</td>
                        <td class="actions">
                            <button class="action-btn edit" onclick="editar(${p.id})">
                                <i class="fas fa-edit"></i> Editar
                            </button>
                            <button class="action-btn delete" onclick="eliminarProducto(${p.id})">
                                <i class="fas fa-trash"></i> Eliminar
                            </button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Error al cargar productos:", error);
        });
}

/**
 * Redirige a la página de Editar producto enviando el ID por parámetros
 * @param {number} id 
 * @returns {void}
 */
function editar(id) {
    window.location.href = `editar.html?id=${id}`;
}

/**
 * Elimina un producto del backend
 * @function eliminarProducto
 * @param {number} id
 * @returns {void}
 */
function eliminarProducto(id) {
    if (!confirm("¿Estás seguro de eliminar este producto?")) {
        return;
    }

    fetch(API_URL + "/" + id, {
        method: "DELETE"
    })
    .then(() => {
        cargarProductos();
    })
    .catch(error => {
        alert("Error al eliminar producto");
        console.error(error);
    });
}

/**
 * Ejecuta funciones cuando la página termina de cargar.
 * Si la tabla existe en la página, carga la lista de productos.
 * @event window#load
 * @listens window:load
 * @returns {void}
 */
window.addEventListener("load", function() {
    if (document.getElementById("tabla-productos")) {
        cargarProductos();
    }
});
