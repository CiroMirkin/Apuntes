# Patrón entidad-control-limite
27_08_2023

Este patrón arquitectónico busca desacoplar al dominio de cualquier cosa externo como una API web, bases de datos, componentes de hardware e incluso del entorno en el que se muestra al usuario que podría ser gráfico o de consola. El patrón puede ser usado dentro de arquitecturas limpias como la hexagonal debido al potencial que tiene para separar asuntos externos al dominio.

## Implementación

Este patrón se divide en cuatro clases, cada clase con un rol fundamental.

![Diagrama de relacion de las clases]()

* Actor externo: Un actor externo es cualquier cosa externa al dominio de una aplicación como un framework, base de datos o un componente de hardware.

* Límite: La clase límite es el intermediario entre un actor externo y un caso de uso evitando que actores externos conozcan al dominio y viceversa.

* Control: Las clases de control representan a un caso de uso, solo se comunican con el límite y las entidades evitando que estas últimas conozcan al límite y lo que hay más allá de él.

* Entidad: Las entidades contienen una parte del negocio, gestionan y procesan información fundamental para el mismo. Estas clases solo se comunican con los casos de uso y otras entidades.

/// 
https://www.ratondbiblioteca.com/ebc
https://en.wikipedia.org/wiki/Entity-control-boundary
///
