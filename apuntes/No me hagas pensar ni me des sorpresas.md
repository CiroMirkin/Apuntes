# No me hagas pensar ni me des sorpresas
20_03_2023

Existen dos principios que son aplicaples tanto a la programación como al diseño de UI/UX, y son *El principio de menor sorpresa* (principle of least astonishment) y el principio *no me hagas pensar* (don't make me think) que hablan de una forma clara de diseñar y pensar tanto interfaces de usuario como código.

## No me hagas pensar

Evitar perder tiempo pensando en cosas en las que no deberiamos pensar porque deberian estar claras. Si las cosas no son claras, en un futuro vas a perder tiempo recordando y el resto de personas van a perder tiempo tratando de entender lo que hiciste.

Hay cosas que no deberiamos pensar cuando leemos un código, por ejemplo, si una variable se llama *idu* tendrias que pensar ¿que hace? ¿para que sirve? pero si se llamara *informacionDelUsuario* no tendrias que pensar en todo eso, porque esta claro.

##El principio de menor sorpresa

**Para mi, para mi** este principio como un punto importante dentro del principio *no me hagas pensar*, porque la idea de este principio es: Que todo se comporte como cabe esperar. Ahora bien, si las cosas no se comportan como cabe esperar nos vemos obligados a pensar en el porque de esa decición.

Hay veces en las que introducimos una *"sorpresa"* por accidente, sin pensar que es una *"sorpresa"*. Por ejemplo, vemos que hay dos funciones que siempre se llaman una despues de la otra, entonces, hacemos que la primera llame a la segunda. El problema con esto es que nadie espera eso, nadie esperaria que la función *guardarDatos* llame a *mostrarDatos*, todos esperan que *guardarDatos* lo uníco que haga sea guardar los datos y nada más, porque eso es lo que dice que hace y eso es lo que se espera.

___
Material usado: Un capitulo de "Código sostenible" de *Carlos Blé Juerado*.
