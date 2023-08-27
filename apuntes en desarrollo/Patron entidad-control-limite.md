# Patrón entidad-control-limite
00_08_2023

Este patrón arquitectonico busca desacoplar al dominio de cualquier cosa externo como APIs web, bases de datos, componertes de hardware e incluso del entorno en el que se muestra al usuario que podria ser grafico o de consola. El patrón puede ser usado dentro de arquitecturas limpias como la hexagonal debido al potencial que tiene para separar asuntos externos al dominio.

## Implementación

Este patrón se divide en cuatro clases, cada clase con un rol fundamental.

![Diagrama de relacion de las clases]()

* Actor externo: Un actor externo es cualquier cosa externa al dominio de una aplicación como un framework, base de datos o un componente de hardware.

* Limite: La clase limite es el intermediario entre un actor externo y un caso de uso, evitando que actores externos conoscan al dominio y viceversa.

* Control: Las clases de control reprecentan a un caso de uso, solo se comunican con el limite y las entidades evitando que estas ultimas conoscan al limite y lo que hay mas allá de el.

* Entidad: Las entidades contienen una parte del negocio, gestionan y procesan información fundamental para el mismo. Estas clases que se comunican con los casos de uso y con otras entidades.
