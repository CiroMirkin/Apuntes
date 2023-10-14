# Principios SOLID
22_09_2021 - 10_03_2022 - 00_00_2023

Los cinco principios que componen a SOLID fueron reunidos por *Robert C. Martin*.

* Principio de responsabilidad única (Single responsibility principle).
* Principio de abierto/cerrado (Open/closed principle).
* Principio de sustitución de Liskov (Liskov substitution principle).
* Principio de segregación de la interfaz (Interface segregation principle).
* Principio de inversión de dependencia (Dependency inversion principle).

## Responsabilidad unica (SRP)

Cada parte de una aplicación deberia tener una sola razon para cambiar, debería tener una sola responsabilidad.

> "A Class should have only one reason to change". - Robert C. Martin.

Piensa en un cambio, cualquier cosa. Ahora piensa a donde tiene que ir para realizarlo. Dime ¿Fuiste a un solo lugar? si la respuesta en no probablemente no estes aplicando este principio, deberias ser capaz de encontrar un lugar y estar seguro de que estas en el lugar correcto, seguro de que cambios o errores no afectaran a otras partes del código.

Cuando una clase se hace responsable de algo, ese algo esta precente en toda la clase, si para hacer un cambio tienes que modificar varias clases es provable que tengas que revisar la responsabilidades que tienen.

### Responsabilidad compartida

Tal cual suena, hay veces en que separamos una misma responsabilidad y terminamos con dos o más clase que comparten la misma responsabilidad, en estos casos lo mejor suele ser fusionar estas clases.

## Principio de abierto/cerrado (OCP)

Hay partes de una aplicación que deberian poder modificar su comportamiento sin necesidad de cambiar su código, abierto para su expanción y cerrado para su modificación. El patron estrategia, el patron decorador o la composición son cosas que ayudar a aplicar este principio. 

Si aplicacion este principio a cada parte de una aplicacion tendriamos una aplicacion extremadamente compleja, tanto que seria dificil de cambiar y no es eso lo que buscamos, por eso hay que identificar en que partes trae beneficios.

Existe un punto medio el cual es crear código que facilite la expanción haciendo algunas modificaciones, por ejemplo encapsular dependencias para permitir un futuro desacoplamiento.

## Principio de sustitucion de Liskov (LSP)

Una clase base deberia poder remplazar a las clase que herenden de ella, pero es mejor evitar usar herencia, asi que hablemos de tipos comunmente llamodos interfaces: Un supertipo deberia poder remplazar a los subtipos.

## Principio de segregación de la interfaz (ISP)

El principio de segragacion de la interfaz propone que una interfaz no debería acumular funcionalidades, esto con el fin de evitar un crecimiento excesivo siendo mejor tener varias interfaces. Con esto logramos que las clases solo implementen las interfaces con las funcionalidades que necesitan.

## Principio de inversion de la dependencia (DIP)

Dentro de una aplicaion es mejor desacoplar las cosas de alto nivel de las que tienen un bajo nivel, porque las cosas de bajo nivel cambian con mas facildad que las de alto nivel. Un ejemplo de esto pueden ser las interfaces graficas como algo de bajo nivel dentro de una aplicación.
