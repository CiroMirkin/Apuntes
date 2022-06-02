v a c i o - i n f o r m a t i c o
====
*Autor: Mirkin Ciro* <br>
*Pertenece a: vacio-informatico* | [Github](https://github.com/vacio-informatico/)<br>
*Emitido el 22_09_2021*

# Principios SOLID
Los cinco principios que componen a SOLID fueron creados por *Robert C. Martin* con el propósito de que una aplicación sea mas legible, mantenible y escalable a largo plazo, aunque como es de esperar no siempre se pueden cumplir los cinco principios pero es bueno poder usar la mayor parte de ellos en el desarrollo de una aplicación.

## Definición de principios
Como se describió anteriormente no siempre se cumplen todos los principio y esto no significa que una aplicación sea mala o difícil de mantener, ya que las implementación de estos principios dependen de la orientación y finalidad que puede tener una aplicación, es por eso que hay que sopesar cuales principios traen mayor veneficio dependiendo de la aplicación.

* Single responsibility principle o Principio de responsabilidad única.
* Open/closed principle o Principio de abierto/cerrado.
* Liskov substitution principle o Principio de sustitución de Liskov.
* Interface segregation principle o Principio de segregación de la interfaz.
* Dependency inversion principle o Principio de inversión de dependencia.

### Principio de responsabilidad única (SRP)
El principio de responsabilidad única propone que una clase debería tener una sola razón para cambiar. La razon de cambio es la responsabilidad que tienen en comun todos los metodos dentro de una clase, ya que todos los metodos de una clase deberian tener algo en comun.

Este principio no es solo aplicable a la POO (programación orientada a objetos) ya que también se puede aplicado en la programación funcional o en los micro servicios.

    Dentro de una clase los métodos deberían tener sus responsabilidades 
	relacionas y asi la clase tendria una sola razon para cambiar.

Para saber más sobre el tema se puede consultar :

* <a href="">El paper de Uncle Bob sobre SRP.</a>
* <a href="EWD447.pdf">El paper de dijkstra sobre Separation of concerns.</a>
* <a href="./responsabilidad_unica.html">Nuestro apunte sobre responsabilidad unica.</a>

### Principio de abierto/cerrado (OCP)
El principio de abierto/cerrado propone que una clase debería estar abierta a su expansión pero cerrada a su modificación, esto se logra a través de una buena administración de lógica e interfaces ya que se propone que la lógica de una clase no debería modificarse al variar los datos o factores entrantes, sino adaptarse automáticamente al variar los datos de entrada. 

> Ejemplo: creamos una aplicación que pinta objetos, está en su primera versión solo tendría cinco colores y dos patrones, la misma recibe el color a usar y tiene una condición para cada color y patrón. Pero luego querríamos que el usuario ingresé el nombre del color a usar, esto ocasionaría que <strong>tengamos que modificar</strong> la lógica de la clase y adaptarla al nuevo objetivo que contiene más opciones. 

> Ejemplo abierto/cerrado: creamos una aplicación que pinta objetos, esta contiene una clase que recibe el color a usar y una interfaz (u objeto dependiendo del lenguaje) con todos los colores y patrones existentes, así solo se compara la entrada con los valores de la interfaz y <strong>no es necesario modificar</strong> el código al añadir más colores o patrones.

    Una clase no debería modificarse (close) y si adaptarse (open) a 
    la diferente información o datos a procesar.

### Principio de sustitucion de Liskov (LSP)
El principio de sustitucion de liskov tiene como objetivo asegurar que una sub-clase pueda asumir el lugar de su superclase sin errores, en términos más simples, si una clase funciona con una clase principal (interfacez) no debe dejar de funcional al cambiar esa clase principal por una clase secundaria (clase que implementa la interfaz principal).

    La diferencia entre una clase y su interfaz debería estar solo 
    en el nombre, ya que implementan los mismos métodos de la misma 
    manera con retornos de igual valor. 

### Principio de segregación de la interfaz (ISP)
El principio de segragacion de la interfaz propone que una interfaz no debería acumular funcionalidades, esto con el fin de evitar el crecimiento excesivo de la interfaz ya que es mejor dividir ese exceso en varias interfaces. Con esto último se logra que las clases clientes solo usen las interfaces con las funcionalidades que necesitan y además no hay que modificar las clases cuando sus interfaces se sobrecargan de funcionalidades que no usan.

    Las clases implementan solo lo que necesitan esto se logra creando 
    interfaces para fines concretos (especializadas) y no con interfaces 
    que contengan métodos que posiblemente no todas las clases usen.

### Principio de inversion de la dependencia (DIP)
El principio de inversión de dependencia tiene como objetivo desacoplar las clases de alto nivel de las clases de bajo nivel, dicho de otro modo la clase que implementa un módulo no debería depender del módulo sino de abstracciones de ese modulo, así se logra que al cambiar ese modulo, base de datos o framework las clases sigan funcionando solo con realizar pequeños cambios.

    Una clase debería depender de una abstracción (interfaces) y no de 
    una implementación concreta.

---
Ya en el final de este artículo hay que aclarar que cada uno de estos principios puede ser más ampliado en teoría, pero lo explicado es suficiente para ser aplicado en aplicaciones y desarrollos pequeños.
