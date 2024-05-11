# Modelo de arquitectura C4
11_05_2024

El modelo de arquitectura C4 consta de cuatro diagramas que nos permiten ver desde diferentes distancias la arquitectura de una aplicación, desde una vista amplia y general hasta una vista pequeña y concreta.

Los diagramas C4 son flexibles, fáciles y simples, no tienen reglas estrictas ni son extremadamente técnicos como UML o las vistas de Kruchten.

## Diagramas

Cada diagrama nos permite comunicar que responsabilidades y relaciones existen dentro de la arquitectura, ver estos cuatro diagramas uno detrás de otro es igual que hacer zoom y ver cada vez más detalles sobre la arquitectura.

No hace falta que usemos los cuatro diagramas, sino solo los que nos aportan valor, en muchos casos con los dos primero es suficiente.

Los diagramas C4 no tienen un estándar, es por eso que no existe una forma exacta de como realizarlos, por ende podemos agregar la información que juzguemos necesaria y usar los colores y formas con las que nos sentimos cómodos nosotros y el resto del equipo.

### Diagrama de Contexto

El diagrama de contexto nos permite ver una vista general de la aplicación. Al ser de alto nivel solo vemos con que entidades externas se relaciona nuestra aplicación, estas "entidades externas" son otras aplicaciones o sistemas sobre los cuales no tenemos control.

### Diagrama de Contenedor

El diagrama de contenedores es un diagrama técnico, pero sigue siendo de alto nivel. Este diagrama nos muestra en cuantas partes se divide la aplicación, que responsabilidad tiene cada parte y las tecnologías que utilizan.

Un contenedor puede ser una aplicación, una base de datos o un *Shell script* [Programa de consola]. Un contenedor necesita ejecutarse y mantenerse para que nuestro sistema funcione, por ejemplo, en una aplicación simple podríamos tener dos contenedores:

* Primer contenedor: Una aplicación movil para Android o IOS.

* Segundo contenedor: Una base de datos en MySQL o MongoDB.

### Diagrama de Componente

El diagrama de componente es de bajo nivel y nos muestra los componente dentro de un contenedor. En este nivel ya vemos repositorios, controladores y algunos detalles de implementación.

### Diagrama de Código

Los diagramas de código nos muestran las relaciones entre funciones o clases, generalmente se usa el típico UML para diagramar patrones de diseño y como se relacionan las clases dentro de un componente, por este motivo también se le suele decir "diagrama de clase". Este diagrama no suele ser necesario y es mejor usarlo solo cuando hay componentes complejos.

## C4 sitio web

Si te interesa este modelo, entonces puedes consultar su sitio web para una descripción más detallada: [c4model.com](https://c4model.com/)

///
https://youtu.be/cy_3qSA0a4s?si=0frwGrd7_u5kJK2d
https://youtu.be/2IJ29e0xTDc?si=37FsPoAhZu8GhHtd
https://c4model.com/
///