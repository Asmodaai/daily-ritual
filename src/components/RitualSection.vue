<script setup>
import { t } from "../i18n.js";
import EditorialPhoto from './EditorialPhoto.vue'
import { computed, ref } from 'vue'
import { routines } from '../data/content'
const selected = ref('morning')
const routine = computed(() => routines[selected.value])
</script>

<template>
  <section id="ritual" class="ritual-section section-space" aria-labelledby="ritual-title">
    <div class="section-shell">
      <div class="ritual-top"><p class="eyebrow">{{ t("03 / VÁŠ KAŽDODENNÍ RITUÁL") }}</p><span class="ritual-symbol" aria-hidden="true">✳</span></div>
      <div class="ritual-heading"><h2 id="ritual-title">{{ t("Chvíle, která") }}<br><em>{{ t("patří jen vám.") }}</em></h2><div class="ritual-controls"><p>{{ t("Každý den má svůj rytmus.") }}<br>{{ t("Najděte v něm místo pro sebe.") }}</p><div class="routine-switch" role="group" :aria-label="t(&quot;Vyberte denní dobu&quot;)"><button type="button" :aria-pressed="selected === 'morning'" @click="selected = 'morning'"><span aria-hidden="true">☼</span> {{ t("Ráno") }}</button><button type="button" :aria-pressed="selected === 'evening'" @click="selected = 'evening'"><span aria-hidden="true">☾</span> {{ t("Večer") }}</button></div></div></div>
      <figure class="ritual-moment"><EditorialPhoto image="ritual" sizes="(max-width: 600px) calc(100vw - 48px), 52vw" /><figcaption><span class="eyebrow">{{ t("DOTYK. NÁDECH. CHVÍLE PRO SEBE.") }}</span><span>{{ t("Tak málo.") }}<br><em>{{ t("Tak vaše.") }}</em></span></figcaption></figure>
      <div class="routine-content" aria-live="polite" aria-atomic="true">
        <p class="routine-note">{{ routine.note }}</p>
        <ol class="ritual-steps"><li v-for="(step, index) in routine.steps" :key="index"><span class="step-number" aria-hidden="true">0{{ index + 1 }}</span><p class="eyebrow">{{ step.label }}</p><h3>{{ step.title }}</h3><p>{{ step.copy }}</p></li></ol>
      </div>
      <p class="ritual-disclaimer">{{ t("Inspirace pro běžnou péči. Konkrétní přípravky a postup vždy přizpůsobte své pleti.") }}</p>
    </div>
  </section>
</template>
