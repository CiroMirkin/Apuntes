# Diagrama de secuencia básico
00_00_2023

Este tipo de diagrama UML nos permite ver el orden en que se relacionan los componentes de una aplicación a un alto nivel a través del tiempo. Estos diagramas se pueden usar, por ejemplo para ver las interacciones que desencadena una característica o para explicar como interactúan un grupo de objetos.

## Componentes del diagrama

* Actores: Los actores son entidades externas al diagrama, por ejemplo usuarios o equipos de hardware, no necesariamente es algo físico, pero si algo externo que interactúa con la parte de software que estamos diagramando. Este componente se representa como un hombrecito.

	![Ejemplo de un actor en un diagrama de secuencia]()

* Línea de vida: Una línea de vida representa a un objeto y nos permite ver sus periodos de interacción.

	![Ejemplo de la linea de vida de un objeto en un diagrama de secuencia]()

	Una línea de vida puede terminar con una cruz al final de su línea, esto significaría la destrucción del objeto que representa.

	![Ejemplo de la terminacion de una linea de vida de un objeto en un diagrama de secuencia]()

* Barras de activación: Estas barras se crean sobre la línea de vida y representan un periodo en que el objeto interactúa con otro objeto, un periodo en el que se realizan acciones.

	![Ejemplo de una barra de activación en un objeto en un diagrama de secuencia]()

* Mensajes: Los mensajes son interacciones, las más comunes son llamadas síncronas a métodos, estas se representan como una flecha sólida que sale de la barra de activación de un objeto hacia la de otro. También existen los mensajes asíncronos como flechas sólidas abiertas y las respuestas como flechas intermitentes abiertas.

	![Ejemplo de una interacción sincrona entre dos objetos en un diagrama de secuencia]()
	![Tipos de mensajes en un diagrama de secuencia]()

## Usos del diagrama

Crear este tipo de diagramas, a grandes rasgos nos puede ayudar a explicar o diseñar una aplicación o parte de ella. Otros usos pueden ser:

* Modelar casos de uso y ayudar a ver las interacciones dentro del escenario que genera el caso de uso.

* Documentar interacciones complicadas dentro de una aplicación.

* Explicar y comprender el comportamiento de la aplicación o parte de ella, esto viene de la mano con el punto anterior, documentar.

* Detectar y abordar problemas que se deben refactorizar como cuellos de botella, interacciones innecesarias o secuencias problemáticas ya sea por su complejidad o su desempeño.

* Diseñar características usando este tipo de diagrama no puede ayudar a ver y entender lo que debemos crear.

* A dialogar, en el diálogo con otras personas puede ayudar uno de estos diagramas (Y en general cualquier tipo de diagrama).

## Proceso de creación

1. Identificar actores (Si es que hay).
2. Definir alcance del diagrama.
3. Identificar líneas de vida (Objetos, sistemas o componentes).
4. Identificar interacciones.
5. Añadir barras de actividad y mensajes (Interacciones).
4. Revisar.

Luego de crear un diagrama podemos empezar a picar código, teniendo en cuenta que el diseño creado no está tallado en piedra. Al programar podemos llegar a identificar fallas o mejoras en el diseño, por eso después del primer diseño y programar un poco modificamos el diseño si hace falta, para después seguir programando. Es un ir y venir entre el diseño y el código.

/// 

///