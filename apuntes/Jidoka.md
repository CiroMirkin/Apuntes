# Jidoka
26_08_2025

Jidoka es una metodología para sistemas productivos parte del _sistema de producción de Toyota (TPS)_ que plantea una **automatización con inteligencia humana**, osea una producción automática supervisada por personas donde el sistema o maquinaria debe ser capaz de detectar errores o defectos para asi detenerse automáticamente y evitar la fabricación de productos defectuosos.

Esta metodología tiene cinco principios clave:

1. El propio sistema debe detectar la existencia de anomalías o defectos.

2. Debemos detener la producción de forma segura, si es posible automáticamente o en su defecto de forma manual.

3. Al detener la producción se debe evaluar la situación y decidir si es posible seguir produciendo, debemos tener en cuenta que cada minuto/hora sin producir es dinero perdido, por ende debemos calificar la gravedad de los defectos teniendo en menta que buscamos calidad mas no perfección absoluta. 

4. Las anomalías no deben ser cotidianas por eso si es necesario se debe mejorar o ajustar el sistema para prevenir defectos importantes.

5. Se debe flexibilizar la usabilidad buscando que un operario por maquinaria o sistema no sea necesario, de esta forma el operario toma un rol de supervisor que interviene lo justo y necesario.

## Andon

El sistema de control visual _Andon_ implementa físicamente los principios de Jidoka utilizando tres elementos: Un tablero de estado, un indicador de estado y un botón para alertar un cambio de estado. 

Estos estados de los cuales hablamos son tres: Produciendo (verde), Detección de un problema (amarillo) y si luego de x cantidad de tiempo el problema detectado no se resuelve la producción se detiene (rojo). Cada uno de estos estados es visible dentro del tablero de estado el cual es accesible para cualquiera y muestra el estado de cada estación de producción en tiempo real, por último, existe un botón que permite al operador o sistema alertar sobre un cambio de estado.

Ademas de permitir visualizar el estado de producción general Andon también permite solicitar apoyo rápido, de esta forma en caso de problemas la ayuda va hacia el puesto de trabajo y no al revés.  

///
https://blog.toyota-forklifts.es/jidoka-que-es
https://safetyculture.com/es/temas/que-es-jidoka/
https://www.iebschool.com/hub/que-es-el-metodo-jidoka-y-como-implementarlo-tecnologia/
https://safetyculture.com/es/temas/sistema-andon/
///