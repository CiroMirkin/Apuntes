# La ley de demeter
31_08_2022

La ley de demeter es una recomendación, mientras menos sepa una clase sobre el exterior mejor será, entonces para lograr esto, un método debería relacionarse con:

* Otros métodos de la clase.
* Un objetos que haya creado.
* Un objeto pasado como argumento.
* Un objeto que esta como atributo de la clase.

Un método **no** puede relacionarse directamente con nada externo a la clase. Generalmente se dice que un método no debería relacionarse con algo que existió antes que instancia de la clase, aunque esto solo es otra forma de decir, *no relaciones a tu clase directamente con el exterior*.

Deja de usar *getters*, ya que cuentan como una relación directa con el exterior.

	En resumen, no relacionemos una clase directamente con lo exterior a esta, dejemos que 
	el exterior se relacione con la clase.

Esta recomendación minimiza el acoplamiento entre clases, y esto porque desfavorece la relación directa con lo externo, pero recuerda que es una recomendación y a veces es mejor no seguirla.
## La sugestión de demeter

Ser muy rigurosos con esta ley puede llevar a que terminemos con métodos que solo sirven de intermediario entre objetos, es por esto que Martin Fowler llamo a esta ley *la sugestión de demeter*.
