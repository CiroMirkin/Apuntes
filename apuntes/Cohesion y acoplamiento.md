# Cohesión y acoplamiento
(Ciro Mirkin) 22_01_2023

Depender es necesitar, si yo dependo de algo para trabajar no puedo trabajar si no tengo ese algo. Una aplicación se compone de diferentes capas y componentes, lo que solemos buscar es reducir al mínimo la dependencia entre estas capas y componentes.

Podríamos ver a la cohesión y al acoplamiento como dos formas de dependencia, la primera hacia adentro y la segunda hacia afuera. Por ejemplo: En una clase, hay dependencia hacia dentro entre sus métodos y hay dependencia hacia afuera como podría serlo depender de otra clase. Como podemos ver es menos importante que un método dependa de otro y más problemático que una clase dependa de otra.

Si dependemos lo menos posible del exterior vamos a lograr un alto nivel de cohesión y eso suele ser lo mejor, una cohesión alta y un acoplamiento bajo, lo ideal seria que las clases colaboraran entre sí en vez de depender la una de la otra, pero esto no siempre se logra o es posible.

Aqui se puso de ejemplo a una clase, pero lo mismo aplica entre módulos o entre las capas de una arquitectura.

___
Material usado de referencia: El libro código sostenible de Carlos Blé Jurado.