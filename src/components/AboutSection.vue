<script setup>
import { t } from "../i18n.js";
import EditorialPhoto from './EditorialPhoto.vue'
</script>

<template>
  <section id="o-znacce" class="about-section section-shell section-space" aria-labelledby="about-title">
    <figure class="about-art about-photograph"><EditorialPhoto image="linen" sizes="(max-width: 600px) calc(100vw - 48px), 35vw" /><figcaption>{{ t("Forma. Textura. Každodennost.") }}</figcaption></figure>
    <div class="about-copy"><p class="eyebrow">{{ t("05 / O ZNAČCE") }}</p><h2 id="about-title">{{ t("Krása v tom,") }}<br><em>{{ t("co zůstává.") }}</em></h2><p>{{ t("DAILY RITUAL je představa péče, která nemusí být složitá, aby měla ve vašem dni místo. Věří v jednoduché tvary, srozumitelná slova a drobné každodenní okamžiky.") }}</p><p>{{ t("Tento svět vznikl jako") }} <strong>{{ t("fiktivní portfolio projekt studia VERBA") }}</strong>{{ t(". Od vizuální identity přes autorské ilustrace obalů až po web, který právě procházíte. Ukázka toho, jak může digitální prostor vyprávět příběh značky. Fotografie dokreslují atmosféru; nezobrazují produkty ani zákazníky DAILY RITUAL.") }}</p><div class="about-signoff"><span class="wordmark">DAILY RITUAL</span><span>{{ t("Koncept. S citem pro detail.") }}</span></div></div>
  </section>
</template>
