---
layout: default
---

Ce site a pour objectif de normaliser et faciliter l'usage de l'écriture inclusive.

## [Article de présentation des résultats](https://medium.com/@matti_sg_fr/point-médian-final-point-dhyphénation-3f749c32b659)

{% for page in site.pages %}
{% if page.title %}
## [{{ page.title }}]({{ page.url }})
{% endif %}
{% endfor %}
