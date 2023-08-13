# Diagrama de contexto de sistema
00_00_2023

Este tipo de diagramas nos permiten a un alto nivel con que elementos externos se relaciona una aplicación, se empiezan a usar en las primeras etapas de un proyecto para entender mejor el dominio y dialogar con el cliente, esto es posible gracias a que es un diagrama simple y para nada tecnico.

Una aplicación se relaciona con un elemento externo para pedir, recibir o enviar información. Son salidas y entradas de información del sistema.

Este tipo de diagramas se va modificando a lo largo del tiempo mientras mas se comprende al dominio y aplicación que se esta creando, podriamos decir que uno de estos diagramas es de calidad cuando ayuda a comprender a una aplicación y las relaciones que tiene con su entorno.

## Como se dibuja el diagrama

Los diagramas de contexto de sistema no contienen detalles sobre como funcionan las cosas, solo muestran una vista general.

1. Dibujamos a la aplicación: Un nombre rodeado de un circulo.

2. Dibujamos a un elemento externo que se relaciona con la aplicación: Un nombre encerrado en un cuadrado.

3. Dibujamos la relacion entre la aplicación y el elemento externo: Una flecha que un texto **muy corto** que indica para que se relacionan. 

Esta es una forma de dibujar un diagrama de contexto de sistema pero enrealidad no hay un estandar asi que sientete libre de hacerlo como te sientas mas comodo.

Ejemplo poco combencional:

 Aplicación del clima ----(Pide info del clima)----> API del clima
                      <---(Info del clima)---------- 
