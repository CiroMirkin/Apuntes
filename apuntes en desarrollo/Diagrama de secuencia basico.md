# Diagrama de secuencia basico
00_00_2023

Este tipo de diagrama UML nos permite ver el orden en que se relacionan los componentes de una aplicación a un alto nivel a traves del tiempo. Estos diagramas se pueden usar, por ejemplo para ver las interacciones que desencadena una caracteristica.

## Componentes del diagrama

* Linea de vida: Una linea de vida reprecenta las interacciones de un componente a lo largo del tiempo, como un objeto o una aplicación con una API REST.

	![Ejemplo de la linea de vida de un objeto]()

* Barras de activación: Estas barras se crean sobre la linea de vida y reprecentan la un periodo en que el objeto interactua con otro objeto y en el que se realizan acciones.

	![Ejemplo de una barra de activación en un objeto]()

* Mensajes: Los mensajes son interacciones, las más comunes son llamadas sincronas a métodos, estas se reprecentan como una flecha solida que sale da la barra de activación de un objeto hacia la de otro.

	![Ejemplo de una interacción sincrona entre dos objetos]()

* Fragmentos combinados: Los fragmentos se usan para reprecentar comportamientos logicos como condiciones o ciclos, siendo estos los más basicos, aunque tambien se pueden reprecentar por ejemplo paralelismos. 

## Usos del diagrama

Crear este tipo de diagramas a grandes razgos nos puede ayudar a explicar, analizar o diseñar una aplicacion o parte de ella. Otros usos pueden ser:

* Modelar casos de uso y ayudar a ver las interacciones dentro del escenario que genera el caso de uso.

* Documentar interacciones complicadas dentro de una aplicación.

* Explicar y comprender el comportamiento de la aplicacion o parte de ella, viene de la mano con el punto anterior.

* Detectar y abordar problemas que se deben refactorizar como cuellos de botella, interacciones innecesarias o secuencias problematicas ya sea por su complejidad o su desempeño.

* Diseñar caracteristicas y permitir a visualizar y comprender lo que tenemos que desarrollar.

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