*Autor: Mirkin Ciro* <br>
*Emitido el 25_06_2022*

# Tell don´t ask

No le preguntes por información a un método para luego hacer algo, mejor dile directamente que haga ese algo. No separes la lógica de la información que usa, es un poco lo que viene a decir este principio enfocado en la programación orientada a objetos.

Podríamos pedir la fecha a un método para verificar si ya es fin de semana o directamente pedirle a un método que verifique si ya es fin de semana, segun tell dont ask esta última es la mejor opción, ya que al usar clases y objetos tenemos información (atributos) y acciones (métodos) en un mismo lugar ¿por qué no usar esas 
cualidades?
 
Los métodos realizan acciones con los atributos de sus clases, la lógica y la información que usa en un mismo lugar, pero si moviéramos la lógica fuera de la clase estaríamos usando la clase y sus métodos como si fuera programación funcional, y no lo es, es programación **orientada a objetos**.

> *Tell-Don't-Ask is a principle that helps people remember that object-orientation is about bundling data with the functions that operate on that data. It reminds us that rather than asking an object for data and acting on that data, we should instead tell an object what to do. This encourages to move behavior into an object to go with the data. - Martin Fowler*

## Tell don´t ask y los getters

Los *getters* son un tipo de método que nos permite obtener el valor de una propiedad dentro de una clase, esto rompería un poco con Tell dont ask, ya que estaríamos pidiendo información para luego hacer algo. Este tipo de métodos no son el mal en código, pero aun así es bueno evitarlos o al menos no abusar de ellos.
___

Material relacionado: [Articulo de Martin Fowler sobre Tell don´t ask](https://www.martinfowler.com/bliki/TellDontAsk.html), <a href="https://github.com/vacio-informatico/vacio-informatico.md/blob/main/Programacion%20orientada%20a%20objetos%20(POO-OOP).md">apunte sobre programación orientada a objetos</a>

