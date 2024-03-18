# Patrón repositorio
17_03_2024

Este patrón nos permite desacoplar el dominio y la fuente de información, dicho de otra forma, este patrón nos permite separar el dominio y la base de datos. De esta forma es el repositorio quien se conecta con la base de datos y conoce todos sus detalles, mientras que el dominio permanece ajeno a estos. 

La implementación y uso de este patrón puede tener variaciones en algunos aspectos según el equipo.

## Creación de un repositorio

Al usar este patrón creamos un *"repositorio"* por cada entidad que necesita guardar información, este *"repositorio"* puede contener las operaciones básicas como crear, buscar o eliminar.

En este caso las entidades son *Value objects* [Objectos valor], pero no es necesario que lo sean para que podamos usar este patrón.

Primero creamos una interfaz que defina como son los métodos del repositorio.

Interfaz de ejemplo: < I > UserRepository

Como se ve en el ejemplo esta interfaz **no se llama** *MongodbUserRepository* sino *UserRepository*, es importante que el nombre de la base de datos este en la implementación y no en la interfaz, porque la interfaz es abstracta y la implementación es concreta.

Por último creamos la implementación del repositorio.

Implementación de ejemplo: MongodbUserRepository ( )

Esta implementación generalmente se usaría dentro de la clase *User*, la cual recibiría este repositorio por medio de su constructor asignándolo a un atributo llamado *repository*.

No siempre es necesario, pero hay veces que este patrón se complementa con patrones como *Criteria* o *Unit of Work* [Unidad de trabajo].

## Beneficios

1. Nos permite separar conceptos y responsabilidades.

2. Facilita el testing gracias a la separación entre el dominio y base de datos.

3. Nos permite abstraer y encapsular la fuente información.

4. Facilita migraciones, cambios o actualizaciones con poco costo.

5. Nos permite tener varias fuentes de datos.

## Repositorio vs DAO

El patrón *DAO* [Data Access Object] es estructuralmente muy parecido al patrón repositorio, sin embargo, los repositorios están más centrados en el dominio, por esto, mas que un cambio estructural es uno conceptual.

///
https://youtu.be/Kn__eJmr2J8?si=KT3jPt_Y8iZW7U1Q
https://youtu.be/QqsH0OgqafA?si=BT3tRkBzz3hUoAyH
https://martinfowler.com/eaaCatalog/repository.html
https://platzi.com/blog/patron-repository
https://dev.to/ingeniela/patron-de-diseno-repositorio-explicacion-completa-y-simple-622
https://medium.com/@zerodata.aolink/desafiando-la-complejidad-c%C3%B3mo-el-patr%C3%B3n-criteria-resuelve-la-explosi%C3%B3n-de-m%C3%A9todos-de-nuestro-60ece5829f89
///