# Modelo Kano
00_00_2024

Cuando trabajamos creando un aplicacion ya sea como programadores o en otro rol cercano al negocio tenemos muchisimas funcionalidades y caracteristicas que podriamos desarrollar, no todas estas caractetisticas merecen el mismo grado de inversion, al igual que no todas las caracteriscas dan el mismo grado de felicidad al usuario, es en esta toma de deciciones donde el modelo Kano nos ayuda.

El modelo Kano nos permite determindar la **satisfacción** de nuestros usuarios al tener X funcionalidad o caracteristica incluida en nuestra aplicación. Kano logra esto mediante tres puntos fundamentales:

1. La sarisfacción de los usuarios depende del nivel de funcionalidad que entregemos, esto incluye tanto la calidad del trabajo entregado como la cantidad de recursos invertidos (Tiempo, dinero, etc).

2. Las funcionalidades y caracteristicas se pueden calsificar en cuatro categorias iniciales y dos secundarias que surgen al analizar los datos, las seis igual de importantes.

3. Podemos clasificar las funcionalidades y caracteristicas mediante dos preguntas muy simples.

El modelo Kano nos permite tener un ciclo de retroalimentación con los usurios al poder saber como se sienten la usar cientas funciones o al tener ciertas caractericas en nuestra aplicación. Además de esto, Kano también nos facilita saber hasta donde llega un *MVP* [Producto minimo viable].

¿Merece la pena desarrollar X funcionalidad? ¿En que orden desarrollamos las funcionalidades requeridas? ¿En que orden mejoramos las funcionalidades precentes? Estas son otras preguntas que el modelo Kano nos puede ayudar a resolver.

## Categorias

Las funcionalidades o caracteristicas de nuestra aplicación se pueden clasificar en cuatro categorias:

* *Must-be*: Funcionalidades son basicas que deben estar precentes en la aplicación si o si.
* *Attractive*: Funcionalidades atractivas que entusiasman al usuario.
* *Performance*: Caracteristicas de rendimiento donde mas suele ser mejor.
* *Indifferents*: Funcionalidades indiferentes que a nadie le importan esten o no.

Cada una de estas categorias no solo nos indica como percive el usuario determinada funcionalidad sino que tambien nos dicen la importancia que tienen para el usuario.

### Decandencia

Las funcionalidades deben actualizarce, pero algunas deben hacerlo más seguido que otras, las caracteristicas que hoy son innovadoras mañana son de lo mas comun. Por ejemplo: Las funciones atractivas o de rendimiento se vuelven funciones basicas con el pasar del tiempo.

Las metricas que nos proporciona el modelo Kano no son esticas y deben actualizarce a lo largo del tiempo.

## Cuestionario

Luego de describir cada funcionalidad al usuario, mostrarle diseños o incluso una demo, se le hacen dos preguntas:

La pregunta "funcional": ¿Como te sentirias si X estubiese en nuestra aplicación? 

Y la pregunta "disfuncional": ¿Como te sentirias si X no estubiese en nuestra aplicación?

Estas dos preguntas deben responderce en un rango emocional definido, a continuación dos ejemplos:

| Rango 1 | Rango 2 |
|--|--|
| Me gustaria | Me alegraria |
| Lo esperaria  | Lo doy por echo |
| Soy neutral | No me importa |
| Podria tolerarlo | Podria tolerarlo |
| Me desagrada | Me molesta |

Luego de hacer cada pregunta debe registrarce la respuesta del usuario. Al existir usuarios en diferentes entornos (Pais, ocupación, etc) es importante separarlos en grupos.

### Tabla de evaluación

Una vez echas las dos preguntas al usuario podemos usar esta tabla para decir en que categoria esta dicha funcionalidad o caracteristica según ese usuario:

Busca de izquierda a derecha la respusta a la pregunta **disfuncional** y luego de arriba hacia abajo la respuesta a la pregunta **funcional**.

|  | Me gustaria | Lo esperaria | Soy neutral | Podria tolerarlo | Me desagrada |
|--|--|--|--|--|--|
| **Me gustaria** | Cuestionable | Atractiva | Atractiva | Atractiva | Rendimiento |
| **Lo esperaria** |  | Cuestionable | Indiferente | Indiferente | Basica |
| **Soy neutral** |  | Indiferente | Indiferente | Indiferente | Basica |
| **Podria tolerarlo** |  | Indiferente | Indiferente | Cuestionable | Basica |
| **Me desagrada** |  |  |  |  | Cuestionable |

Como podemos apreciar en la tabla aparecen dos nuevas categorias: *Reverse* [] y *Questionable* [Cuetionable].

* *Reverse*: Una funcionalidad en esta categoria es una funcionalidad que a nadie le importa y es mejor llevarla a cabo.

* *Questionable*: Una funcionalidad puede estar en esta cateogia porque es confusa, el usuario no entendio como era la funcionalidad. Lo mejor en estos casos es volver a hacer la pregunta mejorarndo la explicación de la función, agregando fotos o videos demostrativos.

## Analisis de resultados

Para analisar los resultados de la encuesta tenemos que hacer otra tabla recogiendo los resultados de la encuesta:

| Funcionalidad | Basica | Rendimiento | Atractiva | Indiferente |  | Cuestionable | Total | Categoria final |
|--|--|--|--|--|--|--|--|--|
| X | 9 | 2 | 1 | 1 |  | 2 | 15 | Basica |

En este caso la funcionalidad **X**, luego de encuestar a 15 personas, para 9 es una funcionalidad "basica", por ende la funcionalidad **X** se debería considerar como tal.

En el caso de que dos categorias tengan la misma cantidad de votos, por ejemplo, para 8 personas es una funcionalidad de "rendimiento" y para otras 8 es una funcionalidad "basica". En este caso nos vamos a quedar con la cateogia mas a la izquierda, tomando el ejemplo anterior seria una funcionalidad "basica".