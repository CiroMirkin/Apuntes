# Estado y su gestion
06_04_2023 C.Mirkin

## Que es un estado
Los estados son los datos o información que una aplicación guarda en memoria, estos podrían ser variables o cualquier estructura de datos que nos permita **guardar y modificar** información información como los arreglos.

## Gestion del estado
Si hablamos de variables como estados, todo código que asigne un valor a una variable esta gestionando un estado. Gestionar estados es difícil, en primer lugar ayuda declarar las variables lo más cerca posible de donde son usadas, lo cual nos lleva a evitar los *estados globales*. En segundo lugar deberías tener cuidado con algunas cosas como la refactorización de este tipo de códigos o las estructuras de datos complejas que pueden tener objetos anidados. Por último hay algunas buenas prácticas que puedes aplicar como el patrón CQS, TDD, usar atributos privados o saber sobre complejidad ciclomatica.

## Problemas con los estados globales
Los estados globales como su nombre nos deja ver pueden ser usados por **cualquiera desde cualquier lugar** dentro de una aplicación e incluso desde fuera. 

Una aplicación está formada por muchos componentes como clases o funciones, estos componentes usan y modifican a los estados globales. Entonces mientras más grande sea una aplicación más difícil se hace identificar a estos componentes, y esto nos lleva a un aumento en la complejidad de la aplicación y notar que se vuelven impredecible porque cualquiera puede modificarlos, por ejemplo: En uno de estos estados guardas el número tres y cuando vas a usarlo el tres ya no esta porque otro componente lo modifico ¿qué sucede en este caso?, un error y la aplicación se traba.

Otros problemas que ya dependen del lenguaje de programación pueden ser: la contaminación del espacio de nombres y una posible colisión en las asignaciones en memoria.

Los estados globales no son buenos o malos, simplemente muchas veces se usan mal, por eso su uso **es** una decisión importante que no se debería tomarse solo. Igualmente al elegir no usarlos, hay que **elegir bien** la alternativa porque **ninguna es un comodín mágico**, elige una alternativa conociendo tanto la aplicación y su contexto como las alternativas.

/// 
El libro código sostenible de Carlos Blé Jurado.
Hilo de Stackoverflow: https://es.stackoverflow.com/questions/29177/por-qu%C3%A9-es-considerado-una-mala-pr%C3%A1ctica-utilizar-variables-globales
///
