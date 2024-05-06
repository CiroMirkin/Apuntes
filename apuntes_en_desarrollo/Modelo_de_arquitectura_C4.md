# Modelo de arquitectura C4
00_00_2024

El modelo de arquitectura C4 consta de cuatro diagramas que nos permiten ver a diferentes niveles la arquitectura de una aplicación.

Este grupo de diagramas no tiene reglas estrictas ni extremadamente tecnicos como los diagramas UML o las vistas de Kruchten. Todo lo contratrio, los diagramas C4 son flexibles, simples y faciles en todo sentido.

## Diagramas

Cada diagrama nos permite comunicar que responsabilidades y relaciones existen dentro de la arquitectura, ver estos cuatro diagramas uno detras de otro es como hacer zoom para ver cada vaz mas detalles.

No hace falta que usemos los cuatro diagramas, sino solo los que nos aportan valor, en muchos casos con los dos primero es suficiente.

Los diagramas C4 no tienen un estandar, es por eso que no existe una forma exacta de como realizarlos, siente libre de agregar la información que creas necesaria y usar los colores y formas con las que te sientas comodo.

### Diagrama de Contexto

El diagrama de contexto nos permite ver una vista general de la aplicación. Al ser de alto nivel podemos ver con que entidades externas se relaciona nuestra aplicación.

### Diagrama de Contenedor

El diagrama de contenedores es un diagrama tecnico, pero sigue siendo de alto nivel. Este diagrama nos muestra en cuantas partes se divide la aplicación, que responsabilidad tiene cada parte y las tegnologias que utilizan.

Un contenedor puede ser una aplicación, una base de datos o un *Shell script*. Un contenedor necesita ejecutarce y mantenerce para que nuestro sistema funcione, por ejemplo, en una aplicacion simple podriamos tener dos contendores:

* Primer contendor: Una aplicacion movil para Android o IOS.

* Segundo contenedor: Una base de datos en MySQL o Posgress.

### Diagrama de Componente

El diagrama de componente es de bajo nivel y nos muestra los componente dentro de un contenedor. En este nivel ya vemos repositorios, controladores y algunos detalles de implementación.

### Diagrama de Código

Los diagramas de código donde generalmente se usa el tipico UML para diagramar patrones de diseño y como se relacionan las clases dentro de un componente por eso tambien se le suele decir diagrama de clase. Este diagrama no suele ser necesario y es mejor usarlo solo cuando hay componentes complejos.

## C4 sitio web

Si te interesa este modelo, entonces puedes consultar su sitio web una descripción mas detallada: [c4model.com](https://c4model.com/)
