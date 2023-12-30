# Análisis orientado a objetos (AOO)
03_07_2023

El análisis orientado a objetos nos ayuda a entender y representar el negocio en forma de objetos, esto es un primer paso donde entendemos y hacemos un boceto de algunos objetos y sus relaciones que después cambiaran cuando se llegue a la fase de diseño y desarrollo, para esto existen varios métodos como las tarjetas CRC o las formas de utilización.

## Tarjetas CRC

Las tarjetas CRC (clases, relaciones y responsabilidades) o también conocidas como "tarjetas de clase" nos ayudan a representar clases y ver sus relaciones, estas tarjetas son una herramienta para entender y representar clases a un alto nivel, esto quiere decir sin detalles.

Una tarjeta tiene tres partes: Primero **el nombre** de la clase, segundo una columna con sus **responsabilidades**, osea todas las acciones que realiza; y por último una columna con las **colaboraciones** que son todas esas clases que ayudan a cumplir las responsabilidades de una clase.

## Formas de utilización

Son una forma de representar un caso de uso donde el sistema se relaciona con *actores* externos como otros sistemas o los usuarios, representamos todo esto mediante un diagrama que nos ayuda, por un lado a entender casos de uso, las acciones que un usuario puede hacer, las historias de usuario o los requisitos, y por otro lado nos permite ver la relación actor/requisito, los puntos de partida y en general como **podría** funcionar una aplicación.

## Antipatrón Blob

Este antipatrón es resultado de una falta de análisis o falta de comprensión del diseño orientado a objetos, también puede ser resultado de la evolución de un prototipo o debido a la falta de una arquitectura. Una clase *Blob* es una clase gigante sobrecargada de responsabilidades, suele contener muchos métodos y atributos, tiene muy poca cohesión, suele ser difícil de reutilizar o testar y en general no aprovecha las ventajas de la programación orientada a objetos.

En este tipo de clases se amontonan responsabilidades, se van sumando poco a poco y poco a poco crece la complejidad.

Divide y vencerás. Organizando y reubicando las tantas responsabilidades de la clase es como se mejora el diseño, para esto hay que refactorizar: Primero creando interfaces concretas para cada responsabilidad identificada, nos podemos guiar por el principio de responsabilidad única. Ya luego de dividir al gigante en trozos, empezamos a crear clases concretas para que poco a poco la clase *blob* deje de existir. Sin embargo cuando el *blob* es demasiado grande lo que se suele hacer es convertirlo en un coordinador que administre los grupos de responsabilidades identificados.

Lo que buscamos es evitar el monopolio de responsabilidades, cumpliendo el principio de responsabilidad única y ganando capacidad de reutilización y cambio. Por último recuerda hacer una migración progresiva para obtener buenos resultados y hacer un seguimiento del código para detectar a tiempo este antipatrón.

///
https://repositorio.grial.eu/bitstream/grial/265/1/ADOO.pdf
https://es.wikipedia.org/wiki/Tarjetas_CRC
Documento "Actividades de Implementación Tarjetas CRC." en: https://studylib.es/doc/119036/3-introducci%C3%B3n-a-las-tarjetas-crc
https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0
https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/diagrama-de-casos-de-uso/
https://sourcemaking.com/antipatterns/the-blob
///