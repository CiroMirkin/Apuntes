# Alto y bajo nivel
00_00_2024

Dentro de una aplicación hay diferentes partes de alto y bajo nivel, ambos niveles deben existir y tener una relacion equilibrada.

Las partes de alto nivel tienden a ser abstractas, más simples y cercanas al dominio comun como el de usuarios o clientes; Mientras que las de bajo nivel tienden a ser concretas, más complejas y cercanas a lo tecnico del dominio de los programadores.

La parte del negocio, las historias de usuario, metodologias como BDD, diagramas de contexto de sistema o de secuencia son ejemplos de cosas a un alto nivel; Mientras que los frameworks, librerias, metodologias como TDD o pruevas unitarias son ejemplos de cosas a un bajo nivel.

Las partes de alto nivel tienden a ser descripciones generales, mientras que las de bajo nivel tienden a ser implementaciones detalladas.

## Equilibrio en alto y bajo nivel

Ambas partes siempre existen y se complementan, una envuelve a la otra.

Mientras programamos envolvemos código de bajo nivel en nombres de alto nivel. Lo hacemos al programar funciones, clases e incluso al crear variables. Los nombres son descripciones de alto nivel que dan sentido al código.

Al crear un arquitectura limpia a medida que nos alejamos del nucleo de alto nivel las capas son de mas bajo nivel, partimos de las reglas de negocio hasta llegar a los frameworks.

Ambas partes existen, tienen que estar definidas y deben relacionarce siempre tratando de los cambios de bajo nivel no afecten a las partes de alto nivel, esto es el principio de inversión de la dependencia.
