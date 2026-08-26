# Modelo relacional y modelo entidad-relacion
00_00_2026

Las bases de datos relacionales se fundamentan sobre dos modelos, a nivel conceptual con el modelo entidad-relacion y a nivel formal con el modelo relacional.



## Modelo entidad-relacion

Una entidad es un grupo de datos y dato cada diferente es llamado "atributo", y la cantidad de atributos se denomina "grado". Por ejemplo, dentro de un sistema de transporte la entidad "conductor" contiene los atributos: nombre, DNI y fecha de nacimiento. Dentro de una base de datos vamos a tener muchos _registros_ bajo la entidad "conducto" es por esto que necesitamos un dato (un atributo) que sea unico y los identifique individualmente, a este atributo en concreto se le denomica "clave primaria".

Como su nombre lo indica este modelo se enfoca en las relaciones entre entidades sin entrar en detalle sobre como son los datos. Solo nos interesa saber que datos existen, como se agrupan y como se relacionan.

Para definir como se relacionan dos entidades entra en juego un nuevo concepto llamado "cardinalidad" el cual consiste en un numero que nos indica la cantidad de veces que una entidad esta asociada con otra: **1:1** (uno a uno), **1:N** (uno a muchos) o **N:N** (muchos a muchos).

Por ejemplo, en el sistema de transporte, la entidad "conductor" puede tener una cardinalidad de **1:1** hacia la entidad "viaje" y esta a su vez tener una cardinalidad de **1:N** hacia la entidad "conductor". Esto debido a que un conductor puede realizar varios viajes y varios viajes pueden estar asociados a un mismo conductor. 

> **1:1** se leeria como 1-conductor **:** 1-viaje.

> **1:N** se leeria como 1-conductor **:** N-viajes.

## Modelo relacional

Edgar Frank Codd desarrolla un modelo logico buscando que la forma de persistencia de los datos no influyera en como estos se manipulan o utilizan, para lograr esto agrupa los datos segun su relacion donde cada grupo conforma una tabla.

Las relaciones que antes eran un simple rombo con un verbo ahora pasan a ser definidos formalmente, cada entidad toma la forma de una tabla y las relaciones se convierten en tablas intermedias. Ademas se introduce el concepto de "clave foranea" o "clave secundaria".

///

///
