# Complejidad
00_00_2024

¿Que es la complejidad? Mejor una pregunta mas simple ¿Como es algo complejo? Algo complejo es dificil de entender y modificar, dentro de una aplicación hay muchas cosas que pueden ser complejas si tomas malas deciciones o pero aun sin tomar deciciones.

Cuando desarrollamos una aplicación su complejidad aumenta inevitablemente mientras crece al agregar caracteristicas y funcionalidades. Si no nos preocupamos por el diseño interno de nuestra aplicación, poco tiempo esta comenzara a ser muy compleja, desamasiado compleja en comparación con su tamaño, con un puñado de caracteristicas ya es difícil agregar nuevas o hacer pequeños cambios. Asi poco a poco la velocidad de desarrollo y crecimiento que empezo siendo muy rapido empieza a caer en picada, por no haber pensado en el diseño y haber programar lo primero que se nos paso por la cabeza.

La complejidad absurda no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complijidad del proyecto crece hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva dias o semanas, pero todo esto **se puede evitar si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación**, de esta forma reducimos la complejidad y por ende facilitamos su expancion y modificacion a largo plazo.

Este "Diseño interno" del que hablamos no es mas que la forma en que se relacionan las diferentes partes de nuestra aplicación, mas concretamente hablamos de "las dependencias" dentro de una aplicación, el nivel de dependencia de dos componente puede facilitar o fastidiar todo.

> La depencia se da cuando una parte no puede entenderce o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C.

Podemos reducir la complejidad haciendo refactorizaciones y rediseñando partes de código, en resumen:

1. Hacer el código mas simple y obio.
2. Buscar encapsular la complejidad.
