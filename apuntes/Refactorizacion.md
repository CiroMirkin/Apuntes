# Refactorizacion
(Ciro Mirkin) 29_10_2022

Cambiar el diseño o estructura del código para mejorarlo sin afectar el comportamiento externo, de manera más fácil, cambiar el código sin cambiar el resultado que nos da, teniendo en cuenta esto podríamos decir que el arreglo de errores no es *refactorizacion*, ya que hay cambios en el resultado.

> Cambiar la implementación de una funcionalidad sin cambiar la funcionalidad en si misma.

> Cambiar la estructura interna sin modificar el comportamiento externo.

> Hacer cambios internos sin que se noten desde el exterior.

> Así como con el tiempo el software se deteriora poco a poco, la refactorización debería mejorar el código poco a poco. - Martin Fowler.

Cuando cambiamos el código lo mejoramos para:

* Hacerlo más eficiente al abordar dependencias y complejidades.
* Hacerlo más mantenible o reutilizable al aumentar la eficiencia y legibilidad del código.
* Hacerlo más fácil de leer y comprender.
* Hacer más fácil encontrar y corregir errores o vulnerabilidades.

## Ten en cuenta antes de refactorizar

1. Ten en cuenta si entiendes o no lo que estás pensando en refactorizar.
2. Ten en cuenta que es mejor mantén el refactor lo más pequeño posible.
3. Define bien el alcance que va a tener el refactor.
4. ¿La refactorizacion en la que estoy pensando es menos compleja que la tarea que estoy haciendo ahora?, o ¿Refactorizar me va a retrasar mucho?
5. ¿Hay pruebas que cubran el 100% del código que quiero refactorizar?, o ¿Puedo saber si rompí algo al refactorizar?
6. Comenta la refactorizacion en la que estás pensando con el resto del equipo, no te mandes solo.

## La regla de tres

Se implementa una vez, dos veces y a la tercera se refactoriza para facilitar futuras implementaciones, esta regla va de maravillas si trabajas solo, pero en equipo es bastante inútil.

## Guias para refactorizar

Los code smells o los olores en el código son una serie de señales de que un código podría refactorizarce, pero también existen otras guías sobre que y como refactorizar un código.

* [A Taxonomy for "Bad Code Smells"](https://mmantyla.github.io/BadCodeSmellsTaxonomy).
* [Martin Fowler catalogo de refactorizaciones](https://refactoring.com/catalog/).

En su libro sobre refactorizacion Martin Fowler también separa la refactorizacion en grupos: Composing Methods, Moving features between objects, organizing data, simplifying conditional expresions, making method calls simpler, dealing with generalization y big refactorings.

## Refactorizar teniendo en cuenta los costos operacionales

* ¿Hará que la funcionalidad a implementar se implemente más rápido incluyendo la refactorizacion?
* ¿Me permitirá corregir errores más rápido?
* ¿Los errores tardan en resolverse por la complejidad del código? ¿Es mejor una re-implementación en vez de la refactorizacion?
* ¿El equipo en el que trabajo va a enter la refactorizacion y la aceptara?
* ¿Hará que consiga más clientes?
* ¿Mejorara el rendimiento de la aplicación notablemente? Y esto hay que tenerlo en cuenta solo si el rendimiento es un problema a resolver.
