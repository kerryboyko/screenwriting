---
layout: default
title: About
permalink: /about/
---
{% capture include_content %}
  {% include about-content.md %}
{% endcapture %}


<section class="wrap simple-page">
  <p class="eyebrow">ABOUT THE WRITER</p>
  <h1>Kerry Ann Burke</h1>
  <p class="lead">Screenwriter, novelist and comedian.</p>

  <div class="about-layout">
    <div class="about-photo">
      <img src="{{ '/assets/images/kerry-ann-burke.jpg' | relative_url }}"
           alt="Kerry Ann Burke"/>
    </div>

<div class="about-bio">
  {{ include_content | markdownify }}
</div>
  </div>
</section>