---
layout: default
exclude: true
---

{% for page in site.html_pages %}
  {% if page.exclude != true %}
<div class="item">
  <a href="{{site.canonical_domain}}{{site.baseurl}}{{ page.url }}">{{page.title}}</a>
  <p>{{page.description}}</p>
</div>
  {% endif %}
{% endfor %}
