# Open Source y Free Software
16_06_2026

En la actualidad, gran parte de la infraestructura digital del mundo depende del software libre y open source. Aunque el software propietario domina muchos productos comerciales, los modelos abiertos demostraron ofrecer ventajas importantes en términos de colaboración, seguridad y transparencia. Este trabajo analiza las diferencias entre software libre, open source y software propietario, así como las implicancias técnicas y filosóficas de cada modelo.

En contraposición al software libre existe el software propietario, cuyo código fuente es privado y está bajo el control exclusivo de la empresa o persona que lo desarrolla. El usuario no accede al código ni tiene libertad de modificarlo o redistribuirlo, sino que adquiere únicamente el derecho a utilizarlo bajo las condiciones que el propietario establece, generalmente a través del pago de una licencia o una suscripción mensual.

Sin embargo, la infraestructura crítica de internet desde los servidores web hasta los sistemas operativos que corren en la nube, no utilizan ni están construidos como software propietario sino sobre software libre y open source.

## Software Libre

El Software Libre es un movimiento ético y político, no simplemente una cuestión técnica, que nace en 1985 con el Manifiesto GNU escrito por Richard Stallman como respuesta a la creciente privatización del software. Su argumento central es que restringir el acceso al código fuente no es solo una decisión comercial, sino también una limitación a la libertad y autonomía de las personas. Por eso, el software libre no significa necesariamente software gratuito, sino la existencia de cuatro libertades fundamentales que todo usuario debería tener: estudiar y modificar el sistema, distribuirlo, utilizarlo para cualquier propósito, mejorarlo y además compartir esas mejoras.

## Copyleft

Un software libre tiene derechos de autor, tiene copyright, pero generalmente bajo una licencia de tipo copyleft que permite garantizar legalmente la libertad de uso y distribución. El copyleft va más allá del software, por ejemplo Creative Commons, un sistema de licencias que permite compartir y liberar obras de forma legal y segura para el autor. Dentro del mundo del software existe la licencia **GPL** como expresión legal de las cuatro libertades, cualquiera puede acceder al código fuente, modificarlo y redistribuirlo, pero no puede apropiarse de él para volverlo privado. 

De la licencia GPL se desprenden otras licencias como la **AGPL **(Affero GPL) que nace para cerrar un vacío legal en los sistemas detrás de los servicios en la nube donde los usuarios acceden al software pero nunca lo "reciben" en el sentido tradicional, así que técnicamente la empresa no está distribuyendo nada y no tiene obligación de liberar las mejoras que pudo haber realizado. Este vacío se cierra con una condición: si permites que usuarios interactúen con tu sistema a través de una red, debes ofrecerles acceso al código fuente.

La **LGPL** (Lesser GPL) responde a una pregunta práctica: ¿cómo puede una librería de software libre volverse un estándar si los desarrolladores de software propietario no pueden usarla? Esta licencia soluciona este inconveniente permitiendo que un software privativo pueda usar librerías LGPL y que el software siga siendo propietario, pero con un límite: si modificas la propia librería, esas modificaciones sí deben seguir siendo libres.

Por último, existen las licencias FDL (Licencias de documentación libre) que se aplican a documentos.

## Open Source

El Open Source es una metodología y marco de trabajo con grandes beneficios en cuanto a calidad y seguridad, aun asi el significado de "open source" está establecido formalmente por la Open Source Initiative (OSI) estableciendo diez criterios que buscan garantizar el acceso, la modificación y la redistribución del código de forma práctica y sin la parte filosófica del Software Libre, de manera las empresas pueden adoptar el modelo sin afrontar el discurso ético sobre la libertad del usuario.

Eric Raymond en su ensayo "La Catedral y el Bazar" analiza cómo la gestión del desarrollo de sistemas por parte de las empresas se asemejaba a la construcción de una catedral y como el desarrollo open source se parecía a un bazar donde sorprendentemente los sistemas eran más eficientes y efectivos.

