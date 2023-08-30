# Patrón Value object
30_08_2023

El patrón Value object potencia el encapsulamiento de los datos facilitando su validación y modelado, todo esto lo logra creando una clase que represanta al valor que puede ser un nombre, numero de telefono o dirección, en rusumen cualquier dato. 

Gracias a su potencial para encapsular y validar datos es comun aplicar este patrón a los datos importantes en el dominio, **ojo no confundir** valores y conceptos con entidades, estas puden componerse de Value objects pero no lo son. Las entidades son clases que contiene no solo datos importantes para el dominio sino también las operaciones asociadas a estos datos.

## Implementación

Se resume de la siguiente manera: Creamos los datos intanciando clases a las cuales resiven el valor que reprecentan, este se valida al instante y de ser no ser valido se lanza un error que evita que clase se instancie y el dato invalido exista.

Ejemplo:

En una aplicación que gestiona la información de las personas registradas en un hotel podria existir una entidad *Inquilino* que administraria los datos del mismo, uno de esos datos podria ser un email de contacto el cual convertiremos en un Value object.

1. Creamos la clase *EmailDeContacto*.

2. El constructor de la clase *EmailDeContacto* recibe una cadena de texto que contiene el email, lo guarda dentro de un atributo y luego se lo pasa al método *validarMeil*.

3. El método *validarMeil* hace la correspondiente validación y si el email **no** es valido lanzara un error que evitara que la clase *EmailDeContacto* se instancie.

Ahora tenemos un dato que decide por si mismo si existe, no podemos tener un email de contacto si este no es valido. 

4. Por último, esto es opcional, algunos crean un método *ObtenerEmailDeContacto* mientras que otros simplemente acceden al atributo que contiene el valor.


**Importante**, los Value object no se editan, se descartan y se crean de nuevo, los Value object deben ser *inmutables*. Otra importante es que carecen de identidad, nada los identifica unos de otros.

///

* https://medium.com/all-you-need-is-clean-code/value-objects-d4c24115fa69
* https://youtu.be/q_biZCsoloU?si=VK27f7ERlKO28QTX

///