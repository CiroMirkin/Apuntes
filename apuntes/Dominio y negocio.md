# Dominio y negocio
(C.Mirkin) 04_03_2023

El dominio y el negocio son dos partes muy importantes dentro de una aplicación y su desarrollo. Cuando hablamos de **dominio** hablamos sobre todo de lo relacionado a la **industria y/o entorno** donde se usa una aplicación y cuando hablamos de **negocio** hablamos más de lo relacionado con **el cliente y lo que quiere** (funcionalidades y características que pide).

Si desarrollamos una aplicación para una panadería deberíamos conocer todas las operaciones dentro de la panadería que involucran a la aplicación, conocer esas acciones del día a día en la panadería en las que ayudara o estará involucrada nuestra aplicación **es importante**

Desarrollamos al "negocio" teniendo en cuenta el "dominio" del mismo, pero sobre todo es importante conocer y entender ambos. 

## Domino y negocio dentro de una aplicación

Al crear una aplicación desarrollamos de diferentes formas el domino y negocio del mismo.

### Reglas de negocio

Las reglas de negocio son todas esas acciones dentro del dominio y negocio que generar o ahorran dinero al cliente, teniendo esto en cuenta, si entro a una panadería y pido dos medialunas más un pan el cajero tendrá que sumar el precio de las medialunas más el del pan y cobrarme, esa acción que realiza la cajera es una regla de negocio. 

Las reglas de negocio son acciones que siempre se realizan, el cajero siempre va a calcular el monto a cobrar, ya sea manualmente, con una máquina registradora, calculadora o aplicación, sin importar el medio es una acción que siempre hará. Por último, si no lo has notado, las reglas de negocio suelen necesitar información.

### Entidades

Una entidad es una clase o módulo de alto nivel que contiene una o varias reglas de negocio más la información que necesiten la cual podría recibirla por parámetros o de alguna otra forma. 

Las entidades son solo lógica e información, no dependen de interfaces gráficas o bases de datos, ya que representan una parte del negocio.

### Casos de uso

No siempre van a existir reglas de negocio tan puras como para formar una entidad y van a tener que relacionarse con interfaces gráficas, ahí es donde entrar los casos de uso, acciones que solo tienen sentido dentro de una aplicación porque describen el modo en que se usa la aplicación, además de esto, los casos de uso son un intermediario entre el usuario y las entidades, los casos de uso describen como y cuando el usuario usa a las entidades.

### Componentes

Entender el dominio y negocio nos ayudará a organizar y crear los diferentes componentes irán conformando a una aplicación junto con los principios de cohesión y acoplamiento para componentes.

///
Un capitulo del libro *"código sostenible"* de *Carlos Blé Jurado*.
El libro *"Arquitectura limpia"* de *Robert C.Martin*.
///