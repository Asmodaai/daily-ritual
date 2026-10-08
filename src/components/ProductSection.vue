<script setup>
import { t } from "../i18n.js";
import EditorialPhoto from './EditorialPhoto.vue'
import { ref } from 'vue'
import { products } from '../data/content'
import ProductVisual from './ProductVisual.vue'
const expanded = ref(null)
</script>

<template>
  <section id="produkty" class="products-section section-shell section-space" aria-labelledby="products-title">
    <div class="section-heading"><div><p class="eyebrow">{{ t("04 / KAŽDODENNÍ KOLEKCE") }}</p><h2 id="products-title">{{ t("Na poličce.") }}<br><em>{{ t("I ve vašem dni.") }}</em></h2></div><p class="section-intro">{{ t("Čisté tvary. Klidné tóny. Malé detaily.") }}<br>{{ t("Tři předměty, jeden společný příběh.") }}</p></div>
    <div class="collection-layout">
      <figure class="collection-art" :aria-label="t(&quot;Kompozice tří originálních kosmetických obalů DAILY RITUAL&quot;)"><span class="eyebrow collection-edition">{{ t("KAŽDODENNÍ PŘEDMĚTY / EDICE 01") }}</span><div class="collection-circle"></div><div class="collection-pedestal"></div><ProductVisual variant="cleanse" class="collection-cleanse" /><ProductVisual variant="hydrate" class="collection-hydrate" /><ProductVisual variant="protect" class="collection-protect" /><figcaption>{{ t("Navrženo pro malé každodenní okamžiky.") }}</figcaption></figure>
      <div class="product-list"><figure class="collection-texture"><EditorialPhoto image="linen" sizes="(max-width: 600px) calc(100vw - 48px), 36vw" /><figcaption>{{ t("Textury každodennosti.") }}</figcaption></figure><p class="eyebrow product-list-label">{{ t("PROZKOUMEJTE KOLEKCI") }}</p><article v-for="product in products" :id="`produkt-${product.id}`" :key="product.id" class="product-row"><button type="button" :aria-expanded="expanded === product.id" :aria-controls="`detail-${product.id}`" @click="expanded = expanded === product.id ? null : product.id"><span class="product-row-number">{{ product.number }}</span><span class="product-row-info"><span class="product-name">{{ product.name }}</span><span>{{ product.type }}</span></span><span class="product-volume">{{ product.volume }}</span><span class="expand-sign" aria-hidden="true">{{ expanded === product.id ? '−' : '+' }}</span></button><div v-show="expanded === product.id" :id="`detail-${product.id}`" class="product-detail"><p>{{ product.copy }}</p><p>{{ t("Fiktivní návrh obalu a produktu. Uvedený objem je součástí designového konceptu; výrobek nemá skutečné složení a není v prodeji.") }}</p></div></article><p class="collection-note">{{ t("Designový koncept. Produkty nejsou v prodeji.") }}</p></div>
    </div>
  </section>
</template>
