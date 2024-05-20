# Complejidad
00_00_2024

Algo complejo es dificil de entender y modificar. Dentro de una aplicación hay muchas cosas que pueden ser complejas por tomar malas deciciones o directamente por no tomarlas.

Cuando desarrollamos una aplicación su complejidad aumenta inevitablemente mientras agregamos caracteristicas y funcionalidades. Si no pensamos en el diseño interno de nuestra aplicación, esta en poco tiempo comenzara a ser muy compleja, desamasiado compleja en comparación con su tamaño, con solo un puñado de caracteristicas ya es difícil hacer pequeños cambios. La velocidad de desarrollo y crecimiento que empezo siendo muy rapida empieza a caer dando lugar a una complejidad absurda que se origino al programar lo primero que se nos paso por la cabeza sin pensar en el diseño.

La complejidad absurda no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complejidad del proyecto crece hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva dias o semanas, pero todo esto **se puede evitar si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación**. Con este enfoque reducimos la complejidad a medida que surge y facilitamos tanto la expanción como la modificación de nuestra aplicación a largo plazo.

Este "Diseño interno" del que hablamos no es mas que la forma en que se relacionan las diferentes partes de nuestra aplicación y mas concretamente hablamos de las dependencias entre componentes ya que el nivel de dependencia de dos componente puede facilitar o fastidiar muchas cosas. Antes de seguir refresquemos el concepto de *dependencia*:

> La depencia se da cuando una parte no puede entenderce o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C. 

No importa si son clases, modulos o funciones la dependencia siempre existe en mayor o menor medida, por eso es importante entender bien este concepto para poder decidir que es lo mas conveniente según nuestro entorno y los problemas a resolver.

Podemos reducir la complejidad haciendo refactorizaciones y rediseñando partes de código:

1. Buscando que el código sea lo mas simple y obio posible.
2. Buscando encapsular la complejidad para reducir la carga cognitiva y facilitar el cambio.
