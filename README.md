# Backend para Ejercicio Fullstack

Este repositorio contiene el backend de un ejercicio fullstack. Está diseñado para facilitar el desarrollo de una aplicación web utilizando Node.js y Express.

## Descripción

Este proyecto incluye un servidor Express y una configuración básica para interactuar con una base de datos PostgreSQL a través de Sequelize. También se utiliza nodemon para reiniciar automáticamente el servidor durante el desarrollo.
Maneja autenticación, almacenamiento de datos en una base de datos relacional, y está preparado para trabajar con variables de entorno y cookies.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
  npm install
```

Asegúrate de tener un archivo .env configurado en la raíz del proyecto para las variables de entorno necesarias.

## Variables de Entorno

Antes de ejecutar el proyecto, necesitas crear tu propia base de datos en PostgreSQL. Asegúrate de tener PostgreSQL instalado y funcionando. Luego, crea una base de datos y completa las siguientes variables de entorno en un archivo .env en la raíz del proyecto:

```bash
PORT=3001
DB_USER=tu_usuario_de_postgres
DB_PASSWORD=tu_contraseña_de_postgres
DB_HOST=localhost
DB_NAME=nombre_de_tu_base_de_datos
ORIGIN=url_frontend
SECRET=key_secreta_encriptación
```

## Uso

Para iniciar el servidor en modo de desarrollo, utiliza el siguiente comando:

```bash
  npm run server
```

Para iniciar el servidor en modo de producción, utiliza el siguiente comando:

```bash
  npm start
```

## Scripts

### server:

Inicia el servidor utilizando nodemon.

### start:

Inicia el servidor usando node.

## Referencias API

## Usuarios

### Traer todos los usuarios

```http
  GET /api/users/
```

### Traer un usuario

```http
  GET /api/users/user/${id}
```

### Añadir un usuario

```http
  POST /api/users/
```

### Modificar un usuario

```http
  PUT /api/users/user/${id}
```

### Borrar un usuario

```http
  DELETE /api/users/user/${id}
```

### Login un usuario

```http
  POST /api/users/login
```

### Logout un usuario

```http
  GET /api/users/logout
```

### Persistencia un usuario

```http
  GET /api/users/me/${token}
```

#### Ejemplo

```bash
[
    {
        "id": "fb4db8e9-7785-4d38-a30e-fd02b75fa572",
        "username": "admin",
        "password": "$2b$10$n45C7oiyVnLOna4CDPN/PukemUVHDMxRRrF7fg68WZCyZrP6nhVJy",
        "role": "ADMIN",
        "createdAt": "2024-10-22T22:50:48.623Z",
        "updatedAt": "2024-10-22T22:50:48.623Z"
    },{
        "id": "fb4db8e9-7785-4d38-a30e-fd02b75fa572",
        "username": "user",
        "password": "$2b$10$n45C7oiyVnLOna4CDPN/PukemUVHDMxRRrF7fg68WZCyZrP6nhVJy",
        "role": "USER",
        "createdAt": "2024-10-22T22:50:48.623Z",
        "updatedAt": "2024-10-22T22:50:48.623Z"
    }

]
```

### Trer usuario

```http
  GET /api/users/user/${id}
```

#### Ejemplo

```bash
{
        "id": "fb4db8e9-7785-4d38-a30e-fd02b75fa572",
        "username": "user",
        "password": "$2b$10$n45C7oiyVnLOna4CDPN/PukemUVHDMxRRrF7fg68WZCyZrP6nhVJy",
        "role": "USER",
        "createdAt": "2024-10-22T22:50:48.623Z",
        "updatedAt": "2024-10-22T22:50:48.623Z"
    }
```

## Marcas

### Traer todos las marcas

```http
  GET /api/brands/
```

### Traer una marca

```http
  GET /api/brands/brand/${id}
```

### Añadir una marca

```http
  POST /api/brands/
```

### Modificar una marca

```http
  PUT /api/brands/${id}
```

### Borrar una marca

```http
  DELETE /api/brands/${id}
```

#### Ejemplo

```bash
[
    {
    "id": "ff9c8403-8678-4a1d-bd15-b499848a2abc",
    "name": "Adidas",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/adidaas.jpg",
    "updatedAt": "2024-10-23T23:33:20.171Z",
    "createdAt": "2024-10-23T23:33:20.171Z"
},{
    "id": "ff9c8403-8678-4a1d-bd15-b499848a2abc",
    "name": "Nike",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg",
    "updatedAt": "2024-10-23T23:33:20.171Z",
    "createdAt": "2024-10-23T23:33:20.171Z"
}

]
```

### Trer una marca

```http
  GET /api/brands/brand/${id}
```

#### Ejemplo

```bash
{
    "id": "ff9c8403-8678-4a1d-bd15-b499848a2abc",
    "name": "Nike",
    "logo_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_nike_principal.jpg",
    "updatedAt": "2024-10-23T23:33:20.171Z",
    "createdAt": "2024-10-23T23:33:20.171Z"
}
```

## Productos

### Traer todos los Productos

```http
  GET /api/products/
```

### Traer un producto

```http
  GET /api/products/product/${id}
```

### Añadir un producto

```http
  POST /api/products/
```

### Modificar un producto

```http
  PUT /api/products/${id}
```

### Borrar un producto

```http
  DELETE /api/products/${id}
```

#### Ejemplo

```bash
[
    {
    "id": "b52cf8fb-d396-4e7e-88ec-abefcd3d8ec5",
    "name": "Zapatilla Adidas",
    "description": "Zapatilla hombre",
    "image_url": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5227a6f4/products/NIDR2698-002/NIDR2698-002-1.JPG",
    "price": 200000,
    "brand_id": "ff9c8403-8678-4a1d-bd15-b499848a2abc",
    "updatedAt": "2024-10-23T23:34:50.819Z",
    "createdAt": "2024-10-23T23:34:50.819Z"
},{
    "id": "b52cf8fb-d396-4e7e-88ec-abefcd3d8ec5",
    "name": "Zapatilla Nike",
    "description": "Zapatilla hombre",
    "image_url": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5227a6f4/products/NIDR2698-002/NIDR2698-002-1.JPG",
    "price": 300000,
    "brand_id": "ff9c8403-8678-4a1d-bd15-b499848a2abc",
    "updatedAt": "2024-10-23T23:34:50.819Z",
    "createdAt": "2024-10-23T23:34:50.819Z"
}

]
```

### Trer un producto

```http
  GET /api/products/product/${id}
```

#### Ejemplo

```bash
{
    "id": "b52cf8fb-d396-4e7e-88ec-abefcd3d8ec5",
    "name": "Zapatilla Nike",
    "description": "Zapatilla hombre",
    "image_url": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5227a6f4/products/NIDR2698-002/NIDR2698-002-1.JPG",
    "price": 300000,
    "brand_id": "ff9c8403-8678-4a1d-bd15-b499848a2abc",
    "updatedAt": "2024-10-23T23:34:50.819Z",
    "createdAt": "2024-10-23T23:34:50.819Z"
}
```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- cors: Middleware para habilitar CORS.
- dotenv: Carga variables de entorno desde un archivo .env.
- express: Framework web para Node.js.
- nodemon: Herramienta para reiniciar automáticamente el servidor.
- pg: Cliente PostgreSQL para Node.js.
- sequelize: ORM para Node.js que facilita la interacción con bases de datos.
- jsonwebtoken: Implementa la autenticación mediante tokens JWT.
- bcrypt: Para hash de contraseñas, importante en procesos de autenticación.
