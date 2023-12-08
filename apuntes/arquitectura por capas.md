# Arquitectura por capas
15_09_2021

La arquitectura por capas tiene como objetivo distribuir una aplicación en capas únicas que solo se comunican con la capa inferior, además esta arquitectura nos deja una buena organización y distribución de los componentes en una aplicación, logrando que estos estén mas desacoplados unos de otros. Pero todo evoluciona y con el tiempo se fueron creando múltiples modelos y formas de aplicar una arquitectura por capas, aunque todas mantienen el mismo concepto de organización en capas, lo que si cambia es la forma en que se comunican y el número de capas que se usan.

### Capas

* Presentación : Esta capa gestiona la interfaz y recibe las acciones del usuario desde la capa de negocio.

* Negocio: Esta capa gestiona toda la lógica de negocio de una aplicación, es el *dominio*.

* Persistencia: Esta capa se encarga de guardar los datos en la base de datos, puede ser una capa de alto nivel que desconoce la base de datos concreta que se está usando.

* Base de datos: Esta capa existe dependiendo del modelo ya que algunos la fusionan con la capa de persistencia, pero sino esta capa seria de muy bajo nivel teniendo código unico de la base de datos que se este usando.

![Esquema de una arquitectura por capas]()

* Soporte o capa trasversal: Una capa opcional que no todos los modelos implementan y se encarga de gestionr la seguridad y operaciones de toda la aplic4ción teniendo acceso a todas las capas.

## Diferentes implementaciones de la arquitectura

Como se escribe anteriormente con el tiempo la manera de implementar una arquitectura por capas fue cambiando, ahora podriamos divididas en dos tipos. 

* Estricto: Aplica el principio de dependencia única donde una capa solo se relaciona de la capa inferior.

* Flexible: Es flexible con el principio de dependencia única y permite que una capa pueda relacionarce con todas las que tenga por debajo.

## Desventajas de la arquitectura por capas

Hay dos principales desventaja en este tipo de arquitectura: La complejidad de despliegue que hay en el desarrollo, ya que no se puede desarrollar una capa sin tener antes terminada la capa inferior; La otra desventaja es el efecto domino ante fallos en alguna de las capas debido a esta fuerte dependecia.

