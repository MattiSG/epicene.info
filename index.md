---
layout: default
---

Ce site a pour objectif de normaliser et faciliter l'usage de l'écriture inclusive.

{% for page in site.pages %}
{% if page.title %}
##[{{ page.title }}]({{ page.url }})
{% endif %}
{% endfor %}
