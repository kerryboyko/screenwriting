---
layout: default
title: About
permalink: /about/
---

{% capture include_content %}
{% include about-content.md %}
{% endcapture %}


{% capture writing_story %}

### An unusual route to writing

I came to fiction relatively late in life, and by an unusual route.

Until 2022, I struggled to write relatable characters, in part because I struggled to relate to myself. That changed when I realized I was transgender.

In 2023, I discovered transgender literature and, for the first time, found characters whose experiences reflected my own. Not caricatures, punchlines, or villains, but fully realized people with their own stories to tell.

I started writing fan fiction, and in September 2024 began publishing *We Interrupt This Transition* serially on Scribble Hub. It was my first original work of fiction.

I've been making up for lost time ever since.

As mentioned above before turning to fiction, I worked in journalism, marketing, political activism, and software engineering. Those experiences have left their fingerprints on my writing. I'm fascinated by systems, particularly the absurd ways they fail, the people who build and maintain them, and the people who get caught in their machinery.

### An unexpected detour to Ireland

In 2025, following Donald Trump's return to the White House and the political agenda outlined in Project 2025, I made the decision to leave the United States.

As a transgender American, I no longer felt that my future there was secure.

I needed a way to establish myself somewhere safer. And, as it happened, I'd recently discovered a passion for writing fiction.

I applied to the MA in Screenwriting for Film and Television at the National Film School at IADT in Dún Laoghaire. The programme offered me something I needed immediately: an opportunity to establish myself in Ireland, at least temporarily. But it also offered something I hadn't expected to pursue professionally just a few years earlier: the opportunity to develop my craft as a screenwriter.

I came to Ireland because I needed somewhere to build a future. Studying screenwriting became part of how I began building one.

### The stories I like to write

I'm drawn to stories about outsiders, particularly people who find themselves at odds with the world around them. My work moves between comedy, drama, horror, and science fiction, often combining elements of all four. I like stories that make audiences laugh, then make them uncomfortable about what they're laughing at, and occasionally make them cry.

And usually, they're laughing again by the end of it. 

I think that's actually quite a queer way of looking at storytelling. I work a lot with tone blending and tone shifting, in part because that's the queer experience, at least as I've known it: we experience profound loss and profound joy in rapid succession. Queer history has been filled with protests and fights for survival during the day, and parties at night... and the parties are *why* queer people fought. 

Queer lives are, perhaps because of our precarity, perhaps because of our rarity, filled with tonal whiplash. And that's one of the things I hope to accomplish — to get people to feel that juddering sense of the rug being pulled out from under you, and the miraculous feeling of landing on your feet anyway. 

I've found that, rather than confusing audiences, comedy underlines tragedy. It doesn't undercut it. Loss hurts more when we've seen what made something worth keeping. And joy lifts us so much higher when we see how far we have come. 

## Get in touch

I'm based in Dún Laoghaire, Ireland, and interested in opportunities to develop original film and television projects, collaborate with filmmakers, and bring unusual stories to the screen.

[If something I've written interests you, I'd love to hear from you.]({{ '/contact/' | relative_url }})

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
<div class="about-writing-story">
  {{ writing_story | markdownify }}
</div>
</section>
