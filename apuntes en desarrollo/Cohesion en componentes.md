# Cohesión en componentes
00_00_2023

Podemos ver a un componente como un grupo de funciones, pero ¿Como organizamos estas funciones y decidimos cual va con cual?

## Principio de equivalencia resuso/lanzamiento (REP)

> La esencia del reuso es la esencia del lanzamiento.

Las clases que forman un componente tienen que tener un tema o proposito comun que sea claro, el componente tiene que tener sentido, 

si el componente se encarga de mostrar un grafico sobre los gastos e ingresos de una persona no tiene sentido que tenga una clase que guarda los gastos en una base de datos, porque no tiene sentido, ese no es el tema del componente, el componente muentra un grafico y solo eso.

Los componentes son reusables, se componen de varias clases que tienen que ser documentadas en el mismo lugar, controladas y lanzas al mismo tiempo porque son parte del mismo componente. 

Volvamos al ejemplo anterior: un componente se encarga de mostrar un grafico sobre los gastos e ingresos de una persona y tiene una clase que guarda los gastos en una base de datos; esta ultima clase se deberia controlar, documentar y lanzar al mismo tiempo que las demas clases que se comunican con la base de datos.

## Principio de cierre comun (CCP)

> Separemos las clases en distintos componentes si cambian por distintos motivos.

Si juntamos en un componente las clases que cambian por los mismos motivos, nuestro código se hace mas sostenible, porque ahora, ciertos tipos de cambios solo se hacen en un componente y no estan dispersos por toda la aplicación.

Si lo vemos de otra manera es una mezcla de SRP y OCP de SOLID, especificamente para componentes.


## Principio de reuso comun

> No fuerce a los usuarios de un componente a depender de cosas que no necesitan.

## Equilibrio entre principios

Veamos posibles combinaciones, donde solo cumplimos ciertos principios.

La equivalencia reuso/lanzamiento y el de cierre comun son principios que hacen a los componentes mas grandes.

El reuso comun hace los componentes mas pequeños y para pequeños cambios se modifican solo uno o dos componentes.

La equivalencia reuso/lanzamiento y el de reuso comun van a generar mas componentes y varios componentes se van a modificar para hacer pequeños cambios.

El cierre comun y de resuso comun van a generar componentes dificiles de reusar, porque seran muy especificos.

/// 
El libro *"Arquitectura limpia"* de Robert C.Martin.
///
