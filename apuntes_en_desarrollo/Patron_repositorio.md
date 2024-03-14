# Patrón repositorio
00_00_2024

Este patrón de diseño nos permite desacoplar el dominio del almacenamiento de información.

Al usar este patrón creamos un "repositorio" por cada entidad que necesita guardar información, este "repositorio" va a contener operaciones basicas como crear, buscar o eliminar.

Hay diversas convenciones que varian según el equipo y pueden ayudar que el codigo de un proyecto sea mas comprensible.

## Creación de un repositorio

Para implementar este patrón primero creamos un interfaz que defina como son los métodos del repositorio:

< I > UserRepository

Y luego creamos la implementación:

MongodbUserRepository ( )

Hay que remarcar que la interfaz no se llama *MongodbUserRepository* sino *UserRepository*, es importante que el nombre de la base de datos este en la implementacion y no en la interfaz.

Esta implementacion generalmente se usaria dentro de la clase *User*, la cual recibiria esta repositorio por medio de su constructor y asignandolo a un atributo comunmente llamado *repository*.

No siempre, pero hay veces que este patrón se complementa con patrones como *Criteria* o *Unit of Work* [Unidad de trabajo].

## Beneficios

1. Nos permite separar conceptos y responsabilidades.

2. Nos permite abstraer y encapsular la fuente información.

3. Facilita migraciones, cambios o actualizacion de la fuente de datos.

4. Nos permite tener varias fuentes de datos.

5. Facilita el testing al crear una separación entre el dominio y base de datos.

## Repositorio vs DAO

El patrón *DAO* [Data Acces Object] es estructuralmente muy parecido al patrón repositorio, sin embargo, al usar un DAO en vez de un repositorio dejamos de tener una estructura centrada en el dominio.
