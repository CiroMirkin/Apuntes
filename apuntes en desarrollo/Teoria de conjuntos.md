# Teoría de conjuntos
00_00_2024

No hay una definición de lo que es un conjunto, el término es indefinido, igualmente al escucha la palabra *conjunto* se tiene una idea de lo que es. 

Los conjuntos contienen elementos, son una agrupación de elementos que tienen algo en común. Tanto conjuntos como elementos son abstractos, no sabemos que son, pero si como son y eso es lo que importante, sus propiedades.

La teoría de conjuntos es parte de las matemáticas y tiene su propio objeto de estudio. Esta teoría se relaciona con el resto de teorías y conceptos de las matemáticas y de hecho estos pueden expresarse usando conjuntos.

Dentro de la programación la teoría de conjuntos nos puede ayudar a mejorar nuestra lógica, entender problemas o nuevos conceptos, pero además de esto los conjuntos son estructuras de datos y también se usan en algunas áreas de la informática.

## Lenguaje de conjuntos

El lenguaje de la teoría de conjuntos consta de en varios signos con su equivalente en lenguaje natural (en este caso el español), este lenguaje nos permite hacer razonamientos lógicos como el siguiente:

	A = B ^ B = C -> A = C
	A es igual a B, a su vez B es igual a C entonces A es igual a C

Dentro de todos los símbolos el más importante es el de *pertenencia* representado por el signo ∈.

	x ∈ A
	x pertenece al conjunto A

Si bien con este símbolo podríamos demostrar y afirmar cualquier cosa, al aumentar la complejidad se volvería tedioso y es por eso que hay más símbolos.

![Tabla de símbolos logicos usados en la teoría de conjuntos]()
![Tabla de símbolos usados para expresar conjuntos]()

### Definición de conjuntos

Los conjuntos se escriben como letras mayúsculas o letras griegas, el contenido de los conjuntos se escribe entre llaves { } y los elementos de un conjunto se escriben como letras minúsculas.

A = { x }

Se puede determinar el contenido de un conjunto de dos formas distintas, por extensión enumerando sus elementos o por comprensión definiendo cuáles son las propiedades que distinguen a los elementos del conjunto.

A = { 1, 2, 3 }

A = { x / P(x) }  

### Relaciones y operaciones entre conjuntos

* Subconjunto: El conjunto A es un subconjunto de B, cada elemento de A también está en B.

	A ⊆ B

* Subconjunto propio: El conjunto A es un subconjunto propio de B, esto quiere decir que el conjunto B puede tener elementos que no estén en el conjunto A.

	A ⊂ B 

* Unión: La unión de los conjuntos A y B es un conjunto con los elementos que estén en el conjunto A o en el conjunto B.

	A *Union* B = { x / x ∈ A **o** x ∈ B }

* Intersección: La intersección de los conjuntos A y B es un conjunto con todos los elementos que tienen en común ambos conjuntos.

	A *interseccion* B = { x / x ∈ A **y** x ∈ B }

### Símbolos logicos

Usamos los símbolos para describir relaciones y propiedades, veamos algunas.

* Igualdad: Dos conjuntos son iguales solo si ambos conjuntos tienen los mismos elementos.

	A = B

* Equivalencia lógica: Usamos este símbolo para decir que dos expresiones son equivalentes.

	A = B *si, y solo si,* A ⊆ B y B ⊆ A

	A = B <=> A ⊆ B y B ⊆ A

* Entonces: Usamos este símbolo para decir que pasa si una expresión se cumple.

	si A ⊆ B y B ⊆ C *entonces* A ⊆ C

	si A ⊆ B y B ⊆ C => A ⊆ C

## Axiomas

Los axiomas invalidan posibles paradojas como la de Bertrand Russell definiendo que es y que no es un conjunto, son como reglas para crear conjuntos y anular paradojas.

Estos son los axiomas de Zemelo-Fraenkel (ZF):

* Dos conjuntos son iguales si, solo si, tienen los mismos elementos.

* Desde dos conjuntos *A* y *B* se puede formar un conjunto cuyos únicos elementos son los dos conjuntos { A, B }.

* Si ϕ es una propiedad con un parámetro P y *A* es un conjunto, entonces se puede formar el conjunto. A = { x : x ∈ A Ʌ ϕ( x, p ) }. Con las propiedades adecuadas podemos crear subconjuntos de un conjunto.

* Si hay una familia de conjuntos, si ϑ es un conjunto y sus elementos son conjuntos, entonces la unión de todos los elementos de ϑ dar un conjunto.

* Si *X* es un conjunto, P(x), el conjunto potencia de *X* también debería ser un conjunto.

* Los números naturales deberían formar un conjunto.

Todas estas cosas deberían ser ciertas al formar un conjunto, estos son los más comunes, pero hay más.

///
Charla de Roberto Pichardo Mendoza: https://youtu.be/hLFit88zTYk?si=TEZ2lklYDT2eOjtY
https://www.matem.unam.mx/~max/AS1/N1.pdf
https://sistemas.fciencias.unam.mx/~mlm/calculoI/cal1.pdf
https://platzi.com/tutoriales/4260-python-funciones/24762-teoria-de-conjuntos-matematicas/
https://www.uv.es/ivorra/Libros/TC.pdf
///
