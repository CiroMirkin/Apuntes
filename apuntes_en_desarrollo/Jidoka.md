# Jidoka
00_00_2025

Jidoka es una metodología para sistemas productivos parte del _sistema de producción de Toyota (TPS)_ que plantea una **automatización con inteligencia humana**, osea una producción automática supervisada por personas. Ademas esta metodología también plantea que el sistema o maquinaria debe ser capaz de detectar errores o defectos para asi detenerse automáticamente y evitar la fabricación de productos defectuosos.

Esta metodología tiene cuatro principios clave:

1. El propio sistema debe detectar la existencia de anomalías y alertarnos.

2. Detener la producción, si es posible automáticamente o en su defecto de forma manual al detectar anomalías.

3. Evaluar la situación y decidir si es posible seguir produciendo, debemos tener en cuenta que cada minuto/hora sin producir es dinero perdido, por ende debemos evaluar la gravedad de los defectos ya que buscamos calidad mas no perfección absoluta. 

4. Prevenir, las anomalías no deben ser cotidianas por eso de ser necesario se debe mejorar o ajustar el sistema.

## Andon

El sistema de control visual _Andon_ implementa físicamente los principios de Jidoka, para esto se utiliza tres elementos: Un tablero de estado, un indicador de estado y un botón para alertar un cambio de estado. Estos estados de los cuales hablamos son tres: Produciendo (verde), Detección de un problema (amarillo) y Producción detenida (rojo), cada uno de estos estados es visible dentro del tablero de estado el cual es accesible para cualquiera y muestra el estado de cada linea o estación de producción, por último, el botón permite al operador o sistema alertar sobre un cambio de estado.

///

///