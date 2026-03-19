# Testing exploratorio
00_00_2026

Ver algo que esperas ver no quiere decir que todo esta bien, debemos comprobarlo para estar seguro, siempre mas allá del numero de pruebas escritas y ejecutadas aparecen nuevos _bug_ y fallos, esa es una realidad.

> "Everything you think you know about it is mere speculation".
> Debemos trabajar sobre echos, no sobre especulaciones o suposiciones.

La exploración consiste en experimentar con las zonas que no están cubiertas por la red de pruebas, para organizar la exploración y guiarla definimos _sesiones de exploración_ en las cuales buscamos obtener información que aporte valor al producto, aprender sobre sus capacidades y limitaciones.

    Tested = Checked + Explored
    
Para dar comienzo a una sesión primero debemos definir un objetivo para luego diseñar y llevar a cabo pequeños experimentos en buscando ir mas alla de las pruebas y observaciones superficiales para llegar a puntos dificiles de descubrir pero interesantes y significativos.

    Explorar [...]
    Con [...]
    Para descubrir [...]

    Explorar (Feature, Función, Clase, Componente, etc)
    Con (Herramientas, datos de prueba, configuraciones, etc)
    Para descubrir (Vulnerabilidades, Bugs, etc)

* Este es un buen objetivo: 
```
Explorar la edición de perfiles con varios métodos para descubrir sorpresas.
```
* Este *No* es un buen objetivo, es un caso de prueba:
```
Explorar la edición del apellido con el valor _"O'Male"_ para descubrir si la característica de edición puede gestionar correctamente nombres con apostrofes.
```

> Por ejemplo, yo personalmente testeaba el funcionamiento de una app web con una cuenta que habia creado inicialmente, al mes de desarrollo la aplicacion crecio y no me di cuenta que la creacion de usuario no funcionaba porque solo explore esa caracteristica una vez y no volvi a preguntarme si seguia funcionando. (de haber tenido una prueba E2E esto no habria sucedido, pero ese es otro tema).

Lo mas importante al explorar es realizar preguntas acerca del comportamiento del software, cada una de estas preguntas puede revelar ambigüedad o dependencias y es ahi cuando debemos explorar para encontrar oportunidades para añadir requerimientos, por ejemplo ¿Que sucede si al instalar una aplicación cierro de improvisto la ventana? ¿Me es posible retomar la instalación o el instalador queda obsoleto?

## Evaluar comportamientos y variantes

Pensar y encontrar variables dentro del comportamiento del sistema es un buen punto de inicio para una sesion de exploracion, generalmente las variables se pueden contabilizar en cantidades y dichas cantidades pueden ocasionar problemas. Por ejemplo, los archivos que una aplicacion crea, el tiempo que se utiliza, los formatos especificos que puede tener un texto, las configuraciones ocultas al usuarios, posiciones, ubicaciones, etc. Dentro de cada variante puede existir una poco frecuente que cause errores importantes.

Dentro del libro _Elisabeth Hendrickson_ propone una euristica muy interesante que consiste en identificar y clasificar los cambios de estado en: Cero-Uno-Muchos, Valido/Invalido o Vacio/Lleno/Saturado. Cada una de estas variantes debe ser explorada.

Como se si el comportamiento que obtuve es el correcto? En estos casos se pueden tener en cuenta algunos factores:

* _Never & Always_: Requisitos especificados por el cliente de cosas que si o si deben funcionar o que nunca deben suceder, estos reprecentan los intereses del cliente y sin criticos para la calidad del software, es importante tener en cuenta que pueden no ser funcionales como cuestiones de accesibilidad, disponibilidad, seguridad o precision.

Funcionalidades y capacidades fundamentales para el cliente.

Si ocurre un error repentino que es lo obsolutamente necesario que siga funcionand?

Es importante conocer al usuario y su proposito dentro de la aplicacion.

* Al no estar documentados las especificiones del sistema, ademas de empezar a documentarlas nos podemos guiar bajo las expectativas del sistema, por ejemplo que se conserve una consistencia interna y en el flujo del usuario, podemos segir estandares externos de calidad y UX o visitar sistemas similares.

* Tambien podemos evaluar caracteristicas esenciales.

