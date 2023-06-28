# Cohesión en componentes
C.Mirkin (00_00_2023)

Podemos ver a un componente como un grupo de funciones, pero ¿Como organizamos estas funciones y decidimos cual va con cual?

## Principio de equivalencia resuso/lanzamiento

> La esencia del reuso es la esencia del lanzamiento.

Las clases que forman un componente tienen que tener un tema o proposito comun que sea claro, el componente tiene que tener sentido, 

si el componente se encarga de mostrar un grafico sobre los gastos e ingresos de una persona no tiene sentido que tenga una clase que guarda los gastos en una base de datos, porque no tiene sentido, ese no es el tema del componente, el componente muentra un grafico y solo eso.

Los componentes son reusables, se componen de varias clases que tienen que ser documentadas en el mismo lugar, controladas y lanzas al mismo tiempo porque son parte del mismo componente. 

Volvamos al ejemplo anterior: un componente se encarga de mostrar un grafico sobre los gastos e ingresos de una persona y tiene una clase que guarda los gastos en una base de datos; esta ultima clase se deberia controlar, documentar y lanzar al mismo tiempo que las demas clases que se comunican con la base de datos.

## Principio de cierre comun



## Principio de reuso comun



## No se pueden cumplir todos