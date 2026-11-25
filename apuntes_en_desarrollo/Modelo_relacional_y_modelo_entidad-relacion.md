# Modelo relacional y modelo entidad-relación
00_00_2026

Para poder utilizar los miles de datos que contendrá una base de datos los relacionamos y agrupamos dentro de entidades, cada una de estas entidades representa un objeto o persona de la realidad, por ejemplo, en un sistema para una empresa de transporte podrían existir las entidades *conductor*, *camion*, *destino* y *paquete*.

Las bases de datos relacionales se fundamentan a nivel teórico sobre el modelo relacional, pero es el modelo entidad-relación el que nos facilita razonar sobre las relaciones a nivel conceptual, esto quiere decir que nos permite bajar a tierra nuestras ideas y dialogar con nuestros compañeros como deberian ser las relaciones entre las entidades de un sistema.

Los datos que una entidad agrupa son diferentes, cada uno representa algo diferente, por ejemplo, dentro de una entidad podríamos tener el siguiente registro de datos **\["Juan Carlos", 47430440, 05/06/2003\].** Sin conocer el nombre de la entidad estos datos no representan nada, pero si les asignamos un nombre se convierten en los atributos de la entidad ***conductor:*** nombre, DNI y fecha de nacimiento. Como dentro de una entidad podemos tener miles de registros necesitamos un atributo (un dato) que los identifique de forma única, para la entidad *conductor* podemos utilizar el *DNI*, este atributo sera la clave primaria de la entidad y contendrá un valor único de cada conductor.

> "Juan Carlos" es un dato y "nombre" es un atributo (la etiqueta que le asignamos a un dato).

## Modelo entidad-relación

Como su nombre lo indica este modelo se enfoca en las relaciones entre entidades dejando de lado el detalle de su implementación, en este modelo conceptual solo nos interesa saber que datos existen, como se agrupan y como se relacionan.

Para definir como se relacionan dos entidades entra en juego un nuevo concepto llamado "cardinalidad" el cual consiste en un numero que nos indica la cantidad de veces que una entidad esta asociada con otra: **1:1** (uno a uno), **1:N** (uno a muchos) o **N:N** (muchos a muchos).

Por ejemplo, en el sistema de transporte la entidad "conductor" puede tener una cardinalidad de **1:1** hacia la entidad "viaje" y esta a su una cardinalidad de **1:N** hacia la entidad "conductor". Esto quiere decir que un conductor realiza **varios viajes** y varios viajes son realizados por **un mismo conductor**.

> **1:1** se leería como 1-conductor **:** 1-viaje osea: u*n viaje puede ser asignado a un conductor.*

> **1:N** se leería como 1-conductor **:** N-viajes osea: varios *viajes pueden estar asignados a un mismo conductor.*

![Modelo entidad-relacion conductor-viaje.]()

### Tipos de relaciones

Cuando una entidad depende de otra para tener sentido estamos ante una entidad débil, generalmente aparecen en relaciones 1:1 donde hay una entidad que por si sola no tiene ninguna utilidad ni razón para existir, pero tambien existen las relaciones dobles, las ternarias y las relaciones reflexivas cuando una entidad de relaciona con si misma.

Cuando dos entidades se relacionan en ambos sentidos estamos ante una relación cíclica, por ejemplo una entidad "empleado" que se relaciona con una entidad "gerente" donde el empleado es gerente y el gerente es un empleado. Debemos evitar en la medida de los posible este tipo de relaciones porque dan problemas a la hora de eliminar los registros. Si encontramos que las entidades relacionadas tienen diferentes propósitos y cardinalidad podría no ser un peligro, para evaluar esto es importante comprender la forma en que se usaran los datos

Otro punto importante a la hora de relacionar entidades ocurre cuando existen datos no encajan comodante en ninguna entidad, por ejemplo al relacionar la entidad "clase" con la entidad "estudiante" ¿Donde iria el dato "presente"?, en estos casos el atributo debe ser asignado a la relación entre dos entidades y no a una entidad especifica.

![Modelo entidad-relacion clase-estudiante.]()

## Modelo relacional

Edgar Frank Codd desarrolla un modelo logico los datos son agreupados segun su relacion formando entidades que se establecen como tablas donde cada atributo es la cabecera de una columna y los registros se insertaran como filas. Ademas las relacionas que antes eran un simple rombo ahora son tablas intermedias introduciendo el concepto de "clave foranea" o tambien llamadas "claves secundarias".

![Modelo relacional conductor-destino.]()

Las claves foraneas son los atributos que nos permiten la relacion entre dos entidades, son la referencia de una entidad hacia otra. En la tabla conductor tenemos la clave primaria _DNI_ y en la tabla viaje tenermos la clave primaria _cp_, ambas reaparece en la tabla viaje como claves foraneas bajo los nombres *dni_conductor* y *cp_destino*, tanto _DNI_ como *dni_conductor* contienen el mismo valor.

> La cantidad de columnas en una tabla se denomina "grado" y no solo define el tamaño de una tabla sino tambien su complejidad.

Las *"claves candidatas"* son atributos que podrian identificar a un registro de datos, al elegir uno de estos atributos este se convierte en una *"clave primaria"* y el resto pasan a ser *"claves altenativas"*.

> Esta modelo tiene una version extendida que suma conceptos como las relaciones ISA.

///
Apuntes personales sobre "Base de Datos I" - Tecnicatura Universitaria en Programación Fullstack - Universidad Provincial de Córdoba.
///
