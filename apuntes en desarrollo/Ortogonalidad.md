# Ortogonalidad
00_10_2023

El pricipio de ortogonalidad nos recuerda lo importante y los beneficios que trae la independencia entre los componentes de una aplicación: Fasilidad para ejecutar pruevas, diseñar, crear y ampliar tanto a una aplicación como a sus componentes.

Los componentes o partes de una aplicación son ortogonales cuando no dependen unos de otros, cada parte es autonoma y tiene un objetivo claro, gracias a esto los cambios en un componente no afectan al resto y no solo eso, sino también nos permite reducir el riesgo de que la aplicación colapse. Sí un componente se rompe se puede separar del resto, someterce a pruevas sin depender de otros componentes y al final volverce a integrar al sistema tan facil como se separo.

¿Más beneficios? Al estar los componentes desacoplados estos pueden reutilisarce y combinarce para obtener meyores resultados, además de esto al tener un objetivo claro y definido los fallos son faciles de localisar.

Principios como la reducción de duplicaciones (DRY), mantener las cosas simples (KISS), responsabilidad unica (la S de SOLID), evitar los estádos globales y un bajo acoplamiento y alta cohesión pueden ayudar a crear ortogonalidad en una aplicación.

///

* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.

///