# Teoría de conjuntos
00_00_2024

Los conjutos contien elementos, son una agrupación de elementos que tienen algo en comun. Tanto conjuntos como elementos son abstracctos, no sabemos exactamente que son, lo que importa no es que son sino sus propiedades.

La teoría de conjuntos es parte de las metematicas y tiene su propio objeto de estudio, los conjuntos. Esta teoría se relaciona con el resto de teorías y conceptos de las matematicas y de echo estos pueden expresarce usando conjuntos.

Dentro de la programación la teoria de conjuntos nos puede ayudar a majorar nuestra logica, entender problemas o nuevos conceptos. Ademas los conjuntos también son estructuras de datos y se usan en algunas áreas de la informatica.

## Lenguaje de conjuntos

El lenguaje de la teoría de conjuntos consta de en varios signos con su equivalente en lenguaje natural (en este caso el español), este lenguaje nos permite hacer razonamientos logicos como el siguiente:

	A = B ^ B = C -> A = Ces igual a B, a su vez B es igual a C, entonces A es igual a C.

Dentro de todos los simbolos el más importante es el de *pertenencia* reprecentado por el signo ∈.

	x ∈ A
	x pertenece al conjunto A

Si bien con este simbolo podriamos demostrar y afirmar cualquier cosa, al aumentar la complejidad se volveria tedioso y es por eso que hay más simbolos.

![Tabla de simbolos logicos usados en la teoría de conjuntos]()
![Tabla de simbolos usados para expresar conjuntos]()

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

