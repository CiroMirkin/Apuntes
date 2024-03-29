# Testing
00_00_2024

El testing o testeo a la hora de crear una aplicación nos permite comprobar que las diferentes partes de una aplicacion funcionan como esperamos, mas alla de esta definicion hay diferentes razones y puntos de vista sobre porque escribir pruebas y cuando hacerlo.

	Las pruebas son parte de la programación echa por programadores.

Una aplicación y su código interno siempre es probado ya sea por nosotros (los programadores) o por los usuario, teniendo esto en cuenta podemos: 

* Probar primero / hacer TDD.

* Probar durante, hacer un ping pong entre el código y las pruebas.

* Probar despues = **No probar nunca**.

Deberiamos hacer algun tipo de prueba, preferentemente automatica, porque solo sabemos si algo funciona cuando lo usamos.

## Feedback loop

¿Que es el *feedback*? Podriamos decir que el feedback es una respuesta a una pregunta. Entonces ¿Que es el *feedback loop*? El ciclo de feedback es lo que se crea al tener pruebas automaticas, por ejemplo, tenemos una prueba para una función, ahora podriamos escribir un poco de código y ejecutar las pruebas, las pruebas estan en rojo y dicen que el código que escribimos no hace lo que deberia, entonces madificamos el código y volvemos a ejecutar las pruebas. Eso es el *feedback loop*.

Ahora bien, existen diferentes tipos de pruebas automaticas cuada una con diferentes caracteristicas y atributos, la idea de "La piramide de pruebas" es ilustrar que cantidad de cada tipo de prueba deberia tener una aplicación.

![Piramide del testing o piramide de pruebas]()

Partiendo de la base, una aplicación deberia tener muchos *unit test* [Pruebas unitarias], varias pruebas de integración y algunas pruebas de aceptación.

## Anti patrones

No todas las pruebas aportan valor, hay cosas que no merecen la pena probar.

### Pruebas anemicas o redundantes

Las pruebas anemicas son pruebas que no aportan valor, por ejemplo una prueba a un método *getter*.

### Pruebas mentirosas

Las pruebas mentirosas en ingles llamdas *untrustest* son pruebas que aparentan aportar valor cuando en realidad no lo hacen, este tipo de pruebas no es muy comun y pasan muy desapersividas. 

### Invertir la piramide de pruebas

La rapidez con la que recibimos feedback se vuelve demasiada lenta.

### Puebas fragiles

Las pruebs fragiles son pruebas que saben demasiado, y se rompen al mas minimo cambio. 

## ¿Benficios?

> Me pagan por programar, no por escribir puebas. - Kent Beck

> El testing es una forma efectiva de mostrar la precencia de errores, pero es una forma inadecuada de mostrar la ausencia de los mismos. - Dijkstra.

¿Cuales son los beneficion de escribir pruebas **automaticas**? Los beneficion que se obtienen o buscan al escribir pruebas pueden varias un poco dependiendo del proyecto del equipo.

Nos aseguran que el código funciona.

* Nos asegura que repetimos errores que ya cometimos.

* Nos asegura que la hacer cambios no dañamos la logica de negocios.

* Nos asegura que no dejan de funcionar cosas que antes funcionaban.

Nos permiten escribir mejor código, las pruebas cambias nuestra forma de programar y resolver un problema:

* El pensar y escribir una prueba miramos al código desde fuera.

* Las pruebas nos permiten mejorar el diseño interno sin preocupaciones.

Nos permiten expresar el comportamiento esperado:

* Escribir pruebas nos permite dejar acentado como deberia funcionar x porcion de codigo.

Nos ahorran tiempo:

* Dejamos de perter demasiado tiempo depurando y tratando de enter código.

