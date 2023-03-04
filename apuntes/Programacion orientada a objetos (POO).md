# Programación orientada a objetos (POO) 
(Mirkin Ciro) 14_11_2021

La POO por sus siglas en español (OOP en inglés), es un paradigma declarativo e imperativo, ya que se basa en la creación de clases que poseen características (atributos) y acciones (métodos).

## Partes principales de una clase 

* Atributos: Son variables globales en la clase que pueden ser usadas por los métodos.

* Constructor: Es la función que se encarga de administrar los valore recibidos desde el exterior y convertirlos en atributos, pero también se pueden crear atributos que no provengan del exterior de la clase, aunque esto cambia segun el lenguale el constructor siempre esta relacionado con los atributos.

* Métodos: Son las funciones que contiene la clase, las cuales pueden recibir y retornar valores, al igual que llamar a otros métodos de la clase.

* Instancia: A travez de ella se le da uso a la clase.
* Objeto: Es la variable que almacena una instancia de una clase.

## Herencia 

La herencia de una clase se da cuando una clase obtiene todas las características y funcionalidades de otra clase, al hacerse la herencia hay dos partes fundamentales, la clase base y la clase hija, la clase hija hereda de la clase base.

## Polimorfismo 

El polimorfismo es la cualidad de tener varios métodos con el mismo nombre en diferentes clases con ligeros cambios. Cuando varias clases heredan de la misma hay veces que sobre escribimos algunos métodos para hacer algunos cambios en su funcionamiento.

Ejemplo: Tenemos la clase base "animal" con el método "comer", este método al ser heredado en diferentes animales se implementaría de diferentes formas ya que no todos los animales comen de la misma manera, pero todos "comen".

	El polimorfismo genera mucha confusión, y su nombre no ayuda.

## Encapsulamiento 

El encapsulamiento en una clase pasa cuando se seleccionan partes de información que quedaran exclusivamente dentro de la clase sin ser accesibles desde el exterior, esta "información" puede ser atributos o métodos.

## Abstracción 

La abstracción sucede cuando se representan cosas complejas de una manera simple, ocultando los detalles complejos del exterior. 

Ejemplo: Para usar una computadora no hay necesidad de saber cómo funciona por dentro o saber programar.
