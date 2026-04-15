# vanilla-vs-react

Backend en Node.js que actúa como API compartida para dos frontends que implementan la misma interfaz: uno en Vanilla JS y otro en React. El objetivo del proyecto es mostrar las diferencias prácticas entre ambos enfoques al consumir los mismos endpoints desde cada tecnología.

## Estructura

```
vanilla-vs-react/
├── controllers/   # Lógica de negocio por recurso
├── middlewares/   # Middlewares de Express (conexion a base de datos)
├── models/        # Definición de modelos de datos
├── routers/       # Definición de rutas de la API
├── server.js      # Punto de entrada de la aplicación
└── .gitignore
```

## Tecnologías

- Node.js
- Express.js
- JavaScript

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/cannedcoke/vanilla-vs-react.git
cd vanilla-vs-react
```

2. Instalá las dependencias:

```bash
npm install
```

3. Iniciá el servidor:

```bash
node server.js
```

Por defecto el servidor corre en `http://localhost:3000`. Revisá `server.js` si necesitás cambiar el puerto.

## Relación con otros repositorios

Este backend es compartido por dos frontends que implementan la misma aplicación con tecnologías distintas:

- [vanilla](https://github.com/cannedcoke/vanilla) — frontend en Vanilla JS
- [react/front-react](https://github.com/cannedcoke/react/tree/main/front-react) — frontend en React