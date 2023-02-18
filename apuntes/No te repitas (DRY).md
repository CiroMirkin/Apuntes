# No te repitas (DRY)
(Ciro Mirkin) 11_02_2023

No te repitas (don't repeat yourself) propone que un problema no se resuelva mas de una vez, no importa que haya funciones iguales lo que importa es que no resuelvan el mismo problema, que no tengan el mismo fin.

Tenemos una lista y dos funciones, una elimina un elementos de la lista y la otra los edita. El codigo de estas dos funciones puede ser preacticamente igual y podriamos pensar que hay una repeticion, pero no es asi, porque resuelven problemas diferentes, una elimina y la otra edita. Si eliminamos esta aparenete repeticione solo creariamos un problema porque al resolver problemas diferentes en el futuro pueden evolucionar de manera diferente.

A veces no queda otra que solucionar dos veces un problema, pero intentemos que no sean mas de tres, y si es asi, lo mejor puede ser refactorizacion.