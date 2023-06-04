# Complejidad ciclomática (CC)

(C.Mirkin) 01_12_2022

La complejidad ciclomática es una forma de medir la complejidad de un algoritmo, mientras menos caminos, rutas o flujos tenga un algoritmo más simple es. Por ejemplo, un algoritmo que solo suma dos variables es mucho más simple que uno con *if/else*, ya que en este último hay dos caminos, el del *if* donde se hace una cosa y el *else* donde se hace otra.

## Formas de sacar el CC de un código

Dibuja un diagrama de flujo **muy simple** del código donde solo visualices los componentes como condiciones o ciclos, una vez terminado, cuenta los nodos y las líneas que los unen (aristas).

[Ejemplo de un diagrama de flujo simple de un *if/else*.](https://cdn.education-wiki.com/img/software-development-basics/4574012/cyclomatic-complexity-2.png.webp)

	Aristas - Nodos + 2 = CC
	Nodos predicados + 1 = CC
	Numero de regiones + 1 = CC

> Los nodos predicados son esos nodos de los que salen dos líneas. <br>
> Cuando los nodos se unen con líneas se crean espacios, esos espacios son las regiones.

Si no quieres dibujar un diagrama de flujo, entonces puedes contar la cantidad de instrucciones que crean caminos o cambios en el flujo del código. Empezando en uno cuenta cada *if*, cada *else*, cada *case*; cada *while*, *for*, *foreach*; el operador *or*, etc. La cantidad de todos estos elementos determina el CC de tu algoritmo.

Estos son dos criterios que puedes usar para contrastar el CC de un código:

<table>
    <thead>
        <tr>
            <th>Complejidad ciclomatica</th>
            <th>Riesgo o simplicidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1 - 10</td>
            <td>Código provablemente simple.</td>
        </tr>
        <tr>
            <td>11 - 20</td>
            <td>Código un poco complejo, riesgo moderado.</td>
        </tr>
        <tr>
            <td>21 - 49</td>
            <td>Código complejo, alto riesgo.</td>
        </tr>
        <tr>
            <td>50</td>
            <td>Código no testeable, muy alto riesgo.</td>
        </tr>
    </tbody>
</table>
<br>
<table>
    <thead>
        <tr>
            <th>Complejidad ciclomatica</th>
            <th>Definición</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1 - 5</td>
            <td>Probablemente bueno.</td>
        </tr>
        <tr>
            <td>6 - 10</td>
            <td>Podrías pensar en como simplificarlo.</td>
        </tr>
        <tr>
            <td>11+</td>
            <td>Hay que simplificarlo, intenta dividiéndolo</td>
        </tr>
    </tbody>
</table>

## Un CC ni muy alto ni muy bajo

El CC nos sirve para medir la complejidad del código a nivel lógico, pero recuerda que somos programadores, personas, **programa para que las personas entiendan tu código** total las máquinas entienden cualquier cosa, en cambio nosotros no. No olvides la carga cognitiva que puede llegar a tener un código.

___
Actualmente existen programas que automáticamente te muestran el CC de tu código, pero hacer uno que lo haga no es mala idea para un proyecto y/o práctica.

///
Paper origen de Thomas J.McCabe: http://www.literateprogramming.com/mccabe.pdf 
https://mpijierro.medium.com/complejidad-ciclom%C3%A1tica-y-como-reducirla-7374c215f666
http://oscarmoreno.com/la-complejidad-ciclomatica/
https://es.education-wiki.com/4574012-cyclomatic-complexity
///