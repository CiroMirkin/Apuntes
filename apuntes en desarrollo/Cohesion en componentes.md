# Cohesión en componentes
00_00_2023

Podemos ver a un componente como un grupo de funciones o clases, pero ¿Como las organizamos y decidimos cual va con cual? Ahi es donde entran estos principios que son tres estrategias o formas de hacer que un componente tenga *cohesión*.

## Principio de equivalencia resuso/lanzamiento (REP)

> La esencia del reuso es la esencia del lanzamiento.

Las clases que forman un componente tienen que tener un tema o proposito comun que sea claro, el componente tiene que tener sentido. 

Los componentes son reusables, se componen de varias clases que tienen que ser documentadas en el mismo lugar, controladas y lanzas al mismo tiempo porque son parte de un mismo componente. 

## Principio de cierre comun (CCP)

> Separemos las clases en distintos componentes si cambian por distintos motivos.

Si juntamos en un componente las clases que cambian por los mismos motivos, nuestro código se hace mas sostenible, porque ahora, algunos tipos de cambio solo afectan a un componente y no estan dispersos por toda la aplicación.

Si lo vemos de otra manera es una mezcla de SRP y OCP de SOLID, especificamente para componentes.

## Principio de reuso comun (CRP)

> No fuerce a los usuarios de un componente a depender de cosas que no necesitan.

Cuando agrupamos clases dentro de un componente estas clases deberian ser inseparables, con esto no solo buscamos mayor cohesion sino tambien que al depender un componente de otro esta dependencia sea total y no solo de una parte.

Al cumplir este pricipio los componentes se hacen mas pequeños y al usar el componente solo usamos lo que necesitamos, como el ISP de SOLID.

## Equilibrio entre principios

No podemos cumplir al 100% los tres principios porque unos anulan a otros en cuanto les das mas prioridad, por eso hay que encontrar un equilibrio entre la prioridad que le damos a cada principio y este equilibrio no esta escrito en ningun lado porque cambia segun el proyecto, su tamaño o la etapa en la que esta, no es lo mismo un proyecto en sus inicios que meses antes de su lanzmiento o incluso luego.

///
El libro *"Arquitectura limpia"* de Robert C.Martin.
///
