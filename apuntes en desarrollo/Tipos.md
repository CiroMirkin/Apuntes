# Tipos
00_00_2024

El concepto de *tipo* siempre está presente, de echo se podría escribir un libro entero hablando sobre tipos y sus diferentes formas dentro de la programación, aún así a modo de resumen podríamos decir que un *tipo* define como es una porción de información.

Cuando programamos utilizamos información todo el tiempo, la forma más pequeña en la que usualmente manejamos esa información es en variables.

La cantidad de tipos de información que puede guardar una variable cambia según el lenguaje, aún asi podríamos decir que los más comunes son *caracteres*, *números* y *booleanos*. Es importante conocer los tipos de datos que tiene el lenguaje que utilizamos y también si estos tienen algún defecto, a veces al hacer ciertas cosas con los datos podemos obtener resultados extraños o confusos que pueden dar lugar a errores, para evitar esto es recomendable investigar a fondo porque puede que incluso necesitemos librerías externas a la hora de trabajar con ciertos tipos de datos.

> Los tipos básicos también se conocen como primitivos y los más comunes son *caracteres*, *números* y *booleanos* (verdadero/falso, true/false).

Además de los primitivos también exiten estructuras de datos las cuales permiten relacionar y estructurar información, estas estructuras de datos según el lenguaje pueden o no tener su propia forma de definir que tipo de información guardan.

## Un poco más sobre tipos 

Los tipos nos permiten definir como es la información que circula dentro de nuestras aplicaciones y como resultado obtenemos más seguridad a la hora de manipular información porque sabemos exactamente como es la información. 

Si bien los tipos nos dan una estructura y está estructura nos da seguridad a la hora de munipular información no toda estructura es necesariamente buena, una mala estructura puede dar más penas que glorias dando problemas de escalabilidad o entendimiento de la información entre otros.

## Un poco sobre tipos en lenguajes de programación

Los lenguajes de programación pueden dar más o menos importancia a los tipos, habiendo lenguajes fuertemente tipados y lenguajes débilmente tipado, también pueden contar con un tipado estático o con un tipado dinámico, a si mismo cada lenguaje cuenta con su propio sistema de tipos el cual deberíamos conocer.

Dentro de cada lenguaje puede haber tipos como los genéricos, el tipo Null, tipos algebraicos o tipos estructurales, que estos tipos existan depende del lenguaje y su sistema de tipos.

## Un poco sobre tipos en programación orientada a objetos

En la programación orientada a objetos definimos como es una clase a través de tipos llamados a veces interfaces y a veces clases abstractas, estos tipos nos permiten definir que atributos y acciones tiene un objeto. 

Las interfaces nos permiten usar patrones de diseño para resolver problemas de diseño comunes en aplicaciones.

El principio de sustitución de Liskov (LSP) es una guía para que los tipos tengan más sentido y así reducir las sorpresas. Otro principio sobre intrfaces es *el principio de segregación de interfaces* que nos recomienda tener varias interfaces pequeñas en vez de una interfaz gigante.
