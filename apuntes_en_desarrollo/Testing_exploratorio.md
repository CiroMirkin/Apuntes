# Testing exploratorio
00_00_2026

Ver algo que esperas ver no quiere decir que todo este bien, debemos comprobarlo para estar seguros. Siempre mas allá del numero de pruebas escritas y ejecutadas aparecen nuevos _bug_ y fallos, esa es una realidad al crear aplicaciones, Elisabeth Hendrickson nos dice _"Everything you think you know about it is mere speculation"_, debemos trabajar sobre echos, nunca sobre especulaciones o suposiciones.

## Sesiones de exploración

Al escribir y agregar pruebas a una aplicacion vamos formando progresivamente una _red de pruebas_, al hacer modificaciones o expanciones esta red atrapara _bugs_ importantes evitando que llegen a produccion. El testing exploratorio consiste en experimentar con las zonas que no están cubiertas por la red de pruebas, a traves de _sesiones de exploración_  buscamos obtener información que aporte valor al producto, aprender sobre sus capacidades y limitaciones, estas sesiones nos permiten organizar y guiar la cada exploración.
    
Para dar comienzo a una sesión primero debemos definir un objetivo, luego diseñar y llevar a cabo pequeños experimentos buscando ir mas alla de las pruebas ya definidas y las observaciones superficiales, buscamos llegar a puntos de inflexión dificiles de descubrir pero interesantes y significativos.

    Explorar [...]
    Con [...]
    Para descubrir [...]

    Explorar (Feature, Función, Clase, Componente, etc)
    Con (Herramientas, datos de prueba, configuraciones, etc)
    Para descubrir (Vulnerabilidades, Bugs, etc)

* Este es un buen objetivo para una sesion: **Explorar la edición de perfiles con varios métodos para descubrir sorpresas**.
* Este *No* es un buen objetivo, es un caso de prueba: **Explorar la edición del apellido con el valor _"O'Male"_ para descubrir si la característica de edición puede gestionar correctamente nombres con apostrofes**.

> Por ejemplo, yo personalmente testaba el funcionamiento de una app web con una cuenta que habia creado inicialmente, al mes de desarrollo la aplicacion crecio y no me di cuenta que la creacion de usuario habia dejado de funcionar. Esto sucedio porque solo explore esa caracteristica una vez y no volvi a preguntarme si seguia funcionando, ademas de haber tenido una prueba E2E no habria sucedido, pero ese es otro tema.

Lo mas importante al explorar es realizar preguntas acerca del comportamiento del software, cada una de estas preguntas puede revelar ambigüedad o dependencias, es ahi cuando debemos explorar en busca de oportunidades para añadir requerimientos, por ejemplo ¿Que sucede si al instalar una aplicación cierro de improvisto la ventana? o ¿Me es posible retomar la instalación o el instalador queda obsoleto?

###  Variantes

Un buen punto de partida para una sesion de exploracion es buscar variables dentro del comportamiento del sistema, cualquier variate puede ocasionar problemas. Por ejemplo, los diferentes formatos que puede tener un texto, las diferentes configuraciones ocultas al usuarios, las diferentes ubicaciones de un archivo, los diferentes ej, etc. Entre todas las variantes puede existir una que cause bugs o errores, que por infrecuente que sea debería controlarse.

Dentro del libro _Elisabeth Hendrickson_ propone una euristica muy interesante que consiste en identificar y clasificar las variantes para luego ser exploradas, la clasificacion es: Cero-Uno-Muchos, Valido/Invalido o Vacio/Lleno/Saturado.

### Evaluar comportamientos

¿Como puedo saber si el comportamiento que obtuve es el correcto? Para estos casos se pueden tener en cuenta algunos factores:

Los _Never & Always_, requisitos especificados por el cliente, cosas que siempre deben funcionar o nunca deben suceder. Estos requisitos los cuales no simpre son funcionaes representan los intereses del cliente y sus criterios sobre la calidad del software, por ejemplo, cuestiones de accesibilidad, disponibilidad, seguridad o precision. En este punto una pregunta que podriamos hacer es: si ocurre un error repentino ¿Que cosa debe seguir funcionando pase lo que pase?

Ademas podemos guiarnos segun las funcionalidades y capacidades fundamentales de la aplicacion, evaluar sus caracteristicas esenciales, por ejemplo, dentro de una tienda online cualquier fallo en el pago de los productos es innaceptable.  Es importante conocer al usuario y su proposito dentro de la aplicación.

