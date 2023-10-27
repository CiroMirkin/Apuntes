# Patrón MVC (Modelo, Vista y Controlador)
00_00_2023

El patrón MVC tiene varias verciones y formas de implementarce, **yo** me decline por la que voy a explicar.

Empiezo de nuevo. 

El patrón MVC, es un patrón arquitectonico que separa un componente en tres partes: Vista, Modelo y Controlador, cada una con su objetivo y responsabilidad unica.

![Diagrama de la implementación del patrón MVC]()

* La vista se encarga de la parte visual de un componente que seria mostrar la información al usuario, eso es todo.

* El modelo se encarga de los datos que maneja un componente, tanto de guardarlos y recuperarlos como de establecer las *entidades* relacionadas a ellos.

* El controlador tiene la parte mas activa, funcionando como un intermediario usuario / aplicación. 

	El controlador recoje las interacciones del usuario, llama al modelo correspondiente para recibir la informacion que el usuario quiere y una vez que este la devuelve el controlador puede adaptar dicha información para que la vista pueda mostrarsela al usuario. Ya que el controlador se situa en medio nunca llegan a conocerce las demas partes, son timidas y por ende estan desacopladas.

## Ventajas y desventajas del patrón MVC

Como **ventajas** podemos ver la clara de responsabilidades además gracias al desacoplamiento es posible tener varias vistas para un mismo modelo y esto puede facilitar la creación de pruevas unitarias.

Y como **desventajas** estan la curva de aprendizaje para aprender a implementar este patrón que puede un poco pesada además de esto a veces cuesta respetar lo que impone el patrón, decimos que vamos a implementarlo y luego no lo hacemos de la forma correcta, por ejemplo comunicando directamente al modelo con la vista para ""agilisar las cosas"" y tardar menos tiempo.

///

* 

///