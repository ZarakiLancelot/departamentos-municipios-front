# Departamentos y Municipios de GUATEMALA (frontend/test)
# API Rest y Aplicación Cliente

Este proyecto contiene una API Rest y una aplicación cliente que consume los datos proporcionados por la API. La API Rest ofrece información sobre los departamentos y municipios de Guatemala en formato JSON estático, sin necesidad de utilizar una base de datos.

## API Rest

La API Rest se ha desarrollado utilizando Node.js y Express. Ofrece un único servicio que devuelve un JSON con la siguiente estructura:

```json
{
  "departamentos": [
    {
      "departamento": "Alta Verapaz",
      "municipios": [
        "Chahal",
        "Chisec",
        "Cobán",
        // ...otros municipios...
      ]
    },
    {
      "departamento": "Baja Verapaz",
      "municipios": [
        "Cubulco",
        "Granados",
        // ...otros municipios...
      ]
    },
    // ...otros departamentos...
  ]
}
```

## Endpoints
`GET /api/datos`: Devuelve el JSON con la información de departamentos y municipios.

## Ejecución
Para ejecutar la API Rest en tu entorno local, sigue los siguientes pasos:

- Clona este repositorio en tu computadora.
- Navega a la carpeta api desde la línea de comandos.
- Instala las dependencias utilizando el comando `npm install`.
- Ejecuta la API utilizando el comando `npm start`.
- La API estará disponible en `http://localhost:3000`.

## Aplicación Cliente
La aplicación cliente está construida con HTML, CSS y JavaScript puro. Permite seleccionar un departamento de Guatemala desde un `<select>` y muestra los municipios correspondientes en otro `<select>`.

## Ejecución
Para ejecutar la aplicación cliente, simplemente abre el archivo `index.html` en tu navegador web. Asegúrate de que la API Rest esté en ejecución para que la aplicación pueda consumir los datos correctamente.

## CORS
Para permitir que la aplicación cliente consuma los datos de la API Rest, se han habilitado los encabezados CORS en la API. Los encabezados CORS permiten que los navegadores web realicen solicitudes desde un dominio diferente al de la API. La configuración CORS actual de la API permite cualquier origen (*), pero en un entorno de producción, es recomendable restringir los orígenes permitidos para mejorar la seguridad.
