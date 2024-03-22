# Evita la herencia
10_10_2023

Dentro de la programación orientada a objetos la herencia sucede cuando una clase obtiene todo el contenido de otra clase la cual podríamos llamar clase padre, madre, super o clase base, el nombre no importa, hay dos clases y una hereda el contenido de otra.

	Rara vez usar herencia es buena idea, mira alternativas.

## Complejidad y acoplamiento innecesario

> La clase *Auto* hereda de la clase *Vehículo*.

Ahora, la clase *Auto* esta fuertemente acoplada a la clase *Vehículo*, cualquier cambio en esta clase tendrá repercusiones en *Auto* y en las demás clases que hereden de *Vehículo* como una clase *Tren* o *Camión*.

> La clase *AutoDeCarrera* hereda de la clase *Auto* que hereda de la clase *Vehículo*.

Así empezamos a crear una jerarquía de clases y el código es cada vez es más complejo y más difícil de cambiar.

> La clase *FormulaUno* hereda de la clase *AutoDeCarrera* que hereda de la clase *Auto* que hereda de la clase *Vehículo*.

Dentro de una aplicación estas estructuras pueden crecer de maneras absurdas dificultando cada vez más el cambio y volviéndose cada vez más frágiles. Modificar la clase *Vehículo* o *Auto* podría hacer colapsar la aplicación.

Un último contra: La herencia rompe el encapsulamiento de la clase madre.

## Favorece la composición sobre la herencia

Cambia *es* :

> Un auto **es** un vehículo.

> Un auto de carrera **es** un auto y un auto **es** un vehículo.

Por *tiene* :

> Un auto **tiene** un motor.

> Un auto de carrera **tiene** un motor potente.

Con este cambio de enfoque ganamos capacidad de cambio, el código puede crecer de una forma más limpia e incluso permitimos reutilizar el código. Todo esto cambiando el tipo de relación, pasando de una herencia a una asociación, específicamente a una composición o agregación.

## Usa interfaces

Crear interfaces para representar los comportamientos que tiene una clase también es mejor que la herencia. Con las interfaces ganamos desacoplamiento, capacidad de cambio, crecimiento, reutilización y seguridad.

Las interfaces definen que métodos y atributos debe tener la clase que las implemente, por ende todas las clases que implementen una misma interfaz tendrán los mismos métodos y atributos, puede que internamente estos no funcionen de la misma manera, pero se llamaran igual y recibirán y devolverán el mismo tipo de información.

Existen otras alternativas además de las interfaces como la delegación o los mixins que generalmente también son mejores que la herencia.

///
El libro *"Sumérgete en los patrones de diseño"* de Alexander Shvets: https://refactoring.guru/
El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.
///