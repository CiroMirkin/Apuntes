# Modelo Kano
04_05_2024

Cuando trabajamos desarrollando un aplicación ya sea como programadores o en otro rol cercano al negocio tenemos muchísimas funcionalidades y características que podríamos desarrollar, no todas estas características merecen el mismo grado de inversión, al igual que no todas las características dan el mismo grado de felicidad al usuario, es en esta toma de decisiones donde el modelo Kano nos ayuda.

El modelo Kano nos permite determinar la **satisfacción** de nuestros usuarios al tener X funcionalidad o característica incluida en nuestra aplicación. Kano logra esto mediante tres puntos fundamentales:

1. La satisfacción de los usuarios depende del nivel de funcionalidad que entreguemos, incluyendo tanto la calidad del trabajo entregado como la cantidad de recursos invertidos (Tiempo, dinero, etc).

2. Las funcionalidades y características se pueden clasificar en cuatro categorías iniciales y dos secundarias que surgen al analizar los datos, las seis igual de importantes.

3. Podemos clasificar las funcionalidades y características mediante dos preguntas muy simples.

El modelo Kano nos permite tener un ciclo de retroalimentación con los usuarios al poder saber como se sienten al usar ciertas funciones o al tener ciertas características en nuestra aplicación. Además de esto, Kano también nos facilita saber hasta donde llega un *MVP* [Producto mínimo viable].

¿Merece la pena desarrollar X funcionalidad? ¿En que orden desarrollamos las funcionalidades requeridas? ¿En que orden mejoramos las funcionalidades presentes? Estas son otras preguntas que el modelo Kano nos puede ayudar a resolver.

## Categorías

Las funcionalidades o características de nuestra aplicación se pueden clasificar en cuatro categorías:

* *Must-be*: Funcionalidades básicas que deben estar presentes en la aplicación si o si, esto debido a que son funcionalidades esperadas y que los usuarios dan por echo que estarán presentes.

* *Attractive*: Funcionalidades atractivas que entusiasman al usuario. Si una funcionalidad atractiva esta presente aumenta la satisfacción del usuario.

* *Performance*: características de rendimiento donde mas suele ser mejor.

* *Indifferents*: Funcionalidades indiferentes que a nadie le importan.

Cada una de estas categorías no solo nos indica como percibe el usuario determinada funcionalidad sino que también nos dicen la importancia que tienen para el mismo.

### Decadencia

Las funcionalidades deben actualizarse, pero algunas deben hacerlo más seguido que otras, las características que hoy son innovadoras mañana son de lo mas común. Las funciones atractivas o de rendimiento se vuelven funciones básicas con el pasar del tiempo. Por ejemplo: Las pantallas táctiles en los celulares.

Las métricas que nos proporciona el modelo Kano no son estáticas y deben actualizarse a lo largo del tiempo.

## Cuestionario

Luego de describir la funcionalidad al usuario, mostrarle diseños o una demo, hacemos el cuestionario:

La pregunta "funcional": ¿Como te sentirías si X estuviese en nuestra aplicación? 

Y la pregunta "disfuncional": ¿Como te sentirías si X no estuviese en nuestra aplicación?

Estas dos preguntas deben responderse en un rango emocional definido, a continuación dos ejemplos:

| Rango 1 | Rango 2 |
|--|--|
| Me gustaría | Me alegraría |
| Lo esperaría  | Lo doy por echo |
| Soy neutral | No me importa |
| Podría tolerarlo | Podría tolerarlo |
| Me desagrada | Me molesta |

Luego de hacer cada pregunta debe registrarse la respuesta del usuario y al existir usuarios en diferentes entornos (País, ocupación, etc) es importante separarlos en grupos.

### Tabla de evaluación

Una vez echas las dos preguntas al usuario podemos usar esta tabla para saber en que categoría esta cada funcionalidad o característica según los usuarios:

Buscamos de izquierda a derecha la respuesta a la pregunta **disfuncional** y luego de arriba hacia abajo la respuesta a la pregunta **funcional**.

|  | Me gustaría | Lo esperaría | Soy neutral | Podría tolerarlo | Me desagrada |
|--|--|--|--|--|--|
| **Me gustaría** | Cuestionable | Atractiva | Atractiva | Atractiva | Rendimiento |
| **Lo esperaría** | Inversa | Cuestionable | Indiferente | Indiferente | Básica |
| **Soy neutral** | Inversa | Indiferente | Indiferente | Indiferente | Básica |
| **Podría tolerarlo** | Inversa | Indiferente | Indiferente | Cuestionable | Básica |
| **Me desagrada** | Inversa | Inversa | Inversa | Inversa | Cuestionable |

Como podemos apreciar en la tabla aparecen dos nuevas categorías: *Reverse* [Inversa] y *Questionable* [Cuestionable].

* *Reverse*: Una funcionalidad en esta categoría es una funcionalidad que a nadie le importa y es mejor no desarrollarla. Si estas funcionalidades están presentes causan un efecto inverso al que queremos, un efecto de insatisfacción.

* *Questionable*: Una funcionalidad puede estar en esta categoría porque es confusa y el usuario no entendió como era dicha funcionalidad. Lo mejor en estos casos es volver a hacer la pregunta mejorando la explicación, agregando fotos o videos demostrativos.

## Análisis de resultados

Para analizar los resultados de la encuesta tenemos que hacer otra tabla recogiendo los resultados de la encuesta:

| Funcionalidad | Básica | Rendimiento | Atractiva | Indiferente |  | Cuestionable | Total | Categoría final |
|--|--|--|--|--|--|--|--|--|
| X | 9 | 2 | 1 | 1 |  | 2 | 15 | Básica |

En este caso la funcionalidad **X**, luego de encuestar a 15 personas: 9 creen que es una funcionalidad "básica" y por ende la funcionalidad **X** se debería considerar como tal.

En el caso de que dos categorías tengan la misma cantidad de votos, por ejemplo, para 8 personas es una funcionalidad de "rendimiento" y para otras 8 es una funcionalidad "básica". En este caso nos vamos a quedar con la categoría mas a la izquierda, tomando el ejemplo anterior seria una funcionalidad "básica".

///
Charla en Autentia: https://youtu.be/kIrcxz3v64I?si=2SbmPa1JFbxG7Cwg
https://foldingburritos.com/blog/kano-model/
https://www.appinio.com/es/blog/investigacion-de-mercados/analisis-modelo-kano-guia-completa
///