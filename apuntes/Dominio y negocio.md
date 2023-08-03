# Dominio y negocio
04_03_2023

El dominio y el negocio son dos partes muy importantes en la creación de una aplicación. Cuando hablamos de **dominio** hablamos sobre todo de lo relacionado a la **industria y/o entorno** donde se usa una aplicación, cuando hablamos de **negocio** hablamos más de lo relacionado con **el cliente y lo que quiere** (necesidades o problemas que quiere resolver).

Si creamos una aplicación para una panadería deberíamos conocer todas las acciones del día a día en las que ayudara nuestra aplicación **es importante**, saber como traban los empleados, donde trabajan, en que horarios, cuantos clientes tienen a diario, obviamente si tienen planes de expansión, es importante conocer y hablar con las personas a las que ayudara nuestra aplicación.

Desarrollamos al "negocio" teniendo en cuenta el "dominio" del mismo, pero sobre todo es importante conocer y entender ambos. 

## Domino y negocio dentro de una aplicación

En una aplicación creamos de varias formas las distintas partes del domino y negocio.

### Reglas de negocio

Las reglas de negocio son todas esas acciones dentro del dominio y negocio que generar o ahorran dinero al cliente, ahora teniendo esto en cuenta: 

Si entro a una panadería, pido dos medialunas y un pan el cajero tendrá que sumar el precio de las medialunas más el del pan y cobrarme, esa acción que realiza la cajera es una regla de negocio. 

Las reglas de negocio son acciones que siempre se realizan, el cajero siempre va a calcular el monto a cobrar porque genera dinero si se hace manualmente, con una máquina registradora, calculadora o aplicación. Sin importar el medio es una acción que siempre hará y generara dinero, pero para generar dinero una regla de negocio suele necesitar información y en este caso son los precios de los productos.

### Entidades

Una entidad es una clase o varias funciones de alto nivel que contiene una o varias reglas de negocio, representa una parte del negocio, gestiona y procesa información para generar dinero, no depende de interfaces gráficas o bases de datos, solo es lógica e información.

### Casos de uso

Los casos de uso son clases o funciones de bajo nivel que se relacionan con el usuario mediante interfaces gráficas o de consola, son un intermediario entre el usuario y las entidades, los casos de uso describen como y cuando el usuario usa a las entidades, los casos de uso dicen como se usa una aplicación.

Podríamos decir que son reglas de negocio que solo tienen sentido dentro de una aplicación, no son tan puras como para formar una entidad.

### Componentes

Entender el dominio y negocio nos ayudará a organizar y crear los diferentes componentes que irán conformando a una aplicación junto con los principios de cohesión y acoplamiento para componentes.

///
Un capitulo del libro *"código sostenible"* de *Carlos Blé Jurado*.
El libro *"Arquitectura limpia"* de *Robert C.Martin*.
///