# Modelo de arquitectura C4
00_00_2024

El modelo de arquitectura C4 consta de cuatro diagramas que nos permiten ver a diferentes niveles la arquitectura de una aplicación.

Este grupo de diagramas no tiene reglas estrictas ni extremadamente tecnicos como los diagramas UML o las vistas de Kruchten. Todo lo contratrio, los diagramas C4 son flexibles, simples y faciles en todo sentido.

## Diagramas

Cada diagrama nos permite ver que responsabilidades y relaciones existen desde las de alto nivel hasta las de bajo nivel.

Los diagramas C4 no tienen un estandar, es por eso que no existe una forma exacta de como realizarlos, siente libre de agregar la información que creas necesaria y usar los colores y formas con las que te sientas comodo.

### Diagrama de Contexto

El diagrama de contexto nos permite ver una vista general de la aplicación. Al ser de alto nivel podemos ver con que entidades externas se relaciona nuestra aplicación.

![Ejemplo de un diagrama de contexto en el modelo C4]()

### Diagrama de Contenedor

El diagrama de contenedores sigue siendo de alto nivel, pero ya es mas tecnico. Este diagrama nos muestra en cuantas partes se divide la aplicación, que responsabilidad tiene cada parte y las tegnologias que utilizan.

![Ejemplo de un diagrama de contenedor en el modelo C4]()

### Diagrama de Componente

El diagrama de componente es de bajo nivel y nos muestra los componente dentro de un contenedor. En este nivel ya vemos repositorios, controladores y algunos detalles de implementación.

![Ejemplo de un diagrama de componente en el modelo C4]()

### Diagrama de Clase

Los diagramas de clase usan el tipico UML, para reprecentar patrones de diseño y en general como se relacionan las clases dentro de un componente. Este diagrama no suele ser necesario y es mejor usarlo solo cuando hay componentes complejos.

