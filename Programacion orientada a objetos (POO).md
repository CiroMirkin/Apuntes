v a c i o - i n f o r m a t i c o
====
*Autor: Mirkin Ciro* <br>
*Emitido el 14_11_2021*


# Programación orientada a objetos (POO) 

La POO por sus siglas en español o OOP según sus siglas en inglés, es un paradigma declarativo e imperativo, ya que se basa en la creación de clases, que poseen características (atributos) y funciones (métodos) con fines específicos y únicos para resolver un problema. 

La POO tiene sus ventajas y una de ellas es que al haber un fallo es posible saber de manera rápida donde se aloja, ya que cada clase tiene una [responsabilidad única (SRP)](./solid.html). Además, también nos permite organizar y pensar en cómo son las relaciones o interacciones entre las diferentes partes de un sistema, y así poder aplicar diferentes modelos de interacción (como MVC), pero también trae cosas malas como puede ser el crecimiento excesivo de una clase que dificulta la administración de la misma, pero como cabe esperar esto se puede solucionar con una buena administración y factorización del código y/o contenido de las clases. 

> Paradigma: Es un modelo o estilo de programación, que describe la forma de estructurar un programa. <br> 

> Responsabilidad única (SRP): Es el primero de los principios SOLID, los cuales estan orientados a la POO.

## Partes de una clase 

Las partes definidas a continuación son solo las principales ya que existen más como los destructores, estados o eventos. 


* Clase: Agrupa a los atributos y métodos, aunque también se puede pensar como una plantilla que luego será usada para resolver distintos problemas relacionados en un contexto.

* Atributos: Son variables globales en la clase y son usadas por los métodos.
* Métodos: Son las funciones que contiene la clase, las cuales pueden recibir nuevos atributos, retornar valores y llamar a otros métodos de la clase.

* Constructores: Es la función que se encarga de administrar los valore recibidos desde el exterior y convertirlos en atributos para ser usados como tales, pero también se pueden crear atributos que no provengan del exterior de la clase. En resumen, administra los atributos para ser usados globalmente dentro de la clase. 

* Instancia: Proceso en el que se crea un objeto para darle uso a una clase.
* Objetos: Son generados a partir de una clase y también son conocidos como instancias.

## Pilares de la POO 

Estos son algunos de los pilares mas importantes dentro de la programación orientada a objetos, pero hay mas como cohesión o acoplamiento al igual que otras características como modularidad, destructores o interfaces. 

### Herencia 

La herencia de una clase se da cuando una clase obtiene todas las características y funcionalidades de otra clase, al hacerse la herencia hay dos partes fundamentales, la clase base y la clase hija (clase heredada).

### Polimorfismo 

El polimorfismo es el pilar que genera más confusión debido a su nombre: poli (muchas) morfismo (formas), pero al final esta es la cualidad de tener varios métodos con el mismo nombre en diferentes clases con diferentes acciones o ligeros cambios. Esto se logra sobreescribiendo el método al heredarlo, porque si, este pilar tiene lugar luego de hacer una herencia.

	Ejemplo: Tenemos la super clase 'animal' con el método 'comer()', este 
	método al ser heredado en diferentes animales se implementaría de diferentes 
	formas ya que no todos los animales comen de la misma manera, pero todos 'comen'.

### Encapsulamiento 

El encapsulamiento en una clase pasa cuando se seleccionan partes de información que quedaran exclusivamente dentro de la clase sin ser accesibles desde el exterior, esta "información" puede ser atributos o métodos.

### Abstracción 

La abstracción sucede cuando se representan cosas complejas de una manera simple, ocultando los detalles complejos al usuario. 
 
    Para usar una computadora no hay necesidad de saber cómo 
    funciona por dentro o saber programar, lo mismo aplica a un auto o un micrófono.

--- 
Si quieres reforzar conceptos puedes buscar en: [profile.es](http://profile.es), también para saber mas sobre su historia se puede recurrir a Wikiedia, al igual que ampliar su aplicabilidad y optimización aprendiendo sobre patrones de diseño y principios SOLID, ya que estos resuelven problemas como la organización, creación, control o factorización de las clases y sus relaciones. 

 
