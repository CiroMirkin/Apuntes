# Diseño por contrato
00_11_2023

En esta tecnica de tipo caja negra definimos las entradas y salidas de una función o tarea. Nos ayuda no solo a mejorar nuestro entendimiento del código sino tambien con la comunicación.

Al diseñar un contrato establecemos con detalle la información que una funcion deber recibir y la informacion que va a devolver, en un contrato se define como es la informacion que van a entregar tanto el cliente como el proveedor (En este caso es una función).

>> Acepto esto, a cambio entrego esto.

Cuando diseñamos el contrado de una función, hay tres partes fundamentales: Precondiciones, postcondiciones e Invariantes de clase.

**Las precondiciones** son las condiciones que debe cumplir la informacion que una función recibe, por ejemplo para una función que filtra la palabra *"Mate"* de una lista de palabras la precondicion podria ser que el largo de la lista sea mayor o igual a uno, dependiendo la funcion podemos encontrar mas o menos condiciones. Se trata de definir con mayor precicion como es la informacion que necesitamos, esto va mas allá de el tipo de dato.

**Las postcondiciones** son las condiciones debe cumplir la informacion que una función devuelve, por ejemplo para una función que indica cuantas veces aparece un elemento en una lista la postcondicion prodria ser que este numero que devuelve la funcion sea mayor o igual a cero.

Las post y post condiciones también son conocidas como *aserciones*.

**Las invariantes de clase** son estados internos una clase que no cambian. Las invariantes regulan o restringen el funcionamiento para garantizar que se cumpla el contrato, visto desde el exterior una invariante nunca cambia, por ejemplo la invariante de una clase que calcula el area de un cuadrado podria ser que todos los lados del mismo son iguales, no podemos cumplir las postcondiciones si la invariante de la clase no se cumple. Cabe agregar que este concepto también aplica para la programación funcional.

Tanto las aserciones como las invariantes son expreciones *booleanas*: mayor, menor, igual, mayor o igual, etc.

## Ternas de Hoare

Las ternas de Hoare son una forma de escribir las aserciones de una función:

> { P } A { Q }

De una forma mas clara:

> { Precondicion } Funcion { Postcondicion }

> Precondicion -> Función -> Postcondicion

Comenzamos cumpliendo las Precondiciones, ejecutamos la Función con dicha información y se cumplen las Postcondiciones.

## Implementación de diseño por contrato

Si bien hay lenguajes que nativamente soportan mejor el diseño por contrato como lo puede ser Clojure, suelen existir Framework o librerias que facilitan la escritura de pre y post condiciones.

¿Que hacemos cuando se incumple un contrato? Ahí entran las excepciones y aserciones que nos permiten depurar y reaccionar inlcuso en producción ante el incumplimiento de un contrato. Si por algun motivo el contrato se incumple hay una operacion definida para realizar, generalmente se maneja con una exepcion o directamente se termina la ejecucion del programa.

El uso de herencia y aserciones puede dar lugar a una degradacion en los beneficios del diseño por contrado, evita usar herencia y si es innevitable estudia bien su implementación.

### Malas practicas

* Usar un simple *if* para validar las aserciones, en primer lugar primero visualmente es diferente, una asercion en visible por quien va a usar la función mientras que una condicional al estar dentro es invisible; En segundo lugar perdemos las ventajas que nos prinda el depurador del mismo editor de código, asi mismo el uso de aserciones no remplaza el uso de condicionales.

* Usar aserciones para validar las entradas del usuario, el diseño por contrato esta pensado para hacer mas fuerte y confiable la relacion entre los componentes de una aplicacion al igual que evitar errores inprevistos, no para facilitar la interaccion con el usuario.

///

* El libro "El programador pragmatica" de David Thomas y Andrew Hunt.

* https://cs.uns.edu.ar/~dcm/tdp/downloads/Clases/2019-2do-tdp-Clase-14-Contratos.pdf

* https://www.revista.unam.mx/vol.4/num5/art11/sep_art11.pdf

///