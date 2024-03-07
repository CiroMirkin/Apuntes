# Pruebas unitarias
29_03_2022

Las pruebas unitarias (unit testing) son una forma de encontrar errores en una parte de código pequeña como una función o método. Esta practica forma parte de metodologías ágiles como el desarrollo guiado por pruebas (TDD) donde mayormente se escriben pruebas unitarias.

Beneficios de las pruebas unitarias:

* Aumento de calidad en el código.
* Sirven como documentación y ayudan a entender como debería funcionar el código.
* Seguridad luego de refactorizar código.
* Permiten probar el código independientemente de como este el resto de la aplicación

Las pruebas unitarias no son para verificar que el código funciona, ya que solo muestran que en ciertos casos el código se comportan como debería.

# Características de las puebas unitarias

Rápido, concreto e independiente son las principales características, sin ellas no se puede considerar una prueba unitaria.

* Rápido, se escriben y usan muchos.
* Concreto, prueba la menor cantidad de código posible.
* Independiente, no debe depender de otra prueba para poder testar.
* No debería alterar el estado de la aplicación.
* No debería contener lógica (ciclos, condiciones, etc).

### FIRST

Según las siglas de FIRST una pruba debería:

* Ser rapida
* Independiente
* Repetible
* Auto-validarce, mostrar si es o no valida.
* Oportuna, el mejor momento para escribir pruebas es antes de escribir código.

## Las tres A's del unit testing

* Arrange (organizar): Se definen los requisitos que debe cumplir el código.
* Act (actuar): Se ejecuta el test y da resultados.
* Assert (afirmar): Se comprueba que el resultado es el esperado.

///
*"Test-Driven Development - Una aproximación para entender su utilidad en el proceso de desarrollo de Software"*: http://conaiisi.frc.utn.edu.ar/PDFsParaPublicar/1/schedConfs/7/158-524-1-DR.pdf
El libro "Diseño ágil con TDD" de Carlos Blé jurado.
///