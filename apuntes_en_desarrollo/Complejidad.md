# Complejidad
00_00_2024

En una aplicación nuestras funciones, clases y componentes pueden ser muy complejos si no pensamos en su diseño. Esta complejidad dificulta y hace arriesgado trabajar con código *"legado"* o código que escribimos el mes pasado.

> Algo complejo es difícil de entender y modificar. 

Al desarrollar una aplicación su complejidad aumenta inevitablemente mientras agregamos nuevas funcionalidades y características. 

Si no pensamos en el diseño interno de nuestra aplicación esta en poco tiempo sera demasiado compleja en comparación con su tamaño y con solo un puñado de características sera difícil agregar mas o cambiar las que ya existen. 

La velocidad de desarrollo y crecimiento que comenzó siendo muy rápida, empezara a caer dando lugar a una complejidad absurda, fruto de programar lo primero que se nos paso por la cabeza sin pensar en cuestiones de diseño.

Esta *complejidad absurda* no aparece de un dia para otro, es la acumulación de pequeños descuidos, como si fuera una bola de nieve, poco a poco la complejidad del proyecto creció hasta ser absurda. Es en este punto donde agregar o cambiar algo relativamente simple lleva días o semanas, pero si pensamos y mejoramos continuamente el diseño interno de nuestra aplicación reduciendo la complejidad a medida que esta surge, podemos facilitar tanto la expansión como la modificación de nuestra aplicación a largo plazo haciendo mas llevado su desarrollo.

## Diseño interno

Este *"Diseño interno"* del que hablamos no es mas que la forma en que se relacionan y dependen las diferentes partes de nuestra aplicación, es en este punto donde el concepto de *dependencia* cobra importancia.

> Una dependencia se da cuando una parte no puede entenderse o cambiarse por si sola. Si para cambiar una clase A también tengo que cambiar una clase C, entonces A depende de C. 

No importa si son clases, módulos o funciones, las dependencias siempre existen en mayor o menor medida, por eso entender bien este concepto nos permitirá mejorar el diseño de nuestra aplicación y tomar mejores decisiones.

Podemos reducir la complejidad haciendo refactorizaciones y rediseños diariamente buscando dos cosas:

* Facilitar futuros cambios dentro de la aplicación (Sin exagerar), y

* que el código sea lo mas simple y obvio posible (Exagerando).

Dos practicas que nos ayudaran a cumplir estos objetivos pueden ser:

* Tratar de reducir la cantidad de esfuerzo mental necesaria para entender el propósito o funcionamiento de una porción de código o parte de nuestra aplicación; y

* tratar de encapsular la complejidad ocultando las partes complejas detrás de partes más simple, este concepto de *encapsulación* viene de la mano con el concepto de *abstracción*, es importante entender ambos.

## Síntomas y causas

Una porción de código puede ser **complejo si**:

* Al hacer cambios estos tiene muchas repercusiones, repercusiones que no esperábamos.

* Hay una carga cognitiva excesiva y cuesta entender el propósito o funcionamiento de una porción de código.

* No sabemos por donde empezar a resolver una tarea o no sabemos a donde ir para realizar un cambio en la aplicación.

Estos tres indicadores suelen ser **causados por**:

* Una mala administración de las dependencias y abstracciones entre componentes de código (Clases, funciones, módulos, etc).

* La sobre ingeniería que surge cuando hacemos mas de lo necesario, en este punto nos puede ayudar seguir el principio YANGI o el principio KISS.

* La falta de información, ya sea como documentación o información explicita en el código. 
	
	No solo el nombre de las variables y funciones son importantes, también lo son los comentarios explicando mas a fondo el propósito de alguna parte de código, por ejemplo, explicando en que circunstancias se usaría una función, o un pequeño documento explicando la arquitectura de la aplicación.
