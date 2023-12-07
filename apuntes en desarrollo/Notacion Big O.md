# Notación Big O
00_00_2023

La notación Big O es una forma de saber aproximadamente el coste de un algoritmo, nos permite saber aproximadamente cuantos recursos como almacenamiento o tiempo puede consumir llegar a consumir un algoritmo, para esto se usa el tamaño de la entrada. Ordenandolos de menor a mayor quedarian así:

> O(1) - O(log n) - O(n) - O(n log n) - O(n2) - O(n3) - O(nn) 

Si lo queremos estimar es el tiempo de que tarda un algoritmo en resolver un problema esta notacion nos puede indicar en que manera va a aumentar segun aumente el tamaño de la entrada que generalmente se llame **n**, para entender esto es mejor ver una grafica:

![Grafica polinomial de la realción tiempo/n]()

Como podemos ver el tiempo puede aumentar de una forma mas o menos precipitada e incluso mantenerce constante.

Big O nos permite saber aproximadamente cual es el limite superior, esto quiere decir saber cuantos recursos tomara un algoritmo en el peor caso donde más recursos se consumen, para el mejor caso o el promedio hay otras notaciones asintoticas.

## Tipos de coste

### Constante - O(1)

Las operaciones simples como sumas, restas, comparaciones, mostrar textos por pantalla o asignaciones, generalmente sin ciclos tienen un coste constante.

Por ejemplo: x = x + 1

Un ciclo que itere tres veces tendria un coste de O(3) ya que tenemos un valor constante, pero si recorremos un arreglo o usamos un numero variable la cosa cambia y aumenta el coste.

### Lineal - O(n)

Al recorrer un arreglo dependemos de su longitud que es un numero que puede crecer, mientras más largo sea el arreglo más tiempo tardara el ciclo en terminar, el ciclo ira desde 1 a **n** que en este caso seria la longitud del arreglo.

Dentro de un ciclo de este tipo las lineas que contiene también tendra un conste O(n) porque cada linea dentro del ciclo se repetira **n** veces.

### Logaritmico - O(log n)

Al recorrer un arreglo en vez de incrementar la variable, la multiplicamos o divimos por un numero constante, ese es el cambio mas significativo. Los algoritmos con un coste logaritmico son eficientes, por ejemplo una busqueda binaria donde se parte un arreglo en dos.

### Logaritmico lineal - O(n log n)

Los buenos algoritmos de ordenamiento suelen tener este coste, son algoritmos con un ciclo anidado de un coste logaritmico, el ciclo **log n** se repetira **n** veces.

### Cuadratico - O(n2)

El coste cuadratico o ley del cuadrado se da al tener dos ciclos anidados, por ejemplo al recorrer un arreglo bidimencional o en un algoritmo de ordenamiento por selección.

Si un ciclo es **n**, dos ciclos anidados son **n*****n**, esto seria **n** al cuadrado, en el peor caso el tiempo va a incrementar tanto como valga el cuadrado de **n**.

Al tener dos ciclos anidados que dependen de dos variables diferentes, por ejemplo de la longitud de dos arreglos diferente, se reprecentaria como O(a*b), ahora tenemos dos variables, pero el coste seguira siendo cuadratico.

> También existe la complejidad cubica O(n3) al tener tres ciclos anidados.

### Exponencial o mayor - O(nn)

Estos tipos de coste no son comunes cuando estamos empezando en la progracion, ya que se refieren a problemas grandes o muy complejos como por ejemplo el problema del viajante, un problema relacionado con grafos que son toda una area de estudio.

## Utilidad de saber el coste de un algoritmo

Al ser estimaciones un algortmo O(n2) podria ser muchisimo más rapido que otro algoritmo O(n2), pero no mas rapido que uno O(n).

Esta notación es solo un dato más a la hora de tomar deciciones o hacer un analisis del código, por si solo no sirve de mucho, aun así nos puede ayudar preguntarnos cuan grande puede llegar a ser **n** y como nos puede afectar el creciento de **n**.

Hay que tener en cuenta que los algoritmos reaccionan difetente ante diferentes cantidades de información ordenada de diferentes formas. Para tener mas información sobre el verdadero coste de un algoritmo hay que ejecutarlo con diferentes cantidades de información y trazar un gafico chico sobre como reacciona ante estas variaciones en la entrada. **No buscamos el algoritmo con el menor coste** sino el algoritmo que mejor resuelva el problema que tenemos y para esto primero hay que entender bien el problema.

///

* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.

* 

///