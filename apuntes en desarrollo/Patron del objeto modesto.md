# Patrón del objeto modesto
00_08_2023

Este patrón propone separar el código difícil de probar del fácil creando dos objetos: uno modesto y uno comprobable, uno difícil de probar y uno fácil de probar.

Al implementar este patrón en común usar polimorfimo para desacoplar los objetos modestos de los comprobables, es gracias a esta separación que es común encontrarlo en los límites de una arquitectura limpia, ya que estos límites suelen separar lo mismo que este patrón.

Este patrón nos da una forma de separar el código del entorno gráfico (GUI) de su lógica: El objeto modesto se encarga solo de mostrar información en pantalla, mientras que el objeto comprobable acepta información y la formatea para que el objeto modesto solo tenga que mostrarla. Podemos llamar a estos dos objetos: vista (objeto modesto) y presentador (objeto comprobable).

Separar la base de datos y ORM del código que los usa es algo que también podemos hacer creando tres objetos, dos de los cuales serán modestos y uno comprobable: La pasarela que se conectara con la base de datos, el ORM y el interactor el objeto comprobable que contiene el caso de uso que tiene que acceder a los datos en la base de datos.

///

* Arquitectura limpia de Robert C.Martin.

///