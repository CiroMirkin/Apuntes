# Complejidad
00_00_2024

¿Que es la complejidad? O una pregunta mas simple ¿Como es algo complejo? Algo complejo es dificil de entender y modificar. Dentro de una aplicación hay muchas cosas que pueden ser complejas si tomamos malas deciciones o directamente sin tomar deciciones de ningun tipo.

Cuando desarrollamos una aplicación su complejidad aumenta inevitablemente mientras agregamos caracteristicas y funcionalidades. Si no nos preocupamos por el diseño interno de nuestra aplicación, esta en poco tiempo comenzara a ser muy compleja, desamasiado compleja en comparación con su tamaño, con solo un puñado de caracteristicas ya es difícil agregar otras nuevas o hacer pequeños cambios. Asi poco a poco la velocidad de desarrollo y crecimiento que empezo siendo muy rapida cae en picada. Esto es lo que sucede al no pensar en el diseño y programar lo primero que se nos pasa por la cabeza.

La complejidad absurda no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complijidad del proyecto crece hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva dias o semanas, pero todo esto **se puede evitar si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación**. Con este enfoque reducimos la complejidad a medida que esta surge y facilitamos tanto la expanción como modificación de nuestra apliocación a largo plazo.

Este "Diseño interno" del que hablamos no es mas que la forma en que se relacionan las diferentes partes de nuestra aplicación, mas concretamente hablamos de "las dependencias" dentro de una aplicación, el nivel de dependencia de dos componente puede facilitar o fastidiar todo.

> La depencia se da cuando una parte no puede entenderce o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C.

Podemos reducir la complejidad haciendo refactorizaciones y rediseñando partes de código, en resumen:

1. Buscar que el código sea lo mas simple y obio posible.
2. Buscar encapsular la complejidad para reducir la carga cognitiva y facilitar el cambio.
