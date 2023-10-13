# Responsabilidad unica (SOLID)
10_03_2022

Cada parte de una aplicación deberia tener una sola razon para cambiar, debería tener una sola responsabilidad.

> "A Class should have only one reason to change". - Robert C. Martin.

Piensa en un cambio, cualquier cosa. Ahora piensa a donde tiene que ir para realizarlo. Dime ¿Fuiste a un solo lugar? si la respuesta en no probablemente no estes aplicando este principio, deberias ser capaz de encontrar un lugar y estar seguro de que estas en el lugar correcto, seguro de que cambios o errores no afectaran a otras partes del código.

Cuando una clase se hace responsable de algo, ese algo esta precente en toda la clase, si para hacer un cambio tienes que modificar varias clases es provable que tengas que revisar la responsabilidades que tienen.

## Responsabilidad compartida

Tal cual suena, hay veces en que separamos una misma responsabilidad y terminamos con dos o más clase que comparten la misma responsabilidad, en estos casos lo mejor suele ser fusionar estas clases.
