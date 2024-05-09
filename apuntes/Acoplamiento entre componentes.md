# Acoplamiento entre componentes
12_07_2023

Los componentes son un grupo de clases o funciones en una carpeta, dentro de una aplicación los componentes se relacionan para cumplir con sus responsabilidades y cuando un cambio en uno afecta a otro hay *acoplamiento* entre estos dos componentes, y aquí un gráfico de dependencia de los componentes nos va a ayudar a ver las dependencias y sobre todo un incumplimiento de los dos primeros principios.

Las métricas de calidad para componentes son el resultado del principio de dependencias estables y el principio de abstracciones estables, las métricas en cuestión nos permiten evaluar la calidad de un componente.

## Principio de dependencias cíclicas

> No permita ciclos en el gráfico de dependencia de los componentes.

Si ponemos nuestro dedo en un componentes cualquiera y seguimos las flechas de dependencia no deberíamos ser capases de volver al componente del que partimos, eso es lo que busca el principio de dependencias cíclicas (ADP en ingles).

Un ciclo en el gráfico hace que los componentes involucrados sean casi imposibles de aislar, difíciles de probar y en lenguajes compilados es imposible saber el orden correcto de compilación. Por este motivo cada que la aplicación crezca se debe revisar el gráfico de dependencias en busca de ciclos y de existir se deben eliminar, una forma de hacer esto es invirtiendo la dependencia (DIP) o creando un componente del que dependan dos componentes del ciclo.

## Principio de dependencias estables

> Dependa en la dirección de la estabilidad.

Cuando uno o varios componentes dependen de otro, este ultimo se vuelve difícil de cambiar y por ende un componente estable, si este componente cambia obliga a los componentes que dependen de el a cambiar, el componente tiene razones para no cambiar. Por el contrario los componentes de los que no depende nadie son componentes inestables y pueden cambiar sin afectar a nadie.

El principio de dependencias estables (SDP en ingles) propone que **un componente estable no debería depender de uno inestable**. Ten en mente que no todos los componentes de un sistema deben ser estables, tiene que haber lugar para cambios, si un componente es inestables queremos que sea fácil de cambiar y por ende deberían depender de un componente estable, si esto fuera al revés los componentes estables serian frágiles y por ende inestables.

### Calcular la estabilidad de un componente

Como ejemplo vamos calcular la estabilidad de el componente *gráficos*.

* Entrantes: La cantidad de componentes que dependen del componente *gráficos*.
* Salientes: La cantidad de componentes de los que depende el componente *gráficos*. 

	Estabilidad = salientes / (entrantes + salientes)

El calculo de estabilidad nos dará un numero entre 1 y 0, un componente con **1 es inestable** y sus entradas son 0, ahora un componente con **0 es estable** y sus salidas son 0.

## Principio de abstracciones estables

> Un componente deberían ser tan abstracto como estable.

Los componentes estables también tienen que tener una parte abstracta para permitir ampliaciones, por el contrario los componentes inestables tienen que ser concretos para permitir cambios con facilidad.

### Calcular la abstracción de un componente

	Abstracción = N° de interfaces / N° de clases

El calculo de abstracción nos dará un numero entre 1 y 0, un componente con **1 solo tiene interfaces** y uno con **0 solo tiene clases**.

Un componente no tiene que ser 100% estable/concreto o 100% inestable/abstracto, tiene que estar en un punto medio, pero nunca en **esos** extremos.

Para ver la relación *estabilidad/abstracción* hay que hacer un gráfico:

![gráfico de relación estabilidad/abstracción]()

///
https://www.studocu.com/latam/document/universidad-ort-uruguay/diseno-de-aplicaciones-2/principios-de-paquetes-y-metricas/6303917
El libro *"Arquitectura limpia"* de Robert C.Martin.
///