v a c i o - i n f o r m a t i c o
====
*Autor: Mirkin Ciro* <br>
*Pertenece a: vacio-informatico* | [Github](https://github.com/vacio-informatico/)<br>
*Emitido el 29_03_2022*


# Unit testing

El unit testing o los tests unitarios son una forma de encontrar errores en una parte de código lo más pequeña posible (una función, método o clase). Como el unit testing es para encontrar errores y no para verificar que el código funciona sin tener errores, es por esto que son echos durante el desarrollo de una aplicación por programadores.

El aumento de calidad en nuestro código es uno de los beneficios del unit testing, ademas de que no solo puede servir como documentación sino también para entender como debería funcionar el código que vamos a escribir. También nos permite probar el código independientemente de como este el resto de la aplicación y nos da seguridad luego de refactorizar nuestro código.

> Test de caja blanca, es la categoría a la que pertenece el unit testing, ya que prueba la estructura y funcionamiento interno de la aplicación.

# Características del unit testing

Rápido, concreto e independiente son las principales características, sin ellas no se puede considerar un unit test.

<ul>
	<li>Rápido, se escriben y usan muchos.</li>
	<li>Concreto, Prueba la menor cantidad de código posible.</li>
	<li>Independiente, no debe depender de otro test para poder testear.</li>
	<li>No debe alterar el estado del sistema o del resto de la aplicación.</li>
	<li>NoNo debe contener lógica de negocios (ciclos, condiciones, etc).</li>
</ul>

## Las tres A's del unit testing

* Arrange (organizar): Se definen los requisitos que debe cumplir el código.
* Act (actuar): Se ejecuta el test y da resultados.
* Assert (afirmar): Se comprueba que el resultado es el esperado.

El unit testing no solo forma parte de la metodología ágil, sino que también suele tener mucha importancia dentro del desarrollo guiado por pruebas (TDD).

___
Dentro del material usado para redactar este apunte resaltan: El paper Test-Driven Development - <a href="">Una aproximación para entender su utilidad en el proceso de desarrollo de Software</a> 

Ademas puedes encontrar algunas de las librerias mas importantes de unit Testing en <a href="https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript">Wikipedia</a>, por ultimo si usas Javascript puedes usar <a href="https://jestjs.io">Jest</a>.
