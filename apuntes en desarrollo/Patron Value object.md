# Patrón Value object
00_00_2023

El patrón Value object potencia el encapsulamiento de los datos facilitando su validacion y modelado, todo esto lo logra creando una clase que represanta al valor que puede ser un nombre, numero de telefono, direccion, etc. 

## Ejemplo del patrón Value object 

Una aplicación que guarda la información de las personas que se registran a un hotel podria tener una clase *Inquilino* la cual guardaria los datos del mismo y uno de esos datos podria ser el meil de contacto, convirtamos este dato en un Value object.

1. Creamos la clase *MeilDeContacto*.

2. El constructor de la clase *MeilDeContacto* recibe una cadena de texto que contiene el meil, lo guarda dentro de un atributo y luego se lo pasa al método *validarMeil*.

3. El método *validarMeil* hace la correspondiente validación y si el meil **no** es valido lanzara un error o expción la cuál evitara que la clase *MeilDeContacto* se instancie.

Ahora tenemos un dato que decide por si mismo si existe, no podemos tener un meil de contacto si no es valido.

Creamos los datos intanciando clases a las cuales les entregamos sus valores los cuales se validan al instante y de ser invalidos se lanzara un error el cual evitara que el dato invalido exista.

