<script setup>
import { t } from "../i18n.js";
import EditorialPhoto from './EditorialPhoto.vue'
import ArrowIcon from './ArrowIcon.vue'
import ProductVisual from './ProductVisual.vue'
</script>

<template>
  <section class="hero section-shell" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="tiny-star" aria-hidden="true">✳</span> {{ t("KAŽDODENNÍ PÉČE. VLASTNÍ TEMPO.") }}</p>
      <h1 id="hero-title">{{ t("Méně.") }}<br><em>{{ t("A přece víc.") }}</em></h1>
      <p class="hero-description">{{ t("Méně kroků. Více prostoru pro sebe.") }}<br>{{ t("Promyšlená péče, která do vašeho dne") }}<br class="desktop-break"> {{ t("přirozeně zapadne.") }}</p>
      <a href="#ritual" class="button button-dark">{{ t("Najít svůj rituál") }} <ArrowIcon /></a>
      <div class="hero-footnote"><span class="small-rule"></span><span>{{ t("Jednoduchost je krásný začátek.") }}</span></div>
    </div>
    <figure class="hero-art" :aria-label="t(&quot;Lahvička DAILY RITUAL v obloukové nice vedle fotografie každodenní péče&quot;)">
      <div class="art-index"><span>{{ t("KAŽDODENNÍ KOLEKCE") }}</span><span>{{ t("Č. 02") }}</span></div>
      <EditorialPhoto image="hands" class="hero-photo" :priority="true" sizes="(max-width: 600px) 66vw, 30vw" />
      <div class="hero-product-stage"><div class="arch-back"></div>
      <div class="art-sun" aria-hidden="true"></div>
      <div class="bottle-shadow"></div>
      <div class="hero-bottle"><ProductVisual /></div>
      <div class="stone-plinth"></div></div>
      <span class="art-side-label" aria-hidden="true">{{ t("MALÝ OKAMŽIK. JEN PRO VÁS.") }}</span>
      <figcaption><span>{{ t("Hydrate / Hydratační esence") }}</span><span>30 ml</span></figcaption>
    </figure>
    <div class="hero-bottom"><span>{{ t("PÉČE, KTERÁ DÁVÁ PROSTOR.") }}</span><a href="#filozofie">{{ t("O kousek níž") }} <span aria-hidden="true"><ArrowIcon direction="down" /></span></a><span>{{ t("FIKTIVNÍ KONCEPT / 2026") }}</span></div>
  </section>
</template>
