---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% for page in site.pages %}
<div class="item">
  <a href="{{page.url}}">{{page.title}}</a>
  <p>{{page.description}}</p>
</div>
{% endfor %}
