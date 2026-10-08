<script setup>
import { onMounted } from "vue";
const interactive = ref(false);
onMounted(() => { interactive.value = true; });
import { t } from "../i18n.js";
import { ref } from 'vue'
import ArrowIcon from './ArrowIcon.vue'
const email = ref('')
const submitted = ref(false)
function submit() {
  // Demo only: no fetch, analytics, storage or server submission.
  email.value = ''
  submitted.value = true
}
</script>

<template>
  <section id="kontakt" class="contact-section section-space" aria-labelledby="contact-title"><div class="section-shell contact-layout"><div><p class="eyebrow">{{ t("07 / ZŮSTAŇME NA CHVÍLI") }}</p><h2 id="contact-title">{{ t("Trocha klidu.") }}<br><em>{{ t("Do vaší schránky.") }}</em></h2></div><div class="contact-form"><p>{{ t("Prostor pro malé poznámky o péči, jednoduchosti a každodenních rituálech.") }}</p><form :inert="!interactive" @submit.prevent="submit"><label for="newsletter-email">{{ t("Váš e-mail") }}</label><div class="email-control"><input id="newsletter-email" v-model="email" type="email" name="email" :placeholder="t(&quot;vas@email.cz&quot;)" required autocomplete="off" aria-describedby="form-note" @input="submitted = false"><button type="submit" :aria-label="t(&quot;Vyzkoušet ukázkový formulář&quot;)"><ArrowIcon /></button></div><p id="form-note" class="form-note">{{ t("Ukázkový formulář. K odběru se nepřihlašujete.") }}<br>{{ t("Žádná data neodesíláme ani neukládáme.") }}</p><p class="form-status" role="status">{{ submitted ? t("Toto je ukázkový formulář v demo projektu. Žádná data nebyla odeslána.") : '' }}</p></form></div></div></section>
</template>
