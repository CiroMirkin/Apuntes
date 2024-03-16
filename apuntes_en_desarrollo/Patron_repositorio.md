# Patrón repositorio
00_00_2024

Este patrón nos permite desacoplar el dominio del almacenamiento de información, dicho de otra forma, este patrón nos permite separar el dominio y la base de datos.

Al usar este patrón creamos un *"repositorio"* por cada entidad que necesita guardar información, este *"repositorio"* va a contener las operaciones basicas como crear, buscar o eliminar.

La implementación y uso de este patrón puede tener variaciones en algunos aspectos según el equipo de programadores y el proyecto, estas convenciones pueden ayudar a que el código sea más complensible.

## Creación de un repositorio

Basicamente para implementar este patrón primero creamos una interfaz que defina como son los métodos del repositorio:

< I > UserRepository

Y luego creamos la implementación:

MongodbUserRepository ( )

Hay que remarcar que **la interfaz no se llama** *MongodbUserRepository* sino *UserRepository*, es importante que el nombre de la base de datos este en la implementacion y no en la interfaz.

Esta implementacion generalmente se usaria dentro de la clase *User*, la cual recibiria este repositorio por medio de su constructor asignandolo a un atributo llamado *repository*.

No siempre, pero hay veces que este patrón se complementa con patrones como *Criteria* o *Unit of Work* [Unidad de trabajo].

## Beneficios

1. Nos permite separar conceptos y responsabilidades.

2. Facilita el testing gracias a la separación entre el dominio y base de datos.

3. Nos permite abstraer y encapsular la fuente información.

4. Facilita migraciones, cambios o actualizaciones con poco costo.

5. Nos permite tener varias fuentes de datos.

## Repositorio vs DAO

El patrón *DAO* [Data Acces Object] es estructuralmente muy parecido al patrón repositorio, sin embargo, al usar un DAO en vez de un repositorio dejamos de tener una estructura centrada en el dominio.
