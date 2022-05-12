v a c i o - i n f o r m a t i c o
====
*Escrito por: Mirkin Ciro* <br>
*Pertenece a: vacio-informatico* | [Github]("https://github.com/vacio-informatico/")<br>
[vacio-informatico web site]("https://vacio-informatico.github.io/v-i/")

# Arquitectura por capas
La arquitectura por capas tiene como objetivo distribuir una aplicación en capas únicas que solo se comunican con la capa inferior, además esta arquitectura nos deja una buena organización y distribución de los componentes en una aplicación, logrando que estos estén mas desacoplados unos de otros. Pero todo evoluciona y con el tiempo se fueron creando múltiples modelos y formas de aplicar una arquitectura por capas, aunque todas mantienen el mismo concepto de organización en capas, lo que si cambia es la forma en que se comunican y el número de capas que se usan.

### Definición de capas

* Presentación [UI] : <br>
Esta capa gestiona la interfaz y recibe las accionas del usuario desde capa de negocio pasando por la capa de aplicación.
* Negocio o reglas de negocio [servicios y lógica] :<br>
Esta capa gestiona toda la lógica de la aplicación y también es donde se gestionan los datos de la misma.
* Persistencia o capa de acceso a datos [DAO] :<br>
Esta capa se encarga de guardar los datos y también es donde se encuentra todo lo relacionado con la base de datos (creación, adición y borrado de datos).
* Base de datos [DB] : <br>
Esta capa existe depende del modelo ya que algunos la fusionan con la capa de persistencia, ya que es el sistema de bases de datos.

![esquema de organización de una arquitectura por capas simple](file:///C:/Users/Ciro/Desktop/vacio-informatico/themes/arquitecturas/pictures/capas.svg)

* Soporte o capa trasversal: <br>
Esta capa es opcional ya que no todos los modelos la implementan pero es recomendable que esta exista ya que gestiona la seguridad y las operaciones de toda la aplic4cion, por ende tiene acceso a todas las capas.

## Diferentes implementaciones de la arquitectura
Como se escribe anteriormente con el tiempo la manera de implementar una arquitectura por capas fue cambiando y en este caso estarán divididas en dos tipos de modelos. 

* Modelo estricto: Es el tipo de modelo que aplica el principio de dependencia única donde una capa solo depende de la capa inferior.

* Modelo flexible: Es el tipo de modelo que rompe el principio de dependencia única y permite que una capa pueda acceder a todas las que tenga por debajo.

    Presentación > Negocio > Persistencia y datos <br>
    Presentación > Negocio / Persistencia y datos

## Desventajas de la arquitectura por capas

Hay dos principales desventaja en este tipo de arquitectura. La complejidad de despliegue que hay en el desarrollo, ya que no se puede desarrollar una capa sin tener antes terminada la capa inferior. La otra desventaja es el efecto domino ante fallos en alguna de las capas.

