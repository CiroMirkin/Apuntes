# Programa una interfaz antes que una implementación
26_09_2023

Las interfaces dentro de la programación orientada a objetos nos permiten describir como tendría que ser un objeto. Cuando los objetos se relacionan las interfaces nos permiten depender de la descripción del objeto y no del objeto en sí, permitiendo que las implementaciones del objeto varíen.

> Con una interfaz *definimos como será o tiene que ser una clase sin detalles*, reducimos el acoplamiento y controlamos los detalles de un objeto sin depender de ellos.

Empezar creando una interfaz en vez de una implementación nos suma flexibilidad en cuanto a cambio y extensión haciendo el código más duradero.

Hacer esto nos fuerza a pensar como será una clase y por ende a planificar cuál será su contenido y función ¿De qué se va a encargar la clase? ¿Cómo lo hará? ¿Cuántos métodos y atributos creo que voy a necesitar?, o ¿Qué necesita un objeto de otro? Es bueno darnos tiempo para pensar antes de crear una clase y empezar por una interfaz es una buena forma de hacerlo, te ayuda a poner tus ideas en pantalla y a hablar con otras personas sobre lo que estamos pensando en hacer.

Ojo hay que encontrar un equilibrio, porque probablemente cuando terminamos de crear la interfaz y programemos la clase habrá cosas que tengamos que cambiar, porque simplemente no podemos prever o pensar en todo. Esto por un lado, por otro tampoco es cosa de escribir una interfaz al tun tun por el mero hecho de crear una interfaz.

Este método duplica los archivos o hace el código más largo, sin embargo da beneficios a largo plazo.

///

* El libro "Sumérgete en los patrones de diseño" de *Alexander Shvets*.
* https://medium.com/javarevisited/oop-good-practices-coding-to-the-interface-baea84fd60d3
* https://qastack.mx/programming/2697783/what-does-program-to-interfaces-not-implementations-mean

///