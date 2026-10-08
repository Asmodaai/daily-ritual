<script setup>
import LanguageSwitch from "./LanguageSwitch.vue";
import { t } from "../i18n.js";
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ArrowIcon from './ArrowIcon.vue'
const isOpen = ref(false)
const toggle = ref(null)
const links = [ [t("Péče"), '#pece'], [t("Rituál"), '#ritual'], [t("Produkty"), '#produkty'], [t("O značce"), '#o-znacce'], [t("Kontakt"), '#kontakt'] ]
function close(event) {
  if (event?.key === 'Escape' && isOpen.value) {
    isOpen.value = false
    toggle.value?.focus()
  }
}
const media = typeof window !== 'undefined' ? window.matchMedia('(min-width: 901px)') : null
function onResize() { if (media.matches) isOpen.value = false }
onMounted(() => { window.addEventListener('keydown', close); media.addEventListener('change', onResize) })
onBeforeUnmount(() => { window.removeEventListener('keydown', close); media.removeEventListener('change', onResize) })
</script>

<template>
  <a class="skip-link" href="#main">{{ t("Přejít na obsah") }}</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="#" :aria-label="t(&quot;DAILY RITUAL — úvod&quot;)" @click="isOpen = false">DAILY RITUAL</a>
      <button ref="toggle" class="menu-toggle" type="button" :aria-expanded="isOpen" aria-controls="main-navigation" @click="isOpen = !isOpen">
        {{ isOpen ? t("Zavřít") : 'Menu' }}<span class="menu-lines" :class="{ 'is-open': isOpen }" aria-hidden="true"><i></i><i></i></span>
      </button>
      <nav id="main-navigation" class="navigation" :class="{ 'is-open': isOpen }" :aria-label="t(&quot;Hlavní navigace&quot;)">
        <a v-for="[label, href] in links" :key="href" :href="href" @click="isOpen = false">{{ label }}</a>
        <a class="header-cta" href="#ritual" @click="isOpen = false">{{ t("Objevit rituál") }} <ArrowIcon /></a>
      <LanguageSwitch />
      </nav>
    </div>
  </header>
</template>
