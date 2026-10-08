<script setup>
import { t } from "../i18n.js";
import { questions } from '../data/content'
</script>

<template>
  <section class="faq-section section-shell section-space" aria-labelledby="faq-title">
    <div class="faq-heading"><p class="eyebrow">{{ t("06 / DOBRÉ VĚDĚT") }}</p><h2 id="faq-title">{{ t("Pár otázek.") }}<br><em>{{ t("Jasné odpovědi.") }}</em></h2></div>
    <div class="faq-list"><details v-for="(item, index) in questions" :key="item.question"><summary><span class="faq-number">0{{ index + 1 }}</span><span>{{ item.question }}</span><span class="faq-toggle" aria-hidden="true"></span></summary><p>{{ item.answer }}</p></details></div>
  </section>
</template>
