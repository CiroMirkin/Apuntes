# No me hagas pensar ni me des sorpresas
20_03_2023

Existen dos principios que son aplicables tanto a la programación como al diseño de UI/UX, son *Principle of least astonishment (POLA)* [El principio de menor sorpresa] y el principio *no me hagas pensar* que hablan sobre una forma clara de diseñar y pensar tanto interfaces de usuario como código.

## No me hagas pensar

Evitar que usuarios u otros programadores pierdan tiempo pensando en cosas que no deberías pensar, porque deberían ser claras. 

Si las cosas no son claras, en un futuro vas a perder tiempo recordando y el resto de personas van a perder tiempo tratando de entender lo que hiciste, eso es una mala experiencia para todo el mundo.

Hay cosas que no deberíamos pensar cuando leemos un código, por ejemplo, si una variable se llama *idu* tendrías que pensar ¿qué hace? ¿para qué sirve? pero si se llamara *userID* no tendrías que pensar en todo eso, porque está claro.

## El principio de menor sorpresa

Para mi, repito, **para mi**, este principio es como un punto importante dentro del principio *no me hagas pensar*, porque la idea de este principio es que todo se comporte como cabe esperar. Ahora bien, si las cosas no se comportan como cabe esperar nos sorprendemos y luego nos vemos obligados a pensar e investigar porque las cosas no se comportan como deberían.

Hay veces en las que introducimos una *"sorpresa"* por accidente sin pensarlo, por ejemplo, vemos que hay dos funciones que siempre se llaman una después de la otra, entonces, hacemos que la primera función llame a la segunda. El problema con esto es que nadie espera eso, nadie esperaría que la función *guardarDatos* llame a *mostrarDatos*, todos esperan que *guardarDatos* lo único que haga sea guardar los datos y nada más, porque eso dice que hace y eso se espera.

Como último remedio si no hay otra forma de eliminar las sorpresas escribe un comentario, así al menos estas aclarando y poniendo sobre aviso a otros programadores sobre comportamientos inesperados. Los comentarios son el último recurso, siempre que puedas eliminar las respuestas hazlo.

///
Un capitulo de "Código sostenible" de *Carlos Blé Jurado*.
///