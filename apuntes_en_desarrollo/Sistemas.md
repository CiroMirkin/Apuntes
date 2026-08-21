# Sistemas
00_00_2026

La teoría general de sistemas establece que un sistema es un conjunto de elementos relacionados que trabajan juntos para lograr un objetivo común. Todo sistema tiene un contexto, el entorno que lo rodea y con el cual intercambia recursos o información. Ningún sistema existe de forma aislada, este influye sobre su entorno que a su vez también lo influye, por lo que comprender el contexto es tan importante como comprender los elementos internos de un sistema.

Ademas del contexto, existen otros dos conceptos: la sinergia y la retroalimentación. La primera dicta que el resultado conjunto de los elementos relacionados es distinto a lo que cada elemento podría lograr individualmente, es decir, la union y la interacción entre las partes genera un valor que ninguna de ellas posee de forma aislada. Por otro lado, la segunda es el mecanismo por el cual la salida de un sistema vuelve a ingresar a el como una nueva entrada, permitiéndole ajustar su comportamiento en función de sus propios resultados.

## Análisis sistémico

Cuando analizamos un problema en busca de una solución existen dos tipos de pensamientos: el tradicional y el sistémico.

El pensamiento tradicional busca la causa directa del problema y encuentra a un único responsable, un elemento aislado. Este enfoque puede no llegar al origen del problema e incluso puede empeorara la situación, ya que reacciona ante el problema sin invertir tiempo en comprenderlo, es un parche, una solución desconsiderada.

En cambio el pensamiento sistémico entiende el problema como un sistema, un conjunto de elementos relacionados. Donde la solución a largo plazo contiene varios cambios y ajustes no solo sobre los elementos sino también sobre sus relaciones. Podríamos encontrar un punto de partida para este análisis en el pensamiento tradicional, primero buscamos un elemento que parece central para luego identificar los elementos a su alrededor que lo influyen o con los cuales se relaciona. 

Por ejemplo, en el siguiente problema dentro de un supermercado al acabarse un producto hay una gran demora en reponer su stock. El pensamiento tradicional diría que el culpable es el gerente el cual no esta atento al stock, mientras que el pensamiento sistémico buscaría ver el cuadro completo ¿Porque el encargado tarda en hacer los pedidos? ¿Cuanto tiempo tardan en llegar los pedidos? ¿Como se realiza el seguimiento del stock? ¿Que otras tareas debe realizar el gerente? o incluso ¿Debe el gerente realizar el pedido? Todas estas preguntas nos revelan elementos, relaciones y diferentes factores que juntos conforman un sistema, y al comprenderlo podemos idear una solución.

## Modelos

Los modelos son representaciones intencionadas de un sistema donde nos enfocamos en lo importante según nuestro objetivo, permitiéndonos entender sus características y su estructura, por ejemplo, el mapa de una ciudad, es un modelo que muestra calles y algunos lugares destacados que nos sirven de referencia para nuestro objetivo, que es "orientarnos" y pasa por alto por ejemplo todos los locales y puestos de comida, información que solo es relevante si el mapa fuera uno gastronómico o turístico. 

Un modelo puede ser estático cuando muestra al sistema congelado en el tiempo o dinámico cuando muestra la evolución de este a traves del tiempo.  La naturaleza de un modelo puede ser conceptual o formal: los conceptuales buscan comunicar y explorar ideas, ayudándonos a representan la realidad para comprenderla, en cambio, los modelos formales dejan de ser ideas y pasan a ser echos, son representaciones matemáticas basadas en datos, esto permite ejecutarlos, realizar simulaciones y experimentar para evaluar su comportamiento y evolución.

## Ciclos causales

La realimentación dentro de un sistema sucede cuando una salida vuelve a entrar al sistema permitiéndole realizar ajustes en su funcionamiento interno. En lugar de pensar en una relación lineal donde A causa B, la realimentación nos obliga a pensar un círculo: A causa B, B causa C, y C vuelve a influir sobre A. Este retorno de la salida hacia la entrada es lo que le permite a un sistema autorregularse.

Los procesos de realimentación pueden ser modelados mediante diagramas causales o diagramas de influencias que nos permiten comprender como se relacionan los elementos y los efectos que causan estas relaciones.

