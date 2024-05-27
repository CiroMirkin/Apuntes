# Complejidad
00_00_2024

Algo complejo es dificil de entender y modificar. Dentro de una aplicación hay muchas cosas que pueden ser complejas, ya sea por tomar malas deciciones o directamente por no tomarlas.

Cuando desarrollamos una aplicación su complejidad aumenta inevitablemente mientras agregamos caracteristicas y funcionalidades. 

Si no pensamos en el diseño interno de nuestra aplicación, esta en poco tiempo comenzara a ser desamasiado compleja en comparación con su tamaño, con solo un puñado de caracteristicas ya es difícil hacer pequeños cambios. 

La velocidad de desarrollo y crecimiento que comenzo siendo muy rapida empieza a caer dando lugar a una complejidad absurda fruto de programar lo primero que se nos paso por la cabeza sin pensar en cuestiones de diseño.

La complejidad absurda no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complejidad del proyecto crece hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva dias o semanas, pero todo esto **se puede evitar si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación**. Con este enfoque reducimos la complejidad a medida que surge y facilitamos tanto la expanción como la modificación de nuestra aplicación a largo plazo.

## Diseño interno

Este "Diseño interno" del que hablamos no es mas que la forma en que se relacionan las diferentes partes de nuestra aplicación y mas concretamente hablamos de las dependencias entre componentes. Este nivel de dependencia entre componente puede facilitar o fastidiar muchas cosas, por eso antes de seguir refresquemos el concepto de *dependencia*:

> La depencia se da cuando una parte no puede entenderce o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C. 

No importa si son clases, modulos o funciones la dependencia siempre existe en mayor o menor medida, por eso es importante entender bien este concepto para poder decidir que es lo mas conveniente según nuestro entorno y los problemas a resolver.

Podemos reducir la complejidad haciendo refactorizaciones y rediseñando partes de código diariamente:

1. Buscando que el código sea lo mas simple y obio posible.

2. Buscando encapsular la complejidad para reducir la carga cognitiva y facilitar el cambio.

## Sintomas y causas

Una porcion de código puede ser compleja si:

* Al hacer un cambio este tiene muchas repercusiones, por ejemplo al cambiar el contenido del método de una clase se rompe **toda** la aplicación.

* Hay una carga cognitiva exisiva, cuesta entender la función o finalidad de una porción de codigo.

* No sabemos por donde empezar a resolver una tarea o hacer un cambio.

Estos tres indicadores suelen ser causados por:

* Una mala administracion de las dependencias y abstracciones en las relaciones de porciones de código.

* Sobre ingenieria, hacemos muchisimo mas de lo necesario sin seguir el principio YANGI.

* Falta de información, ya sea como documentación o información que deberia estar explicita en el código, por ejemplo en el nombre de variables o funciones.