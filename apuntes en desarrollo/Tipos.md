# Tipos
00_00_2024

El concepto de *tipo* siempre está presente y se podría escribir un libro entero hablando sobre tipos y sus diferentes formas dentro de la programación, pero, a modo de resumen podríamos decir que un *tipo* define como es una porción de información.

Cuando programamos usamos información todo el tiempo y la forma más pequeña en la que solemos usar información es en variables.

La cantidad de tipos de información que puede guardar una variable cambia según el lenguaje, aun así podríamos decir que los más comunes son *caracteres*, *números* y *booleanos*. Es importante conocer los tipos de datos que tiene el lenguaje que utilizamos y también si estos tienen algún defecto, a veces al hacer ciertas cosas con los datos podemos obtener resultados extraños o confusos que pueden dar lugar a errores, para evitar esto es recomendable investigar a fondo, sobre todo cuando se trata de números decimales.

> Los tipos básicos también se conocen como primitivos, los más comunes son *caracteres*, *números* y *booleanos* (verdadero/falso, true/false).

Además de las variables también existen las estructuras de datos que permiten relacionar y estructurar información, estas estructuras según el lenguaje pueden o no tener su propia forma de definir que tipo de información guardan.

## Un poco más sobre tipos 

Los tipos nos permiten definir como es la información que circula dentro de nuestras aplicaciones y como resultado obtenemos más seguridad a la hora de manipular información porque sabemos exactamente como es esta información. 

Si bien los tipos nos dan más información sobre los datos e incluso sobre la estructura de los mismos, está estructura que nos puede dar seguridad a la hora de manipular información si está mal estructurada o definida puede dar más penas que glorias dando problemas para entender la información o incluso escalar la aplicación.

## Un poco sobre tipos en lenguajes de programación

Los lenguajes de programación pueden dar más o menos importancia a los tipos, habiendo lenguajes fuertemente tipados y lenguajes débilmente tipado, también pueden contar con un tipado estático o con un tipado dinámico, a sí mismo cada lenguaje cuenta con su propio *sistema de tipos* el cual deberíamos conocer.

Dentro de cada lenguaje puede haber tipos como los genéricos, el tipo Null, tipos algebraicos o tipos estructurales, que estos tipos existan depende del lenguaje y su sistema de tipos. Ahora bien, cada uno de estos tipos es bueno y recomendable en cierto contexto o situación, para poder tomar buenas decisiones de diseño es necesario informarse sobre cada tipo y su **uso indebido**.

A modo de extra, si un lenguaje no cuenta con un sistema de tipos y lo vemos necesario para el proyecto en el que trabajamos suele ser posible usar librerías o módulos que permitan hacer uso de tipos dentro del lenguaje.

## Un poco sobre tipos en programación orientada a objetos

En la programación orientada a objetos definimos como es una clase a través de tipos llamados a veces interfaces y a veces clases abstractas, estos tipos nos permiten definir que atributos y acciones tiene un objeto. 

Estas *interfaces* también nos permiten usar patrones de diseño para resolver problemas internos de diseño comunes en aplicaciones, al igual que nos dan una muy buena alternativa a la herencia de clases.

Ya luego existen principios como *El principio de sustitución de Liskov (LSP)* que es una guía para que los tipos tengan más sentido y así reducir las sorpresas. Al igual que existe *El principio de segregación de interfaces (ISP)* que nos recomienda tener varias interfaces pequeñas en vez de una interfaz gigante.
