v a c i o - i n f o r m a t i c o
====
*Autor: Mirkin Ciro* <br>
*Pertenece a: vacio-informatico* | [Github](https://github.com/vacio-informatico/)<br>
*Emitido el 26_04_2022*


# Test driven develoment

Test driven develoment o TDD es una forma de trabajar al hacer un software (aplicación, sistema o incluso un algoritmo) llevada a cabo por programadores.

El flujo de trabajo que seguimos es el siguiente:

	Definir requisitos -> Escribir prueba(test) -> Escribir código -> Al pasar el test, refactorizar el código

<ul>
<ol>
	<li>Definir lo que esperamos del código.</li>
	<li>Escribir pruebas que nos permitan no solo verificar que el código que escribamos hace lo que esperábamos, sino también buscar errores en el código para poder llegar a lo que esperábamos.</li>
	<li>Escribir el mínimo código posible para pasar la prueba o "test" desde ahora, no importa si nuestro código es sucio o tiene malas practicas, lo importante es pasar el test, todo lo demas viene después.</li>
	<li>Luego de pasar un test o una prueba tenemos que limpiar el código y eliminar las repeticiones, refactorizar el código.</li>
</ol>
</ul>


## Problemas al trabajar con TDD

1. Falta de apego, los programadores no siguen el flujo definido, por ejemplo, hacen el código primero y luego las pruebas.

2. TDD no es una forma de trabajo para equipos de testing, es una forma de trabajo para programadores. No confundir.

3. Habilidades insuficientes en testing por parte de los programadores, la escritura de las pruebas y sus cambios para negativo. Escribir un test no es algo que se toma a la ligera.

4. Discutir sobre como llevar a cabo TDD, es un gran problema no solo porque es una demora sino también porque esto terminar deformando TDD.

5. No saber como aplicar TDD a código legado. La forma más eficiente de hacer esto es aplicar TDD al nuevo código e ir aplicándolo al viejo a medida que se va modificando.

6. Falta de capacitación, es lo que lleva a que las personas con poca experiencia en TDD terminen cometiendo muchos de los errores anteriores.

## Green bar patterns

Los Green bar patterns son diferentes formas de pasar un test o prueba.

* Fake it, ir desde constantes a variables, ir desde lo fácil/obvió a lo complejo/lógico.
	3
	1 + 2a + b

* Obious implementation, ir directamente a la solución que creamos obvia y correcta.
a + b

* Triangule, ademas de iniciar como fake it, en este al pasar una prueba tenemos que escribir otra que nuestro código no pueda cumplir. 
Los test usados para triangular, osea los últimos podemos eliminarlos al terminar. 
La triangulación suele usarse cuando no sabemos como escribir un algoritmo o funcionalidad, cuando nos enfrentamos a algo desconocido.

---

También se puede investigar sobre unit testing y los demás tipos de test usados en TDD, metodologías ágiles y sobre complejidad ciclomática.
