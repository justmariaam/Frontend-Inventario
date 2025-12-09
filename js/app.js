const API_URL = "http://localhost:8080/api/productos"; 

async function cargarProductos() {
    try {
        const res = await fetch(API_URL);
        const productos = await res.json();

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
                    <td>
                        <button class="action-btn edit" onclick="editar(${p.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn delete" onclick="eliminar(${p.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

function editar(id) {
    window.location.href = `editar.html?id=${id}`;
}

async function eliminar(id) {
    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    cargarProductos();
}

// Llamar cuando cargue la página
if (window.location.pathname.includes("productos.html")) {
    cargarProductos();
}
