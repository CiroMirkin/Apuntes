# Arquitectura
10_08_2023

Cuando creamos una aplicación la dividimos en partes, cada una con su responsabilidad y dependencias, ahora bien, **la forma** de organizar  y relacionar estas partes forman una *arquitectura*.

Creamos una arquitectura buscando minimizar el coste de vida y maximizar la productividad facilitando el desarrollo, implementación, expansión, operación y mantenimiento de una aplicación a los programadores.

## Separar aplicación en capas

Las arquitecturas suelen separar una aplicación en tres capas fundamentales: El entorno gráfico, la base de datos y el dominio. Para la organización de las capas es bueno separar los que importa de lo que no, en una buena arquitectura resalta la separación entre el dominio y todo lo demás.

## Buena arquitectura

Para crear una buena arquitectura lo que hay que buscar es **no tomar la mayor cantidad de decisiones ajenas al dominio durante el mayor tiempo posible para poder centrarnos en el dominio el mayor tiempo posible**.

Otros puntos importantes para que una arquitectura facilite el trabajo a los programadores son:

* Desvincular al dominio de todo lo demás, esto permite centrarse en el dominio sin ser afectado o depender de cosas externas como frameworks gráficos o bases de datos, también permite experimentar o cambiarlos según cambien los requerimientos de la aplicación como la cantidad de usuarios a soportar.

* Dejar ver fácilmente la intención y fin de una aplicación, con solo entrar a la carpeta del proyecto nos debemos dar cuenta de que es lo que hace la aplicación, para qué sirve, cuál es su fin. Para lograr esto algo que ayuda es hacer visibles y claros los casos de uso, ya que estos representan los comportamientos de una aplicación.

* Facilitar lo más posible la implementación del proyecto.

* Permitir y facilitar hacer pruebas a sus diferentes partes.

En una buena arquitectura **el dominio** está compuesto por dos grupos que están bien definidos: En primer lugar las reglas de negocio que pueden estar más o menos unidas, y en segundo los casos de uso que **no están acoplados entre sí** y suelen atravesar todas las capas de una arquitectura.

/// Arquitectura limpia de Robert C.Martin ///