# Arquitectura
00_00_2023

Cuando creamos una aplicación la dividimos en modulos, cada uno con su responsabilidad y sus dependencias, la forma de organizar los modulos, dividirlos y relacionarlos forman una *arquitectura*. 

Una arquitectura busca facilitar el desarrollo, la implementacion, expansion, operacion y mantenimiento de una aplicacion para un equipo de programadores y todo esto se logra buscando **no tomar la major cantidad de deciciones durante el mayor tiempo posible**, las deciciones son acerca de todo lo ajeno al dominio y entidades de una aplicaión como lo pueden ser frameworks, bases de datos, servidores, ORMs y demas.

Al final lo que buscamos es desconectar las politicas de los detalles, para asi poder centrarnos solo en las politicas y que la aplicacion grite que es lo que hace.

## Crear una buena arquitectura

