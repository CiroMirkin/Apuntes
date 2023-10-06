# Patrón MVC (Modelo, Vista y Controlador)
00_00_2023

El patrón MVC tiene varias vercion y formas de implementarce, **yo** despues de algunas formas de implementacion me decline por esta que voy a explicar a continuación.

Empiezo de nuevo. El patrón MVC separa una aplicación en tres partes, cada una con un único fin: La vista, el modelo y el controlador.

![Diagrama de la implementación del patrón MVC seleccionada]()

## Vista

La vista se encarga de la parte visual, se encarga de mostrar la información al usuario, esto es todo.

## Modelo

El modelo se encarga de los datos, tanto de guardarlos como de definir que *entidades* tiene la aplicación.

## Controlador

El controlar tiene la parte mas activa. Se encarga recivir lo que quiere el usuario, usar al modelo y llamar a la vista, funciona como un intermediario y regulador entre el usuario y la aplicación.

Viendo esto mas a fondo, vemos que recoje las interacciones del usuario y es capaz de transformar informacion para que modelo y vista funcionen, ya que el controlador se situa en medio estas dos partes nunca llegan ni deberian conocerse, son timidas.