Existen dos ciclos básicos de realimentación, los negativos y los positivos. Dentro de un sistema los ciclos de realimentación negativa lo estabilizan ante perturbaciones externas reaccionando y anulando dicha perturbación, por otro lado los ciclos de realimentación positiva lo desestabilizan propagando y reforzando perturbaciones externas, generando un crecimiento o una caída cada vez mas pronunciada sin un punto de equilibrio natural, salvo que algo externo lo frene. Es importante recalcar que los términos "negativo" y "positivo" hacen referencia a la reacción ante una perturbación, anularla o amplificarla.

En sistemas complejos rara vez encontramos un único ciclo actuando de forma aislada. Lo normal es encontrar varios ciclos positivos y negativos compitiendo entre si, y es precisamente esta combinación la que determina el comportamiento general de un sistema a lo largo del tiempo.

Estos ciclos son acompañados de tres tipos de variables que trabajan en conjunto para dar forma al comportamiento del sistema: las variables de nivel, las variables de flujo y las variables auxiliares.

Las variables de nivel acumulan valores a lo largo del tiempo, representando el estado del sistema en un momento dado y solo pueden modificarse a traves de las variables de flujo, las cuales determinan su comportamiento a traves de reglas, condiciones permiten definir "cuanto" entra o sale de una variable de nivel. Por ultimo, las variables auxiliares sirven como paso intermedio entre flujos y niveles, permitiéndonos representar cálculos o condiciones intermedias que actúan sobre el flujo.

Por ejemplo, en un diagrama sobre la difusión de una enfermedad podríamos tener 3 variables principales: _población infectada (nivel), tasa de contagio (flujo) y población vulnerable (auxiliar)_.  Un cambio en cualquiera de estas variables afecta al resto, esto se conoce como relaciones de influencia, por ejemplo: a mayor tasa de contagio, mayor es la población infectada; a mayor población infectada, menor población vulnerable y asi con el resto.

_Las interacciones con el flujo cambian la acumulación en las variables de nivel_, al subir la tasa de contagio (flujo) crece la población infectada (nivel), este cambio se propaga disminuyendo la población vulnerable que a su vez aumenta la tasa de contagio.

Combinando estos conceptos (ciclos y variables) podemos definir sistemas complejos e identificar arquetipos sistémicos que nos permiten modelar y comprender el comportamiento del sistema y las relaciones entre sus elementos.

## Dinámica de sistemas

Jay Forrester, un ingeniero, parte de la premisa de que la estructura impulsa al comportamiento y que la realimentación moldea los resultados de un sistema, de esta base desarrolla la dinámica de sistemas que analiza como las relaciones dentro de un sistema permiten describir su estructura y explicar su comportamiento.

Los diagramas de Forrester nos permiten modelar un ciclo causal en dos niveles complementarios. A nivel conceptual, mediante diagramas completos y a nivel formal traduciendo estos mismos elementos en formulas matemáticas que describen con precision los procesos del sistema, cada flujo pasa a ser una ecuacion y cada variable auxiliar se convierte en un calculo intermedio que depende de otras variables del modelo.

Esta traducción de lo conceptual a lo formal no es un simple ejercicio matemático, sino que es justamente lo que nos da la posibilidad de programar simulaciones, es decir, de ejecutar el modelo a lo largo del tiempo en una computadora para visualizar el comportamiento y la evolución del sistema. Gracias a esto podemos, por ejemplo, poner a prueba distintos escenarios modificando los valores iniciales o las reglas del modelo. 

La dinámica de sistemas funciona como un puente entre la comprensión cualitativa de un sistema y su comportamiento cuantitativo, permitiéndonos pasar de una idea general sobre como funcionan las cosas a un modelo que podemos ejecutar, medir y ajustar.

///
Apuntes personales sobre "Introducción al Análisis Sistémico" - Tecnicatura Universitaria en Programación Fullstack - Universidad Provincial de Córdoba.
Delgado Gutiérrez, J. A. (2005). El análisis sistémico y su proyección multidisciplinar. Encuentros multidisciplinares. https://repositorio.uam.es/server/api/core/bitstreams/9d19f658-d618-4fa4-873d-c7ea73ef331e/content
///


