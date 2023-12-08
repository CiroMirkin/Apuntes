# GRASP	
19_02_2022

Los ocho patrones generales de software para la asignación de responsabilidades ayudan a la creación e implementación de una clase, aunque todo esto se centre en las clases y los objetos algunas de las recomendaciones también pueden ser aplicadas a otros entornos como la programación funcional.

## Experto en información

La responsabilidad para la creación de un objeto la tiene esa clase que tenga **toda** la información para dicha creación, ósea la clase que sea experta en la información del objeto o método que queremos crear.

Lo bueno de este principio es que viene de la mano con SRP (la S de SOLID) ya que cuando una clase crea un objeto o método con su propia información esta clase solo tendría un motivo para cambiar.

	También puede aplicarse al uso de métodos o funciones.

## Creador 

Este principio nos ayuda a identificar quien debería ser el responsable de crear un objeto. Lo bueno de este patrón es el bajo acoplamiento, la facilidad de mantenimiento y la reutilización que nos permite aplicar.

Puntos a tener en cuenta:

* Se tiene toda la información necesaria.
* Se usa directamente la instancia creada.
* Se almacenan o manejan varias instancias.
* Contiene o agrega a la clase.

	Piensa en donde y porque creeas las cosas.

## Alta cohesión y bajo acoplamiento

> Cohesión: En programación decimos que una clase tiene cohesión, porque todo dentro de ella tiene relación y sentido, no solo en contexto.

> Acoplamiento: En programación el acoplamiento es cuando al hacer un cambio en una clase este cambio afecta a otras clases, clases que muchas veces no deberian tener relación con la clase que modificamos.

Mayor cohesión significa menor acoplamiento porque al estar unidas las cosas que tiene mayor relación las de menor relación no se verán afectadas al hacer cambios.

## Controlador

Este patrón sirve de intermediario entre una determinada interfaz y el algoritmo que lo usa, básicamente separar la UI (interfaz gráfica) del dominio o lógica, aunque tambien propone separar los eventos de sus algoritmos.

El funcionamiento del controlador es facil ya que este es el primero en ser llamado luego de un cambio en la interfaz y ejecuta un caso de uso coordinando la relación vista/lógica.

## Polimorfismo

El GRASP de polimorfismo se aplica al tener una funcionalidad que se desarrolla o tiene varias formas, por ejemplo: Un mensaje, podría existir un mensaje de error y uno de depuración, en estos casos ambas funcionalidades deberían estar en clases distintas, pero implementando la misma interfaz que define como es un mensaje.

## Fabricacion pura

La fabricación pura es crear clases solo para mejorar la estructura del sistema, la cohesión o la reutilización del código. El problema al abusar de esto es que suelen aparecer *clases función* (clases que contienen un solo método).

## Indirección

Este principio nos propone bajar el acoplamiento entre dos clases asignando la responsabilidad de la mediación a una tercer clase con ese único fin.

## Variaciones protegidas

Protegerse del cambio antes de que suceda es lo que propone este principio, básicamente todo lo que veamos o creamos que puede cambiar en un futuro lo metemos en una interfaz y luego lo implementamos mediante herencia/polimorfismo.

Este patrón puede ser contraproducente e incluso una mala practica si se usa descuidadamente, ya que podriamos perder tiempo o complejisar sin motivo el código, para evaluar esto podrían servir principio como YANGI o KISS.

///
Artículos escritos por Juan García Carmona empezando por este: https://juan-garcia-carmona.blogspot.com/2012/09/patrones-generales-de-asignacion-de.html
///