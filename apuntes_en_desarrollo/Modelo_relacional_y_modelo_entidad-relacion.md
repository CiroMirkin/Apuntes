# Modelo relacional y modelo entidad-relacion
00_00_2026

Las bases de datos relacionales se fundamentan sobre dos modelos, a nivel conceptual con el modelo entidad-relacion y a nivel formal con el modelo relacional.

## Modelo entidad-relacion

Una entidad es un grupo de datos y cada diferente es llamado "atributo". Por ejemplo, dentro de un sistema de transporte la entidad "conductor" contiene los atributos: nombre, DNI y fecha de nacimiento.

Como su nombre lo indica este modelo se enfoca en las relaciones entre entidades sin entrar en detalle sobre como son los datos, solo nos interesa saber que datos existen, como se agrupan y como se relacionan.

Para definir como se relacionan dos enidad entra en juego un nuevo concepto llamado "cardinalidad" el cual consiste en un numero que no indica la forma en que una entidad depende de otra. Por ejemplo, en el sistema de transporte, la entidad "conductor" puede tener una cardinalidad de 1:1 hacia la entidad "viaje", a su vez la entidad "viaje" puede tener una cardinalidad de 1:N hacia la entidad "conductor". La cardinalidad define la cantidad de veces que una entidad esta relacionada con otra, en el ejemplo anterior un conductor puede realizar varios viajes y a su vez varios viajes pueden estar asociados a un mismo conductor, (1-conductor):(1-viaje) y (1-conductor):(N-viajes).


## Modelo relacional

Edgar Frank Codd desarrolla un modelo logico buscando que la forma de persistencia de los datos no influyera en como estos de manipulan o utilizan, para lograr esto agrupa los datos segun su relacion donde cada grupo conforma una tabla.

Las relaciones que antes eran un simple rombo con un verbo ahora pasan a ser definidos formalmente, cada entidad toma la forma de una tabla y las relaciones se convierten en tablas intermedias. Ademas se introduce el concepto de "clave foranea" o "clave secundaria" la cuan es una clave primaria que se almacena dentro de una tabla de relacion pudiendo existir varios registros con la misma clave secundaria.

///

///
