# Diseño por contrato
00_11_2023

Esta tecnica de tipo caja negra donde definimos las entradas y salidas de una función o tarea, nos ayuda no solo a mejorar nuestro entendimiento del código sino tambien a la comunicación.

Al diseñar un contrato establecemos con detalle la información que una funcion deber recibir y la informacion que va a devolver, en un contrato el cliente se compromete a entregar cierta informacion y el proveedor se compromete a entregar cierta informacion.

>> Acepto esto, a cambio entrego esto.

Cuando diseñamos el contrado de una función, hay tres partes fundamentales: Precondiciones, postcondiciones e Invariantes, ahora las veremos en detalle.

Las precondiciones son las condiciones debe cumplir la informacion que la función recibe, para una función que filtra la palabra *"Mate"* de una lista las precondiciones podrian ser que el largo de la lista sea mayor o igual a uno, dependiendo la funcion podemos encontrar mas o menos condiciones. Se trata de definir con mayor precicion como es la informacion que necesitamos, va mas allá de el tipo de dato.

Las postcondiciones son las condiciones debe cumplir la informacion que la función devuelve, para una función que 

Las invariantes son estados internos de una funcion o clase que no cambian, las invariantes regulan o restringen el funcionamiento para garantizar que se cumplira el contrato, visto desde el exterior una invariante nunca cambia sin embargo internamente podria cambiar y al terminar para cumplir las postcondicion deberia volver a ser la misma que al inicio.

## Ternas de Hoare

Las ternas de Hoare son una forma de escribir las post y pre condiciones de una función, rutina o tarea.

> { P } A { Q }

> { Pre } F { Post }

> Precondicion -> Función -> Postcondicion

Comenzamos cumpliendo las Precondiciones, ejecutamos la Función con dicha información y se cumplen las Postcondiciones.

## Practica del diseño por contrato

Si bien hay lenguajes que nativamente soportan mejor el diseño por contrato como lo puede ser Clojure, suelen existir Framework o librerias que facilitan la escritura de pre y post condiciones ¿Porque no usar un simple *if*? No solo porque visualmente no en lo mismo sino tambien porque al depurar el codigo tampoco es lo mismo, nos estamos perdiendo del manejo de exepciones el cual es una parte fundamental del diseño por contrato ¿Que hacemos sino cuando se incumple un contrato? Ahi es donde entras las excepciones y aserciones que nos permiten depurar y reaccionar ante el incumplimiento de un contrato incluso en tiempo de ejecucion.

///

* El libro "El programador pragmatica" de David Thomas y Andrew Hunt.

*

///