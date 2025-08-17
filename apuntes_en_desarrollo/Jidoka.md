# Jidoka
00_00_2025

Jidoka es una metodología para sistemas productivos parte del _sistema de producción de Toyota (TPS)_ que plantea una **automatización con inteligencia humana**, osea una producción automática supervisada por personas. Ademas esta metodología también plantea que el sistema o maquinaria debe ser capaz de detectar errores o defectos para asi detenerse automáticamente y evitar la fabricación de productos defectuosos.

Esta metodología tiene cuatro principios clave:

1. El propio sistema debe detectar la existencia de anomalías o defectos.

2. Detener la producción de forma segura, si es posible automáticamente o en su defecto de forma manual.

3. Evaluar la situación y decidir si es posible seguir produciendo, debemos tener en cuenta que cada minuto/hora sin producir es dinero perdido, por ende debemos evaluar la gravedad de los defectos ya que buscamos calidad mas no perfección absoluta. 

4. Prevenir, las anomalías no deben ser cotidianas por eso de ser necesario se debe mejorar o ajustar el sistema.

5. Flexibilizar la usabilidad para que no sea necesario un operario por maquinaria o sistema, de esta forma el operario toma el rol de supervisor el cual interviene lo justo y necesario.

## Andon

El sistema de control visual _Andon_ implementa físicamente los principios de Jidoka, para esto se utiliza tres elementos: Un tablero de estado, un indicador de estado y un botón para alertar un cambio de estado. 

Estos estados de los cuales hablamos son tres: Produciendo (verde), Detección de un problema (amarillo) y si luego de x cantidad de tiempo el problema detecto no ser resuelve se detiene la producción (rojo). Cada uno de estos estados es visible dentro del tablero de estado el cual es accesible para cualquiera y muestra el estado de cada estación de producción, por último, el botón permite al operador o sistema alertar sobre un cambio de estado.

Ademas de permitir visualizar el estado de producción general Andon también permite solicitar apoyo rápido, de esta forma en caso de problemas la ayuda va hacia el puesto de trabajo. 

## Jidoka, Andon y la programación

Jidoka y Andon tienen relación directa con la forma de producir software profesionalmente,  

///

///