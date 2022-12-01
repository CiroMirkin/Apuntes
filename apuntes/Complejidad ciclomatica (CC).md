# Complejidad ciclomática (CC)

(C.Mirkin) 01_12_2022

La complejidad ciclomática es una forma de medir la complejidad de un algoritmo, mientras menos caminos, rutas o flujos tenga un algoritmo más simple es. Por ejemplo, un algoritmo que solo suma dos variables es mucho más simple que uno con *if/else*, ya que en este último hay dos caminos, el del *if* donde se hace una cosa y el *else* donde se hace otra..

## Formas de sacar el CC de un código

Dibuja un diagrama de flujo **muy simple** del código donde solo visualices los componentes como condiciones o ciclos, una vez terminado, cuenta los nodos y las líneas que los unen (aristas).

[Ejemplo de un diagrama de flujo simple de un *if/else*.](https://cdn.education-wiki.com/img/software-development-basics/4574012/cyclomatic-complexity-2.png.webp)

	Aristas - Nodos + 2 = CC
	Nodos predicados + 1 = CC
	Numero de regiones + 1 = CC

> Los nodos predicados son esos nodos de los que salen dos líneas. 
> Cuando los nodos se unen con líneas se crean espacios, esos espacios son las regiones.

Si no quieres dibujar un diagrama de flujo, entonces puedes contar la cantidad de instrucciones que crean caminos o cambios en el flujo del código. Empezando en uno cuenta cada *if*, cada *else*, cada *case*; cada *while*, *for*, *foreach*; el operador *or*, etc. La cantidad de todos estos elementos determina el CC de tu algoritmo.

Estos son dos criterios que puedes usar para contrastar el CC de un código:

| Complejidad ciclomatica | Riesgo o simplicidad |
|::|--|
| 1 - 10 | Código provablemente simple. |
| 11 - 20 | Código un poco complejo, riesgo moderado. |
| 21 - 49 | Código complejo, alto riesgo. |
| 50 | Código no testeable, muy alto riesgo. |

<br>

| Complejidad ciclomatica | Definición |
|::|--|
| 0 - 5 | Probablemente bueno. |
| 6 - 10 | Podrías pensar en como simplificarlo. |
| 11+ | Hay que simplificarlo, intenta dividiéndolo. |

## Un CC ni muy alto ni muy bajo

El CC nos sirve para medir la complejidad del código a nivel lógico, pero recuerda que somos programadores, personas, **programa para que las personas entiendan tu código** total las máquinas entienden cualquier cosa, en cambio nosotros no. No olvides la carga cognitiva que puede llegar a tener un código.

___
Actualmente existen programas que automáticamente te muestran el CC de tu código, pero hacer uno que lo haga no es mala idea para un proyecto y/o práctica.

Material usado: [Paper origen de Thomas J.McCabe](http://www.literateprogramming.com/mccabe.pdf), [mpijierro.medium.com](https://mpijierro.medium.com/complejidad-ciclom%C3%A1tica-y-como-reducirla-7374c215f666), [oscarmoreno.com](http://oscarmoreno.com/la-complejidad-ciclomatica/) y [education-wiki](https://es.education-wiki.com/4574012-cyclomatic-complexity) .

