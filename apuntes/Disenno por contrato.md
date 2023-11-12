# Diseño por contrato
12_11_2023

Esta técnica se basa en contratos donde definimos con detalle las entradas y salidas de una función o tarea, nos ayuda no solo a mejorar nuestro entendimiento del código y su robustez sino también con la comunicación.

Cuando diseñamos el contrato de una función, hay tres partes fundamentales: Precondiciones, postcondiciones e Invariantes de clase.

**Las precondiciones** son las condiciones que debe cumplir la información que recibe una función, por ejemplo para una función que filtra la palabra *"Mate"* de una lista de palabras la precondición podría ser que el largo de la lista sea mayor o igual a uno. Dependiendo de la función podemos encontrar más o menos condiciones, se trata de definir con mayor precisión como es la información que necesitamos, esto va más allá del tipo de dato.

**Las postcondiciones** son las condiciones debe cumplir la información que devuelve una función, por ejemplo para una función que indica cuantas veces aparece un elemento en una lista la postcondicion podría ser que este número que devuelve la función sea mayor o igual a cero.

Las post y post condiciones también son conocidas como *aserciones*.

**Las invariantes de clase** son estados internos una clase que no cambian. Las invariantes regulan o restringen el funcionamiento para garantizar que se cumpla el contrato, visto desde el exterior una invariante nunca cambia, por ejemplo la invariante de una clase que calcula el área de un cuadrado podría ser que todos los lados del mismo son iguales, no podemos cumplir las postcondiciones si la invariante de la clase no se cumple. Cabe agregar que este concepto también aplica para la programación funcional.

Tanto las aserciones como las invariantes son expresiones *booleanas*: mayor, menor, igual, mayor o igual, etc.

## Ternas de Hoare

Las ternas de Hoare son una forma de escribir las aserciones de una función:

> { P } A { Q }

De una forma más clara:

> { Precondición } Funcion { Postcondicion }

> Precondición -> Función -> Postcondicion

Comenzamos cumpliendo las Precondiciones, ejecutamos la Función con dicha información y se cumplen las Postcondiciones.

## Implementación de diseño por contrato

Si bien hay lenguajes que nativamente soportan mejor el diseño por contrato como lo puede ser Clojure, suelen existir Framework o librerías que facilitan la escritura de pre y post condiciones.

¿Que hacemos cuando se incumple un contrato? Ahí entran las excepciones y aserciones que nos permiten depurar y reaccionar incluso en producción ante el incumplimiento de un contrato. Si por algún motivo el contrato se incumple hay una operación definida para realizar, generalmente se maneja con una excepción o directamente se termina la ejecución del programa.

El uso de herencia puede dar lugar a una degradación en los beneficios del diseño por contrato, si es inevitable el uso de herencia estudia bien su implementación e integración con el uso de contratos.

### Malas practicas

* Usar un simple *if* para validar las aserciones es malo en primer lugar porque visualmente es diferente, una aserción es visible por quien va a usar la función mientras que una condicion al estar dentro es invisible; En segundo lugar perdemos las ventajas que nos brinda el depurador del mismo editor de código, así mismo el uso de aserciones no remplaza el uso de condicionales.

* Usar aserciones para validar las entradas del usuario, el diseño por contrato está pensado para hacer más fuerte y confiable la relación entre los componentes de una aplicación al igual que para evitar errores imprevistos, no para facilitar la interacción con el usuario.

///

* El libro "El programador pragmatica" de David Thomas y Andrew Hunt.

* https://cs.uns.edu.ar/~dcm/tdp/downloads/Clases/2019-2do-tdp-Clase-14-Contratos.pdf

* https://www.revista.unam.mx/vol.4/num5/art11/sep_art11.pdf

///