---
layout: page
title: Análisis textual automatizado
permalink: /voyant/
type: extras
description: Estadísticas textuales y visualizaciones del texto realizadas con Voyant Tools
icon: bar-chart
---

Exploración del contenido de _La Argentina manuscrita_ con [Voyant Tools](https://voyant-tools.org/), una herramienta de lectura distante y análisis estadístico de textos digitales.

Las siguientes secciones presentan cuadros interactivos. En cada panel, deslice el cursor sobre la esquina derecha de la barra superior para mostrar las opciones. El ícono <i class="fa-solid fa-question" style="color:#157fcc;"></i> permite acceder a una explicación de la herramienta usada en cada panel. El ícono <i class="fa-solid fa-toggle-on" style="color:#157fcc;"></i> permite modificar las opciones de la herramienta.

## Nube de palabras

Palabras más frecuentes del texto de Ruy Díaz de Guzmán. Deslice el cursor sobre las palabras para ver la frecuencia en el texto.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Cirrus/?stopList=keywords-aee95251ec7b74766c68cc90532d0620&corpus=a05ace93597cf15e68d74ea75c67677d'></iframe>

Deslice la barra de términos para aumentar o disminuir la cantidad de palabras en la nube.

## Contextos

Contexto enunciativo de las palabras más frecuentes del texto. Puede modificar por frecuencia ascendente o descendente.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Links/?stopList=keywords-aee95251ec7b74766c68cc90532d0620&query=indios&query=r%C3%ADo&query=tierra&corpus=a05ace93597cf15e68d74ea75c67677d'></iframe>

Modifique el término a consultar desde el menú inferior izquierdo.

## Tendencias

Evolución de la frecuencia de los principales términos de _La Argentina Manuscrita_.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Trends/?stopList=keywords-aee95251ec7b74766c68cc90532d0620&query=indios&query=r%C3%ADo&query=tierra&query=capit%C3%A1n&query=gente&mode=document&corpus=a05ace93597cf15e68d74ea75c67677d'></iframe>

## Grafo de colocaciones

Deslice el cursor sobre las palabras de este grafo de colocaciones para consultar la frecuencia de cada par de términos.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/CollocatesGraph/?view=trends&stopList=keywords-b0e30ff37d5ab480818b02985f1a0a3d&query=indios&query=r%C3%ADo&query=tierra&query=capit%C3%A1n&query=gente&query=todos&query=provincia&query=parte&query=don&query=ciudad&corpus=a05ace93597cf15e68d74ea75c67677d'></iframe>

<div class="py-4 mt-4"><p>Visite <a href="'https://service.sadilar.org/voyant/?panels=streamgraph%2Creader%2Ccorpuscollocates%2Csummary%2Cbubblelines&corpus=a05ace93597cf15e68d74ea75c67677d" target="_blank">este link</a> para descubrir <i>La Argentina Manuscrita</i> a la luz de otras herramientas ofrecidas por Voyant Tools: <a href="https://service.sadilar.org/voyant/tool/Bubbles/?stopList=keywords-aee95251ec7b74766c68cc90532d0620&corpus=a05ace93597cf15e68d74ea75c67677d" target="_blank">burbujas de términos</a>, <a href="https://service.sadilar.org/voyant/tool/Veliza/?view=Veliza&corpus=a05ace93597cf15e68d74ea75c67677d" target="_blank">Veliza</a>, <a href="https://service.sadilar.org/voyant/tool/TextualArc/?stopList=keywords-aee95251ec7b74766c68cc90532d0620&corpus=a05ace93597cf15e68d74ea75c67677d" target="_blank">arco textual</a> y muchas más.</p></div>
