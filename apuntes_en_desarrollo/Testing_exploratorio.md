# Testing exploratorio
00_00_2026

Ver algo que esperas ver no quiere decir que todo esta bien, debemos comprobarlo para estar seguro.

> "Everything you think you know about it is mere speculation".

Mas alla de cuantas pruebas se escriban y ejecuten siembre aparecen nuevos bug

1. el Software se comporta como esperamos bajo las condiciones que se supone debe ser capaz de manejar?
2. Hay algun otro riesgo?

La exploracion va sobre experimentar con las zonas que no estan cubiertas por la red de pruebas

    Tested = Checked + Explored

Las sesiones de exploracion deben tener un objetivo definido, dentro de cada sesion diseñamos y llevamos a cabo pequeños experimentos, esto con el fin de aprender sobre las capacidades y limitaciones del software.

La idea es obtener información que aporte valor al producto, cada sesion debe tener un objetivo, se puede realizar una lluvia de ideas de preguntas acerca del comportamiento del software.

    Explorar [...]
    Con [...]
    Para descubrir [...]

    Explorar (Feature, Función, Clase, Componente, etc)
    Con (Herramientas, datos de prueba, configuraciones, etc)
    Para descubrir (Vulnerabilidades, Bugs, etc)

* Este es un buen objetivo: Explorar la edición de perfiles con varios metodos para descibrir sorpresas.
* Este *No* es un buen objetivo, es un caso de prueba: Explorar la edicion del apellido con el valor O'Male para descubrir si la caracteristica de edicion de perdile puede maenejar nombres con apostrofes.

Cada que una pregunta revela ambiguedad o dependencias hay algo que puede ser explorado.
Las sesiones de exploracion pueden revelar oportunidades para añadir requerimientos.


## El iceberg dentro del sistema

> Se trabaja sobre echos, no sobre asumciones

Ver algo que esperas ver no quierre decir que todo esta bien, debemos comprobar que realmente es asi usando querys en la base de datos o aplicaciones de monitoreo. Mas alla de lo que veamos necesitamos hacer preguntas que nos lleven mas profundo dentro del sistema para obtener mas informacion sobre el comportamiento del sistema, la idea es **ir mas alla de las pruebas y observaciones superficiales** para llegar a puntos dificiles de descubrir pero mas interesantes y significativos.

> Por ejemplo, yo personalmente testeaba la el funcionamiento de una app web con una cuenta que habia creado inicialmente, al mes de desarrollo la aplicacion cambio y no me di cuenta que la creacion de usuario no funcionaba porque solo explore esa caracteristica una vez y no volvi a preguntarme si seguia funcionando. (de haber tenido una prueba E2E esto no habria sucedido, pero ese es otro tema).

> que sucede si al instalar una aplicacion cierro de inprovisto la ventana? me es posible retormar la instalacion o el instalador queda obsoleto?


Es necesario tambien pensar y encontrar variables dentro del comportamiento del sistema, generalmente estas variables pueden contabilizarse en cantidades y es esa variante la que puede ocasionar problemas. por ejemplo, archivos que la aplicacion crea, tiempo de que utiliza, formatos especificos de textos, configuraciones ocultas al usuarios, posiciones, ubicaciones, etc.

Dentro del libro proponen una euristica muy interesante y es identificar cambios de estado: cero/uno/muchos, valido/invalido, vacio/lleno/saturado. Cada uno de variantes en el estado deberian ser exploradas.

## Evaluar comportamiento

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

///
Libro "Explore It!" de Elisabeth Hendrickson.
///