*Autor: Mirkin Ciro* <br>
*Emitido el 19_02_2022*


# GRASP	

GRASP o los patrón generales de software para la asignación de responsabilidades, más que patrones de diseño son guías que nos ayudan a elegir que patrón usar o una serie de buenas prácticas. GRASP más que nada se orienta a la POO, pero incluso así algunas de sus recomendaciónes pueden ser aplicados a la programación funcional y otros entornos.

Los patrones GRASP tienen ocho recomendaciones que definen las diferentes características que debería tener una clase en su creación e implementación.

<ul>
	<li class="li">Experto en información</li>
	<li class="li">Creador</li>
	<li class="li">Alta cohesión y Acoplamiento bajo</li>
	<li class="li">Controlador o Regulador</li>
	<li class="li">Polimorfismo</li>
	<li class="li">Fabricación pura</li>
	<li class="li">Indireccion</li>
	<li class="li">Variaciones protegidas</li>
</ul>

## Experto en información

La responsabilidad para la creación de un objeto o método la tiene esa clase que tenga **toda** la información para dicha creación, ósea la clase que sea experta en la información del objeto o método que queremos crear.

Lo bueno de este principio es que viene de la mano con SRP (la S de SOLID) ya que cuando una clase crea un objeto o método con su propia información esta clase solo tendría un motivo para cambiar.

	En resumen, una clase crea e implementa los métodos en los que es experta.

## Creador 

Este principio nos ayuda a identificar quien debería ser el responsable de crear un objeto. Lo bueno de este patrón es el bajo acoplamiento, la facilidad de mantenimiento y la reutilización que nos permite aplicar.

Los puntos a tener en cuenta:

* Se tiene toda la información necesaria.
* Usa directamente la instancia creada.
* Almacena o maneja varias instancias.
* Contiene o agrega a la clase.

	En resumen, al crear un objeto piensa en porque y en donde lo estas creando.

## Alta cohesión y bajo acoplamiento

> Cohesión: En programación decimos que una clase tiene cohesión o es coherente, porque todo dentro de ella tiene relación y sentido, no solo en contexto.

> Acoplamiento: En programación el acoplamiento es cuando al hacer un cambio en una clase este cambio afecta a otras clases, clases que muchas veces no deberian tener relación con la clase que modificamos.

Mayor cohesión significa menor acoplamiento porque al estar unidas las cosas que tiene mayor relación las que tiene menor relación no se verán afectadas al hacer cambios.

	En resumen, intenta tener lo que tiene relación cerca para aislar lo que no.

## Controlador

Este patrón sirve de intermediario entre una determinada interfaz y el algoritmo que lo usa, básicamente separar la UI (interfaz gráfica) del dominio o lógica, aunque tambien propone separar los eventos de sus algoritmos. Básicamente lo que podemos ver en MVC, MVVM o MVVMP entre otros modelos.

El funcionamiento del controlador es facil ya que este es el primero en ser llamado luego de un cambio en la interfaz y ejecuta un caso de uso coordinando la relación vista y lógica.

	En resumen, deberíamos separar la vista de su logia, para menor acoplamiento.

## Polimorfismo

Ejemplo de contexto: Registro de <span class="bold">dos tipos diferentes de mensajes</span> que se usan en casos diferentes, un tipo de mensaje para errores y uno para depuracion.

Al tener una funcionalidad que depende de un caso de uso para definir cual de sus variaciones se usara, Tendriamos que crear una interfaz comun de la funcionalidad, crear clases que contengan la funcionalidad y hereden de la interfaz comun. Para ya luego usar las funcionalidades de manera polimorfica. Esto es lo que define el GRASP de polimorfismo.

En este caso creariamos una interfaz comun mensaje y una clase para cada tipo de mensaje que herede de la interfaz comun.

> Polimorfica: Nos referimos a la cualidad de tener varias clases que contienen un metodo con el mismo nombre y finalidad, pero con un desarrolo de su funcionalidad diferente.

	En resumen, al tener una funcionalidad que tenga variaciones segun su caso de uso,
	hay que separarla y usarla mediante polimorfismo. 

## Fabricacion pura

La fabricación pura es una clase que solo existe porque mejora la estructura del sistema, la cohesión o la reutilización del código.

El problema que rodea a este principio al abusar de él, es que suelen aparecer clases función o clases que contienen un solo método.

	En resumen, crea clases para mejorar la estructura del código.

## Indirección

Este principio nos propone bajar el acoplamiento entre dos clases asignando la responsabilidad de la mediación a una tercer clase con ese único fin.

	En resumen, crear una clase intermediario para menor acoplamiento entre clases.

## Variaciones protegidas

Protegerse del cambio antes de que suceda es lo que propone este principio, básicamente todo lo que veamos o creamos que puede cambiar en un futuro lo metemos en una interfaz y luego lo implementamos mediante herencia/polimorfismo.

	En resumen, separar del resto lo que pueda cambiar en un futuro.


<!-- <div class="line"></div> -->
---

Visite varias fuentes para corroborar este apunte, pero los más usados fueron estos: el artículo escrito por <a href="">Roberto Canales Mora</a> y los artículos escritos por <a href="">Juan García Carmona</a>, lo interesante de estos últimos es que contiene varios ejemplos en código sobre lo que incumple o no estos principios.
