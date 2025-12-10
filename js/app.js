/**
 * URL base para consumir el backend.
 */
const API_URL = "http://localhost:8080/api/productos";


/**
 * Carga todos los productos desde el backend y los inserta en la tabla HTML.
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
 * Redirige a la página de Editar producto enviando el ID por parámetros.
 * @param {number} id .
 */
function editar(id) {
    window.location.href = `editar.html?id=${id}`;
}

/**
 * Elimina un producto del backend
 * @param {number} id 
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
 */
window.addEventListener("load", function() {
    if (document.getElementById("tabla-productos")) {
        cargarProductos();
    }
});
