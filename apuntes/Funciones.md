# Funciónes
(C.Mirkin) 18_02_2023

Si escribieras lo que haces en tu dia a dia se volveria un poco tedioso porque habria cosas que escribirias una y otra vez casi sin cambios, yo por ejemplo tomo mucho te y siempre lo hago de la misma manera:

> Caliento agua. Cuando el agua esta lo suficientemente caliente busco una taza y un saquito de te. Pongo el saquito dentro de la taza. Vierto el agua en la taza. Espero cinco minutos. Saco el saquito de la taza. Agrego azucar al te.

Como no quiero escribir todo eso cada vez que me haga un te, voy escribir solo una vez como lo preparo y el resto de las veces solo escribiere "me hice un te", pero aun  falta que tipo de te me hice: "me hice un te rojo", y aun asi podria agregar una devolucion: "me hice un te rojo, me quedo muy fuerte".

En lo dicho antes la funcion seria "me hice un te" que como podemos ver contiene un grupo de accion (calentar agua, buscar una taza, etc), tambien recive informacion que en este caso es el tipo de te y por ultimo devuelve algo, en este caso como quedo el te.

Una funcion es un grupo de acciones con un nombre que puede recibir y devolver informacion, la informacion que una funcion recive tiene dos partes:  Los parametros que son la informacion que una funcion recive (tipo de te) y los argumentos que son la informacion en si misma (te rojo).

	El numero de parametros de una función se llama aridad.

Una funcion reune a un grupo de acciones, les da un nombre y nos perimite reutilizarlas, pero ademas las funciones tambien nos permiten separar, ordenar y centralizar. Con el ejemplo anterior, si yo quisiera cambiar la forma en la que hago un te solo tendria que hacerlo dentro de la funcion y solo ahi.

## Buenas practicas con funciónes

* El nombre de de una función deberia ser un verbo y estar en precente (hacer un te).
* Reducir al minimo el numero de parametros y argumentos.
* Reducir al minimo el numero de parametros y argumentos **opcionales**.
* Es mejor crear funciónes especificas que funciónes que recivan parametros de configuración, esto puede ir de una simple variable booleana a un objeto.

## Funciónes puras

Una función pura no tiene efector secuntarios, no cambia el estado de nada, por esto ante una misma entrada da un mismo resultado y ademas la llamada de la función puede remplazarse por su valor.

## Funciónes autocontenidas

Una función autocontenida es esa que no necesita nada del exterior, todo lo que necesita esta dentro suyo o lo recive como parametro. Este tipo de funciones no solo son buenas por su alto nivel de cohesion sino tambien poque son faciles de mover entre clases.

## Funciónes de primera clase

Son funciónes que pueden ser tratadas como variables, esto quiere decir, funciónes que puedan ser pasadas como argumento/parametro de una función y que puedan ser devueltas por una función.

## Separar comandos y consultas (CQS)

El CQR (Command-Query Separation) es un patron de diseño acuñado por *Bertrand Meyer* que propone separar las funciónes que responden a una pregunta (consultas) de las funciones que realizan una accion (comandos).

Las consultas suelen ser funciónes puras y los comandos suelen no devolver ningun valor, ademas estos ultimos son mas propensos a tener *bugs* ya que mutan o cambian el estado del sistema (cambia el valor de una variable, arreglo o hace un cambio en una base de datos).

Lo bueno de este patron no es solo que fomenta el uso de funciónes puras sino tambien que crea una clara separación del código que muta del que no.

## Composicion de funciónes

Usar el resultado de una función como argumento de otra, cuando abusamos de la compisicion de funciones el codigo se vuelve dificil de leer y de seguir, de echo esto se llama *"Composition hell"*. Salvo en casos concretos lo mejor seria que evites hacer composicion de funciónes.

___
Material usado: Algunos capitulos de "Código sostenible" de *Carlos Blé Jurado*.
