# Modelo relacional y modelo entidad-relación
00_00_2026

Para poder utilizar los miles de datos que contendrá una base de datos los relacionamos y agrupamos dentro de entidades, cada una de estas entidades representa un objeto o persona de la realidad, por ejemplo, en un sistema para una empresa de transporte podrían existir las entidades _conductor_, _camion_, _destino_ o _paquete_.

Las bases de datos relacionales se fundamentan a nivel teórico sobre el modelo relacional, y el modelo entidad-relación nos facilita razonar sobre las relaciones a nivel conceptual, esto quiere decir que nos permite bajar a tierra nuestras ideas y dialogar con nuestros compañeros sobre como se deberían relacionar las entidades.

Los datos que una entidad agrupa son diferentes, cada uno representa algo diferente, por ejemplo, dentro de una entidad podríamos tener el siguiente registro de datos ["Juan Carlos", 47430440, 05/06/2003], por si solos no representan nada, pero si les asignamos un nombre se convierten en los atributos de la entidad _conductor_: nombre, DNI y fecha de nacimiento. Como dentro de una entidad podemos tener miles de registros necesitamos un atributo (un dato) que los identifique de forma única, para la entidad _conductor_ podemos utilizar el _DNI_, este atributo sera la clave primaria de la entidad y contendrá un valor único de cada conductor.

> Si es necesario una clave primaria puede ser compuesta, por ejemplo, dentro una tabla "zapatos" podria existir una clave primaria compuesta por los datos talle, tipo y color.

## Modelo entidad-relación

Como su nombre lo indica este modelo se enfoca en las relaciones entre entidades dejando de lado el detalle de cada dato, en este modelo conceptual solo nos interesa saber que datos existen, como se agrupan y como se relacionan.

Para definir como se relacionan dos entidades entra en juego un nuevo concepto llamado "cardinalidad" el cual consiste en un numero que nos indica la cantidad de veces que una entidad esta asociada con otra: **1:1** (uno a uno), **1:N** (uno a muchos) o **N:N** (muchos a muchos).

Por ejemplo, en el sistema de transporte la entidad "conductor" puede tener una cardinalidad de **1:1** hacia la entidad "viaje" y esta a su vez tener una cardinalidad de **1:N** hacia la entidad "conductor". Esto debido a que un conductor puede realizar **varios viajes** y varios viajes pueden estar asociados a **un mismo conductor**. 

> **1:1** se leería como 1-conductor **:** 1-viaje. _Un viaje puede ser asignado a un conductor._

> **1:N** se leería como 1-conductor **:** N-viajes. _Varios viajes pueden estar asignados a un mismo conductor._

![Modelo entidad-relacion conductor-viaje.]()

> Cuando una entidad depende de otra para tener sentido estamos ante una entidad débil, generalmente en una relación **1:1** hay una entidad que por si sola no tiene ninguna utilidad ni razón para existir.

### Tipos de relaciones

Existen diferentes tipos de relaciones, tenemos relaciones binarias, ternarias, dobles y relaciones reflexivas cuando una entidad de relaciona con si misma y las relaciones

Cuando podemos recorrer con el dedo un diagrama y llega al mismo punto de partida estamos ante una relación cíclica, debemos evitar en la medida de los posible este tipo de relaciones ya darán problemas a la hora de insertar y/o eliminar datos. Si encontramos que las entidades relacionadas tienen diferentes propósitos y cardinalidad podría no ser un peligro, para evaluar esto es importante comprender la forma en que se usaran los datos

Otro punto importante a la hora de relacionar entidades es cuando tenemos datos que son importantes pero no parecen encajar en ninguna entidad, en estos casos es posible que el atributo deba ser asignado a la relación entre dos entidades en vez de estar asignado a una entidad especifica.

## Modelo relacional

Edgar Frank Codd desarrolla un modelo logico buscando que la forma de persistencia de los datos no influyera en como estos se manipulan o utilizan, para lograr esto agrupa los datos segun su relacion formando entidades que se transformaran en tablas. Dentro de una tabla cada atributo es la cabecera de una columna y los registros se insertaran como filas.

![Ejemplo de una tabla "conductor"]()

> La cantidad de columnas en una tabla se denomina "grado" y no solo define el tamaño de una tabla sino tambien su complejidad.

Al existir varios atributos que podrian ser "claves primarias" estos se denominan _"claves candidatas"_ y al elegir una como clave primaria el resto pasan a ser _"claves altenativas"_. 

Las relaciones que antes eran un simple rombo con un verbo ahora pasan a ser definidos formalmente, cada entidad toma la forma de una tabla y las relaciones se convierten en tablas intermedias. Ademas se introduce el concepto de "clave foranea" o "clave secundaria".

![Modelo relacional conductor-viaje.]()

///
Apuntes personales sobre "Base de Datos I" - Tecnicatura Universitaria en Programación Fullstack - Universidad Provincial de Córdoba.
///
