# Funciones
(C.Mirkin) 18_02_2023

Si escribieras lo que haces en tu día a día se volvería un poco tedioso porque habría cosas que escribirías una y otra vez casi sin cambios, yo por ejemplo tomo mucho té y siempre lo hago de la misma manera:

> Caliento agua. Cuando el agua está lo suficientemente caliente busco una taza y un saquito de té. Pongo el saquito dentro de la taza. Vierto el agua en la taza. Espero cinco minutos. Saco el saquito de la taza. Agrego azúcar al té.

Como no quiero escribir todo eso cada vez que me haga un té, voy a escribir solo una vez como lo preparo y el resto de las veces solo escribiere "me hice un té", pero aún falta que tipo de te me hice: "me hice un té rojo", y aun así podría agregar una devolución: "me hice un té rojo, me quedo muy fuerte".

En lo dicho antes la función seria "me hice un té" que como podemos ver contiene un grupo de acción (calentar agua, buscar una taza, etc.), también recibe información que en este caso es el tipo de té y por último devuelve algo, en este caso como quedo el té.

Una función es un grupo de acciones con un nombre que puede recibir y devolver información, la información que una función recibe tiene dos partes: Los parámetros que son la información que una función recibe (tipo de té) y los argumentos que son la información en sí misma (té rojo).

	El número de parámetros de una función se llama aridad.

Una función reúne a un grupo de acciones, les da un nombre y nos permite reutilizarlas, pero además las funciones también nos permiten separar, ordenar y centralizar. Con el ejemplo anterior, si yo quisiera cambiar la forma en la que hago un té solo tendría que hacerlo dentro de la función y solo ahí.

## Buenas practicas con funciones

* El nombre de una función debería ser un verbo y estar en presente (hacer un té).
* Reducir al mínimo el número de parámetros y argumentos.
* Reducir al mínimo el número de parámetros y argumentos **opcionales**.
* Es mejor crear funciones específicas que funciones que reciban parámetros de configuración, esto puede ir de una simple variable booleana a un objeto.

## Funciones puras

Una función pura no tiene efector secundarios, no cambia el estado de nada, por esto ante una misma entrada da un mismo resultado y además la llamada de la función puede remplazarse por su valor.

## Funciones autocontenidas

Una función autocontenida es esa que no necesita nada del exterior, todo lo que necesita está dentro suyo o lo recibe como parámetro. Este tipo de funciones no solo son buenas por su alto nivel de cohesión si no también porque son fáciles de mover entre clases en caso de ser necesario.

## Funciones de primera clase

Son funciones que pueden ser tratadas como variables, esto quiere decir: Funciones que pueden ser pasadas como argumento/parámetro de una función y que pueden ser devueltas por una función.

## Separar comandos y consultas (CQS)

El CQs (Command-Query Separation) es un patrón de diseño acuñado por *Bertrand Meyer* que propone separar las funciones que responden a una pregunta (consultas) de las funciones que realizan una acción (comandos).

Las consultas suelen ser funciones puras y los comandos suelen no devolver ningún valor, además estos ultimos son mas propensos a tener *bugs*, ya que mutan o cambian el estado del sistema (cambia el valor de una variable, arreglo o hace un cambio en una base de datos).

Lo bueno de este patrón no es solo que fomenta el uso de funciones puras sino también que crea una clara separación del código que muta del que no.

## Composición de funciones

Usar el resultado de una función como argumento de otra, eso es la composición de funciones. Cuando abusamos de la composición de funciones el código se vuelve difícil de leer y de seguir, a esto se le llama *"Composition hell"*. Salvo en casos concretos lo mejor seria que evites hacer composición de funciones.

___
Material usado: Algunos capitulos de "Código sostenible" de *Carlos Blé Jurado*.
