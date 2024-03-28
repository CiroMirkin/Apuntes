# Testing
00_00_2024

El testing o testeo a la hora de crear una aplicación nos permite comprobar que las diferentes partes de una aplicacion funcionan como esperamos, mas alla de esta definicion hay diferentes razones y puntos de vista sobre porque escribir pruebas y cuando hacerlo.

Las pruebas son parte de la programación echa por programadores.

La aplicación y su código interno siempre es probado, 

por nosotros (los programadores) o por los usuario, 

no sabemos que algo funciona hasta que lo usamos.

* Probar primero / hacer TDD.

* Probar durante, hacer un ping pong entre el código y las pruebas.

* Probar despues = **No probar nunca**.

feedback loop

![Piramide del testing o piramide de pruebas]()

## Anti patrones

No todas las pruebas aportan valor.

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

Cuales son los beneficion de escribir pruebas **automaticas**.

Nos aseguran que el código funciona.

* Nos asegura que repetimos errores que ya cometimos.

* Nos asegura que la hacer cambios no dañamos la logica de negocios.

* Nos asegura que no dejan de funcionar cosas que antes funcionaban.

Nos permiten escribir mejor código, las pruebas cambias nuestra forma de programar y resolver un problema:

* El pensar y escribir una prueba miramos al código desde fuera.

* Escribir pruebas nos permite dejar acentado como deberia funcionar x porcion de codigo.

* Las pruebas nos permiten mejorar el diseño interno sin preocupaciones.

Tiempo:

* Dejamos de perter demasiado tiempo depurando y tratando de enter código.

