# Normalización
00_07_2024

Cuando usamos una base de datos relacional tenemos que definir como son las tablas y sus relaciones. 

Una vez tenemos mas o menos definido que datos guardaremos podemos hacer un "diseño" mostrando como son las tablas y sus relaciones, es ahora donde entra la normalización que nos permitira mejorar el diseño o en todo caso comprobar que es optimo.

La normalización de una base de datos se basa en una serie de reglas y etapas las cuales vamos a aplicar ordenadamente para evitar que la información se repita, facilitando el mantenimiento y reduciendo el espacio que ocupa.

## Formas normales

Cada forma normal es una etapa en la cual aplicamos ciertas reglas, cada etapa se apolla sobre la anterior, es por eso que debemos aplicarlas de forma ordenada.

Si bien existen cinco formas normales, es recomendable y suele ser suficiente llegar hasta la tercera, incluso a veces la tercera tambien es innecesaria, esto es algo que se debe decidir teniendo en cuenta si es posible que la información cambie.

Cada tabla en nuestra base de datos guarda información la cual debería estar relacionada de alguna forma y a su vez una tabla debería ser lo mas pequeña y concreta posible, es a este punto donde las formas normales nos ayudan a llegar.

### Primera forma normal

En esta primera forma buscamos la atomicidad de la información, llegar hasta el punto donde los datos no se puedan dividir.

* Identificar y separar cada grupo de datos relacionados en una tabla.

* Establecer una *primary key* [Llave primaria] para cada tabla.

En la base de datos de una tostadora de cafe, una organización que compra cafe y lo tuesta para luego venderlo listo para su consumición podríamos tener dos tablas principales:

**Tabla cafe:**

| Nombre (*primary key*) | Productor | Tostado | Variedad | Origen |
|--|--|--|--|--|
|  |  |  |  |  |

**Tabla cliente:**

| Cliente_id (*primary key*) | Nombre | Pais | Provincia | Ciudad |
|--|--|--|--|--|
|  |  |  |  |  |

### Segunda forma normal

Todas las columnas de la tabla deberían depender de la *primary key* [Llave primaria]. 

Pueden existir columnas con datos que se repitan y sean capaces de cambiar en un futuro. Este tipo de columnas son las que debemos separar en una nueva tabla la cual vamos a relacionar mediante llaves.

Las columnas no deben ser variantes, por ejemplo: *camion_de_carga* y *camion_pequeño*,  son columnas que deberian estar en una tabla a parte que en este caso se podría llamar *tipos_de_camiones*.

En esta etapa podríamos separar la tabla cafe en dos:

**Tabla cafe:**

| Nombre (*primary key*) | Productor_id | Tostado | Variedad |
|--|--|--|--|
|  |  |  |  |  

**Tabla productor:**

| Productor_id (*primary key*) | Nombre | Pais | 
|--|--|--|
|  |  |  |


### Tercera forma normal

La tercera forma normal nos dice que si en una tabla hay información que no dependa de la *primary key*, debemos separar esta información en una nueva tabla y relacionarla mediante llaves, ya que podría cambiar idependientemente del resto de información en la tabla.

Podríamos hacer aplicar esta forma normal a la *"ubicación"* en la tabla cliente o de la tabla pedido:

**Tabla ubicacion del cliente:**

| Ubicacion_id (*primary key*) | Pais | Provincia |  Ciudad |
|--|--|--|--|
|  |  |  |  |

**Tabla cliente:**

| Cliente_id (*primary key*) | Nombre | Ubicacion_id | 
|--|--|--|
|  |  |  |  