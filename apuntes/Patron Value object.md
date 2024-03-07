# Patrón Value object
30_08_2023

El patrón Value object potencia el encapsulamiento de los datos facilitando su validación y modelado, todo esto se logra creando una clase que representa al valor que puede ser un nombre, número de teléfono o dirección, en resumen cualquier dato. 

Gracias a su potencial para encapsular y validar datos es común aplicar este patrón a los datos importantes en el dominio, **ojo no confundir** valores y conceptos con entidades, estas pueden componerse de Value objects, pero no lo son. Las entidades son clases que contiene no solo datos importantes para el dominio sino también las operaciones asociadas a estos datos.

## Implementación

Se resume de la siguiente manera: Creamos los datos intanciando clases las cuales reciben el valor que representan, este se valida al instante y de ser no ser válido se lanza un error que evita que la clase se instancia y el dato inválido exista.

Ejemplo:

En una aplicación que gestiona la información de las personas registradas en un hotel podría existir una entidad *Inquilino* que administraría los datos del mismo, uno de esos datos podría ser un email de contacto el cual convertiremos en un Value object.

1. Creamos la clase *EmailDeContacto*.

2. El constructor de la clase *EmailDeContacto* recibe una cadena de texto que contiene el email, lo guarda dentro de un atributo y luego se lo pasa al método *validarMeil*.

3. El método *validarMeil* hace la correspondiente validación y si el email **no** es válido lanza un error que evitara que la clase *EmailDeContacto* se instancie.

Ahora tenemos un dato que decide por sí mismo si existe, no podemos tener un email de contacto si este no es válido. 

4. Por último, esto es opcional, algunos crean un método *ObtenerEmailDeContacto* mientras que otros simplemente acceden al atributo que contiene el valor.

**Importante:** los Value object no se editan, se descartan y se crean de nuevo, estos deben ser *inmutables*. Otra cosa importante es que carecen de identidad por ende nada los identifica unos de otros (Los Value object no tienen una propiedad *id*).

///
https://medium.com/all-you-need-is-clean-code/value-objects-d4c24115fa69
https://youtu.be/q_biZCsoloU?si=VK27f7ERlKO28QTX
///