---
id: 798
title: Efecto Droste
show_date: true
date: 2016-12-06T00:46:00+00:00
author: sito
guid: 798
permalink: tecnologia/fotografia/efecto-droste
categories:
  -  tecnologia
  -  fotografia
header:
  image: https://uploads.andeandaran.com/2016/12/31455709425_a8b067467a_b.jpg
---

Hace unos años, frikeando por el mundo de la fotografía, encontré <a href="https://www.flickr.com/photos/top-shot-man/4137477891" target="_blank">una imagen en Flickr</a> que llamó mucho mi atención, estaba hecha con el famoso <a href="https://es.wikipedia.org/wiki/Reloj_Astronómico_de_Praga" target="_blank">reloj astronómico de Praga</a>. Inmediatamente me puse a buscar cómo se hacía.<br /> Se trata del "efecto Droste", un tipo de imagen recursiva que se repite, dentro de la propia imagen, una y otra vez (cada vez más pequeña).<!--more-->


La imagen que abre este post y la que aparece a continuación están creadas usando una foto de la fachada de la oficina central de correos de Ho Chi Minh.


[<img src="https://live.staticflickr.com/5581/31455709425_a8b067467a_b.jpg"/>](https://www.flickr.com/photos/sitoo/31455709425/lightbox/)

Esta es la foto original:

[<img src="https://live.staticflickr.com/5691/31084813960_16b62edd50_c.jpg" alt="Ho Chi Minh Central Post Office, Vietnam"  />](https://www.flickr.com/photos/sitoo/31084813960/in/photostream/lightbox/)

Para poder aplicar este efecto a nuestras fotos hace falta tener dos programas instalados:

<ul>
  <li style="text-align: left;">
    GIMP, un programa de edición de fotos al estilo Photoshop pero `OpenSource` que podéis descargar de su web - <a href="https://www.gimp.org" target="_blank">https://www.gimp.org</a>
  </li>
  <li style="text-align: left;">
    Mathmap, un plugin para GIMP, también gratuito - <a href="http://www.complang.tuwien.ac.at/schani/mathmap/" target="_blank">http://www.complang.tuwien.ac.at/schani/mathmap/</a>
  </li>
</ul>

### Instalación de Mathmap



  Actualmente Mathmap instala el plugin para la versión 2.6 de GIMP (una versión de hace bastante tiempo), por lo tanto, si tu GIMP no es la versión 2.6, es necesario copiar o mover los archivos de Mathmap a otra carpeta.



  A día de hoy la versión de GIMP es la 2.8, así que hay que copiar los archivos de `C:\Users\TU-USUARIO\.gimp-2.6` a `C:\Users\TU-USUARIO\.gimp-2.8`



  Una vez hecho esto ya deberías poder usar Mathmap desde GIMP.<br /> Para acceder a los filtros de Mathmap abre una imagen con GIMP y dirígete a Filtros -> Genéricos -> Mathmap


### Uso del plugin de Mathmap (y el filtro Droste)



  Mathmap ofrece un montón de posibilidades y de filtros distintos, pero por el momento nos interesa el Droste.<br /> Lo encontraréis en Filtros -> Genéricos -> Mathmap -> Map -> Droste



  Este filtro consta de dos pestañas, `Settings` o `Configuración` para las opciones básicas y `User Values` o `Valores de Usuario` para trastear.
<figure id="attachment_800" style="width: 473px" >

<img class="wp-image-800" src="https://uploads.andeandaran.com/2016/12/droste1.jpg" alt="Droste Settings o Configuración" /> <figcaption class="wp-caption-text">Pestaña de Configuración.  Para que la imagen ocupe todo el lienzo y se repita es importante elegir el comportamiento deseado para los ejes X e Y</figcaption></figure> 
<figure id="attachment_801" style="width: 528px" >

<img class="wp-image-801" src="https://uploads.andeandaran.com/2016/12/droste2.jpg" alt="Droste User Values o Valores de Usuario" /> <figcaption class="wp-caption-text">Pestaña de valores de usuario</figcaption></figure> 


  A la hora de configurar los Valores de Usuario, son todos bastante complejos de explicar, a día de hoy solo tengo una leve noción de qué hace cada uno, lo mejor es experimentar con cada parámetro y observar el resultado.<br /> Solo un pequeño apunte, si la periodicidad es un número entero y el radio interno y externo tienen el mismo valor, entonces la imagen no se cortará



  A continuación dejo algunos de los montajes que he hecho.


<p style="text-align: center;">
  Las Cuatro Torres de Madrid

[<img src="https://live.staticflickr.com/1591/25088352165_7b04d4d4e4_c.jpg" alt="las torres"  />](https://www.flickr.com/photos/sitoo/25088352165/)
</p>

<p style="text-align: center;">
  El reloj de la plaza San Marco, Venecia.

[<img src="https://live.staticflickr.com/4311/35390765653_9061af95b6_b.jpg" alt="St. marks Clock, Venecia"  />](https://www.flickr.com/photos/sitoo/35390765653/in/album-72157607822233230/)
</p>

<p style="text-align: center;">
  Un plato Technics
[<img src="https://live.staticflickr.com/4018/5151093627_a0e83ca672_c.jpg" alt="turntable"/>](https://www.flickr.com/photos/sitoo/5151093627)
</p>