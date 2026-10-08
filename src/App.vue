<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import CareSection from './components/CareSection.vue'
import RitualSection from './components/RitualSection.vue'
import ProductSection from './components/ProductSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main id="main" tabindex="-1"><HeroSection /><PhilosophySection /><CareSection /><RitualSection /><ProductSection /><AboutSection /><FaqSection /><ContactSection /></main>
  <SiteFooter />
</template>
