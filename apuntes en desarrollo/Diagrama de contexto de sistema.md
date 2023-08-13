# Diagrama de contexto de sistema
00_00_2023

Este tipo de diagrama nos permite ver a un alto nivel con que elementos externos se relaciona una aplicación. Se empiezan a usar en las primeras etapas de un proyecto para entender mejor el dominio y dialogar con el cliente, esto es posible gracias a que es un diagrama simple y para nada técnico.

Una aplicación se relaciona con un elemento externo para pedir, recibir o enviar información. Son salidas y entradas de información del sistema.

Este tipo de diagrama se va modificando a lo largo del tiempo mientras más se comprende el dominio y aplicación que se está creando, podríamos decir que uno de estos diagramas es de calidad cuando ayuda a comprender para que y con que elementos de su entorno se relaciona una aplicación

## Como se dibuja el diagrama

Los diagramas de contexto de sistema no contienen detalles sobre como funcionan las cosas, solo muestran una vista general.

1. Dibujamos a la aplicación: Un nombre rodeado de un círculo.

2. Dibujamos a un elemento externo que se relaciona con la aplicación: Un nombre encerrado en un cuadrado.

3. Dibujamos la relación entre la aplicación y el elemento externo: Una flecha con un texto **muy corto** que indica para qué se relacionan la aplicación y el elemento externo.

Esta es una forma de dibujar un diagrama de contexto de sistema, pero en realidad no hay un estándar, siéntete libre de hacerlo como te sientas más cómodo.

Ejemplo de un diagrama poco comvencional:

 Aplicación del clima ----(Pide info del clima)----> API del clima
                      <---(Info del clima)---------- 

///
https://es.wikipedia.org/wiki/Diagrama_de_contexto_de_sistema
https://www.edrawsoft.com/es/context-diagram/
https://estudyando.com/diagrama-de-contexto-del-sistema-descripcion-y-ejemplos/
///