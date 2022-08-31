*Autor: Mirkin Ciro* <br>
*Emitido el 10_03_2022*

# Responsabilidad unica - SOLID

La responsabilidad unica es el primero de los cinco principios SOLID, Este por lo general suele malinterpretarce, ya que el mismo es un tanto abstracto y da lugar a varias interpretaciones.

> "A Class should have only one reason to change" Robert C. Martin.

Como describe el mismo Robert C.Martin, una clase nunca deberia tener mas de una razon para cambiar. Con una razon de cambio nos referimos a una unica responsabilidad y a que los metodos de una clase trabajen sobre un mismo concepto/responsabilidad, para asi poder aumentar la cohecion de nuestra clase y desacoplar lo que no tiene nada que ver con nuestra clase y su responsabilidad. Pero todo esto no impide que una clase tenga mas de un metodo, todo lo contrario.

Ya que una clase nunca va a hace una sola cosa, por eso mismo es una clase y no una función, es un conjunto de funciones cada una con su propio objetivo. Ahora bien, todos los metodos de una clase deberian tener algo en comun, deberian compartir algo, deberian tener la misma razon para cambiar y esto no impide que los metodos de una clase hagan cosas diferentes como registrar y verificar un usuario en una base de datos, ya que el guardar y verificar un usuario son acciones que tienen algo en comun. Ambos acceden a la misma base de datos y a la misma informacion, tiene la misma razon para cambiar, la base de datos y los usuarios.

Siguiendo con el ejemplo de los usuarios, al cambiar la base de datos es muy posible que tengamos que hacer un cambio, lo mismo si queremos que los usuarios tengan mas datos y como ese cambio podria afecta tanto al guardado como a la verificacion de los usuario estas funcionalidades deberian estar juntas en la misma clase.

El guardado y la verificacion de usuarios manejan un mismo concepto, el de la "administracion de usuarios", estas dos funcionalidades acceden a la misma base de datos con los mismo datos, ya sea para guardarla o verificarla.
___
Aclaro que esta es MI interpretación de lo que significa la responsabilidad unica. 
