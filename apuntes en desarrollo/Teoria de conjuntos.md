# Teoría de conjuntos
00_00_2024

No hay una defincion de lo que es un conjunto, el termino es indefinido, igualmente uno escucha la palabra *conjunto* y se hace una idea de lo que es. 

Los conjutos contien elementos, son una agrupación de elementos que tienen algo en comun. Tanto conjuntos como elementos son abstracctos, no sabemos que son pero si como son, lo que importa son las propiedades de un conjunto.

La teoría de conjuntos es parte de las metematicas y tiene su propio objeto de estudio, los conjuntos. Esta teoría se relaciona con el resto de teorías y conceptos de las matematicas y de echo estos pueden expresarce usando conjuntos.

Dentro de la programación la teoria de conjuntos nos puede ayudar a majorar nuestra logica, entender problemas o nuevos conceptos, pero además los conjuntos son estructuras de datos y se usan en algunas áreas de la informatica.

## Lenguaje de conjuntos

El lenguaje de la teoría de conjuntos consta de en varios signos con su equivalente en lenguaje natural (en este caso el español), este lenguaje nos permite hacer razonamientos logicos como el siguiente:

	A = B ^ B = C -> A = C
	A es igual a B, a su vez B es igual a C entonces A es igual a C

Dentro de todos los simbolos el más importante es el de *pertenencia* reprecentado por el signo ∈.

	x ∈ A
	x pertenece al conjunto A

Si bien con este simbolo podriamos demostrar y afirmar cualquier cosa, al aumentar la complejidad se volveria tedioso y es por eso que hay más simbolos.

![Tabla de simbolos logicos usados en la teoría de conjuntos]()
![Tabla de simbolos usados para expresar conjuntos]()

### Definición de conjuntos

A = { x }

Los conjuntos se escriben como letras mayusculas o letras griegas, el contenido del conjuntos se escribe entre llaves { } y los elementos de un conjunto se escriben como letras minusculas.

Se puede determinar el contenido de un conjunto de dos formas distintas, por extencion enumerando sus elementos o por comprencion definiendo cuales son las propiedades que distingen a los elementos del conjunto.

A = { 1, 2, 3 }
A = { x / P(x) }  

### Relaciones entre conjuntos

#### Subconjunto

A ⊆ B

A es un subconjuntos de B, cada elemento de A también esta en B, ambos conjuntos tienen los mismo elementos.

#### Union

A Union B = { x / x ∈ A y x ∈ B }

#### Interseccion

A interseccion B = { x / x ∈ A o x ∈ B }

La interseccion de A y B son todos los elementos que tienen en comun ambos conjuntos.

### Simbolos logicos

Usamos los simbolos para describir relaciones y propiedades, veamos algunas.

#### Igualdad (=)

Dos conjuntos son iguales solo si ambos conjuntos tienen los mismos elementos.

A = B

#### Equivalencia logica (<=>)

Usamos este simbolo para decir que dos expreciones son equivalentes.

A = B <=> A ⊆ B y B ⊆ A

A = B *si, y solo si,* A ⊆ B y B ⊆ A

#### Entonces (=>)

Usamos este simbolo para decir que si una exprecion se cumple entonces otra tambien lo hara.

si A ⊆ B y B ⊆ C => A ⊆ C

si A ⊆ B y B ⊆ C *entonces* A ⊆ C

## Axiomas

Los axiomas invalidan posibles paradojas como la de Bertrand Russell definiendo que es y que no es un conjunto, son como reglas para crear conjuntos y anular paradojas.

* Dos conjuntos son iguales solo si tienen los mismos elementos.

