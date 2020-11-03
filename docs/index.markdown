---
layout: default
---

{% for page in site.pages %}
<div class="item">
  <a href="{{page.url}}">{{page.title}}</a>
  <p>{{page.description}}</p>
</div>
{% endfor %}
