# Normalización
29_07_2024

Cuando usamos una base de datos relacional tenemos que definir como son las tablas y sus relaciones. 

Una vez estén mas o menos definidos los datos que guardaremos, podemos hacer un "diseño" mostrando como son las tablas y sus relaciones, es ahora donde entra la normalización que nos permitirá mejorar el diseño o en todo caso comprobar que es optimo.

La normalización de una base de datos se basa en una serie de reglas y etapas las cuales aplicamos ordenadamente para evitar que la información se repita, facilitando su mantenimiento y reduciendo el espacio que ocupa.

## Formas normales

Cada forma normal es una etapa en la cuál aplicamos ciertas reglas buscamos la atomicidad de la información, dicho de otra forma, buscando llegar hasta el punto donde los datos no se puedan dividir, como cada etapa se apoya sobre la anterior debemos aplicarlas de forma ordenada.

Si bien existen cinco formas normales, es recomendable y suele ser suficiente llegar hasta la tercera, incluso a veces la tercera también es innecesaria. Hasta donde llegar se debe decidir teniendo en cuenta la cantidad de información que debemos guardar y la complejidad de las relaciones entre tablas.

Cada tabla en nuestra base de datos guarda información la cual debería estar relacionada de alguna forma, a su vez cada tabla debería ser lo mas pequeña y concreta posible, es ahí donde las formas normales nos ayudan.

### Primera forma normal

En esta primera forma normal vamos a hacer dos cosas fundamentales:

1. Identificar y separar cada grupo de datos relacionados dentro de una tabla.

2. Establecer una *primary key* [Llave primaria] para cada tabla.

En la base de datos de una tostadora de cafe podríamos tener dos tablas principales:

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

Pueden existir columnas con datos que se repitan y puedan cambiar en un futuro. Este tipo de columnas son las que debemos separar en una nueva tabla la cual vamos a relacionar mediante llaves.

Las columnas no deben ser variantes porque esto dificulta la administración de dichas variantes, por ejemplo: *camion_de_carga* y *camion_pequeño*, son columnas que deberían estar en una tabla a parte con el nombre *tipos_de_camiones*.

En esta etapa podríamos separar la tabla cafe en dos:

**Tabla cafe:**

| Nombre (*primary key*) | Productor_id | Tostado | Variedad | Origen |
|--|--|--|--| --|
|  |  |  |  |   |

**Tabla productor:**

| Productor_id (*primary key*) | Nombre | Pais | 
|--|--|--|
|  |  |  |

### Tercera forma normal

La tercera forma normal nos dice que si en una tabla hay información que no dependa de la *primary key*, debemos separar esta información en una nueva tabla y relacionarla mediante llaves, ya que podría cambiar independientemente del resto de información en la tabla.

Podríamos aplicar esta forma normal a la *"ubicación"* en la tabla cliente creando una nueva tabla:

**Tabla ubicación del cliente:**

| Ubicacion_id (*primary key*) | Pais | Provincia |  Ciudad |
|--|--|--|--|
|  |  |  |  |

**Tabla cliente:**

| Cliente_id (*primary key*) | Nombre | Ubicacion_id | 
|--|--|--|
|  |  |  |  

### Cuarta y quinta forma normal

La cuarta forma tiene que ver con las relaciones de N:N (muchos-muchos) y la quinta forma nos permite asegurarnos de que no existen columnas extrañas, esto puede ser util al tener una estructura de datos muy grande.

///
https://www.freecodecamp.org/espanol/news/normalizacion-de-base-de-datos-formas-normales-1nf-2nf-3nf-ejemplos-de-tablas/
https://youtu.be/fxbC4cwnb1U?si=CO0QLwFV-ksCJg8M
https://platzi.com/tutoriales/1566-fundamentos-db/9342-normalizacion/
https://platzi.com/blog/normalizar-una-base-de-datos-y-no-morir-en-el-intento/
https://www.cs.upc.edu/~bcasas/docencia/pfc/NormalitzacioBD.pdf
https://bookdown.org/paranedagarcia/database/normalizacion.html
///