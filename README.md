# Proyectos Inmobiliarios Frontend

Este proyecto representa una Sitio Web de una inmobiliaria a continuación, se describen las diferentes tecnologías utilizadas y funcionalidades desarrolladas.

## Funcionalidades Desarrolladas

### __Barra de navegación__

<!-- Screenshoot -->
<img align="center" src="https://github.com/manueld1az/Proyectos-Inmobiliarios-Frontend/blob/main/Images/1_Registro%20Usuario_2023-06-23-140742_1366x768.png"/>

Desde este componente global del sitio web se puede acceder al modulo de Auth o de Authentication en Español y se compone de los siguientes elementos:

- __Titulo__, que también funciona como enlace al home del sitio web.
- __botones__ para:
- __registrar__ un nuevo usuario.
- __iniciar sesión__ de un usuario.
- __cerrar la sesión__ iniciada.

### __Home del Sitio Web__

<!-- Screenshoot -->
<img align="center" src="https://github.com/manueld1az/Proyectos-Inmobiliarios-Frontend/blob/main/Images/3_privada%20Home%20del%20modulo%20Compra%20y%20Venta_2023-06-23-140742_1366x768.png"/>

Aquí se muestra el modulo de Compra Venta __solo si el usuario a iniciado sesión__ y desde aqui se puede acceder a las siguientes secciones:

#### __Sección de Compra__

<!-- Screenshoot -->
<img align="center" src="https://github.com/manueld1az/Proyectos-Inmobiliarios-Frontend/blob/main/Images/5_privada%20Mapa%20dentro%20del%20componente%20Proyectos_2023-06-23-140742_1366x768.png"/>

La sección de compra presenta el submódulo "Proyectos", el cual incluye un mapa geográfico ubicado en las coordenadas aproximadas que se encuentre el usuario.

Los usuarios en este mapa pueden:
- __revisar__ su geolocalización aproximada.
- __crear__ nuevos marcadores.
- __moverse__ por todo el mapa, acercarce o alejarlo para ver mas o menos detalles en un mapa real.

#### __Sección de Ventas__

<!-- Screenshoot -->
<img align="center" src="https://github.com/manueld1az/Proyectos-Inmobiliarios-Frontend/blob/main/Images/6_privada%20Estadisticas%20dentro%20del%20componente%20Venta_2023-06-23-140742_1366x768.png"/>

La sección de ventas presenta el submódulo "Estadísticas", donde se muestra una tabla con el total de ventas por mes de los últimos 4 meses.

## Tecnologías Utilizadas

El proyecto cumple con los siguientes requisitos y utiliza las siguientes tecnologías:

- __Frontend:__ Uso del Framework __Angular__ para el desarrollo de las interfaces de usuario.
- __Estilos:__ Uso del Framework __Angular Material UI__ para el desarrollo de las vistas y estilos.
- __Autenticación:__ Implementación de login utilizando __Json web token (JWT).__
- __Lazy Loading:__ Implementación de carga diferida (lazy loading) para mejorar la __eficiencia de la aplicación.__
- __Variables de Entorno:__ Se han configurado variables de entorno para el __entorno de desarrollo.__
- __Base de Datos:__ __No se requiere__ implementar una base de datos en este proyecto aún.

## Cómo Ejecutar el Proyecto

Para ejecutar el proyecto, siga los siguientes pasos:

1. Clonar este repositorio.
2. Ejecute el siguiente comando: `npm install`.
3. Ejecute el siguiente comando: `npm install -g @angular/cli`.
4. Ejecute el siguiente comando: `ng serve`.
5. Abrir el navegador web y acceder a la URL proporcionada por el servidor de desarrollo, por default con Angular es `http://localhost:4200/`

## Contacto

Para obtener más información o cualquier consulta adicional, por favor contactar a:
- Whatsapp: 3160461056
- Email: diazmanuelj13@gmail.com
- Manuel Diaz : <br> [![Linkedin: manueld1az](https://img.shields.io/badge/-manueld1az-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/manueld1az-p-singh/)](https://www.linkedin.com/in/manueld1az)
[![Discord: manueld1az](https://img.shields.io/badge/-manueld1az-purple?style=flat&logo=Discord&logoColor=white&link=https://www.discord.com/in/manueld1az-p-singh/)](https://discord.gg/zPw5BUwYKz)
[![GitHub: manueld1az](https://img.shields.io/badge/-manueld1az-gray?style=flat&logo=GitHub&logoColor=white&link=https://www.github.com/manueld1az-p-singh/)](https://github.com/manueld1az)


¡Gracias por considerar este proyecto!