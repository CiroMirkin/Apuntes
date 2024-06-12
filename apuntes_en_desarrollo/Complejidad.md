# Complejidad
00_00_2024

Algo complejo es dificil de entender y modificar. Dentro de una aplicación hay muchas cosas que pueden ser complejas, desde funciones hasta clases y modulos, esta *"complejidad"* se da por malas deciciones o directamente por no pensar en el diseño de nuestras clases y componentes. 

Cuando desarrollamos una aplicación su complejidad aumenta inevitablemente mientras agregamos caracteristicas y funcionalidades. Si no pensamos en el diseño interno de nuestra aplicación esta en poco tiempo sera desamasiado compleja en comparación con su tamaño y con solo un puñado de caracteristicas sera difícil hacer cambios. 

La velocidad de desarrollo y crecimiento que comenzo siendo muy rapida comenzara a caer dando lugar a una complejidad absurda fruto de programar lo primero que se nos paso por la cabeza sin pensar en cuestiones de diseño.

Esta *complejidad absurda* no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complejidad del proyecto crece hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva dias o semanas. Todo esto se puede evitar si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación, al tomar este enfoque reducimos la complejidad a medida que surge y facilitamos tanto la expanción como la modificación de nuestra aplicación a largo plazo.

## Diseño interno

Este *"Diseño interno"* del que hablamos no es mas que la forma en que se relacionan y dependen las diferentes partes de nuestra aplicación. Es en este punto donde el concepto de *dependencia* cobra importancia.

> Una depencia se da cuando una parte no puede entenderce o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C. 

No importa si son clases, modulos o funciones, las dependencias siempre existen en mayor o menor medida, por eso entender bien este concepto nos permitira decidir que es mas conveniente según nuestro contexto.

Podemos reducir la complejidad haciendo refactorizaciones y rediseñando partes de nuestra aplicación diariamente. En estas mejoras de diseño buscamos dos cosas:

* Facilitar futuros cambios dentro de la aplicación (Sin exagerar).

* Que el código sea lo mas simple y obio posible (Exagerando).

Dos practicas que nos ayudan a cumplir estos objetivos son:

* Tratar de reducir la cantidad de esfuerzo mental necesaria para entender una porción de código o el funcionamiento de una parte de la aplicación.

* Tratar de encapsular la complejidad ocultar las partes complejas detras de algo mas simple, esto concepto de *encapsulación* biene de la mano con el concepto de *abstracción*.

## Sintomas y causas

Una porcion de código puede ser **compleja si**:

* Al hacer cambios estos tiene muchas repercusiones, repercusiones que no esperabamos.

* Hay una carga cognitiva exesiva y cuesta entender el proposito de una porción de codigo.

* No sabemos por donde empezar a resolver una tarea o no sabemos a donde ir para realizar un cambio en la aplicación.

Estos tres indicadores suelen ser **causados por**:

* Una mala administracion de las dependencias y abstracciones en las relaciones entre partes de código.

* La sobre ingenieria que surge cuando hacemos mas de lo necesario, en este punto nos puede ayudar seguir el principio YANGI.

* La falta de información, ya sea como documentación o información explicita en el código. No solo el nombre de las variables y funciones son importantes sino que también es necesario escribir comentarios explicando mas a fondo el proposito de alguna parte de código, por ejemplo, explicando en que circustancias se usaria una funcion o un pequeño documento explicando la arquitectura de la aplicación.
