# Diseño orientado a objetos (DOO)

El diseño orientado a objetos tiene tres principios que nos permiten tener un mayor control sobre las clases y sus dependencias, siendo su pricipio mas fuerte y revolucionario el *polimorfismo*.

## Encapsulamiento 

El encapsulamiento en una clase pasa cuando se seleccionan métodos o atributos que solo se podran usar dentro de la clase y no desde el exterior.

## Herencia 

La herencia de una clase se da cuando una clase obtiene **todos** los atributos y métodos de otra clase, la pasar esto hay dos partes fundamentales, la clase padre y la clase hija donde la clase hija hereda de la clase padre.

## Polimorfismo 

El polimorfismo es un principio que nos ayuda a tener el control sobre las dependencias de una clase, y esto se logra haciendo que una clase dependendan de interfaces y no de otras clases, se logra ocultar algo concreto y complejo detras de algo abstracto y simple, dependemos de la definicion de la clase y no de la clase, pudiendo esta incluso cambiar de nombre siempre y cuando implemente la misma interfaz.

Lo que llamamos *polimorfismo* es poder ser independiente de algo concreto, por ejemplo, en vez de depender de un gato negro de ojos verdes podemos depender de un gato con un color de pelaje y de ojos, en otro ejemplo, podriamos hacer que el dominio de una aplicacion ya no depende de una interfaz de usuario concreta como un formulario sino de una interfaz, permitiendo esto que no nos afecten los cambios que pueda llegar a haber en el formulario e incluso permitiendo desarrollar el dominio independientemente de elementos graficos como los formulario.

/// 
El libro: "Arquitectura limpia" de Robert C.Martin.
https://es.khanacademy.org/computing/computer-programming/programming/object-oriented/a/review-object-oriented-design
https://es.scribd.com/document/546651740/Diseno-Orientado-a-Objetos-OOD#
///