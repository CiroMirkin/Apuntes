# Jidoka
00_00_2025

Jidoka es una metodología para sistemas productivos parte del _sistema de producción de Toyota (TPS)_ que plantea una **automatización con inteligencia humana**, una producción automática y con supervision humana. Ademas esta metodología también plantea que el sistema o maquinaria debe ser capaz de detectar errores/defectos y detenerse automáticamente para evitar la fabricación de productos defectuosos.

Principios clave:

1. El propio sistema debe detectar la existencia de anomalías y alertarnos.

2. Detener la producción, si es posible automáticamente o en su defecto de forma manual.

3. Evaluar la situación y decidir si es posible seguir produciendo. 

4. Prevenir para que la anomalía no vuelve a ocurrir y de ser necesario se debe mejorar el sistema.

## Andon

El sistema de control visual _Andon_ implementa físicamente los principios de Jidoka, para esto se utilizan tres elementos: Un tablero de estado, un indicador y un botón.

El tablero de estado debe ser accesible para cualquiera y se encarga de mostrar el estado de cada linea o estación de producción, a traves de un indicador del estado de producción: Produciendo (verde), Detección de problema (amarillo), producción detenida (rojo). Por último, el botón permite al operador o sistema alertar sobre un problema o detección en la producción.

///

///