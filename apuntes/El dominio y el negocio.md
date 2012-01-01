# El dominio y el negocio
(C.Mirkin) 04_03_2023

El dominio y el negocio son dos partes muy importantes dentro de una aplicación y su desarrollo. Cuando hablamos de **dominio** hablamos sobre todo de lo relacionado a la **industria y/o entorno** donde se usa una aplicación y cuando hablamos de **negocio** hablamos más de lo relacionado con **el cliente y lo que quiere** (funcionalidades y características que pide).

Si desarrollamos una aplicación para una panadería deberíamos conocer toda la operativa de la panadería que involucra a la aplicación, conocer esas acciones del día a día en la panadería en las que ayudara o estará involucrada nuestra aplicación.

	Para hablar de la panadería podría referirme a ella 
	como un negocio y no me estaría refiriendo al negocio de la aplicación.

Desarrollamos al "negocio" teniendo en cuenta el "dominio" del mismo, pero sobre todo es importante conocer y entender ambos. 

## La responsabilidad unica (SRP)

Un componente debería tener una sola razón para cambiar, eso nos dice el principio, ahora bien esta "razón de cambio" mientras más grande sea el componente más relación tendrá con el dominio y/o negocio, no vamos a poder saber si cumplimos con este principio si no conocemos lo suficiente el dominio y negocio de la aplicación.

Si comprendemos el negocio podemos identificar y comprender los motivos de cambio de cada componte.
___
Material usado: Un capitulo del libro *"código sostenible"* de *Carlos Blé Jurado*.