# Análisis sistémico
00_00_2026

La base teorica del analisis sistemico es la teoria general de sistemas, la cual establece que un sistema es un conjunto de elementos relacionados que trabajan juntos para lograr un objetivo común. 

Al analizar un problema en busca de una solución existen dos tipos de pensamientos: el tradicional y el sistémico.

El pensamiento tradicional busca la causa directa del problema y encuentra a un único responsable, un elemento aislado. Este enfoque puede no llegar al origen del problema e incluso puede empeorara la situación, ya que reacciona ante el problema sin invertir tiempo en comprenderlo, es un parche o una solución desconsiderada.

En cambio el pensamiento sistémico entiende el problema como un sistema, un conjunto de elementos relacionados. Donde la solución a largo plazo contiene varios cambios y ajustes no solo sobre los elementos sino también sobre sus relaciones. Podríamos encontrar un punto de partida para este análisis en el pensamiento tradicional, primero buscamos un elemento que parece central para luego identificar los elementos a su alrededor que lo influyen o con los cuales se relaciona. 

Por ejemplo el siguiente problema: en un supermercado cuando se acaba un producto se tarda mucho tiempo en reponer su stock. El pensamiento tradicional diría que el culpable es el gerente el cual no esta atento al stock, mientras que el pensamiento sistémico buscaría ver el cuadro completo ¿Porque el encargado tarda en hacer los pedidos? ¿Cuanto tiempo tardan en llegar los pedidos? ¿Como se realiza el seguimiento del stock? ¿Que otras tareas debe realizar el gerente? o incluso ¿Debe el gerente realizar el pedido? Todas estas preguntas nos revelan elementos, relaciones y diferentes factores que juntos conforman un sistema, y al comprenderlo podemos idear una solución.

## Modelos

Los modelos son representaciones intencionadas de un sistema donde nos enfocamos en lo importante según nuestro objetivo, permitiéndonos entender sus características y su estructura, por ejemplo, el mapa de una ciudad, es un modelo que muestra calles y algunos lugares destacados que nos sirven de referencia para nuestro objetivo, que es "orientarnos" y pasa por alto por ejemplo todos los locales y puestos de comida, información que solo es relevante si el mapa fuera uno gastronomico o turistico. 

Un modelo puede ser estático cuando muestra al sistema congelado en el tiempo o dinámico cuando muestra la evolución de este a traves del tiempo.  La naturaleza de un modelo puede ser conceptual o formal: los conceptuales buscan comunicar y explorar ideas, ayudandonos a representan la realidad para comprenderla, en cambio, los modelos formales dejan de ser ideas y pasan a ser echos, son representaciones matemáticas basadas en datos, esto permite ejecutarlos, realizar simulaciones y experimentar para evaluar su comportamiento y evolución.

## Ciclos causales

La realimentacion dentro de un sistema sucede cuando la salida del sistema vuelve a entrar al sistema permitiendo realizar ajustes en su funcionamiento interno para producir una mejor salida.

Los procesos de realimentacion pueden ser modelados mediante diagramas causales o diagramas de influencias que nos permiten analisar un sistema en base a las relaciones e influencias de sus elementos. Todo el enfasis se coloca en como se relacionan los elementos y los efectos que causan estas relaciones.

Existen dos ciclos basicos de realimentacion, los negativos y los positivos. Dentro de un sistema los ciclos de realimenacion negativa lo estabilizan ante perturbaciones externas reaccionando y anulando dicha perturbacion, por otro lado los ciclos de realimentacion positiva lo desestabilizan propagando y reforzando pertubaciones externas. Estos ciclos son acompañados de tres tipos de variables, las de nivel que acumulan valores, las de flujo que cambian sus valores y controlan a las de nivel, y por último las variables auxiliares que sirven como paso intermedio entre flujos y niveles. 

![Ejemplo de ciclo causal]()

Cualquier interaccion con el flujo cambia la acumulacion en las variables de nivel. Este cambio produce una salida y una realimentacion que controla al flujo cerrado el circulo causa-efecto.

Por ejemplo, en un diagrama sobre la difusion de una enferemedad podriamos tener 3 variables principales: _población infectada (nivel), tasa de contagio (flujo) y población vulnerable (axiliar)_.  Un cambio en cualquiera de estas variables afecta al resto, estas son las reñacopmes de influencia, por ejemplo: a mayor rasa de contagio, mayor es la población infectada; a mayor poblacion infectada, menor poblacion vulnerable y asi con el resto.

_Las interacciones con el flujo cambian la acumulacion en las variables de nivel_, al subir la tasa de contagio (flujo) creace la poblacion infectada (nivel), este cambio se propaga disminuyendo la poblacion vulnerable que a su vez aumenta la tasa de contagio, _la realimentacion controla a las variables de flujo_.

Convinando estos conceptos (ciclos y variables) podemos definir sistemas complejos e identificar arquetipos sistemicos que nos permiten modelar y comprender el comportamiento del sistema y las relaciones entre sus elementos.

## Dinamica de sistemas

Jay Forrester, un ingeniero, se da cuenta que la estructura impulsa al comportamiento y que la realimentacion moldea los resultados de un sistema, partiendo de esta base desarrolla la dinamica de sistemas que analiza como las relaciones dentro de un sistema permiten describir su estructura y explicar su comportamiento.

Los diagramas de forrester permiten pasar de un modelo conceptual a uno matematico que nos da la posibilidad de programar simulaciones para visualizar el comportamiento y la evolucion del sistema.

///
Apuntes personales sobre "Introducción al Análisis Sistémico" - Tecnicatura Universitaria en Programación Fullstack - Universidad Provincial de Córdoba.
Delgado Gutiérrez, J. A. (2005). El análisis sistémico y su proyección multidisciplinar. Encuentros multidisciplinares. https://repositorio.uam.es/server/api/core/bitstreams/9d19f658-d618-4fa4-873d-c7ea73ef331e/content
///


