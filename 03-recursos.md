---
layout: page
title: Recursos
permalink: /argentina-manuscrita-recursos/
type: extras
---

Pequeño texto de presentacion de los recursos

<!-- Recursos -->
<div class="container mx-auto px-2 py-4">
	<!-- <div class="border-top-thick">  Linea larga 
	<div class="col-1 sm-width-full border-top-thick"> </div> Linea corta -->
  {% for post in site.recursos %}
    {% include post_block.html %}
  {% endfor %}
</div><!-- End Recursos -->