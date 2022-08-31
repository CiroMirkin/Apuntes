*Autor: Mirkin Ciro* <br>
*Emitido el 02_10_2021*

# Patrones de diseño creacionales

Los patrones creacionales nos proporcionan formas de organizar la creación de objetos en una aplicación, cada una de estas formas tiene como fin facilitar la creación y organización de objetos a largo plazo en una aplicación.

## Factory method
El patrón factory method nos proporciona una manera de que diferentes clases puedan crear diferentes productos relacionados o no. Básicamente, partiendo de una interfaz común las clases (factorías) pueden **crean diferentes objetos (producto de factoría)** que también parten de una interfaz común.

> Ejemplo: Creamos una aplicación que hace pelotas, en la misma tenemos dos clases (factorías) que parten de la misma interfaz, una para pelotas lisas y la otra para pelotas rayadas, como ambas clases heredan de la interfaz pelota su fin es crear los diferentes objetos "pelota". Cada objeto pelota también hereda de una interfaz común.

    El patrón factory method permite crear diferentes factorías (clases) que
    creen diferentes objetos (productos de factorías).

## Abstract factory
El patrón abstract factory nos permite producir **familias de objetos relacionados** sin especificar sus clases concretas, dicho de forma mas fácil, basándonos en una interfaz común podemos hacer que una clase cree diferentes familias de objetos relacionados.

> Ejemplo : Tenemos una aplicación que crea kits gamer, cada kit contiene diferentes tipos de productos como teclados, mouses, monitores, etc. cada uno de estos kids sería una familia de objetos y están relacionados con la gama de productos gamer o con el kid en general.

> Otro ejemplo : Una aplicación que se encarga de administrar diferentes gamas de muebles (mesa, silla, sillón), cada familia es una gama diferente y el contexto en el que están relacionadas es el de "muebles".

    Abstract factory permite crear familias de objetos relacionados en el mismo contexto, 
    pero diferentes entre si.

## Builder
El patrón builder nos permite **construir objetos complejos paso a paso**, y no solo eso ya que este patrón también nos permite crear diferentes implementaciones y representaciones de un mismo objeto.

> Ejemplo : Tenemos una aplicación que se encarga del montaje de diferentes tipos de PCs, lo que hace el código es dividir el objeto o los objetos "PC" en objetos más pequeños para luego juntarlos en un mismo conjunto (PC).

    Builder permite separar un objeto complejo en partes, para luego poder armarlo 
    por partes en el orden deseado.

## Prototype
El patrón prototype nos permite **copiar clases existentes desde dentro**, logrando así que la nueva clase no este acoplada a su clase base, esto se logra gracias a que la clase se copia a si misma, teniendo así el control total de la información que tendrá la nueva copia.

> La clase original actúa como prototipo y asume un papel activo en la creación de la copia.

    Prototype logra que una clase se pueda "copiar" o "clonar " a si misma desde dentro.

## Singleton
El patrón singlton nos permite verificar que una clase tenga una única instancia, al mismo tiempo que proporciona un punto de acceso global a dicha instancia. De este patrón se pueden decir muchas cosas y una de ellas es que rompe <a href="solid.html">el principio de responsabilidad única (RSP)</a>, pero también nos permite cosas como controlar el acceso a algún recurso (base de datos, archivo, etc.) o evitar la sobre escritura de una instancia.

    Singleton se encarga de que una clase tenga una única instancia.

---
Para más información sobre los patrones de diseño y la refactorización está el sitio de <a href="https://refactoring.guru/">refactoring guru</a>.
