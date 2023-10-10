# Evita la herencia
00_00_2023

Dentro de la programción orientada a objetos la herencia sucede cuando una clase optiene todo el contenido de otra clase la cual podriamos llamar clase padre, madre, super, supra o clase base, el nombre no importa, hay dos clases y una hereda el contenido de otra.

	Rara vez usar herencia es buena idea, mira las anternativas.

## Complejidad y acoplamiento innecesario

> La clase *Auto* hereda de la clase *Vehiculo*.

Ahora, la clase *Auto* esta fuertemente acoplada a la clase *Vehiculo*, cualquier cambio en esta clase tendrá repercuciones en *Auto* y en las demas clases que hereden de *Vehiculo* como una clase *Tren* o *Camion*.

> La clase *AutoDeCarrera* hereda de la clase *Auto* que hereda de la clase *Vehiculo*.

Así empezamos a crear una jerarquia de clases, el código es cada vez es más complejo y más dificil de cambiar.

> La clase *FormulaUno* hereda de la clase *AutoDeCarrera* que hereda de la clase *Auto* que hereda de la clase *Vehiculo*.

Dentro de una aplicación estas estructuras pueden crecer de maneras absurdas dificultando cada vez más el cambio y volviendose cada vez más fragiles, modificar la clase *Vehiculo* o *Auto* podría hacer colapsar la aplicación.

Un último contra: La herencia rompe la encapsulación de la clase madre.

## Favorece la composición sobre la herencia

Cambia *es* :

> Un auto **es** un vehiculo.

> Un auto de carrera **es** un auto que **es** un vehiculo.

Por *tiene* :

> Un auto **tiene** un motor.

> Un auto de carrera **tiene** un motor potente.

Con este cambio de enfoque ganamos capasidad de cambio, el código puede crecer de una forma mas limpia e incluso permtir reutilizar el código. Todo esto cambiando el tipo de relación, pasamos de una herencia a una asociación, especificamente composición o agregación.

## Usa interfaces

Crear interfaces para reprecentar los comportamientos que tiene una clase tambien es mejor que la herencia. Con las interfaces ganamos desacoplamiento, capasidad de cambio, crecimiento, reutilización y seguridad.

Las interfaces definen que métodos y atributos debe tener la clase que las implemente, todas las clases que implementen la misma interfaz tendrán los mismos métodos y atributos, puede que internamente estos no funcionen de la misma manera, pero se llamaran igual y recibiran y devolveran el mismo tipo de información.

Existen otras alternativas ademas de las interfaces como la delegación o los mixins que también son mejores que la herencia.

///

* El libro *"Sumérgete en los patrones de diseño"* de Alexander Shvets - https://refactoring.guru/
* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.

///