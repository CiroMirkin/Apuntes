# Cohesión y acoplamiento
(Ciro Mirkin) 22_01_2023

Depender es necesitar, si yo dependo de algo para trabajar no puedo trabajar si no tengo ese algo. Una aplicación se compone de diferentes capas y componentes, lo que solemos buscar es reducir al minimo la dependencia entre estas capas y componentes.

Podriamos ver a la cohesión y al acoplamiento como dos formas de dependencia, la primera hacia adentro y la segunda hacia afuera. Por ejemplo: En una clase, hay dependencia hacia dentro entre sus metodos y hay dependencia hacia afuera como podria serlo depender de otra clase. Como podemos ver es menos importante que un metodo dependa de otro y mas problematico que una clase dependa de otra.

Si dependemos lo menos posible del exterior vamos a lograr un alto nivel de cohesion y eso suele ser lo mejor, una cohesion alta y un acoplamiento bajo, lo ideal seria que las clases colaboraran entre si en vez de depender la una de la otra, pero esto no siempre se logra o es posible.

Aqui se puso de ejemplo a una clase, pero lo mismo aplica entre modulos o entre las capas de una arquitectura.

___
Material usado de referencia: El libro código sostenible de Carlos Blé Jurado.