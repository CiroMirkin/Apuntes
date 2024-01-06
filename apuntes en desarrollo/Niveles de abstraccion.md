# Alto y bajo nivel
00_00_2024

No solo dentro de una aplicación hay diferentes niveles, tambien lo tiene cualquier herramienta o metodologias que usamos al desarrollar. Estos niveles se dividen en dos: alto y bajo, al hablar de código estos deben estar diferenciados y tener una relación equilibrada.

Las partes de alto nivel tienden a ser abstractas, más simples y cercanas al dominio común como el de usuarios o clientes; mientras que las de bajo nivel tienden a ser concretas, más complejas y cercanas al dominio técnico de los programadores o desarrolladores.

La parte del negocio como las historias de usuario, metodologías como BDD, diagramas de contexto de sistema o de secuencia son ejemplos de un alto nivel; mientras que la parte técnica de desarrollo como los frameworks, librerías, metodologías como TDD o pruebas unitarias son ejemplos de un bajo nivel.

Ambas partes siempre existen y se complementan, una envuelve a la otra y de hecho al programar siempre envolvemos código de bajo nivel en descripciones de alto nivel, siempre los nombres dan sentido al código dentro de funciones, clases e incluso variables.

## Equilibrio entre alto y bajo nivel

Las partes de alto nivel tienden a ser descripciones generales y duraderas, mientras que las de bajo nivel tienden a ser implementaciones detalladas y por ende menos duraderas. Como ambas partes se relacionan lo mejor es tratar que los cambios de bajo nivel no afecten a las partes de alto nivel, esto se conoce como *principio de inversión de la dependencia* uno de los principios de SOLID.

Las partes de bajo nivel cambian con más frecuencia a lo largo del tiempo e incluso por cuestiones externas, por ejemplo las librerías pueden actualizarse o incluso quedar obsoletas, por estas cuestiones fuera de nuestro alcance preferimos desacoplar partes de bajo nivel y alto nivel, buscando que cambios de bajo nivel no causen problemas a las partes de alto nivel de una aplicación.

## Arquitecturas limpias

Buscando la separación de asuntos y siguiendo el principio de inversión de la dependencia las arquitecturas limpias separan una aplicación en capas, en la capa central hay código de alto nivel y gradualmente capa por capa el nivel baja. Las capas de alto nivel son cercanas al negocio con entidades y casos de uso, mientras que las capas de más bajo nivel contienen código que comunica a las de alto nivel con los usuarios y/o entidades externas. 