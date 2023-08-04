# Arquitectura
00_00_2023

Cuando creamos una aplicación la dividimos en modulos, cada uno con su responsabilidad y sus dependencias, ahora bien, **la forma** de organizar los modulos, dividirlos y relacionarlos conforman una *arquitectura*. 

Una arquitectura busca facilitar el desarrollo, implementacion, expancion, operacion y mantenimiento de una aplicacion para un equipo de programadores y todo esto se logra buscando **no tomar la major cantidad de deciciones durante el mayor tiempo posible**, las "deciciones" son acerca de todo lo ajeno al dominio de una aplicaión como lo pueden ser frameworks, bases de datos, servidores, ORMs y demas.

Al final lo que buscamos es desconectar el dominio de todo lo demas, para asi poder centrarnos solo en el dominio y asi la aplicación dira a gritos que es lo que hace, con solo entrar a la carpeta del proyecto nos vamos a dar cuenta que es lo que hace la aplicación.

## Buena arquitectura

* Facilita el trabajo de los programadores. Permite que se enfoquen en el dominio, la parte importante de una aplicación y facilita lo mas posible la implementacion del proyecto.

* Deja ver facilmente la intencion y fin de una aplicación.

* Contiene una aplicacion facil de cambiar y por ende deja todos los detalles como UI y bases de datos desacoplados del dominio, proteje al dominio los cambios que pueda tener todo lo ajeno a este, lo que permite experimentar y cambiarlos segun cambien los requerimientos de la aplicacion, como lo puede ser la cantidad de usuarios a soportar.

## Capas en una aplicación

Una buena arquitectura desacopla las tres capas fundamentales de una aplicacion: El entorno grafico, la base de datos y el dominio, este ultimo reprecentado por dos grandes grupos: Primero reglas de negocio que pueden estar mas o menos unidas, y segundo casos de uso los cuales no estan acoplados entre si y suelen a travesar al resto de capas.

Lo mas **importante en la organizacion de capas** es separar los que importa de lo que no, separar y desacoplar en tres partes: entorno grafico, base de datos y dominio.
