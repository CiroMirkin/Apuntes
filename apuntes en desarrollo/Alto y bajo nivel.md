# Alto y bajo nivel
00_00_2024

Dentro de una aplicación hay diferentes partes de alto y bajo nivel, ambos niveles deben existir, estar diferenciados y tener una relación equilibrada.

Las partes de alto nivel tienden a ser abstractas, más simples y cercanas al dominio comun como el de usuarios o clientes. Mientras que las de bajo nivel tienden a ser concretas, más complejas y cercanas al dominio tecnico de los programadores o desarrolladores.

La parte del negocio como las historias de usuario, metodologias como BDD, diagramas de contexto de sistema o de secuencia son ejemplos de un alto nivel. Mientras que la parte tecnica de desarrollo como los frameworks, librerias, metodologias como TDD o pruevas unitarias son ejemplos de un bajo nivel.

Ambas partes siempre existen y se complementan, una envuelve a la otra y de echo al programar siempre envolvemos código de bajo nivel en descripciones de alto nivel. Siempre los nombre dan sentido al código cuando creamos funciones, clases e incluso variables.

## Equilibrio entre alto y bajo nivel

Las partes de alto nivel tienden a ser descripciones generales y duraderas, mientras que las de bajo nivel tienden a ser implementaciones detalladas y por ende menos duraderas. Como ambas partes se relacionan lo mejor es tratar que los cambios de bajo nivel no afecten a las partes de alto nivel, esto se conoce como *principio de inversión de la dependencia* uno de los principios de SOLID.

Las partes de bajo nivel cambian con más frecuencia a lo largo del tiempo e incluso por cuestiones externas, por ejemplo las librerias pueden actualizarce o incluso quedar obsoletas, por estas cuestiones fuera de nuestro alcanze preferimos desacoplar partes de bajo nivel y alto nivel, buscando que cambios de bajo nivel no causen problemas a las partes de alto nivel de una aplicación. 

## Arquitecturas limpias

Buscando la separación de asuntos y siguiendo el principio de inversión de la dependencia las arquitecturas limpias separan una aplicación en capas, en la capa central hay código de alto nivel y gradualmente capa por capa el nivel baja. Las capas de alto nivel son cercanas al negocio con entidades y casos de uso, mientras que las capas de más bajo nivel contienen código que comunica a las de alto nivel con los usuarios y/o entidades externas. 