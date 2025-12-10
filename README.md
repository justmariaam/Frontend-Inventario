# Frontend-Inventario
## A.Descripción del Proyecto

Este frontend es una aplicación web creada con HTML, CSS y JavaScript, diseñada para consumir los servicios REST del backend del sistema de Inventario.

## Incluye funcionalidades de CRUD:

- Crear producto
- Leer productos (lista completa)
- Leer un producto (para editar)
- Actualizar producto
- Eliminar producto

## B. Cómo Ejecutarlo en Local 
1. Clonar el repositorio

    ```bash
    git clone https://github.com/justmariaam/Frontend-Inventario.git
    ```

2. Abrir la carpeta del proyecto:
    ```bash
    cd Frontend-Inventario
    ```
3. Abrir Visual Studio Code:
    ```bash
    code .
    ```

4. Instalar la extensión Live Server
En VSCode:

    4.1. Ir a Extensions
    
    4.2.Buscar Live Server e instalarla
    
    4.3. En la parte inferior derecha, aparecerá el botón Go Live

5. Ejecutar el frontend
- Haz clic en Go Live y tu frontend abrirá en una URL (desde ahí podras navegar por el sistema) como:

    http://127.0.0.1:5500/index.html

## C. Conexión con el Backend
En el archivo:

/js/app.js
-
Existe una constante llamada "0API_URL" donde se coloca la URL del backend:

const API_URL = "https://inventario-backend-production-4c4b.up.railway.app";
-
Si estás corriendo backend en local, cámbialo a:

const API_URL = "http://localhost:8080";
-