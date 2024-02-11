# Pruebas unitarias
29_03_2022

El unit testing o pruebas unitarias son una forma de encontrar errores en una parte de código lo más pequeña posible (una función o método). Como el unit testing es para encontrar errores y no para verificar que el código funciona sin tener errores son echos durante el desarrollo de una aplicación por programadores.

El aumento de calidad en nuestro código es uno de los beneficios del unit testing, ademas de que no solo puede servir como documentación sino también para entender como debería funcionar el código que vamos a escribir. También nos permite probar el código independientemente de como este el resto de la aplicación y nos da seguridad luego de refactorizar nuestro código.

> Test de caja blanca, es la categoría a la que pertenece el unit testing, ya que prueba la estructura y funcionamiento interno de la aplicación.

# Características del unit testing

Rápido, concreto e independiente son las principales características, sin ellas no se puede considerar un unit test.

* Rápido, se escriben y usan muchos.
* Concreto, prueba la menor cantidad de código posible.
* Independiente, no debe depender de otro test para poder testar.
* No debe alterar el estado del sistema o del resto de la aplicación.
* No debe contener lógica (ciclos, condiciones, etc).

## Las tres A's del unit testing

* Arrange (organizar): Se definen los requisitos que debe cumplir el código.
* Act (actuar): Se ejecuta el test y da resultados.
* Assert (afirmar): Se comprueba que el resultado es el esperado.

El unit testing forma parte de metodologías ágiles, como lo puede ser el desarrollo guiado por pruebas (TDD).

///
*"Test-Driven Development - Una aproximación para entender su utilidad en el proceso de desarrollo de Software"*: http://conaiisi.frc.utn.edu.ar/PDFsParaPublicar/1/schedConfs/7/158-524-1-DR.pdf
El libro "Diseño ágil con TDD" de Carlos Blé jurado.
///