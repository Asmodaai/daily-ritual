<script setup>
import { t } from "../i18n.js";
import ArrowIcon from './ArrowIcon.vue'
import { photos } from '../data/photos'
const titles = { hands: t("Ruce a krém"), mirror: t("Ranní chvíle u zrcadla"), water: t("Ruce pod tekoucí vodou"), skin: t("Dotek na tváři"), light: t("Světlo na keramice"), ritual: t("Detail rituálu"), linen: t("Tkanina a dřevěný kartáč") }
</script>

<template>
  <details class="photo-credits">
    <summary>{{ t("Fotografie & autoři") }} <span aria-hidden="true">+</span></summary>
    <p>{{ t("Ilustrativní fotografie z Pexels. Zachycené osoby a předměty nejsou zákazníky ani produkty fiktivní značky DAILY RITUAL.") }}</p>
    <ul><li v-for="(photo, key) in photos" :key="key"><a :href="photo.source" target="_blank" rel="noopener noreferrer">{{ titles[key] }} — {{ photo.author }} / Pexels<span class="sr-only"> {{ t("(otevře novou kartu)") }}</span> <span aria-hidden="true"><ArrowIcon direction="diagonal" /></span></a></li></ul>
    <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">{{ t("Licence Pexels") }}<span class="sr-only"> {{ t("(otevře novou kartu)") }}</span> <span aria-hidden="true"><ArrowIcon direction="diagonal" /></span></a>
  </details>
</template>
