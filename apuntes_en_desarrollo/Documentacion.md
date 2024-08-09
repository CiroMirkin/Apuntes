# Documentación
00_00_2024

La documentación de los proyectos es importante, pero ¿Que y como se debería documentar? Hay dos tipos principales de documentacion, la del código y la del equipo, en ambas buscamos aportar información que no es obia y explicar cual es proposito de cada cosas dentro del proyecto.

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

Los comentarios sirven para documentar el código y son muy utiles si sabemos que escribir en ellos.

La clave para escribir comentarios de calidad que realmente ayuden esta en escribirlos antes que el mismo código, escribimos lo que tenemos que hacer y los detalles mas importantes que conocemos, de esta forma dejamos claro el comportamiento que esperamos del codigo y toda la información que es clave a la hora de entender su futuro funcionamiento. 

Los comentarios de un bloque de código deben dejar claro **que hace y porque hace lo que hace**, nunca deberían decir como lo hace. Dicho de otra forma los comentarios nos sirven como una forma de abstración del código donde dejamos de lado su implementación concreta. Para saber que hace un bloque de cédigo leemos su comentario y para saber como lo hace leemos el mismo código, esa es la idea de los comentarios.

### Comentarios de alto nivel

Los comentarios de alto nivel nos van a permitir documentar toda la información necesaria para usar las funciones, clases, métodos o modulos que programemos.

Algunas preguntas clave para lograr esto son:

* ¿Que trata de hacer esta función?

* ¿Que es lo más simple que podemos decir que explique todo en esta función?

* ¿Que es lo más importante acerca de esta función?

Y con estas otras preguntas tratamos de encontrar las caracteristicas fundamentales, ¿Porque se ejecuta este código? ¿Hay efectos secundarios (Los cambios se ven reflejados o afectan a otras partes de la aplicación)? ¿Hay exepciones? ¿Cual es la condición para que se ejecute? ¿Hay alguna pre-condición?

### Comentarios de bajo nivel

Estos comentarios de bajo nivel son los que escribimos dentro de funciones o métodos para describir los detalles que no quedan claros en el código, muchas veces estos comentarios no son necesarios sobre todo si las funciones son simples y cortitas, donde suelen ser mas utiles es en variables.

Los nombres de las variables deberían ser los descriptivos y autoexplicativos, deberian dejar claro que es lo que almacenan, aun asi no podemos escribir nombres largisimos, deberíamos centrarnos solo en lo mas importante, ahi es donde entran los comentarios que nos van a permitir no solo describir que es lo que reprecenta una variable sino también agregando detalles, por ejemplo, podríamos tener una variable llamada *rango* la cual podria tener un comentario como el siguiente: *El rango en que el usuario tiene permitido moverce dentro del mapa medido en kilometros*.

Los comentarios de bajo nivel también podrían: 

* Decribir las soluciones que descartamos y porque lo hicimos, al igual que las soluciones que probamos y no funcionaron. 

* Avisar de algun cambio que no debe hacerce y el motivo de esto.

* Dejar claro que la solución implementada es provisoria.

### Los comentarios son muy largos

Si un comentario es muy largo o nos cuesta mucho escibirlo esto quiere decir que hay un posible fallo en el diseño del código, por ejemplo, podría indicar que una variable tiene multiples usos o que un método hace demasiadas cosas. Los comentarios nos pueden ayudar a identidicar estas fallas de diseño, pero solo si estan bien escritos.

### Mantenimiento de los comentarios

Al hacer cambios en el código es posible que algo de la información de los comentarios quede obsoleta. 

La documentación desactualizada esun dolor de cabeza, confunde y frustra al programador que la lee, por eso es importante mantenerla actualizada.

Los comentarios de alto nivel al no tener detalles sobre el código son más faciles de mantener, solo son afectados por los cambios en el comportamiento general del código. Por otro lado los comentarios de bajo nivel al contener detalles y ser precisos son sensibles a los pequeños cambios en el código. Ninguno es mejor que otro ambos son necesarios para informar cosas diferentes.

Algunos consejos para mantener la documentacion actualizada son:

* Mantener los comentarios lo mas cerca posible del código que documenta, esto no solo facilita su actualizacion sino también facilita su lectura.

* Eliminar completamente la información duplicada, la documentacion deberia estar en un solo sitio y si no es posible que este cerca del código se puede referenciar con un comentario, pero nunca duplicarce.

* Una buena practica antes de hacer un *commit* de los cambios en el codigo, es revisar la documentación y asegurarse de que no este desactualisada.

## Documentación del equipo y proyecto

Hay muchas formas de documentar un proyecto y las practicas del equipo, la mas simple es usando documentos Markdown y lo que vamos a documentar es:

* La arquitectura de la aplicación.

* El flujo de trabajo que sigue el equipo.

* Las practicas y convenciones que sigue el equipo al programar, ademas del uso de un Linter.

* Los casos de uso e historias de usuario.

En este tipo de documentacion es recomendable agregar diagramas si ayudan a entender el funcionamiento de la aplicación.

