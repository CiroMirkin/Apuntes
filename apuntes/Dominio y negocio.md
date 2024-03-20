# Dominio y negocio
04_03_2023

El dominio y el negocio son dos partes muy importantes en la creación de una aplicación y que ademas ninguna tienen una definición exacta. 

Cuando hablamos de **dominio** nos referimos a lo relacionado con la **industria y/o entorno** de una aplicación, ahora cuando hablamos de **negocio** nos referimos a lo relacionado con **el cliente y lo que quiere**, cuales son sus necesidades y problemas.

Desarrollamos el *"negocio"* teniendo en cuenta el *"dominio"* del mismo, pero sobre todo es importante conocer y entender ambos. 

Es importante conocer y hablar con las personas a las que ayudara nuestra aplicación, por ejemplo, si creamos una aplicación para una panadería deberíamos conocer todas las acciones del día a día en las que ayudara nuestra aplicación.  **Es importante** saber como trabajan los empleados, donde lo hacen, en que horarios y cuantos clientes tienen a diario. 

## Domino y negocio dentro de una aplicación

En una aplicación implementamos de diferentes formas el domino y el negocio, creamos y organizamos diferentes componentes que irán formando una aplicación.

### Reglas de negocio

Podemos ver a las reglas de negocio como todas las acciones dentro del dominio y negocio que generar o ahorran dinero al cliente, pero también podríamos ver a las reglas de negocio como reglas o políticas que definen como se realiza cierta acción, donde si coinciden ambas descripciones es en que las reglas de negocio necesitan información para llevarse a cabo, eso es inevitable.

Por ejemplo, en una aplicación de cursos solo podes pasar al siguiente curso si tenes una puntuación mayor a 5, eso también es una regla, el usuario no puede pasar al siguiente curso si su puntaje es menor a 5.

Otro ejemplo, si entro a una panadería, pido dos medialunas y un pan el cajero tendrá que sumar el precio de las medialunas más el del pan y cobrarme, esa acción que realiza la cajera es una regla de negocio, el cajero *debe* cobrar la suma del precio de los productos que el cliente lleva. 

Las reglas de negocio siempre están presentes en una aplicación, de echo siempre están presentes en el negocio, exista o no la aplicación el cajero siempre va a calcular el monto mentalmente, con una calculadora o con una aplicación.

### Entidades

Una entidad es una clase o varias funciones de alto nivel que contiene una o varias reglas de negocio. Las entidades representan una parte del negocio, gestionan y procesan información para generar dinero, estas son lógica e información pura que no deberían depender de interfaces gráficas o bases de datos.

### Casos de uso

Los casos de uso son clases o funciones que están en un punto medio entre el usuario y las entidades, los casos de uso describen como y cuando el usuario usa a las entidades, los casos de uso dicen como se usa una aplicación.

///
Video de Héctor de León: https://youtu.be/lri0bWndspo?si=vyFFsxCZKM_1q6D3
Un capitulo del libro *"código sostenible"* de *Carlos Blé Jurado*.
El libro *"Arquitectura limpia"* de *Robert C.Martin*.
///