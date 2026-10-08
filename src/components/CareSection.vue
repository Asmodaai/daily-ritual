<script setup>
import { t } from "../i18n.js";
import EditorialPhoto from './EditorialPhoto.vue'
import { products } from '../data/content'
import ArrowIcon from './ArrowIcon.vue'
import ProductVisual from './ProductVisual.vue'
const careImages = { cleanse: 'water', hydrate: 'skin', protect: 'light' }
</script>

<template>
  <section id="pece" class="care-section section-space" aria-labelledby="care-title">
    <div class="section-shell">
      <div class="section-heading"><div><p class="eyebrow">{{ t("02 / ZÁKLADY PÉČE") }}</p><h2 id="care-title">{{ t("Tři kroky.") }}<br><em>{{ t("Jeden dobrý pocit.") }}</em></h2></div><p class="section-intro">{{ t("Malá kolekce s jasným záměrem.") }}<br>{{ t("Každý krok má své místo.") }}<br>{{ t("Nic navíc.") }}</p></div>
      <div class="care-grid">
        <article v-for="product in products" :key="product.id" class="care-item">
          <a :href="`#produkt-${product.id}`" class="care-art" :class="`care-art-${product.id}`" :aria-label="`${t(&quot;Prohlédnout koncept&quot;)} ${product.name}`">
            <EditorialPhoto :image="careImages[product.id]" sizes="(max-width: 600px) calc(100vw - 48px), 29vw" />
            <span class="care-number">/ {{ product.number }}</span><span class="care-product-inset" aria-hidden="true"><ProductVisual :variant="product.variant" /></span><span class="circle-arrow"><ArrowIcon /></span>
          </a>
          <div class="care-title"><h3>{{ product.name }}</h3><span>{{ product.czech }}</span></div>
          <p>{{ product.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
