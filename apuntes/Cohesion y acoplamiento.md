# Cohesión y acoplamiento
(Ciro Mirkin) 22_01_2023

Depender es necesitar, si yo dependo de algo para trabajar no puedo trabajar si ese algo, porque lo necesito para trabajar.

La dependencia es algo que siempre esta presente cuando programamos, y esta no es de buena ni mala, se vuelve mala cuando no sabemos manipularla.

Acoplamiento, el acoplamiento se produce cuando hay una dependencia entre dos o más partes y la cohesión se produce cuando estas partes que dependen unas de otras están cerca. Cuando hablamos de partes que dependen y están cerca no solo hablamos de método o funciones sino también de variables y constantes.

Un alto nivel de cohesión no solo ayuda a que el código sea más sostenible, sino que también ayuda a su legibilidad y comprensión. Si una función A depende de una función B ¿Abría un alto nivel de cohesión si estuviesen en archivos separados? La respuesta es: no, lo mejor seria que estuvieran una debajo de la otra. Lo mismo pasa con las variables para una mejor cohesión deberían estar los más cerca posible de donde se empiezan a usar.

En un mundo feliz las clases no estarían acopladas entre sí, sino más bien trabajarían juntas. Obvio hay casos en que es necesario que una clase esté acoplada a otra, pero generalmente lo mejor es que no, para lograr esto se podrían seguir recomendaciones como *la ley de Demeter* o *tell dont ask* que ayudan a aumentar la cohesión de las clases.

## Tipos de cohesión

Existen tipos de cohesión pero como no son realmente importantes estas clasificaciones solo seran nombradas: cohesión coincidente, cohesión logica, cohesión temporal, cohesión de procedimiento, cohesión de comunicación, cohesión de información y cohesión funcional.
___
Material usado de referencia: El libro código sostenible de Carlos Blé Jurado.