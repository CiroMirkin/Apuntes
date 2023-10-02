# Más fácil de cambiar (ETC)
00_10_2023

**Más fácil de cambiar** es un objetivo o valor que busca cualquier principio, patrón de diseño o arquitectura de software. Como programadores usamos principios y patrones buscando que la mayor cantidad de partes de una aplicación sean faciles de cambiar y a la hora de tomar deciciones de diseño este concepto es uno de los que hay tener en mente. 

Programar tratando de facilitar los cambios es crear con cosas blandas que sean flexibles para cambiar y adaptarce a lo que usuarios y clientes quieran. Las cosas flexibles tienen una forma y pueden adaptarce, solucionan los problemas del precente y pueden adaptarce a los futuros pero sin solucionarlos porque desconocemos los problemas del futuro y eso esta bien, cada cosa a su tiempo. 

Un principio clave para facilitar el cambio es buscar un bajo acoplamiento y mayor cohesion entre las partes de una aplicación ya sean pequeñas o grandes, sean funciones o capas de una aquitectura. La clave de esto es pensar que cada parte es un contenedor cuyo contenido podría cambiar, una aplicación siempre tendra una base de datos, pero esta podria cambiar a lo largo del tiempo, podriamos pasar de NoSQL a SQL.

Hay que tener en cuenta que mientras más nos alejamos del dominio de una aplicación más posible es que las cosas cambien porque estas empiezan a ser cosas sobre las cuales no tenemos tanto control, son cosas influensiables por usuarios, clientes o empresas externas, ejemplos de esto pueden ser las interfaces de usuario, Frameworks, base de datos o APIs de terceros.
 
Parafraseando los extremos del tio Bob:

> "Si me da una aplicación que funciona perfectamente, pero es imposible de cambiar no funcionara al cambiar los requisitos y ya no será util"

> "Si me da una aplicación que no funciona, pero que es fácil de cambiar, podemos hacer que funcione, podra funcionar al cambiar los requisitos y seguira siendo util."

Un consejo que nos deja *"El programador pragmático"* de David Thomas y Andrew Hunt es tomar nota de nuestras conjeturas sobre posibles cambios, las opciones que tenemos y las decisiones que tomamos, todo esto nos servira como *feedback* para **ver como y porque** las diferentes partes de una aplicación pueden cambiar.

	Piensa en un concepto de diseño como un principio, patrón o arquitectura ¿Esta este valor precente? ¿STD?

///

* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.
* El libro *"Código sostenible"* de Carlos Blé Jurado.
* El libro *"Arquitectura limpia"* de Robert C.Martin.

///