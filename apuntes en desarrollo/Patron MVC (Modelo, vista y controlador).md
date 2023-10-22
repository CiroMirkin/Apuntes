# Patrón MVC (Modelo, Vista y Controlador)
00_00_2023

El patrón MVC tiene varias verciones y formas de implementarce, **yo** me decline por esta que voy a explicar a continuación. 

Empiezo de nuevo. 

El patrón MVC, es un patrón arquitectonico que separa un componente en tres partes: Vista, Modelo y Controlador, cada una con un único fin.

![Diagrama de la implementación del patrón MVC]()

* La vista se encarga de la parte visual que seria mostrar la información al usuario, esto es todo.

* El modelo se encarga de los datos, tanto de guardarlos y recuperarlos como de establecer las *entidades* relacionadas a estos dato.

* El controlador tiene la parte mas activa, ya que se encarga de recivir lo que quiere el usuario, usar modelo y vista para darle al usuario lo que quiere, funciona como un intermediario usuario / aplicación. </br></br> Más a fondo vemos que el controlador recoje las interacciones del usuario y puede transformar la información del modelo para que la vista pueda mostrala al usuario. Ya que el controlador se situa en medio nunca llegan a conocerce las demas partes, son timidas y por ende estan desacopladas.

## Ventajas y desventajas del patrón MVC

Como ventajas podemos ver una separacion clara de las responsabilidades, gracias al desacoplamiento es posible tener varias vistas para un mismo modelo y además de esto puede facilitar la implementación de pruevas unitarias.

Y como desventajas estan la curva de aprendizaje para aprender a implementar este patron que puede no ser muy liviana como parece y además de esto a veces cuesta respetar lo que impone el patrón, decimos que vamos a implementarlo y luego no lo hacemos de la forma correcta, por ejemplo comunicando directamente al modelo con la vista para agilisar y hacer las cosas más rapido.

