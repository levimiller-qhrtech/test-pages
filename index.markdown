---
layout: default
exclude: true
---

{% for page in site.html_pages %}
<ul>
  {% if page.exclude != true %}
<li class="item">
  <a href="{{site.baseurl}}{{ page.url }}">{{page.title}}</a>
  <p>{{page.description}}</p>
</li>
  {% endif %}
</ul>
{% endfor %}
