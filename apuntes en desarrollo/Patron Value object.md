# Patrón Value object
00_00_2023

El patrón Value object potencia el encapsulamiento de los datos facilitando su validacion y modelado, todo esto lo logra creando una clase que represanta al valor que puede ser un nombre, numero de telefono o una dirección, en rusumen cualquier dato. 

Gracias a su potencial para encapsular y validar datos es comun aplicar este patrón a los datos importantes en el dominio, **ojo no confundir** valores y conceptos con entidades, estas puden componerse de Value objects pero no lo son. Las entidades son clases que contiene no solo datos importantes para el dominio sino también las operaciones asociadas a estos datos.

## Implementación

Se resume de la siguiente manera: Creamos los datos intanciando clases a las cuales entregamos sus valores, estos se validaran al instante y de ser no ser validos se lanzara un error que evitara que clase se instancie y el dato invalido exista.

Ejemplo:

En una aplicación que gestiona la información de las personas registradas en un hotel podria existir una entidad *Inquilino* que administraria los datos del mismo, uno de esos datos podria ser un email de contacto el cual convertiremos en un Value object.

1. Creamos la clase *EmailDeContacto*.

2. El constructor de la clase *EmailDeContacto* recibe una cadena de texto que contiene el email, lo guarda dentro de un atributo y luego se lo pasa al método *validarMeil*.

3. El método *validarMeil* hace la correspondiente validación y si el email **no** es valido lanzara un error que evitara que la clase *EmailDeContacto* se instancie.

Ahora tenemos un dato que decide por si mismo si existe, no podemos tener un email de contacto si este no es valido. 

