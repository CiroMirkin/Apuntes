# Testing
00_00_2024

El testing o testeo mientras creamos una aplicación nos permite comprobar que sus diferentes partes funcionan como esperamos, más allá de esta definición hay otras razones y puntos de vista sobre porque escribir pruebas y cuando hacerlo.

Una aplicación y su código interno siempre es probado ya sea por nosotros (los programadores) o por los usuario, teniendo esto en cuenta podemos: 

* Probar primero / hacer TDD.

* Probar durante y hacer un ping pong entre el código y las pruebas.

* Probar después = **No probar nunca**.

Deberiamos hacer algun tipo de prueba, porque solo sabemos si algo funciona cuando lo usamos, y preferentemente deberian ser automaticas porque son claras y pueden repetirce exactamente de la misma manera millones de veces.

Todo esto nos puede llevar a otro punto importante ¿Cuanto *Test Coverage* debería tener un aplicación? El *Test Coverage* [Covertura de pruebas] no debería ser una metrica fundamental mientras creamos una aplicación, aún así se recomienda tener como parámetro que está metrica no baje.

## Feedback loop y la piramide de pruebas

¿Que es el *feedback*? Podriamos decir que el feedback es una respuesta a una pregunta.

¿Que es el *feedback loop*? El ciclo de feedback es lo que se crea al tener pruebas automaticas, por ejemplo, tenemos una prueba para una función, ahora podriamos escribir un poco de código y ejecutar las pruebas, las pruebas estan en rojo y dicen que el código que escribimos no hace lo que deberia, entonces modificamos el código y volvemos a ejecutar las pruebas. Eso es el *feedback loop*.

Ahora bien, existen diferentes tipos de pruebas automaticas cuada una con diferentes caracteristicas y atributos, la idea de "La piramide de pruebas" es ilustrar que cantidad de cada tipo de prueba debería tener una aplicación.

![Piramide del testing o piramide de pruebas]()

Partiendo de la base, una aplicación debería tener muchos *unit test* [Pruebas unitarias] que prueban porciones pequeñas de código como una clase, método o función; A las pruebas unitarias le siguen varias pruebas de integración que prueban la integración de nuestra aplicacion con alguna entidad externa como la integracion de nuestra aplicacion con un repositorio especifico; Por último al tope de la piramide hay algunas pruebas de aceptación que prueban de la manera más realista posible la interacción del usuario.

## Anti patrones al crear pruebas

No todas las pruebas aportan valor, hay cosas que no merecen la pena probar, por eso siempre que escribas una prueba preguntate ¿Que valor me aporta esta prueba?

### Pruebas anemicas o redundantes

Las pruebas anemicas son pruebas que no aportan valor, por ejemplo una prueba a un método *getter*, este tipo de métodos solo devuelve un valor por ende no hay ningun tipo de logica u comportamiento digno ser probado. 

### Puebas fragiles

Las pruebs fragiles son pruebas que saben demasiado, y se rompen al más minimo cambio.

### Pruebas mentirosas

Las pruebas mentirosas en ingles llamdas *untrustest* son pruebas que aparentan aportar valor cuando en realidad no lo hacen, este tipo de pruebas no es muy comunes y pasan muy desapersividas. 

Para que quede claro, estas son las pruebas que no avisan cuando algo se rompe, pero perciera que si te van a avisar.

### Invertir la piramide de pruebas

Al invertir la piramide de pruebas la rapidez con la que recibimos feedback se vuelve demasiada lenta, y tener pruebas pierde todo el sentido, las pruebas empiezan a pesar en vez de ayudarnos.

## Las pruebas de las pruebas

Cuando las pruebas ya esten es verde y creamos que todo esta bien, podemos hacer *Mutan testing* que consiste en cambiar valores dentro el código y ver si las pruebas saltan por los aires.

## ¿Benficios?

> El testing es una forma efectiva de mostrar la precencia de errores, pero es una forma inadecuada de mostrar la ausencia de los mismos. - Dijkstra.

¿ ?

Las pruebas tienen la capacidad de decirnos que hay un error solo si pensado que ese error podría existir y hayamos creamos una prueba que nos avise, aún asi siempre surgen nuevos errores en los que no pensamos, y cuando esto pese, lo mejor seria crear una prueba para que no se nos vuelva a pasar por alto.

> Me pagan por programar, no por escribir puebas. - Kent Beck

¿Cuales son los beneficion de escribir pruebas **automaticas**? Los beneficion que se obtienen o buscan al escribir pruebas pueden varias un poco dependiendo del proyecto del equipo.

Nos aseguran que el código funciona, esto es fundamental al hacer cambios.

* Nos aseguran que no dejan de funcionar cosas que antes funcionaban, nos aseguran que las cosa funcionan de la misma forma que lo hacian antes.

* Nos aseguran que no repetimos errores que ya corregidos.

* Nos aseguran que la hacer cambios no dañamos la lógica de negocios.

Nos permiten escribir mejor código, las pruebas cambias nuestra forma de programar y resolver un problema, sobre todo las pruebas unitarias.

* Al pensar y escribir una prueba miramos al código desde fuera.

* Si escribimos pruebas antes que el código estas nos abligan a pensar a fondo en el problema y su abstracción.

* Las pruebas nos permiten mejorar el diseño interno sin preocupaciones,  recordemos que el código no se escribe bien a la primera.

Nos permiten expresar el comportamiento esperado, las pruebas son una forma de documentar que era lo que esperabamos de cierta parte de nuestra aplicación.

* Escribir pruebas nos permite dejar acentado como deberia funcionar X porción de código.

Nos ahorran tiempo:

* Reducimos el tiempo que perdemos depurando y tratando de enter código.

Hay mas opiniones al respecto y puedes investigarlas, pero ten en cuenta que cada opinion tiene un transfondo y un contexto al igual que dependen de la experiencia que tiene la persona que expresa X opinion.
