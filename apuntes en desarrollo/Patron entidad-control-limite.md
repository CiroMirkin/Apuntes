# Patron entidad-control-limite
00_00_2023

Este patrón arquitectonico busca desacoplar al dominio de cualquier actor externo como APIs web, bases de datos, componertes de hardware como procesadores e incluso el entorno en el que se muestra al usuario que podria ser grafico o de consola. 

## Implementación

Este patrón se divide en cuatro clases, cada clase solo se relaciona con su clase superior e inferior.

![Diagrama de relacion de las clases]()

* Actor externo: Los actores externos son cualquier cosa externa al dominio de una aplicación como un framework, base de datos o componente de hardware.

* Limite: Las clases limite son el intermediario entre un actor externo y un caso de uso, evitan que los actores externos conoscan el dominio y viceversa.

* Control: Las clases de control reprecentan a un caso de uso, se comunican con las entidades y con el limite.

* Entidad: Las entidades contienen una parte del negocio, gestionan y procesan información fundamental para el mismo. Estas clases se comunican con los casos de uso y con otras entidades.
