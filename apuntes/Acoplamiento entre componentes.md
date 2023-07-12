# Acoplamiento entre componentes
12_07_2023

Los componentes son un grupo de clases o funciones en una carpeta, dentro de una aplicacion los componentes se relacionan para cumplir con sus responsabilidades y cuando un cambio en uno afecta a otro hay *acoplamiento* entre estos dos componentes, y aquí un grafico de dependencia de los componentes nos va a ayudar a ver las dependecias y sobre todo un incumplimento de los dos primeros principios.

Las metricas de calidad para componentes son el resultado del principio de dependencias estables y el principio de abstracciones estables, las metricas en cuestion nos permiten evaluar la calidad de un componente.

## Principio de dependencias ciclicas

> No permita ciclos en el grafico de dependencia de los componentes.

Si ponemos nuestro dedo en un componentes cualquiera y seguimos las flechas de dependecia no deberiamos ser capases de volver al componente del que partimos, eso es lo que busca el principio de dependencias ciclicas (ADP en ingles).

Un ciclo en el grafico hace que los componentes involucrados sean casi imposibles de aislar, dificiles de provar y en lenguajes compilados es imposible saber el orden correcto de compilacion. Por este motivo cada que la aplicacion creca se debe revisar el grafico de dependencias en busca de ciclos y de existir se deben eliminar, una forma de hacer esto es invirtiendo la dependencia (DIP) y otra es creando un componente del que dependean dos de los componentes del ciclo.

## Principio de dependencias estables

> Dependa en la direccion de la estabilidad.

Cuando uno o varios componentes dependen de otro, este ultimo se vuelve dificil de cambiar y por ende un componente estable, si este componente cambia obliga a los componentes que dependen de el a cambiar, el componente tiene razones para no cambiar. Por el contrario los componentes de los que no depende nadie son componetes inestables pueden cambiar sin afectar a nadie.

El principio de dependencias estables (SDP en ingles) propone que **un componente inestable no deberia depender de uno estable**. Ten en mente que no todos los componentes de un sistema deben ser estables, tiene que haber lugar para cambios, si un componente es inestables es porque queremos que sea facil de cambiary si depende de un componente estable entonces ya no seria facil de cambiar.

### Calcular la estabilidad de un componente

Como ejemplo vamos calcular la estabilidad de el componente *graficos*.

* Entrantes: La cantidad de componentes que dependen del componente *graficos*.
* Salientes: La cantidad de componentes de los que depende el componente *graficos*. 

	Estabilidad = salientes / (entrantes + salientes)

El calculo de estabilidad nos dara un numero entre 1 y 0, un componente con **1 es inestable** y sus entradas son 0, ahora un componente con **0 es estable** y sus salidas son 0.

## Principio de abstracciones estables

> Un componente debera ser tan abstracto como estable.

Los componentes estables tambien tienen que tener una parte abstracta para permitir ampliaciones por el contrario los componentes inestables tienen que ser concretos para permitir cambios con facilidad.

### Calcular la abstraccion de un componente

	Abstraccion = N° de interfaces / N° de clases

El calculo de abstraccion nos dara un numero entre 1 y 0, un componente con **1 solo tiene interfaces** y uno con **0 solo tiene clases**.

Un componente no tiene que ser 100% estable y concreto o 100% inestable y abstracto, tiene que estar en un punto medio, pero nunca en **esos** extremos.

Para ver la relacion *estabilidad/abstraccion* hay que hacer un grafico:

![grafico de relacion estabilidad/abstraccion]()

///
https://www.studocu.com/latam/document/universidad-ort-uruguay/diseno-de-aplicaciones-2/principios-de-paquetes-y-metricas/6303917
El libro *"Arquitectura limpia"* de Robert Martin.
///