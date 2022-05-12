v a c i o - i n f o r m a t i c o
====
*Escrito por: Mirkin Ciro* <br>
*Pertenece a: vacio-informatico* | [Github](https://github.com/vacio-informatico/)<br>
[vacio-informatico web site](https://vacio-informatico.github.io/v-i/)

# Fundamentos de programación basica

Los fundamentos de la programación son esa cosa que por su nombre parecen complicados pero explicados de manera simple y sencilla no lo son. Estos son los conceptos básicos **para aprender a programar**, aquí no veremos código solo los conceptos, ya luego al final de este articulo podras encontrar recomendaciones a diferentes cursos en diferentes formatos.

## Variables

Las variables son como cajas, estas cajas almacenan un solo dato y tiene un nombre que define lo que almacenan. Este nombre no puede contener espacios, por ende los nombre largos terminan siendo así: numerosDelEmpleado, perros_de_raza, nombreDelUsuario.

    Tienen un nombre porque: imaginemos que tenemos diez o treinta de estas cajas, todas son iguales, entonces para no perdernos a cada caja le ponemos un nombre relacionado con su contenido.

> Analogía: Tenemos una caja que solo puede contener un animal de cada tipo. El problema es que tenemos muchas cajas entonces a cada caja le ponemos una etiqueta relacionada con el tipo de animal que contiene. Ejemplo, gato_blanco, ardillaVoladora, perro_salchicha_negro, vacaManchada.

Las variables se llaman así porque su contenido puede cambiar a lo largo de un programa.

> Ejemplo: Si tenemos una variable llamada letras, esta podría contener, la letra *a* luego la letra *b* y así con las demás, pero siempre almacenando una sola letra.

    Constantes: Estas son variables, pero una vez que les asignamos un valor no vamos a poder cambiarlo por otro. Su valor es constante no variable.

## Condicionales

Las condicionales son usadas para **preguntar algo**, por ejemplo, podemos preguntar si dos variables son iguales, si una es mayor que la otra o si son distintas. Ahora bien, al hacer esta pregunta pueden pasar dos cosas:

1. La primera: Nuestra pregunta dio afirmativo (las dos cajas si son iguales).
2. La segunda: Nuestra pregunta dio negativo (las dos cajas no son iguales).

> Analogía simple de una condicional: Al llegar a nuestra casa, *si la puerta == cerrada* buscar la llave y abrir la puerta. Lo primero es la condición y lo segundo es la o las acciones que realizamos.

Bien, luego de entender lo que es una condicional simple, quedan las condicionales múltiples. Que son dos o más preguntas.

1. Hacer una pregunta: Si nuestra pregunta da positivo podemos realizar una acción.
2. hacer otra pregunta: Nuestra pregunta anterior dio negativo, si esta da positivo podemos realizar una acción.
3. Hacer una acción por defecto: Nuestra preguntas anteriores dieron negativo, así que podemos realizar una acción genérica.

Una ultima cosa que se puede agregar sobre las condicionales es que puede haber varias preguntas en una misma condicional, y esto se logra con dos palabras: el *and* y el *or*.

    En español estos son and(y) y or(o).

> Nueva analogía: Al llegar a casa, *si la puerta == cerrada*  **y** *tengo la llave* abro la puerta con la llave y entro a casa.

## Ciclos

Los ciclos son usados cuando queremos que *algo* se repita, y ese algo es código. Ahora bien, al repetir algo necesitamos un *contador* que se encargue de contar cada vez que hacemos una repetición, y esto no es más que una variable que primero tiene un valor inicial y luego en cada repetición se suma 1 a si misma. Esto ultimo se llama incremento.

    contador = 0 <br>
    contador = contador +1

Bien ahora tenemos un contador, pero nuestro ciclo no se puede repetir infinitamente, se repite *asta que una condición se cumple*, con esto podemos en cada repetición *preguntar* si el contador es igual a 20, si es mayor a 20, menor y todas las demás preguntas que podíamos hacer en un condicional.

> Analogía: En un reproductor de música queremos hacer que una canción *suene o se repita* 5 veces. Entonces al terminar la canción preguntaríamos si ya se reprodujo 5 veces, si esto es verdad dejaríamos de repetir la canción, si no, repetiríamos la canción y la pregunta una vez más.

Tenemos diferentes tipos de ciclos, y cada uno de estos tiene una estructura diferente, como donde se crea el contador o donde está la condición.

### Ciclo while

Al usar el ciclo while creamos el contador afuera del ciclo, lo incrementamos adentro y **la condición esta al inicio**. Esto nos quedaría de la siguiente manera:

### Ciclo do-while

Al usar el ciclo do-while creamos el contador afuera, lo incrementamos dentro, pero la **condición esta al final del ciclo**.

### Ciclo for

El ciclo for es muchas veces él más complicado de comprender ya que el contador, su incremento y la condicional están dentro del ciclo.

## Funciones

Las funciones nos permiten, tener una parte de código que vayamos a usar más de una vez separada del resto para que no tengamos que escribir ese código todas esas veces, sino que podemos tenerlos a parte y llamarlo cuando lo necesitemos. 

Como una funcion tiene un proposito a veces necesita datos como un nombre o un numero, estos datos se llaman parametros. Ademas una funcion tambien puede retornar o devolver un valor.

	La funcion necesita el nombre completo de alguien y nos retorna solo su primer nombre.

> Analogía: Supongamos que tenemos una torta y queremos decorarla con galletas, pero solo tenemos un galleta. Entonces haríamos un molde de la galleta y lo usaríamos para poner más galletas donde queremos.

En la anterior analogía la torta seria nuestro programa, las galletas serian esa parte de código que queremos repetir y el molde seria la función. Los parametros de la funcion (el molde) serian la masa y la galleta es lo que retorna la funcion (el molde).

	Las funciones también nos permiten que partes importantes del código estén separadas del resto, y en esto se basa la programación funciónal.

___

Luego de haber aprendido las bases. Para aprender a programar de verdad, manejando código y un lenguaje de programación, que <b>tú elijas</b>, puedes pasar al siguiente nivel.

Canales de YouTube: 

* Cursos de [Yacklyon](https://www.youtube.com/channel/UCRWjpn9LNoQqhJ59AT_yxPw) (HTML - Javascript - PHP - Java - C/C++ - Python): Tiene cursos básicos y algunos avanzados bastante completos, edemas de tener buenas explicaciones y contenido actualizado.

* Curso de [Fazt](https://www.youtube.com/c/FaztTech) (HTML - Javascript): Sus cursos más que nada se orientan al mundo del desarrollo web, pero tiene algunos cursos sobre lenguajes y fundamentos que están al mismo nivel que los demás.

* [Absolute](https://www.youtube.com/c/AbsoluteSite) (Fundamentos sobre programacion): Si aún no entiendes del todo algunos de los conceptos vistos anteriormente, sus vídeos pueden ayudarte, ya que son explicados de manera simple y usando analogías en minecraft.

* Cursos de [Soy dalto](https://www.youtube.com/c/soydalto) (HTML - Javascript - etc): Tiene cursos muy completos en los temas y tecnologías que toca.

Sitios web:

* [W3scholl](https://www.w3schools.com) (HTML- Javascript - PHP - etc): Esta pagina contiene muy buena documentacion sobre lenguajes, conteniendo estandares y ejemplos faciles.

* [Uniwebsidad](https://uniwebsidad.com) ( - etc): Esta pagina 

* [Programiz](https://www.programiz.com/) (Python - C/c++ - javascript - etc)