* Secuencias e interacciones

Otra cosa que podemos hacer es variar la forma que usamos el sistema, por ejemplo si en una app web utilizamos las navegacion probar utilizar solamente la URL, buscariamos cosas dentro del sistema y cambiariamos sus acciones relacionadas. Si no tenemos ideas podemos empezar una lista de la posibles acciones o pasos siguiente que se pueden efectar, que pasa si e este punto de la aplicacion cierro la ventana, vuelvo para atraso aprieto el boton "cancelar"?

Podriamos crear "personas" para guiar la forma de interaccion, alguien de 65 años no piensa de la misma forma que alguien de 15, alguien dislexico o daltonico, si son personas apuradas o cansadas, etc.


## Entidades y sus relaciones

Explorar las diferentes entidades (Si trabajamos con POO), funciones, componente o modulos junto con su relacion para con el resto de elementos dentro del sistema nos puede ayudar a identificar fallas, inconsistencias, malas dependencias, problemas de optimizacion. Algunas recomendaciones en este puntos son:

* Identificar entidades a partir de atributo dentro de la aplicación o grandes porciones de informacion.

* Relacionar las entidades segun la forma en la que se habla sobre dicha entidad o los verbos que utilizan para describit la relacion entre entidades.

* Seguir el ciclo de vida de un dato o entidad (cuando nace, cuando muere, su cantidad de apariciones, recorrido y puntos de quiebre).

* Operaciones CRUD, variar datos de entrada, edicion, eliminacion, prueba crear una entidad sin dependencias?

* Prueba creando un diagrama Entidad-Relacion (ERD).

## Estados y transiciones

Siempre dentro de toda aplicación existen errores esporadicos y dificiles de reproducir los cuales suceden durante un breve periodo de tiempo, en estos casos es importante hacer foco en el comportamiento observable mas alla del conocimiento tecnico debemos reconocer _estados y eventos_. Es importante encontrar y enumerar los cambios de estado juntos con los eventos que accionan dichos cambios, ahi veces en que los estados son alterados por eventos sutiles o incluso por eventos sobre los cuales no tenemos control.

> Eventos ---> Estado

Puntos importantes para detectar estado:

* Hay algo que podria hacer ahora que antes no podia hacer? Y su contrario hay algo que no puedo hacer ahora que antes podia?

* Tienen mis acciones resultados distintos ahora en comparacion a los resultados anteriores?

* Prestar a como hablamos al describir la aplicacion y sus caracteristicas.

* Crear diagramas del modelo del estado. Identificar todas las formas de ir desde un estado A hacia un estado B, identificando eventos y entidades involucradas, ademas si al diagrama no podemos darle un nombre propio sin el uso de "Y" posiblemente exista mas de n estado involucrado.

Las acciones del usuario son eventos, existen eventos externos que accionan eventos internos, existen eventos de tiempo (timeouts) y tambien existen eventos que se accionan al cambiar estados internos los cuales pueden ser ajenos o no.

Puede ser bueno experimentar creando interrupciones en los eventos para observar el comportamiento: la interrupcion se gestiono como debebia? se recompuso el sistema y funciona con normalidad? existe perdida de información? se corrompio la información? 


## Ecosistema y contexto

El sistema operativo, las librerias, el sistema de archivos o incluso en hardware son dependencias externas las cuales tambien es importante explorar en relacion a nuestra aplicacion.

En este punto existen dos diagramas utiles, un diagrama de contexto de sistema para visualizar las conexiones externas y un diagrama de despliege para visualizar los componentes y archivos de configuracion que permiten poner en produccion la aplicacion. La idea de estos diagramas no es que sean detallados sino que sean utiles.

## Trust boundaries

Dentro de una aplicacion existen limites dentro de los cuales nuestra aplicacion se comunica con otro sistema del cual no podemos asumir que usa las mismas reglas que nuestro sistema, es una dependencia fuera de nuestro control.

Son puntos muy importantes donde el sistema puede fallar o comprometerce.

## Interfaces

Mas alla de las interfaces graficas para usuarios, tambien existen otro tipo de interfaces como los endpoints de una API REST o los parametros de una clase.

///
Libro "Explore It!" de Elisabeth Hendrickson.
///