# Notación Big O
00_00_2023

La notación Big O es una forma de saber aproximadamente cuantos recursos como almacenamiento o tiempo consume un algoritmo, para esto se usa el tamaño de la entrada de un algorimo que definira su coste o complejidad. Ordenandolos de menor a mayor quedarian así:

> O(1) - O(log n) - O(n) - O(n log n) - O(n2) - O(n3) - O(nn) 

## Tipos de coste

### Constante - O(1)

Las operaciones simples como sumas, restas, comparaciones, mostrar textos por pantalla o asignaciones, generalmente sin ciclos. Por ejemplo: x = x + 1

Un ciclo que itere tres veces tendria un coste de O(1) ya que tenemos un valor constante, pero si recorremos un arreglo o usamos un numero que varia la cosa cambia y aumenta la complejidad.

### Lineal - O(n)

Al recorrer un arreglo dependemos de su longitud, un numero que puede crecer, mientras más largo sea el arreglo más tiempo tardara el ciclo en terminar, el ciclo va desde 1 a **n** que en este caso es la longitud del arreglo.

Dentro de un ciclo que recorre un arreglo las lineas que contenga también serán O(n), cada linea dentro del ciclo se repetira **n** veces, por eso es 1 * n.

### Logaritmico - O(log n)

Al recorrer un arreglo en vez de incrementar la variable, la multiplicamos o divimos por un numero constante, ese es el cambio mas significativo. Los algoritmos con un coste logaritmico tienen un complejidad eficiente, por ejemplo una busqueda binaria, donde se divide un arreglo en dos.

### Logaritmico lineal - O(n log n)

Los buenos algoritmos de ordenamiento suelen tener esta complejidad, un ciclo anidado con una complejidad logaritmica.

### Cuadratico - O(n2)

El coste cuadratico o ley del cuadrado se da al tener dos ciclos anidados, por ejemplo al recorrer un arreglo bidimencional o en un algoritmo de ordenamiento por selección.

Si un ciclo es **n**, dos ciclos anidados son **n*****n**, porque el ciclo anidado se repetira **n** veces.

Al tener dos ciclos anidados que dependen de dos variables diferentes, por ejemplo de la longitud de dos arreglos diferente, se reprecentaria como O(a*b), ahora tenemos dos variables, pero seguira siendo cuadratico.

> También existe la complejidad cubica O(n3) al tener tres ciclos anidados.

### Exponencial o mayor - O(nn)

Estos tipos de coste no son comunes cuando estamos empezando en la progracion, ya que se refieren a problemas grandes o muy complejos como por ejemplo el problema del viajante, un problema relacionado con grafos que son toda una area de estudio.

## Analisis de resultados

Esta notación nos permite saber cual es el limite superior, por ejemplo el limite superior de un algortmo O(n) es **n**, nunca va a poder pasar ese limite. Al ser estimaciones un algortmo O(n2) podria ser muchisimo más rapido que otro algoritmo O(n2), pero no mas rapido que uno O(n).

Otra cosa a tener en cuenta es que los algoritmos no reaccionan de la misma manera ante diferentes volumenes o formatos de datos, un algoritmo O(n2) podria ser mas efectivo que uno O(log n), si el volumen de datos es pequeño o si esta ordenado. No siempre la menor complejidad es mejor o la mayor un problema, depende de la cantidad de informacion y su formato.

> Esta notación es solo un dato más a la hora de tomar deciciones o hacer un analisis del código, por si solo no sirve de mucho.

///

* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.

* 

///