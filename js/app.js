const API_URL = "http://localhost:8080/api/productos"; 

// Función para cargar productos
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
                            <button class="action-btn delete" onclick="eliminar(${p.id})">
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

// Función para editar
function editar(id) {
    window.location.href = `editar.html?id=${id}`;
}

// Función para eliminar
function eliminarProducto(id) {
    if (!confirm("¿Estás seguro de eliminar este producto?")) {
        return;
    }
    
    fetch(API + "/" + id, {
        method: "DELETE"
    })
    .then(() => {
        cargarProductos(); // Recargar la tabla
    })
    .catch(error => {
        alert("Error al eliminar producto");
        console.error(error);
    });
}

// EJECUTAR CUANDO LA PÁGINA ESTÉ LISTA
window.addEventListener("load", function() {
    if (document.getElementById("tabla-productos")) {
        cargarProductos();
    }
});