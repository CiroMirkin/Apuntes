# Patron del objeto modesto
00_08_2023

El patrón del objeto modesto propone separar el código fácil de probar del difícil, esto se logra creando dos objetos: uno modesto y uno comprobable, uno difícil de probar y uno fácil de probar.

Al implementar este patrón en comun usar polimorfimo para desacoplar los objetos modestos de los comprobables, es gracias a esta separación que es comun encontrarlo en los limites de una arquitectura limpia ya que estos limites suelen separar lo mismo que este patrón.

Este patrón nos provee una forma de separar el código de la interfaz gráfica (GUI) de su lógica: El objeto modesto se encarga solo de mostrar información en pantalla, mientras que el objeto comprobable acepta información y la formatea para que el objeto modesto solo tenga que mostrarla. Podemos llamar a estos dos objetos: vista (el objeto modesto) y presentador (el objeto comprobable).

Separar la base de datos y ORM del código que los usa es algo que también podemos hacer creando tres objetos, dos de los cuales seran modestos y uno comprobalble: La pasarela (se conecta con la base de datos), el ORM y el interactor (el objeto comprobable) que contiene un caso de uso.