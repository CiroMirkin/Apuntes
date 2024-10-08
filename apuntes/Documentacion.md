# Documentación
29_08_2024

La documentación de los proyectos es importante porque nos permite dejar clara toda la información que un desarrollador podría necesitar en el futuro, podríamos ser nosotros mismos o un equipo completamente diferente. Hay dos tipos principales de documentación, la del código y la del equipo, en ambas buscamos aportar información que no es obvia y explicar cual es propósito de cada cosa dentro del proyecto.

Documentación del código:

* Variables, arreglos, enums, etc.
* Funciones, clases, métodos y módulos.
* Algoritmos y bloques de código.

Documentación del equipo y/o proyecto:

* Arquitectura.
* Flujo de trabajo.
* Practicas del equipo.
* Casos de uso e historias de usuario.

## Documentación del código en el código

Los comentarios sirven para documentar el código y son muy efectivos si sabemos que escribir en ellos, no son la única herramienta, pero si la mas básica.

La clave para escribir comentarios que ayuden esta en escribirlos antes que el mismo código. Describimos lo que tenemos que hacer y los detalles mas importantes que conocemos, de esta forma dejamos claro cual es el comportamiento que esperamos del código y toda la información que es clave a la hora de entender su futuro funcionamiento. 

Los comentarios de un bloque de código deben dejar claro **que hace y porque lo hace**, nunca deberían decir como lo hace. Para saber que hace un bloque de código leemos su comentario y para saber como lo hace leemos el mismo código, esa es la idea de los comentarios. Dicho de otra forma los comentarios nos sirven como una abstración del código donde dejamos de lado su implementación.

### Comentarios de alto nivel

Los comentarios de alto nivel nos van a permitir documentar toda la información necesaria para usar funciones, clases, métodos o módulos.

Algunas preguntas clave para lograr esto son:

* ¿Que trata de hacer esta función?

* ¿Que es lo más simple que podemos decir que explique todo en esta función?

* ¿Que es lo más importante acerca de esta función?

Y con estas otras tratamos de encontrar las características fundamentales, ¿Porque se ejecuta este código? ¿Hay efectos secundarios (Los cambios se ven reflejados o afectan a otras partes de la aplicación)? ¿Hay excepciones? ¿Cual es la condición para que se ejecute? ¿Hay alguna pre-condición?

### Comentarios de bajo nivel

Estos comentarios de bajo nivel son los que escribimos dentro de funciones o métodos para describir los detalles que no quedan claros en el código, muchas veces estos comentarios no son necesarios sobre todo si las funciones son simples y cortitas, donde suelen ser mas útiles es en variables.

Los nombres de las variables deberían ser descriptivos y auto explicativos, deberían dejar claro que es lo que almacenan, aun asi no podemos escribir nombres largisimos, deberíamos centrarnos solo en lo mas importante, ahi es donde entran los comentarios que nos van a permitir no solo describir que es lo que representa una variable sino también agregar detalles, por ejemplo, podríamos tener una variable llamada *rango* la cuál podría tener un comentario como el siguiente: *El rango en que el usuario tiene permitido moverse dentro del mapa medido en kilómetros*.

Los comentarios de bajo nivel también podrían: 

* Describir las soluciones que descartamos y porque lo hicimos, al igual que las soluciones que probamos y no funcionaron. 

* Avisar de algún cambio que no debe hacerse y el motivo de esto.

* Dejar claro que la solución implementada es provisoria o cuales son sus limitaciones.

### Comentarios muy largos

Si un comentario es muy largo o nos cuesta escribirlo quiere decir que hay un posible fallo en el diseño del código, por ejemplo, podría indicar que una variable tiene múltiples usos o que un método hace demasiadas cosas. 

### Mantenimiento de los comentarios

Al hacer cambios en el código es posible que algo de la información de los comentarios quede obsoleta, eso es inevitable. 

La documentación desactualizada es un dolor de cabeza, confunde y frustra al programador que la lee, por eso es importante mantenerla actualizada.

Los comentarios de alto nivel al no tener detalles sobre el código son más fáciles de mantener, solo son afectados por los cambios en el comportamiento general del código. Por otro lado los comentarios de bajo nivel al contener detalles y ser precisos son sensibles pequeños cambios en el código. Ninguno es mejor que otro ambos son necesarios para informar cosas diferentes.

Algunos consejos para mantener la documentación actualizada son:

* Mantener los comentarios lo mas cerca posible del código que documentan, esto no solo facilita su actualización sino también facilita su lectura.

* Eliminar completamente la información duplicada, la documentación debería estar en un solo sitio y si no es posible que este cerca del código se puede referenciar con un comentario, pero nunca duplicarse.

* Una buena practica antes de hacer un *commit* de los cambios en el código, es revisar la documentación y asegurarse de que no este desactualisada.

## Documentación del equipo y proyecto

Hay muchas formas de documentar un proyecto y las practicas del equipo, la mas simple es usando documentos Markdown, pero sea cúal sea el medio que elijamos la documentación debe ser de fácil acceso para todo el equipo. 

Lo que podemos documentar es:

* La arquitectura de la aplicación.

* El flujo de trabajo que sigue el equipo.

* Las practicas y convenciones que sigue el equipo al programar, ademas del uso de un Linter.

* EL formato que siguen los *commits* y la forma en que se gestionan las ramas del proyecto.

* Los casos de uso e historias de usuario.

En este tipo de documentación es recomendable agregar diagramas si estos ayudan a entender el funcionamiento de la aplicación, no sirve de nada hacer diagramas que nadie entiende, estos deben adecuarse a la complejidad del proyecto y los conocimientos del equipo. Un diagrama recomendable para documentar podría ser el modelo de arquitectura C4.

///
El Libro "A philosophy of software desing" de John Ousterhout.
El libro "Código sostenible" de Carlos Blé Jurado.
///