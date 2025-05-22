# Patrón Model-View-Intent (MVI)
00_00_2025

Este patrón arquitectónico ademas de proveernos una forma de organizar la presentación de los datos y las interacción del usuario, también nos provee un forma de manejar un flujo de datos asíncrono (No secuencial), ya que aplica el paradigma de programación reactiva el cual se base en los patrones de diseño _Observer_ e _Interator_.

![Diagrama base MVI](../imagenes/)

El **Modelo** define como son los datos, estos datos son entregados a la **Vista** quien los muestra al usuario.

Cuando el usuario hace una interacción esta es recibida por la **Vista** y enviada a una **Intencion** la cual crear un nuevo estado que remplazará al estado actual. Por último para finalizar el ciclo la **Vista** se actualizaría mostrar el nuevo estado.

Veamos en detalle cada cada elemento:

* El Modelo (Model) es un objeto único en el sistema que define cuales son los datos que se mostraran al usuario o los que podrá usar.

* El Estado (State) es quien tiene los datos definidos por el modelo. Este mismo es inmutable, no debería ser posible poder modificarlo directamente, en su lugar se debería crear una nuevo estado el cual remplazaría al estado actual.

* La Vista (View) unicamente se encarga de mostrar el modelo de los datos, de ser una una función esta no retornaría nada.

* La Intención (Intent) son acciones las cuales se producen a traves de la vista, al producirse una interacción por parte del usuario la intención puede crear un nuevo modelo de datos basándose en la interacción recibida. 

![Diagrama de MVI con un ViewModel o ViewController](../imagenes/)

El determinismo es un concepto muy importante a la hora de implementar este patron ya que establece que la misma acción con el mismo estado inicial debería dar el mismo resultado. Buscamos que la información fluya en una sola dirección y para obtener una secuencia clara y trasparente de eventos.

///

///