# Análisis orientado a objetos (AOO)
03_07_2023

El análisis orientado a objetos nos ayuda a entender y representar el negocio en forma de objetos, este análisis es un primer paso donde entendemos y hacemos un boceto de algunos objetos junto con sus relaciones las cuales después cambiaran al llegar a la fase de diseño y desarrollo.

## Tarjetas CRC

Las tarjetas CRC (clases, relaciones y responsabilidades) o también conocidas como _"tarjetas de clase"_ nos ayudan a representar clases y ver sus relaciones. Estas tarjetas son una herramienta para entender y representar clases a un alto nivel, esto quiere decir sin detalles.

Una tarjeta tiene tres partes: Primero **el nombre** de la clase, segundo una columna con sus **responsabilidades**, todas las acciones que realiza; y por último una columna con las **colaboraciones** que son todas las clases que ayudan a cumplir las responsabilidades de la clase.

## Formas de utilización

Son una forma de representar un caso de uso donde el sistema se relaciona con *actores* externos como otros sistemas o los usuarios. Mediante un diagrama representamos y comprendemos los casos de uso, las acciones que un usuario puede realizar; las historias de usuario o requisitos del sistema; y también nos permite ver la relación entre los actor y los requisitos, los puntos de partida y como **podría** funcionar una aplicación.

## Antipatrón Blob

Este antipatrón es el resultado de una falta de análisis, falta de comprensión, falta de diseño orientado a objetos o el resultado de la evolución de un prototipo. Una clase *Blob* es una clase gigante sobrecargada de responsabilidades que suele contener muchos métodos y atributos, tiene muy poca cohesión, es difícil de reutilizar, es difícil de testar y no aprovecha las ventajas de la programación orientada a objetos. En este tipo de clases amontona responsabilidades, las cuales se suman poco a poco y es asi como poco a poco también crece la complejidad.

### Divide y vencerás

Organizando y reubicando las tantas responsabilidades de la clase es como se mejora el diseño, para esto hay que refactorizar: Primero creando interfaces concretas para cada responsabilidad identificada guiándonos por el principio de responsabilidad única, luego comenzamos a crear clases concretas para que poco a poco la clase *blob* deje de existir. Lo que buscamos al refactorizar es evitar el monopolio de responsabilidades y obtener capacidad de reutilización y cambio.

> Cuando el *blob* es demasiado grande lo que se suele hacer es convertirlo en un coordinador que administre los grupos de responsabilidades identificados.

///
https://repositorio.grial.eu/bitstream/grial/265/1/ADOO.pdf
https://es.wikipedia.org/wiki/Tarjetas_CRC
Documento "Actividades de Implementación Tarjetas CRC." en: https://studylib.es/doc/119036/3-introducci%C3%B3n-a-las-tarjetas-crc
https://medium.com/@marcosrrg9813/tarjetas-crc-clase-responsabilidad-colaborador-81924cec3af0
https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/diagrama-de-casos-de-uso/
https://sourcemaking.com/antipatterns/the-blob
///