# Alto y bajo nivel
00_00_2024

Dentro de una aplicación hay diferentes partes de alto y bajo nivel, ambos niveles deben existir, estar diferenciados y tener una relación equilibrada.

Las partes de alto nivel tienden a ser abstractas, más simples y cercanas al dominio comun como el de usuarios o clientes; Mientras que las de bajo nivel tienden a ser concretas, más complejas y cercanas al dominio tecnico de los programadores.

La parte del negocio como las historias de usuario, metodologias como BDD, diagramas de contexto de sistema o de secuencia son ejemplos de un alto nivel; Mientras que la parte tecnica de desarrollo como los frameworks, librerias, metodologias como TDD o pruevas unitarias son ejemplos de un bajo nivel.

Ambas partes siempre existen y se complementan, una envuelve a la otra y de echo al programar siempre envolvemos código de bajo nivel en descripciones de alto nivel. Los nombre dan sentido al código cuando creamos funciones, clases e incluso variables.

## Equilibrio entre alto y bajo nivel

Las partes de alto nivel tienden a ser descripciones generales y duraderas, mientras que las de bajo nivel tienden a ser implementaciones detalladas y por ende menos duraderas. Ambas partes tienen que estar definidas y relacionarce tratando de los cambios de bajo nivel no afecten a las partes de alto nivel, esto se conoce como el principio de inversión de la dependencia.

Las partes de bajo nivel cambian con más frecuencia a lo largo del tiempo e incluso por cuestiones externas, por ejemplo las librerias o base de datos pueden actualizarce o incluso quedar obsoletas, es por estas cuestiones fuera de nuestro alcanze que preferimos separar las partes de bajo nivel y alto nivel buscando que los cambios de bajo nivel afecten lo menos posible a las partes de alto nivel dentro de la aplicación. 

## Arquitecturas limpias

Buscando la separación de asuntos y siguiendo el principio de inversión de la dependencia las arquitecturas limpias separan una aplicacion en capas, en la capa centras hay código de alto nivel y gradualmente el nivel baja capa a capa. Las capas de alto nivel son cercanas al negocio con entidades y casos de uso, mientras que las capas de bajo nivel contienen código que comunica a las capas de alto nivel con los usuarios y/o entidades externas. 