Al no estar documentados las especificiones del sistema, ademas de empezar a documentarlas nos podemos guiar bajo las expectativas del sistema, por ejemplo que se conserve una consistencia interna y en el flujo del usuario, podemos segir estandares externos de calidad y UX o visitar sistemas similares.

### Explorar comportamientos

Una forma interesante de explorar es variar la forma en que usamos el sistema, por ejemplo, dentro de una aplicación web podemos dejar de usar la navegación y cambiar directamente la ruta desde la URL. En caso de no tener ideas podemos empezar redactando una lista con las posibles acciones y pasos siguientes, por ejemplo, que pasa si en este punto de la aplicación cierro la ventana, que pasa si en vez de precionar el  botón "cancelar" directamente cierro la ventana?

Otro metodo es diseñar perfiles de personas que guien la forma de interactuar, alguien de 65 años no piensa de la misma forma que alguien con 15 años, alguien dislexico que alguien daltonico, alguien apurado que cansado, etc.

### Entidades y sus relaciones

Explorar las relaciones de las diferentes entidades, funciones, objetos, componentes o modulos nos puede ayudar a identificar fallas, inconsistencias, malas dependencias, problemas de optimizacion, etc. Algunas recomendaciones en este puntos son:

* Identificar entidades a partir de atributo dentro de la aplicación o grandes porciones de informacion.

* Relacionar las entidades segun la forma en la que se habla sobre dicha entidad o los verbos que utilizan para describit la relacion entre entidades.

* Seguir el ciclo de vida de un dato o entidad (cuando nace, cuando muere, su cantidad de apariciones, recorrido y puntos de quiebre).

* Operaciones CRUD, variar datos de entrada, edicion, eliminacion, prueba crear una entidad sin dependencias?

* Prueba creando un diagrama Entidad-Relacion (ERD).

### Estados y transiciones

Siempre dentro de toda aplicación existen errores esporádicos y difíciles de reproducir los cuales suceden durante un breve periodo de tiempo, en estos casos es importante hacer foco en el comportamiento observable mas allá de nuestro conocimiento técnico sobre el sistema. Dentro de los comportamientos observables tenemos que encontrar eventos y los cambios de estado que realizan, existen veces en que los estados son alterados por eventos sutiles o incluso por eventos sobre los cuales no tenemos control.

> Eventos ---> Estado

Puntos importantes para detectar estado:

* Hay algo que podria hacer ahora que antes no podia hacer? Y su contrario hay algo que no puedo hacer ahora que antes podia?

* Tienen mis acciones resultados distintos ahora en comparacion a los resultados anteriores?

* Prestar a como hablamos al describir la aplicacion y sus caracteristicas.

* Crear diagramas del modelo del estado. Identificar todas las formas de ir desde un estado A hacia un estado B, identificando eventos y entidades involucradas, ademas si al diagrama no podemos darle un nombre propio sin el uso de "Y" posiblemente exista mas de n estado involucrado.

Las acciones del usuario son eventos, existen eventos externos que accionan eventos internos, existen eventos de tiempo (timeouts) y tambien existen eventos que se accionan al cambiar estados internos los cuales pueden ser ajenos o no.

Puede ser bueno experimentar creando interrupciones en los eventos para observar el comportamiento: la interrupcion se gestiono como debebia? se recompuso el sistema y funciona con normalidad? existe perdida de información? se corrompio la información? 


### Ecosistema y contexto

El sistema operativo, las librerias, el sistema de archivos o incluso en hardware son dependencias externas las cuales tambien es importante explorar en relacion a nuestra aplicacion.

En este punto existen dos diagramas utiles, un diagrama de contexto de sistema para visualizar las conexiones externas y un diagrama de despliege para visualizar los componentes y archivos de configuracion que permiten poner en produccion la aplicacion. La idea de estos diagramas no es que sean detallados sino que sean utiles.

### Trust boundaries

Dentro de una aplicacion existen limites dentro de los cuales nuestra aplicacion se comunica con otro sistema del cual no podemos asumir que usa las mismas reglas que nuestro sistema, es una dependencia fuera de nuestro control.

Son puntos muy importantes donde el sistema puede fallar o comprometerce.

### Interfaces

Mas alla de las interfaces graficas para usuarios, tambien existen otro tipo de interfaces como los endpoints de una API REST o los parametros de una clase.

///
Libro "Explore It!" de Elisabeth Hendrickson.
///