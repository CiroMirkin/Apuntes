# Arquitectura
00_00_2023

Cuando creamos una aplicación la dividimos en modulos, cada uno con su responsabilidad y sus dependencias, ahora bien, **la forma** de organizar los modulos, dividirlos y relacionarlos conforman una *arquitectura*. 

Creamos una arquitectura buscando minimizar el coste de vida y maximizar la productividad facilitando el desarrollo, implementación, expanción, operación y mantenimiento de una aplicación a los programadores. 

## Separar aplicación en capas

Las arquitecturas suelen separar una aplicación en tres capas fundamentales: El entorno grafico, la base de datos y el dominio.

Es importante en la organización de las capas separar los que importa de lo que no, en una buena arquitectura resalta la separación entre el dominio y todo lo demas.

## Buena arquitectura

Para crear una buena arquitectura lo que tenemos que buscar es **no tomar la mayor cantidad de deciciones ajenas al dominio durante el mayor tiempo posible** para poder centrarnos en el dominio el mayor tiempo posible.

Otros puntos importantes para que una arquitectura facilite el trabajo a los programadores:

* Desvincula al dominio de todo lo demas, permite centrarce en el dominio sin verce afectado o dependiendo de cosas externas como frameworks graficos o bases de datos, esto también permite experimentar y cambiarlos segun cambien los requierimientos de la aplicación como la cantidad de usuarios a soportar.

* Deja ver facilmente la intencion y fin de una aplicación, con solo entrar a la carpeta del proyecto nos daremos cuenta que es lo que hace la aplicación, para que sirve, cual es su fin.

* Facilita lo mas posible la implementación del proyecto.

* Permite y facilita hacer prubas sus diferentes partes.

En una buena arquitectura el dominio esta compuesto por dos grupos que estan bien definidos: En primer lugar reglas de negocio que pueden estar mas o menos unidas, y en segundo los casos de uso que no estan acoplados entre si y suelen a travesar todas las capas de una arquitectura.