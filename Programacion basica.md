v a c i o - i n f o r m a t i c o
====
*Autor: Mirkin Ciro* <br>
*Emitido el 03_12_2021*

# Programación básica

Estos son los conceptos más básicos de programación que tienes que saber para poder "programar".

## Variables

Las variables nos permiten guardar información que puede variar, por ejemplo, una variable podría guardar el nombre "Jack" y después podríamos cambiarlo por "Tonny" y así sucesivamente.

	La información guardada puede cambiar en cualquier momento, es variable.

Dentro de un programa o aplicaciones usamos muchas variables, es por eso que cada variable tiene un nombre y uno descriptivo, generalmente este nombre no puede contener espacios en blanco, por eso se usan _ o la primera letra de cada palabra en mayúscula. 

Ejemplo: Una variable que guarda el nombre de un gato debería llamarse:

* nombre_de_un_gato
* nombre_del_gato
* nombreDeUnGato 
* nombreDelGato

Cualquiera de estos nombres es recomendable, ya que son descriptivos y nos permiten saber fácilmente que es lo que guarda la variable, diferente sería el caso de estos que no nos dicen nada por si solos:

* nomgato
* noga
* nomdegat
* ng


## Constantes

La única diferencia que tienen con una variable es que una vez creada y guardada información en ella no podemos cambiar esa información.

	La información guardada no puede cambiar, es constante.

## Condicionales

Nos permitan hacer un grupo de acciones solo si se cumple una condición, por ejemplo, al llegar a nuestra casa, abrimos la puerta **si** tenemos la llave, vamos a realizar una acción (abrir la puerta) solo si se cumple una condición (tenemos la llave).

Tipos de condiciones

* Simple: La despcrita arriba.

* Anidadas: Una condición adentro de otra, abrimos la puerta **si** tenemos la llave, después de abrir la puerta la volvemos a cerrar **si** hace frío. 

* Doble: Si una 
condición no se cumple hacemos otra acción, abrimos la puerta **si** tenemos la llave, pero **si no** tenemos la lleve, nos vamos a tomar un café.

* Múltiples, si la primer condición no se cumple, hay otra que podemos o no cumplir, abrimos la puerta **si** tenemos la llave, pero al no tener la llave, abrimos la ventana y entramos **si** podemos abrirla.

## Ciclos o bucles 

Nos permiten repetir un grupo de acciones una cierta cantidad de veces, por ejemplo, en un reloj si ponemos una alarma tendríamos que verificar varias veces la acción de comparar la hora actual con la hora de la alarma. Todos los ciclos que usemos deberían tener un límite, por ejemplo, en el caso de la alarma en el reloj, el ciclo terminaría cuando suene la alarma. 

Dependiendo del lenguaje de programación te encontrarás con diferentes tipos de ciclos con diferentes estructuras, pero con el mismo fin, repetir una o más acciones.

## Funciones o subprocesos

Dentro de una aplicación vamos a tener un montón de acciones, las funciones nos van a permitir separar y organizar todas estas acciones en diferentes grupos.

	Un grupo de acciones tiene una finalidad y también tiene un nombre que 	
	describe al grupo de acciones.

Una vez creada una función podemos usarla las veces que creamos conveniente, es por eso que las funciones también nos permiten reutilizar un grupo de acciones, por ejemplo, podemos tomar café varias veces en un mismo día, pero para eso tenemos que hacerlo y con una función podemos agrupar todas estas acciones y para tomar un cafe solo tenemos que usar la función hacer_cafe que nos retornaría o devolvería un café ya echo.

	Ordenamos, agrupamos y reutilizamos acciones a través de funciones.

Una función a veces necesita información de afuera a la cual no puede acceder o necesita cierta información cada vez que la usamos, esta información se le pasa a la función por argumento, en el ejemplo anterior del cafe podríamos pasarle como argumento a la función el tipo de cafe que vamos a hacer (corto, largo, late, mocachino, capuchino, etc).
	
	Un grupo de acciones con un nombre que puede recibir y devolver 	
	información si es que lo necesita, eso es una función.



