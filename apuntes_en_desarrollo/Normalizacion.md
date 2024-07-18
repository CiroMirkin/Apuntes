# Normalizacion
00_07_2024

Cuando usamos una base de datos relacional tenemos que definir como son las tablas y como estas se relacionan. 

Una vez tengamos mas o menos definido que datos iran guardados en la base de datos podemos empezar a hacer un "diseño" mostrando como son las tablas y sus relaciones, es ahora donde entra la normalizacion que nos permitira mejorar el diseño o en todo caso comprobar que es optimo.

La normalizacion se base en una serie de reglas y etapas las cuales vamos a aplicar ordenadamente para evitar que la informacion se repita y sea mas facil de administrar.

## Primera forma normal

Cada tabla debe tener una *primary key* [Llave primaria].

En esta primera forma normal buscamos:

* Que cada celda tenga un unico valor.

* Identificar grupos.

## Segunda forma normal

En esta forma normal identificamos, separamos y relacionamos los grupos de datos en tablas.

En esta segunda forma normal buscamos:

* Separar cada grupo en una tabla con una *primary key* [Llave primaria].

* Relacionar las tablas mediante llaves.

## Tercera forma normal



## Cuarta, quita y sexta forma normal

Ademas de las tres primeras existen mas formas normales las cuales no suele ser neceario usar.

