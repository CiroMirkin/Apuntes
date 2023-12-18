# Diagrama de secuencia basicos
00_00_0000

Este tipo de diagrama UML nos permite ver el orden en que se relacionan los componentes dentro de una aplicación a un alto nivel a traves del tiempo. Estos diagramas se pueden usar, por ejemplo para ver las interacciones que desencadena una caracteristica.

## Componentes del diagrama

* Linea de vida: Una linea de vida recentar las interacciones de una implementación como las de un objeto a lo largo del tiempo.

	![Ejemplo de la linea de vida de un objeto]()

* Barras de activación: Estas barras se crean sobre la linea de vida y reprecentan la duración de un periodo en que el objeto interactua con otro objeto.

	![Ejemplo de una barra de activación en un objeto]()

* Mensajes: Los mensajes son interacciones, las más comunes son llamadas sincronas a métodos.

	![Ejemplo de una interacción sincrona entre dos objetos]()

* Fragmentos combinados: Los fragmentos se usan para reprecentar comportamientos logicos como condiciones o ciclos, siendo estos los más basicos.

## Usos del diagrama

Crear este tipo de diagramas nos puede ayudar a explicar, analizar o diseñar una aplicacion o parte de ella, eso a grandes razgos. Otros usos pueden ser:

* Ayudar a modelar casos de uso, las interacciones dentro del escenario que crea el caso de uso.

* Documentar interacciones complicadas dentro de una aplicación.

* Explicar y comprender el comportamiento de la aplicacion o parte de ella, biene de la mano con el punto anterior.

* Detectar y abordar problemas que se deben refactorizar como cuellos de botella, interacciones innecesarias o secuencias problematicas ya sea por su complejidad o ´por su desempeño.

* Diseñar caracteristicas, ayuda a visualizar y comprender lo que tenemos que desarrollar.

## Proceso de creación

1. Identificar actores
2. Definir alcance
3. Identificar lineas de vida (Objetos, sistemas o componentes)
4. Identificar intereacciones
5. Añadir barras de actividad e interacciones (mensajes)
4. Revisar

Luego de esto podemos empezar a picar código, teniendo en cuenta que el diseño que creamos no esta tallado en piedra. Al programar podemos llegar a identificar fallas o mejoras en el diseño, por eso despues del primer diseño y programar un poco modificamos el diseño si hace falta, para despues seguir programando, es un ir y venir entre el diseño y el código.

/// 

///