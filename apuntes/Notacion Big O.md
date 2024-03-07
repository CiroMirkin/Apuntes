# Notación Big O
06_12_2023

La notación Big O es una forma de saber aproximadamente el coste de un algoritmo, este coste se traduce en cuantos recursos como almacenamiento o tiempo puede llegar a consumir un algoritmo, para esto se usa el tamaño de la entrada. Ordenando los distintos costes de menor a mayor quedarían así:

> O(1) - O(log n) - O(n) - O(n log n) - O(n2) - O(n3) - O(nn) 

Si lo queremos estimar es el tiempo que tarda un algoritmo en resolver un problema, Big O nos indica de que forma va a aumentar según aumente el tamaño de la entrada que generalmente se llama **n**, para entender esto es mejor ver un gráfico:

![Gráfico polinomial de la realción tiempo/n]()

Como podemos ver el tiempo puede aumentar de una forma más o menos precipitada e incluso mantenerse constante.

Big O nos permite saber aproximadamente cuál es el límite superior, saber cuantos recursos tomara un algoritmo en el peor caso donde más recursos se consumen, para el mejor caso o el promedio hay otras notaciones asintóticas.

## Tipos de coste

### Constante - O(1)

Las operaciones simples como sumas, restas, comparaciones, mostrar textos por pantalla, asignaciones o en general algoritmos sin ciclos tienen un coste constante.

Un ciclo que itere tres veces tendría un coste de O(3), ya que tenemos un valor constante, pero si recorremos un arreglo o usamos un número variable la cosa cambia y aumenta el coste.

### Lineal - O(n)

Al recorrer un arreglo dependemos de su longitud que es un número que puede crecer, mientras más largo sea el arreglo más tiempo tardara el ciclo en terminar, el ciclo ira desde 1 a **n** que en este caso es la longitud del arreglo.

Dentro de un ciclo de este tipo las líneas que contiene también tendrá un conste O(n) porque cada línea dentro del ciclo se repetirá **n** veces. 

### Logarítmico - O(log n)

El cambio más significativo es al recorrer un arreglo y en vez de incrementar la variable indicé (Comúnmente llamada i) la multiplicamos o dividimos por un número constante como el dos. Los algoritmos con un coste logarítmico son eficientes como por ejemplo una búsqueda binaria donde se parte en dos un arreglo.

### Logarítmico lineal - O(n log n)

Los buenos algoritmos de ordenamiento suelen tener este coste. Algoritmos con un ciclo anidado de un coste logarítmico, donde **log n** se repetirá **n** veces.

### Cuadrático - O(n2)

El coste cuadrático o ley del cuadrado se da al tener dos ciclos anidados, por ejemplo al recorrer un arreglo bidimensional o en un algoritmo de ordenamiento por selección.

Si un ciclo es **n**, dos ciclos anidados son **n*****n**, esto seria **n** al cuadrado, en el peor caso el tiempo va a incrementar tanto como valga el cuadrado de **n**, si un arreglo se duplica el tiempo se cuadriplica.

Al tener dos ciclos anidados que dependen de dos variables diferentes, por ejemplo de la longitud de dos arreglos diferente, se representaría como O(a*b), ahora tenemos dos variables, pero el coste seguirá siendo cuadrático.

> También existe la complejidad cúbica O(n3) al tener tres ciclos anidados.

### Exponencial o mayor - O(nn)

Estos tipos de coste no son comunes cuando estamos empezando en la programación, ya que se refieren a problemas grandes o muy complejos como por ejemplo el problema del viajante, un problema relacionado con grafos que son toda una área de estudio.

## Utilidad de saber el coste de un algoritmo

Por si sola, ninguna. Esta notación es solo un dato más a la hora de tomar decisiones o hacer un análisis del código, igualmente para complementar nos puede ayudar preguntarnos cuan grande puede llegar a ser **n** y como nos puede afectar su crecimiento.

Tenemos que entender que **no buscamos el algoritmo con el menor coste** sino el algoritmo que resuelva mejor el problema que tenemos, para esto primero hay que entender bien el problema y su contexto.

Hay que tener en cuenta que los algoritmos reaccionan diferente ante diferentes cantidades de información ordenada de diferentes formas, un algoritmo O(n2) podría ser muchísimo más rápido que otro algoritmo O(n2), en esto la entrada juega un papel importante. Para tener más información sobre el verdadero coste de un algoritmo hay que ejecutarlo con diferentes cantidades de información y trazar un gráfico chico sobre como reacciona ante estas variaciones en la entrada.

///
El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.
https://youtu.be/MyAiCtuhiqQ?si=ZktpcZaBXll6okEx
///