v a c i o - i n f o r m a t i c o
====
*Autor: Mirkin Ciro* <br>
*Emitido el 31_08_2022*

# La ley de demeter

La ley de demeter es una recomendación, mientras menos sepa una una clase sobre el exterior mejor sera, entonces para lograr esto, un método deberia relacionarce con:

* Otros métodos de la clase.
* Un objetos que haya creado.
* Un objeto pasado como argumento.
* Un objeto que esta como atributo de la clase.

Un método **no** puede relaciónarce directamente con nada externo a la clase. Generalmente se dice que un método no deberia relacionarce con algo que existio antes de la clase, aunque esto solo es otra forma de decir, *no relaciones a tu clase directamente con el exterior*.

Deja de usar *getters*, ya que cuentan como una relación directa con el exterior.

	En resumen, no relaciónemos una clase directamente con lo exterior a esta, dejemos 
	que el exterior se relacione con la clase. 

Esta recomendación, minimiza el acoplamiento entre clases y/o objetos, y esto porque desfavorece la relacion directa con lo externo, pero recuerda que es una recomendación y a veces es mejor no seguirla.

## La sugestion de demeter

Ser muy rigurosos con esta ley puede llevar a que terminemos con metodos que solo sirven de intermediario entre objetos, es por esto que Martin Fowler llamo a esta ley *la sugestion de demeter*.

___
