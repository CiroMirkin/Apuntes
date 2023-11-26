# Principios SOLID
22_09_2021 - 10_03_2022 - 26_11_2023

Cinco principios reunidos por *Robert C. Martin* que definen unas bases de diseño y buenas prácticas muy comunes en casi todos los entornos y contextos.

* Principio de responsabilidad única (Single responsibility principle).
* Principio de abierto/cerrado (Open/closed principle).
* Principio de sustitución de Liskov (Liskov substitution principle).
* Principio de segregación de la interfaz (Interface segregation principle).
* Principio de inversión de dependencia (Dependency inversion principle).

## Responsabilidad única (SRP)

Cada parte de una aplicación debería tener una sola razón para cambiar, debería tener una sola responsabilidad.

Piensa en un cambio, cualquier cosa. Ahora piensa a donde tienes que ir para realizarlo. Dime ¿Fuiste a un solo lugar? Si la respuesta es no, probablemente no estés aplicando este principio, deberías ser capaz de encontrar un lugar y estar seguro de que estas en el lugar correcto, seguro de que cambios o errores no afectaran a otras partes del código.

Cuando una clase se hace responsable de algo, es algo que esta presente en toda la clase, si para hacer un cambio tienes que modificar varias clases es probable que tengas que revisar la responsabilidad que tienen cada una.

### Responsabilidad compartida

Tal cual suena, hay veces en que separamos una misma responsabilidad en partes y terminamos con dos o más clase que tienen la misma responsabilidad, en estos casos lo mejor puede ser fusionar estas clases. Nos damos cuenta de esto cuando dos clases siempre se usan juntas, siempre, casi siempre.

## Principio de abierto/cerrado (OCP)

Este principio propone que las partes de una aplicación deberían poder modificar su comportamiento sin necesidad de cambiar su código, abierto para su expansión y cerrado para su modificación. El patrón estrategia, el patrón decorador o la composición nos ayudará a aplicar este principio sobre todo al usar POO.

Si aplicamos este principio a cada parte de una aplicación obtendríamos una aplicación extremadamente compleja, tanto que seria difícil de cambiar y no es eso lo que buscamos, por eso hay que identificar en que partes y grado trae beneficios. Aun así existe un punto medio en el cual creamos código que permita una expansión haciendo algunas modificaciones, por ejemplo encapsular dependencias para permitir un futuro desacoplamiento.

## Principio de sustitución de Liskov (LSP)

Una clase base debería poder remplazar a las clases que hereden de ella, pero es mejor evitar la herencia, así que hablemos de *tipos* comúnmente llamados interfaces: Un supertipo debería poder remplazar a los subtipos.

Con este principio reafirmamos el concepto de polimorfismo, solo que más rígido, es un polimorfismo donde los hijos respetan las post y precondiciones del padre. El padre contiene ciertos métodos y atributos fundamentales, estos no cambiarían de un padre a su hijo y por eso podríamos remplazar los hijos por los padres, porque esperamos el mismo tipo de comportamiento, por ejemplo un método que quita un elemento de un arreglo.

> El patrón de objeto nulo podría ayudar a cumplir este principio.

La sustitución de Liskov es una forma de organizar interfaces, beneficiándonos sobre todo si las interfaces comparten propiedad**es**.

## Principio de segregación de la interfaz (ISP)

El principio de segregación de la interfaz propone que una interfaz no debería acumular funcionalidades, esto con el fin de evitar un crecimiento excesivo, mejor que una interfaz gigante es tener varias interfaces pequeñas y concretas. Así logramos que las clases solo implementen las interfaces con las funcionalidades que necesitan y cumplimos el principio de responsabilidad única.

## Principio de inversión de la dependencia (DIP)

Dentro de una aplicación es mejor desacoplar las cosas de alto nivel de las que tienen un bajo nivel, porque las cosas de bajo nivel cambian con más facilidad que las de alto nivel. Un ejemplo de esto pueden ser las interfaces gráficas, algo de bajo nivel dentro de una aplicación en comparación con el dominio o casos de uso. 
