# Notación Big O
00_00_2023

La notación Big O es una forma de saber aproximadamente cuanto tiempo se toma un algoritmo. El tamaño de la entrada de un algorimo va a definir su coste o complejidad,  ordenandolos de menor a mayor quedarian así:

O(1) - O(log n) - O(n) - O(n log n) - O(n2) - O(n3) - O(nn) 

## Complejidades más comunes

### Constante - O(1)

Las operaciones simples como sumas, restas, comparaciones, mostrar textos por pantalla o asignaciones, generalmente sin ciclos. Por ejemplo: x = x + 1

Un ciclo que itere tres veces tendria un coste de O(1) ya que tenemos un valor constante, pero si recorremos un arreglo la cosa cambia y tendriamos una complejidad mayor.

### Lineal - O(n)

Al recorrer un arreglo dependemos de su longitud, un numero que puede crecer, mientras más largo sea el arreglo más tiempo tardara el ciclo en terminar.

#### Análisis de un bloque de código

1. Escribe en el lenguaje que prefieras:

	* Define de un arreglo con tres elementos
	* Recorre el arreglo = n
	* Muestra un elemento del arreglo = 1 

2. Escribimos estos valores como una suma:

	* Asi seria la más correcta: 1 * n = 1n
	* pero tambien se podria hacer así: n + 1 = 1n 

Dentro de un ciclo que recorre un arreglo las lineas que contenga también serán O(n), cada linea dentro del ciclo se repetira **n** veces, por eso es 1 * n.

3. Tomamos el mayor termino y quitamos la constante, en este caso el numero dos:

	O(n)

Siempre, **siempre** vamos a tomar el termino mayor, esto debido a que la notación Big O define el comportamiento en el peor caso.

### Logaritmico - O(log n)

Al recorrer un arreglo en vez de incrementar la variable, la multiplicamos o divimos por un numero constante, ese es el cambio mas significativo. Los algoritmos con un coste logaritmico tienen un complejidad eficiente, por ejemplo una busqueda binaria.

### Logaritmico lineal - O(n log n)

Los buenos algoritmos de ordenamiento suelen tener esta complejidad, un ciclo anidado con una complejidad logaritmica.

### Cuadratico - O(n2)

El coste cuadratico o ley del cuadrado se da al tener dos ciclos anidados, por ejemplo al recorrer un arreglo bidimencional o en un algoritmo de ordenamiento por selección.

Si un ciclo es **n**, dos ciclos anidados son **n*****n**, porque el ciclo anidado se repetira **n** veces.

Al tener dos ciclos anidados que dependen de dos variables diferentes, por ejemplo de la longitud de dos arreglos diferente, se reprecentaria como O(a*b), ahora tenemos dos variables, pero aun asi en el peor de los casos tendra una complejidad cuadratica.

> También existe la complejidad cubica O(n3) al tener tres ciclos anidados.

#### Análisis de un bloque de código 

1. En tu lenguaje de preferencia:

	Muestra el contenido de un arreglo bidimencional.

2. Escribe la suma que podria ser un poco mas larga o corta, pero dara el mismo resultado:

n * n + 1 = n2 + 1 => O(n2)

### Exponencial o mayor - O(nn)

Estos tipos de coste no son comunes cuando estamos empezando en la progracion, ya que se refieren a problemas grandes o muy complejos como por ejemplo el problema del viajante, un problema relacionado con grafos que son toda una area de estudio.

///

* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.

* 

///