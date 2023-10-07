# Ortogonalidad
00_10_2023

El principio de ortogonalidad nos recuerda lo importante y los beneficios que tiene la independencia entre los componentes de una aplicación: Facilidad para ejecutar pruebas, diseñar, crear y ampliar tanto una aplicación como sus componentes.

Los componentes o partes de una aplicación son ortogonales cuando no dependen unos de otros, cada parte es autónoma y tiene un objetivo claro, gracias a esto los cambios en un componente no afectan al resto y no solo eso, sino también nos permite reducir el riesgo de que la aplicación colapse. Sí un componente se rompe se puede separar del resto, someterse a pruebas sin depender de otros componentes y al final volverse a integrar al sistema tan fácil como se separó.

¿Más beneficios? Al estar los componentes desacoplados estos pueden reutilizarse y combinarse para obtener mayores resultados, además de esto al tener un objetivo claro y definido los fallos son fáciles de localizar.

Principios como la reducción de duplicaciones (DRY), mantener las cosas simples (KISS), responsabilidad única (la S de SOLID), evitar los estados globales y un bajo acoplamiento y alta cohesión pueden ayudar a crear ortogonalidad en una aplicación.

///

* El libro *"El programador pragmático"* de David Thomas y Andrew Hunt.

///