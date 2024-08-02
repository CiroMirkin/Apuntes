# Documentación
00_00_2024

La documentación de los proyectos es importante, pero ¿Que y como se debería documentar? Hay dos tipos principales de documentacion, la del código y la del equipo, en ambas buscamos aportar información que no es obia y explicar cual es proposito de las cosas dentro del proyecto.

Documentación del código:

* Variables, arreglos, enums, etc.
* Funciones, clases, métodos y modulos.
* Algoritmos y bloques de código.

Documentación del equipo y/o proyecto:

* Arquitectura.
* Flujo de trabajo.
* Practicas del equipo.
* Casos de uso e historias de usuario.

## Documentación del código en el código

La unica herramienta para documentar código son los comentarios, muchas veces son menospreciados por no saber realmente que escribir en ellos.

Los comentarios dentro del codigo nos permiten dejar claro el comportamiento del codigo y toda la informacion que es clave a la hora de entender su funcionamiento.

### Comentarios de bajo nivel

En este tipo de comentarios vamos a describir detalles que no quedan claros en el código agregando precision al proposito de ciertas partes de código.

 sobre todo en variables para describir que es lo que reprecentan, por ejemplo, podríamos tener una variable llamada ** la cual podria tener un comentario como el siguiente: **.

Con estos comentarios nos importa dejar claro **que hace** un bloque de código, **no el como** lo hace.

Los comentarios de bajo nivel también podrían: 

* Decribir las soluciones que descartamos y porque lo hicimos, al igual que las soluciones que probamos y no funcionaron. 

* Avisar de algun cambio que no debe hacerce y el motivo de esto.

* Dejar claro que la solución implementada es provisoria.

### Comentarios de alto nivel

Los comentarios de alto nivel nos van a permitir describir la intención y el proposito de funciones, clases, métodos o modulos.

Al crear este tipo de comentarios deberíamos describir toda la información necesaria para usar una función o una clase, algunas preguntas clave para lograr esto son:

* ¿Que esta tratando de hacer esta porción de código?

* ¿Que es lo más simple que puedo decir que explique todo en esta porción de código?

* ¿Que es lo más importante acerca de esta porción de código?

Con estas preguntas tratamos de encontrar las caracteristicas fundamentales, ¿Porque se ejecuta este codigo? ¿Hay efectos secundarios (Los cambios se ven reflejados o afectan a otras partes de la aplicación)? ¿Hay exepciones? ¿Cual es la condición para que se ejecute? ¿Hay alguna pre-condición?

## Documentación del equipo y proyecto

Hay muchas formas de documentar un proyecto y las practicas del equipo, la mas simple es usando documentos Markdown y lo que vamos a documentar es:

* La arquitectura de la aplicación.

* El flujo de trabajo que sigue el equipo.

* Las practicas y convenciones que sigue el equipo al programar, ademas del uso de un Linter.

* Los casos de uso e historias de usuario.

En este tipo de documentacion es recomendable agregar diagramas si ayudan a entender el funcionamiento de la aplicación.

