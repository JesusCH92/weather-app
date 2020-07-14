# Práctica de proyecto front-end

## Objetivo
Nos gustaría poder saber la previsión del tiempo de una manera más fácil por eso necesitamos crear una aplicación que nos facilíte la tarea utilizando [Weather API](https://openweathermap.org/api).

## Funcionalidad
Por un lado, disponemos de un buscador de ciudades. Al introducir un término de búsqueda en el formulario y pulsar intro o el botón de buscar, deben aparecer la previsión del tiempo en los próximos 5 días en el listado inferior.
Por otro lado, disponemos de 5 ciudades en el menu lateral. Al clicar sobre una ciudad deben aparecer la previsión actual de dicha ciudad. En dicha previsión al clicar sobre el nombre de la ciudad te aparecerá la previsión para los próximos 5 días.
<a id="dependecies"></a>

## Instalar las dependencias:
Desde la raíz del proyecto ejecutar:
```bash
npm install
```
## Modificaciones:
Si se desea modificar el contenido del proyecto (la parte de javascript), después de realizar el cambio deberá ejecutar:
```
npm run build
```
Este comando compila todo el contenido de javascript y lo comprime en el fichero **`dist/index.min.js`**

## Levantar el proyecto
Una vez, se han instalado las [dependencias](#dependecies), puede abrir directamente el fichero **`dist/index.html`** y accerder a la app.