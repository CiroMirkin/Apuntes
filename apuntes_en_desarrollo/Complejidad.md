# Complejidad
00_00_2024

Algo complejo es dificil de entender y modificar. Dentro de una aplicación hay muchas cosas que pueden ser complejas, ya sea por tomar malas deciciones o directamente por no tomarlas.

Cuando desarrollamos una aplicación su complejidad aumenta inevitablemente mientras agregamos caracteristicas y funcionalidades. 

Si no pensamos en el diseño interno de nuestra aplicación, esta en poco tiempo comenzara a ser desamasiado compleja en comparación con su tamaño, con solo un puñado de caracteristicas sera difícil hacer pequeños cambios. 

La velocidad de desarrollo y crecimiento que comenzo siendo muy rapida empezara a caer dando lugar a una complejidad absurda fruto de programar lo primero que se nos paso por la cabeza sin pensar en cuestiones de diseño.

Esta complejidad absurda no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complejidad del proyecto crece hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva dias o semanas, pero todo esto **se puede evitar si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación**, tomando este enfoque reducimos la complejidad a medida que surge y facilitamos tanto la expanción como la modificación de nuestra aplicación a largo plazo.

## Diseño interno

Este "Diseño interno" del que hablamos no es mas que la forma en que se relacionan y dependen las diferentes partes de nuestra aplicación. Es en este punto donde el concepto de *dependencias* cobra importancia.

> Una depencia se da cuando una parte no puede entenderce o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C. 

No importa si son clases, modulos o funciones, las dependencias siempre existen en mayor o menor medida, por eso entender bien este concepto es importante para poder decidir que es lo mas conveniente según nuestro contexto.

Podemos reducir la complejidad haciendo refactorizaciones y rediseñando partes de código diariamente:

* Buscando facilitar futuros cambios dentro de la aplicación (Sin exagerar).

* Buscando reducir la carga cognitiva, la cantidad de esfuerzo mental necesaria para entender una porcion de código.

* Buscando que el código sea lo mas simple y obio posible (Exagerando).

* Buscando encapsular la complejidad, buscando ocultarla detras de algo simple.

## Sintomas y causas

Una porcion de código puede ser **compleja si**:

* Al hacer un cambio este tiene muchas repercusiones, por ejemplo al cambiar el contenido del método de una clase se rompe **toda** la aplicación o una parte considerable de ella.

* Hay una carga cognitiva exesiva y cuesta entender la función o proposito de una porción de codigo.

* No sabemos por donde empezar a resolver una tarea o hacer un cambio.

Estos tres indicadores suelen ser **causados por**:

* Una mala administracion de las dependencias y abstracciones en las relaciones entre porciones de código.

* La sobre ingenieria que surge cuando hacemos mas de lo necesario sin seguir el principio YANGI.

* La falta de información, ya sea como documentación o información explicita en el código, no solo el nombre de las variables y funciones es importante también es necesario escribir comentarios explicando mas a fondo el proposito de una función, por ejemplo explicando en que circustancias se usaria.