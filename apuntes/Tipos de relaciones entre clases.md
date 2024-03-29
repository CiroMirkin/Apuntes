# Tipos de relaciones entre clases
06_06_2023

Cuando usamos POO creamos clases y estas se relacionan de diferentes formas, entender el tipo de relaciones que puede haber es útil sobre todo cuando se usan diagramas UML para representar clases, y bueno sus relaciones.

## Herencia o Generalización

En las relaciones de herencia tenemos dos partes: Una clase madre y una clase hijo, donde la clase hijo obtiene todos los métodos y atributos de la clase madre, además la clase hijo puede agregar nuevos métodos y atributos, al igual que sobrescribir los heredados.

## Implementación o Realización

Las relaciones de implementación se hacen dependiendo del lenguaje a través de interfaces o clases abstractas. Las interfaces son descripciones de como tiene que ser una clase, como deben ser sus métodos y atributos. Cuando una clase implementa una interfaz rellena atributos y métodos con información y lógica, podríamos decir que el tipo de relación es *definición*, ya que la interfaz define como va a ser la o las clases que la implementen.

## Dependencia

Cuando un cambio en una clase nos obliga a modificar otra, por ejemplo cuando se pasa la instancia de una clase como argumento a un método de otra clase.

	A -> X
	A depende de X
	La clase A depende de la clase X que recibe como argumento en uno de sus métodos.

La dependencia entre clases puede reducirse utilizando interfaces, de esta manera una clase ya no depende de otra clase sino de una interfaz que al ser abstracta da mucho más espacio para el cambio, sigue habiendo una dependencia pero en menor medida.

## Asociaciones

Las relaciones de asociación suceden al haber un atributo en una clase que almacena la instancia de otra, la cantidad de asociaciones se llama *Multiplicidad*.

### Unidireccional y bidireccional

En las asociaciones unidireccionales o dirigidas, una clase guarda en un atributo la instancia de otra, y en las bidireccionales dos clases guardan en un atributo una instancia de la otra.

### Agregación y composición

Cuando hablamos de **agregación** las clases que guardamos como instancias pueden existir por separado o estar asociadas a varias clases, pero cuando hablamos de **composición** las clases que guardamos no son capaces de existir por separado o asociarse a otras clases, es decir una clase gestiona el ciclo de vida de otra.

///
El libro sobre patrones de diseño de: https://refactoring.guru/
https://www.edrawsoft.com/es/what-is-uml-diagram.html
https://www.google.com/amp/s/creately.com/blog/es/diagramas/relaciones-de-diagrama-de-clases-uml-explicadas-con-ejemplos/amp/
https://www.google.com/amp/s/creately.com/blog/es/diagramas/relaciones-de-diagrama-de-clases-uml-explicadas-con-ejemplos/amp/
http://elvex.ugr.es/decsai/java/pdf/3C-Relaciones.pdf
http://micaminomaster.com.co/arquitectura-software/relaciones-en-un-diagrama-de-clase/
///