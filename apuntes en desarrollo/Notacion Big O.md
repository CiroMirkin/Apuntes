# Notación Big O
00_00_2023

La notación Big O es una forma de saber aproximadamente cuanto tiempo se toma un algoritmo en funcion del tamaño de su entrada.

Big O define un coste, ordenando los diferentes tipos de menor a mayor quedarian así:

O(1) - O(log n) - O(n) - O(n log n) - O(n2) - O(n3) - O(nn) 

## Tipos de coste principales

### Coste constante - O(1)

Las operaciones simples como sumas, restas, comparaciones, mostrar textos por pantalla o las asignaciones tiene este coste.

y = 5 * 5
x = x + 1

### Coste lineal - O(n)

Cuando recorremos un arreglo dependemos de la longitud del arreglo, un numero que puede crecer, mientras mas grande sea la longitud del arreglo más tiempo tardara el ciclo en terminar.

Un ciclo que recorre un arreglo es O(n), pero tambien todas las lineas que contenga el siglo serán O(n).

Un ciclo que recorra los tres primeros elementos de un arreglo tendria un coste de O(1) ya que no tenemos un valor variable sino un constante, siempre seran tres independientemente de la longitud del arreglo.

#### Analisis de un bloque de código

1. Escribe en el lenguaje que prefieras:

	Definición de un arreglo con tres elementos - 1

	Recorrido del arreglo                  - n

	Mostrar un elemento del arreglo      - n 

2. Escribimos estos valores como una suma:

	1 + n + n

	1 + 2n

3. Tomamos el termino mayor y le quitamos la constante, en este caso el numero dos:

	O(n)

Siempre, **siempre** vamos a tomar el termino mayor, esto debido a que la notación Big O define el comportamiento en el peor caso, no nos importa el mejor solo el peor.

### Coste logaritmico - O(log n)

Al recorrer un arreglo en vez de incrementar un variable la multiplicamos o divimos por un numero constante, tener que la condicion del ciclo seguira dependiendo de un variable.

Podriamos tener un O(n * log n) ¿Como crees que seria?

### Coste cuadratico - O(n2)

El coste cuadratico o ley del cuadrado, se puede dar al recorrer un arreglo bidimencional o en un algoritmo de ordenamiento por seleccion, este tipo de coste se da al tener dos ciclos anidados.

Si un ciclo es **n**, dos ciclos anidados son **n*****n**.

Al tener dos ciclos anidados pero que dependen de dos variables diferentes, por ejemplo la longitud de dos arreglos diferente, podriamos reprecentar si coste como O(a*b).

#### Analisis de un bloque de código 

1. En tu lenguaje de preferencia:

	Define un arreglo bidimencional culla longitud y contenido sea definida por el usuario.
	
	Crea dos ciclos anidados para recorrer el arreglo.

	Muestra por pantalla el contenido del arreglo.

2. Escribimos la suma, que podria ser un poco mas larga o corta, pero dara el mismo resultado:

1 + n * n + 1 + 1 + n * n + 1

4 + 3n2

O(n2)



### Costes mayores o iguales al exponencial - O(nn)

Estos tipos de coste no son comunes cuando estamos empezando en la progracion, ya que se refieren a problemas grandes o muy complejos, por ejemplo un algorimo exponencial podria ser un que trabaje con el problema del viajante, un problema relacionado a los grafos que son toda una area de estudio.