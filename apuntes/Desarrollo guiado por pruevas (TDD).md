# Desarrollo guiado por pruebas
26_04_2022

El Desarrollo guiado por pruebas o TDD (Test driven develoment) es una metodología ágil para el desarrollo de software, en otras palabras una forma de trabajar al hacer una aplicación o algoritmo llevada a cabo por programadores.

El flujo de trabajo que seguimos es el siguiente:

Definir > Escribir pruebas > Programar > Pasar pruebas > Refactorizar

1. Definir lo que esperamos del código.

2. Escribir pruebas que nos permitan no solo verificar que el código que escribamos hace lo que esperámos, sino también para poder llegar a lo que esperámos.

3. Escribir el mínimo código posible para pasar la prueba o *test*, sin importar que el código sea sucio o con malas practicas, lo importante es pasar las pruevas.

4. Luego de pasar las pruebas tenemos que limpiar el código y refactorizarlo.


## Problemas que pueden surgir

1. Falta de apego, los programadores no siguen el flujo definido, por ejemplo, hacen el código primero y luego las pruebas.

2. Confundir TDD con una forma de trabajo para equipos de testing cuando no los es.

3. Habilidades insuficientes en testing por parte de los programadores, la escritura de las pruebas y sus cambios para negativo. Escribir un test no es algo que se toma a la ligera.

4. Discutir sobre como llevar a cabo TDD, esto además de ser una demora también termina deformando lo que es hacer TDD.

5. No saber como aplicar TDD a código legado. La forma más eficiente de hacer esto es aplicar TDD al nuevo código e ir aplicándolo al viejo a medida que se va modificando.

6. La falta de capacitación es lo que lleva a que las personas con poca experiencia en TDD terminen cometiendo muchos de los errores anteriores.

## diferentes formas de pasar una prueba (Green bar patterns)

* Fake it: Ir desde constantes a variables, ir desde lo fácil y obvió a lo complejo y lógico. <br>

	3 -> (1 + 2) -> (a + b)

* Implementacion obia: Ir directamente a la solución que creamos obvia y correcta. <br/>
	a + b

* Triangular: Ademas de iniciar como fake it, en este al pasar una prueba tenemos que escribir otra que nuestro código no pueda cumplir. 
Los test usados para triangular, osea los últimos podemos eliminarlos al terminar. 
La triangulación suele usarse cuando no sabemos como escribir un algoritmo o funcionalidad, cuando nos enfrentamos a algo desconocido.

