# Modelo relacional y modelo entidad-relacion
00_00_2026

Las bases de datos relacionales se fundamentan sobre dos modelos, a nivel conceptual sobre el modelo entidad-relacion y a nivel formal sobre el modelo relacional. A diferentes niveles, ambos modelos permiten modelar relaciones entre entidades.

Una entidad es un grupo de datos donde cada dato diferente es llamado "atributo", dentro de un sistema de transporte una entidad "conductor" podria contener los atributos: nombre, DNI y fecha de nacimiento. Dentro de una base de datos vamos a tener muchos _registros_ bajo un misma entidad, cada uno contendra los datos de un conductor diferente, es por esto que necesitamos un atributo (un dato) que sea unico y los identifique individualmente, a este atributo en concreto se le denomica "clave primaria", dentro de la entidad "conductor" la clave primaria podria ser el atributo _DNI_. 

> Si es necesario una clave primaria puede ser compuesta, por ejemplo, dentro una tabla "zapatos" podria existir una clave primaria compuesta por los datos talle, tipo y color.

## Modelo entidad-relacion

Como su nombre lo indica este modelo se enfoca en las relaciones entre entidades dejando de lado el detalle de cada dato, en este modelo conceptual solo nos interesa saber que datos existen, como se agrupan y como se relacionan.

Para definir como se relacionan dos entidades entra en juego un nuevo concepto llamado "cardinalidad" el cual consiste en un numero que nos indica la cantidad de veces que una entidad esta asociada con otra: **1:1** (uno a uno), **1:N** (uno a muchos) o **N:N** (muchos a muchos).

Por ejemplo, en el sistema de transporte la entidad "conductor" puede tener una cardinalidad de **1:1** hacia la entidad "viaje" y esta a su vez tener una cardinalidad de **1:N** hacia la entidad "conductor". Esto debido a que un conductor puede realizar varios viajes y varios viajes pueden estar asociados a un mismo conductor. 

> **1:1** se leeria como 1-conductor **:** 1-viaje. _Un viaje puede ser asignado a un conductor._

> **1:N** se leeria como 1-conductor **:** N-viajes. _Varios viajes pueden estar asignados a un mismo conductor._

![Modelo entidad-relacion conductor-viaje.]()

- Tipos de relaciones (relacion reflexiva, doble, etc)
- relaciones circulares
- Entidad debil
- una relacion puede tener atributos
- relacion ISA ???

## Modelo relacional

Edgar Frank Codd desarrolla un modelo logico buscando que la forma de persistencia de los datos no influyera en como estos se manipulan o utilizan, para lograr esto agrupa los datos segun su relacion formando entidades que se transformaran en tablas. Dentro de una tabla cada atributo pasa a ser la cabecera de una columna y las filas se llenaran con registros.

![Ejemplo de una tabla "conductor"]()

> La cantidad de columnas en una tabla se denomina "grado" y no solo define el tamaño de una tabla sino tambien su complejidad.

Al existir varios atributos que podrian ser "claves primarias" estos se denominan _"claves candidatas"_ y al elegir una como clave primaria el resto pasan a ser _"claves altenativas"_. 

Las relaciones que antes eran un simple rombo con un verbo ahora pasan a ser definidos formalmente, cada entidad toma la forma de una tabla y las relaciones se convierten en tablas intermedias. Ademas se introduce el concepto de "clave foranea" o "clave secundaria".

![Modelo relacional conductor-viaje.]()

///

///
