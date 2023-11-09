# Diseño por contrato
00_11_2023

En esta tecnica de tipo caja negra definimos las entradas y salidas de una función o tarea. Nos ayuda no solo a mejorar nuestro entendimiento del código sino tambien con la comunicación.

Al diseñar un contrato establecemos con detalle la información que una funcion deber recibir y la informacion que va a devolver, en un contrato el cliente se compromete a entregar cierta informacion y el proveedor se compromete a entregar cierta informacion.

>> Acepto esto, a cambio entrego esto.

Cuando diseñamos el contrado de una función, hay tres partes fundamentales: Precondiciones, postcondiciones e Invariantes, ahora las veremos en detalle.

Las precondiciones son las condiciones que debe cumplir la informacion que una función recibe, por ejemplo para una función que filtra la palabra *"Mate"* de una lista de palabras la precondicion podria ser que el largo de la lista sea mayor o igual a uno, dependiendo la funcion podemos encontrar mas o menos condiciones. Se trata de definir con mayor precicion como es la informacion que necesitamos, esto va mas allá de el tipo de dato.

Las postcondiciones son las condiciones debe cumplir la informacion que una función devuelve, por ejemplo para una función que indica cuantas veces aparece un elemento en una lista la postcondicion prodria ser que este numero que devuelve la funcion sea mayor o igual a cero.

Las invariantes son estados internos de una funcion o clase que no cambian. Las invariantes regulan o restringen el funcionamiento para garantizar que se cumpla el contrato, visto desde el exterior una invariante nunca cambia, sin embargo internamente podria cambiar, pero al final deberia volver a ser la misma que al inicio.

## Ternas de Hoare

Las ternas de Hoare son una forma de escribir las post y pre condiciones de una función, rutina o tarea.

> { P } A { Q }

> { Pre } F { Post }

> Precondicion -> Función -> Postcondicion

Comenzamos cumpliendo las Precondiciones, ejecutamos la Función con dicha información y se cumplen las Postcondiciones.

## Practica del diseño por contrato

Si bien hay lenguajes que nativamente soportan mejor el diseño por contrato como lo puede ser Clojure, suelen existir Framework o librerias que facilitan la escritura de pre y post condiciones.

¿Porque no usar un simple *if*? Porque visualmente es diferente y además perdemos las ventajas que nos prinda el depurador del mismo editor de código.

¿Que hacemos cuando se incumple un contrato? Ahí entran las excepciones y aserciones que nos permiten depurar y reaccionar inlcuso en producción real ante el incumplimiento de un contrato. Si por algun motivo el contrato se incumple hay una operacion que se puede realizar, generalmente es una exepcion o directamente terminar la ejecucion del programa para evitar un futuro desconocido, un aborto.

///

* El libro "El programador pragmatica" de David Thomas y Andrew Hunt.

*

///