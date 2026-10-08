<script setup>
import { t } from "../i18n.js";
import EditorialPhoto from './EditorialPhoto.vue'
</script>

<template>
  <section id="filozofie" class="philosophy section-shell section-space" aria-labelledby="philosophy-title">
    <p class="eyebrow section-kicker">{{ t("01 / NAŠE FILOZOFIE") }}</p>
    <div class="philosophy-content">
      <h2 id="philosophy-title">{{ t("Každý den.") }}<br><em>{{ t("Jeden malý rituál.") }}</em></h2>
      <div class="philosophy-text"><p>{{ t("Nemusíte dělat víc. Někdy stačí pár dobře zvolených kroků a chvíle, která patří jen vám.") }}</p><p>{{ t("DAILY RITUAL staví na jednoduché myšlence: každodenní péče může být příjemnou součástí dne. Bez složitých pravidel. Bez velkých slibů. S pozorností k tomu, co vám vyhovuje.") }}</p><span class="handwritten">{{ t("Méně věcí. Více smyslu.") }}</span></div>
    </div>
    <figure class="philosophy-moment">
      <EditorialPhoto image="mirror" sizes="(max-width: 600px) calc(100vw - 48px), 57vw" />
      <figcaption><span class="eyebrow">{{ t("MALÉ OKAMŽIKY / 01") }}</span><span>{{ t("Jen vy.") }}<br><em>{{ t("A přítomný okamžik.") }}</em></span><span class="moment-caption">{{ t("Péče, která začíná pozorností.") }}</span></figcaption>
    </figure>
    <div class="principles"><span>01 <span>{{ t("Promyšlená jednoduchost") }}</span></span><span>02 <span>{{ t("Prostor pro každodennost") }}</span></span><span>03 <span>{{ t("Péče ve vašem tempu") }}</span></span></div>
  </section>
</template>
