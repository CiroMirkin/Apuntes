# Normalizacion
00_07_2024

Cuando usamos una base de datos relacional tenemos que definir como son las tablas y como estas se relacionan. 

Una vez tengamos mas o menos definido que datos iran guardados en la base de datos podemos hacer un "diseño" mostrando como son las tablas y sus relaciones, es ahora donde entra la normalizacion que nos permitira mejorar el diseño o en todo caso comprobar que es optimo.

La normalizacion de una base de datos se basa en una serie de reglas y etapas las cuales vamos a aplicar ordenadamente para evitar que la información se repita.

## Primera forma normal

Cada tabla debe tener una *primary key* [Llave primaria].

Buscamos la atomicidad de la informacion, llegar hasta el punto en que los datos no se puedan dividir.

Las columnas no deben ser variantes, por ejemplo: camion_de_carga y camion_pequeño, este tipo de informacion debe estar en una tabla aparte, en este caso se podria llamar *"tipos de camiones"*.

## Segunda forma normal

En esta forma normal identificamos, separamos y relacionamos los grupos de datos en tablas mediante llaves.

Todas las columnas de la tabla deberian depender de la *primary key*. Pueden existir columnas con datos que se repitan y que son capaces de cambiar en un futuro, son este tipo de columnas los que debemos separar en una nueva tabla y relacionar mediante llaves.

## Tercera forma normal

> No siempre es necesario llegar hasta la tercera forma normal.

La tercera forma normal nos dice que si en una tabla hay informacion que no dependa de la *primary key* debemos separar esta informacion en una nueva tabla y relacionar la informacion mediante llaves.

## Cuarta y quita forma normal

Ademas de las tres primeras existen otras dos formas normales las cuales no suele ser neceario usar.

