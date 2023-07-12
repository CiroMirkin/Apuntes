# Diseño orientado a objetos (DOO)
C.Mirkin (11_06_2023)

El diseño orientado a objetos tiene tres conceptos que nos permiten tener un mayor control sobre los objetos y sus dependencias, siendo su pricipio mas fuerte y revolucionario el *polimorfismo*.

¿Y las clases? Las clases son una forma de crear objetos y de las más seguras, pero también podemos, aunque sin tanta facilidad, aplicar estos conceptos con funciones. Por esto mismo voy a referirme a los objetos como clases, ya que es donde más se aplican el DOO.

## Encapsulamiento 

El encapsulamiento en una clase es seleccionar métodos o atributos que **solo** se podran usar **dentro de la clase** y no desde el exterior.

## Herencia 

La herencia se da cuando una clase obtiene **todos** los atributos y métodos de otra clase, al pasar esto hay dos partes fundamentales: La clase padre y la clase hija donde la clase hija hereda de la clase padre.

## Polimorfismo 

El polimorfismo es un principio que nos ayuda a tener el **control** sobre las **dependencias** de un objeto permitiendo que un objeto varíe en su forma concreta, diferenciando entre forma concreta donde sabemos todo, que es, que hace y como lo hace, y la forma abstracta donde no como se hacen las cosas. El permitir que un objeto cambie en su forma concreta y tener el control sobre las dependencias son cosas que vienen de la mano y nos permiten aplicar otros principios como SOLID.

El polimorfismo es lo que es gracias a las *interfaces* o clases abstractas según el lenguaje, el concepto es el mismo, *definir como será o tiene que ser una clase sin detalles*, por eso las interfaces son una parte esencial, una herramienta, un velo, un confesionario​ e incluso un puente. Nos permiten saber que hay del otro lado, sin detalles, permitiéndonos controlarlos y hacer que cambien según lo necesitemos, controlamos lo que sabe un objeto sobre otro, controlamos la dependencia entre objetos.

Existen dos casos muy famosos de polimorfismo: 

En el primer caso hay una interfaz *"animal"* definiendo que todos los animales respiran, comen, duermen y tienen un tamaño, ahora bien, cada objeto de un animal concreto como un gato o un pez implementa esta interfaz y define como es que respira. El gato y el pez respiran o duermen de diferentes formas, pero duermen y respiran.

En el otro caso pasa cuando ponemos una interfaz como parámetro de una función, por ejemplo la función *"beber"* no sabe los detalles de lo que va a tomar, pero si sabe que será un líquido, con un color, una transparencia y una densidad, no le importa si es un té o miel mientras sea un objeto que cumpla esa definición.

/// 
El libro: "Arquitectura limpia" de Robert C.Martin.
https://es.khanacademy.org/computing/computer-programming/programming/object-oriented/a/review-object-oriented-design
https://es.scribd.com/document/546651740/Diseno-Orientado-a-Objetos-OOD#
///