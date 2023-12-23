# Diagrama de secuencia basico
00_00_2023

Este tipo de diagrama UML nos permite ver el orden en que se relacionan los componentes de una aplicación a un alto nivel a traves del tiempo. Estos diagramas se pueden usar, por ejemplo para ver las interacciones que desencadena una caracteristica o para explicar como interactuan un grupo de objetos.

## Componentes del diagrama

* Actores: Los actores son entidades externas al diagrama, por ejemplo usuarios o equipos de hardware, no necesariamente es algo fisico pero si algo externo que interactua con la parte de software que diagramamos. Este componente se reprecenta como un hombrecito.

	![Ejemplo de un actor en un diagrama de secuencia]()

* Linea de vida: Una linea de vida reprecenta a un objeto y nos permite ver sus periodos de interacccion, podriamos ver los periodos y orden en que se relacionan varios objetos.

	![Ejemplo de la linea de vida de un objeto en un diagrama de secuencia]()

	Una linea de vida puede ser reprecentada como terminada con una cruz al final de su linea, esto significaria la desctruccion del objeto que reprecenta.

	![Ejemplo de la terminacion de una linea de vida de un objeto en un diagrama de secuencia]()

* Barras de activación: Estas barras se crean sobre la linea de vida y reprecentan un periodo en que el objeto interactua con otro objeto y en el que se realizan acciones.

	![Ejemplo de una barra de activación en un objeto en un diagrama de secuencia]()

* Mensajes: Los mensajes son interacciones, las más comunes son llamadas sincronas a métodos, estas se reprecentan como una flecha solida que sale de la barra de activación de un objeto hacia la de otro. Los mensajes asincronos son flechas solidas abiertas y las respuestas flechas intermitentes abiertas.

	![Ejemplo de una interacción sincrona entre dos objetos en un diagrama de secuencia]()
	![Tipos de mensajes en un diagrama de secuencia]()

## Usos del diagrama

Crear este tipo de diagramas, a grandes razgos nos puede ayudar a explicar, analizar o diseñar una aplicacion o parte de ella. Otros usos pueden ser:

* Modelar casos de uso y ayudar a ver las interacciones dentro del escenario que genera el caso de uso.

* Documentar interacciones complicadas dentro de una aplicación.

* Explicar y comprender el comportamiento de la aplicacion o parte de ella, esto viene de la mano con el punto anterior, documentar.

* Detectar y abordar problemas que se deben refactorizar como cuellos de botella, interacciones innecesarias o secuencias problematicas ya sea por su complejidad o su desempeño.

* Diseñar caracteristicas usando este tipo de diagrama no puede ayudar a ver y entender lo que debemos crear.

* Dialogar, en el dialogo con otras personas puede ayudar uno de estos diagramas (Y cualquier tipo diagrama en general).

## Proceso de creación

1. Identificar actores (Si es que hay).
2. Definir alcance del diagrama.
3. Identificar lineas de vida (Objetos, sistemas o componentes).
4. Identificar intereacciones.
5. Añadir barras de actividad y mensajes (Interacciones).
4. Revisar.

Luego de crear un diagrama podemos empezar a picar código, teniendo en cuenta que el diseño creado no esta tallado en piedra. Al programar podemos llegar a identificar fallas o mejoras en el diseño, por eso despues del primer diseño y programar un poco modificamos el diseño si hace falta, para despues seguir programando, es un ir y venir entre el diseño y el código.

/// 

///