Dentro del aparente caos del bazar Raymond descubrió que se desarrollaban sistemas de mayor calidad ya que el conocimiento se distribuía entre una multitud de colaboradores que aportan desde necesidades reales y concretas, en lugar de concentrarlo en unos pocos arquitectos diseñando desde arriba hacia abajo.

Más ojos mirando el código significan que los errores se encuentran rápido, por otro lado las buenas ideas tienen la posibilidad de abrirse paso desde el lugar que sea, algo que Raymond resume en la Ley de Linus: "dado un número suficiente de ojos, todos los errores son superficiales".

Raymond dentro de su ensayo define varios enunciados que sigue el desarrollo open source, veremos algunos de ellos (de 19 estos nos parecieron más interesantes e ilustrativos):

* "Tratar a los usuarios como colaboradores es la forma más apropiada de mejorar el código, y la más efectiva de depurar". 
* "Libere rápido y a menudo, y escuche a sus clientes". 
* "Lo más grande, después de tener buenas ideas, es reconocer las buenas ideas de sus usuarios. Esto último es a veces lo mejor". 

El Open Source busca la adopción de estos beneficios en la industria y no se preocupa por las libertades de los usuarios, esto puede apreciarse en las licencias, ya que el Open Source acepta licencias permisivas como MIT, BSD o Apache 2.0 que permiten el uso, modificación y distribución del código fuente incluso dentro de productos comerciales y privativos.

## Conclusión

Cuando el código es público, cualquier persona en el mundo puede auditarlo, encontrar errores y proponer mejoras desde su propio conocimiento y necesidades, lo que significa no solo que los problemas se detectan y corrigen rápido sino también que se crean sistemas más accesibles, pero el software libre va más allá de un código público, lo que se busca es la libertad de elegir, usar, mejorar y compartir un sistema más allá de la calidad y la seguridad del software, un sistema libre te brinda la libertad sobre qué funcionalidades usar y cómo usarlas.

¿Qué hay del Open Source? Bueno, el Free Software es lo mejor para los usuarios, pero no lo mejor para las empresas por cuestiones de control, pero no se puede negar que la forma de desarrollar sistemas libres trae resultado en cuanto a calidad y es aquí donde entre el Open Source enfocado en la conveniencia práctica dejando de lado la parte moral y política. El Open Source no es lo mejor, pero si es preferible a un 100% privado.

Por último, existen webs como https://opensourcealternative.to/ y https://www.bestalternative.dev/ que recopilar Free Software u Open Source.

///
Trabajo practico para "Alfabetización Digital" - Tecnicatura Universitaria en Programación Fullstack - Universidad Provincial de Córdoba. https://docs.google.com/document/d/1rhebA8JmbN9zTTwscR5x4I3V1rhkvChJxawOa0ptwqw/edit?usp=sharing
Raymond, E. S. (1999). La catedral y el bazar. Internet Archive. https://archive.org/details/LaCatedralYElBazar/mode/2up
Stallman, R. (1985). El manifiesto GNU. Free Software Foundation. https://www.gnu.org/gnu/manifesto.es.html
Open Source Initiative. (1998). The open source definition. https://opensource.org/osd
Aprendiendo con Marga. (2025, marzo 2). Software Libre y Open Source: ¿Aliados o Enemigos? [Video]. YouTube. https://youtu.be/H_isHlXK-Ms?si=kP8fVSs8gO2m8Cvx
LinuxChad. (2023, noviembre 14). SOFTWARE LIBRE vs CÓDIGO ABIERTO [HISTORIA y COMPARACIÓN] [Video]. YouTube. https://youtu.be/22AKWRZIVaU?si=lUSiXxDYdDtVkpxK
TEDx Talks. (2014, marzo 12). Free software, free society: Richard Stallman at TEDxGeneva 2014 [Video]. YouTube. https://youtu.be/Ag1AKIl_2GM?si=GFLx02vpEPFeMxFV
///