# No me hagas pensar ni me des sorpresas
20_03_2023

Existen dos principios que son aplicables tanto a la programación como al diseño de UI/UX, y son *El principio de menor sorpresa* (principle of least astonishment) y el principio *no me hagas pensar* (don't make me think) que hablan de una forma clara de diseñar y pensar tanto interfaces de usuario como código.

## No me hagas pensar

Evitar perder tiempo pensando en cosas en las que no deberíamos pensar porque deberían estar claras. Si las cosas no son claras, en un futuro vas a perder tiempo recordando y el resto de personas van a perder tiempo tratando de entender lo que hiciste.

Hay cosas que no deberíamos pensar cuando leemos un código, por ejemplo, si una variable se llama *idu* tendrías que pensar ¿qué hace?, ¿para qué sirve?, pero si se llamara *informacionDelUsuario* no tendrías que pensar en todo eso, porque está claro.

##El principio de menor sorpresa

**Para mi, para mi** este principio como un punto importante dentro del principio *no me hagas pensar*, porque la idea de este principio es: Que todo se comporte como cabe esperar. Ahora bien, si las cosas no se comportan como cabe esperar nos vemos obligados a pensar en el porqué de esa decisión.

Hay veces en las que introducimos una *"sorpresa"* por accidente, sin pensar que es una *"sorpresa"*. Por ejemplo, vemos que hay dos funciones que siempre se llaman una después de la otra, entonces, hacemos que la primera llame a la segunda. El problema con esto es que nadie espera eso, nadie esperaría que la función *guardarDatos* llame a *mostrarDatos*, todos esperan que *guardarDatos* lo único que haga sea guardar los datos y nada más, porque eso es lo que dice que hace y eso es lo que se espera.