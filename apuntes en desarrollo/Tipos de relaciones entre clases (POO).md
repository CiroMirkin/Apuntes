# Tipos de relaciones entre clases (POO)
C.Mirkin (00_00_2023)

Cuando usamos POO creamos clases y estas se relacionan de diferentes formas, entender el tipo de relaciones que puede haber es útil sobre todo cuando se usan diagramas UML para representar clases, y bueno sus relaciones.

## Herencia o Generalización

En las relaciones de herencia tenemos dos partes: Una clase madre y una clase hijo, donde la clase hijo obtiene todos los métodos y atributos de la clase madre. La clase hija puede agregar nuevos métodos y atributos, al igual que sobreescribir los heredados.

## Implementación o Realización

Las relaciones de implementación se hacen dependiendo del lenguaje a través de interfaces o clases abstractas. Las interfaces son descripciones de como tiene que ser una clase, como deben ser sus métodos y atributos. Cuando una clase implementa una interfaz rellena atributos y métodos con información y lógica, podríamos decir que el tipo de relación es *definición*, ya que la interfaz define como va a ser la o las clases que la implementen.

## Dependencia

Cuando un cambio en una clase nos obliga a modificar otra, hay una relación de dependencia. Todo esto suena a una forma distinta de decir *herencia*, pero no es así, en la herencia los cambios en el padre se aplican automáticamente en el hijo mientras que cuando hay una **dependencia somos obligados a modificar una clase para que siga funcionando**. Este tipo de relación suele suceder cuando se pasa la instancia de una clase como argumento de un método.

## Asociaciones

Las relaciones de asociación suceden al haber un atributo en una clase que almacena la instancia de otra, la cantidad de asociaciones se llama *Multiplicidad*.

### Unidireccional y bidireccional

En las asociaciones unidireccionales o dirigidas, una clase guarda en un atributo la instancia de otra, y en las bidireccionales dos clases guardan en un atributo una instancia de la otra.

### Agregación y composición

Cuando hablamos de **agregación** las clases que guardamos como instancias pueden existir por deparado o estar asociadas a varias clases, pero cuando hablamos de **composición** las clases que guardamos no son capaces de existir por separado o asociarse a otras clases.