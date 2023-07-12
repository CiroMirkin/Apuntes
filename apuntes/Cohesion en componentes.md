# Cohesión en componentes
08_07_2023

Podemos ver a un componente como un grupo de funciones o clases, pero ¿Cómo las organizamos y decidimos cuál va con cuál? Ahí es donde entran estos principios, tres estrategias o formas de hacer que un componente tenga *cohesión*.

La cohesión de un componente es un concepto que Yourdon y Constantine definieron como: *"cuán estrechamente enlazados o relacionados están entre sí los elementos internos de un módulo"*.

## Principio de equivalencia resuso/lanzamiento (REP)

> La esencia del reuso es la esencia del lanzamiento.

Las clases que forman un componente deben tener un tema o propósito común que sea claro para que el componente tenga sentido, por ejemplo **no tiene sentido** que un componente sobre gráficas tenga una clase que válida un formulario, puede que se relacione con las gráficas, pero aun así deberían estar separados.

Los componentes son reusables, contienen varias clases que deben ser documentadas en el mismo lugar, controladas y lanzas al mismo tiempo porque son parte de un mismo componente, volvamos al anterior ejemplo: si buscáramos la documentación de una clase que valida un formulario no la buscaríamos en el componente de gráficas, justamente porque eso no tiene sentido.

Si tenemos en cuenta este principio junto al de *reuso común* se tiende a crear varios componentes y al tener que hacer pequeños cambios se van a modificar varios componentes.

## Principio de cierre comun (CCP)

> Separemos las clases en distintos componentes si cambian por distintos motivos.

Si juntamos en un componente las clases que cambian por los mismos motivos, nuestro código se hace más sostenible, porque ahora, algunos tipos de cambios solo afectan a un componente y no están dispersos por toda la aplicación.

Viéndolo de otra forma es una mezcla de SRP y OCP de SOLID específicamente para componentes.

Si tenemos en cuenta este principio junto al de *equivalencia reuso/lanzamiento* los componentes serán grandes.

## Principio de reuso común (CRP)

> No fuerce a los usuarios de un componente a depender de cosas que no necesitan.

Cuando agrupamos clases dentro de un componente estas clases deberían ser inseparables, con esto no solo buscamos mayor cohesión sino también que al depender un componente de otro esta dependencia sea total y no solo de una parte.

Al cumplir este principio, los componentes se hacen más pequeños, ante pequeños cambios se modificarán uno o dos componentes, y al usar un componente solo usamos lo que necesitamos, es el ISP de SOLID para componentes.

Si tenemos en cuenta este principio junto al de *cierre común* se tiende a crear componentes difíciles de reusar, esto debido a lo específico que serán.

## Equilibrio entre principios

No podemos cumplir al 100% los tres principios porque unos anulan a otros en cuanto les das más prioridad, por eso hay que encontrar un equilibrio entre la prioridad que le damos a cada principio y este equilibrio no está escrito en ningún lado porque cambia según el proyecto, su tamaño o la etapa en la que esta, no es lo mismo un proyecto en sus inicios que meses antes de su lanzamiento o incluso luego. Robert C.Martin en su libro "Arquitectura limpia" dice sobre esto, y cito: *Al inicio de un proyecto de desarrollo, el CCP es mucho más importante que el REP, porque la capacidad de desarrollo es más importante que el reuso*.

## Cohesion relacional

La cohesión relacional no es un principio es una métrica que nos indica el grado de cohesión de un componente basándose en la cantidad de relaciones entre clases, para lograr esto hay que saber cuanto es **R** y cuanto es **N**.

* **R** es la cantidad de relaciones entre clases (asociaciones, composiciones y agregaciones), valiendo dos las relaciones bidimensionales.
* **N** es el número de clases e interfaces.

	H = ( R + 1 ) / N

**H debería estar entre 1.5 y 4**, un número mayor podría significar un sobre acoplamiento y habría que revisar las clases para hacer cambios.


///
El libro *"Arquitectura limpia"* de Robert C.Martin.
https://learn.microsoft.com/es-es/visualstudio/code-quality/code-metrics-class-coupling?view=vs-2022
https://cimat.repositorioinstitucional.mx/jspui/bitstream/1008/416/1/ZACTE20.pdf
https://www.studocu.com/latam/document/universidad-ort-uruguay/diseno-de-aplicaciones-2/principios-de-paquetes-y-metricas/6303917
///
