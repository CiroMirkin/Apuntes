
# Integracion y entrega continua
00_00_0000

Si decidimos que un cambio dentro del sistema es necesario ¿Como lo entregamos a los usuarios lo mas rapido posible? La entrega continua comprende que no solo es importante el desarrollo y los metodos de trabajo, sino que tambien importa el proceso atravez del cual entregamos el sistema a sus usuarios.

La integracion continua es la practica de intregrar lo mas pronto posible los cambios realizados para poder testar y usar el sistema, de esta manera el sistema siempre esta en un estado en el que sabemos que funciona.

Al integrar cada cambio y a su vez ponerlo en produccion sabemos rapidamente cuando algo se rompe y porque se rompio, sin una integracion continua el sistema esta roto hasta que alguien demuestre lo contrario. Al integrar y entregar continualmente el sistema siempre esta funcionando aceptablemente.

## Deployment pipeline

No encontre una traduccion que me gustara, por eso antes vamos a definir algunos terminos:

* Un sistema en produccion es un sistema en manos de sus usuarios.
* Deploy y deployment es el proceso y accion que lleva a un sistema a produccion.

El _deployment pipeline_ es una secuenca automatica de etapas por las que pasa un sistema antes de ponerse en produccion, cada etapa valida mas profundamente que el sistema funciona como lo esperamos, las primeras etapas son validaciones rapidas con pruebas unitarias y pruebas de humo mientras que las ultimas son mas lentas con pruebas de integracion, aceptacion o de carga.



