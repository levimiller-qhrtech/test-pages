---
layout: default
---

{% for page in site.pages %}
<div class="item">
  <h3>{{page.title}}</h3>
  <p>{{page.description}}</p>
</div>
{% endfor %}
