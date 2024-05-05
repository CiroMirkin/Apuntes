# Modelo de arquitectura C4
00_00_2024

El modelo de arquitectura C4 consta de cuatro diagramas que nos permiten ver a diferentes niveles la arquitectura de una aplicación.

Nos permite ver que responsabilidades y relaciones existen en cada nivel de abstracción.

Este grupo de diagramas no tiene reglas estrictas. Todo lo contratrio: Son flexibles, simples y faciles de modificar.

## Diagramas

### Diagrama de Contexto

El diagrama de contexto nos permite ver una vista general de la aplicación, a un muy alto nivel podemos ver con que entidades externas se relaciona.

### Diagrama de Contenedor

El diagrama de contenedores sigue siendo de alto nivel, pero ya es mas tecnico. Este diagrama nos muestra en cuantas partes se divide la aplicacion, la responsabilidad que cada parte tiene y las tegnologias que utilizan.

### Diagrama de Conponente

El diagrama de conponentes es de bajo nivel y nos muestra los componente dentro de cada contenedor. En este nivel ya vemos repositorios, controladores y algunos detalles de implementación.

### Diagrama de Clase

Los diagramas de clase usan el tipico UML, para reprecentar patrones de diseño y en general como se relacionan las clases dentro de un componente. Este diagrama no suele ser necesario y es mejor usarlo solo para componentes complejos.

