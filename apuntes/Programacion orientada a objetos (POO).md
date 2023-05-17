# Programación orientada a objetos (POO) 
(Mirkin Ciro) 14_11_2021

La POO por sus siglas en español (OOP en inglés), es un paradigma declarativo e imperativo, ya que se basa en la creación de clases que poseen características (atributos) y acciones (métodos).

## Una clase y sus partes 

Las clases son contenedores de funciones e información que pueden ser usadas dentro y fuera de la clase. Principalmente una clase contiene atributos y métodos. Los atributos son variables globales en la clase que pueden ser usadas por los métodos y los métodos son las funciones que contiene la clase, las cuales pueden recibir y retornar valores, al igual que llamar a otros métodos de la clase. Por último el constructor es un método que se encarga de administrar los valore recibidos desde el exterior y convertirlos en atributos, pero también se pueden crear atributos que no provengan del exterior de la clase, aunque esto cambia según el lenguaje el constructor siempre está relacionado con los atributos.

Para usar una clase se crea una instancia, cuando esta se almacena en una variable o contante pasa a llamarse objeto.

## Pilares de la POO

Los pilares de la programación orientada a objetos son cuatro conceptos fundamentales que encontraras en casi todos los lenguajes y aplicados de formas distintas.

### Herencia 

La herencia de una clase se da cuando una clase obtiene **todas** las características y funcionalidades de otra clase, al haber una herencia hay dos partes fundamentales, la clase padre y la clase hija donde la clase hija hereda de la clase padre.

### Polimorfismo 

El polimorfismo genera mucha confusión, y su nombre no ayuda, pero no es mas que la cualidad de tener varios métodos con el mismo nombre en diferentes clases con ligeros cambios, esto puede suceder cuando varias clases heredan de la misma y sobre escribimos algunos métodos para hacer cambios en su funcionamiento.

Ejemplo: Tenemos la clase base "animal" con el método "comer", este método al ser heredado en diferentes animales se implementaría de diferentes formas ya que no todos los animales comen de la misma manera, pero todos **comen**.

### Encapsulamiento 

El encapsulamiento en una clase pasa cuando se seleccionan partes de información que quedaran exclusivamente dentro de la clase sin ser accesibles desde el exterior, esta "información" puede ser atributos o métodos.

### Abstracción 

La abstracción es la manera en se representa a un objeto para que sea simple por fuera, ocultando sus partes complejas, dicho de otra manera es representar cosas complejas de una manera simple para que otros la puedan usar. La forma en la que representamos algo complejo como algo simple es usando una *interfaz*, por ejemplo, cuando encendemos un auto lo hacemos girando una llave en vez de conectar cables, en este caso la interfaz es la llave y la cerradura que nos permiten ocultar lo complejo que es encender un auto. Cuando programamos clases dependiendo del lenguaje esta abstracción suele hacerse a través de métodos e interfaces.
