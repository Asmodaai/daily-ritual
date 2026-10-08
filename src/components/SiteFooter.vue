<script setup>
import { t } from "../i18n.js";
import ArrowIcon from './ArrowIcon.vue'
import PhotoCredits from './PhotoCredits.vue'
</script>

<template>
  <footer class="site-footer section-shell"><div class="footer-top"><a class="wordmark" href="#">DAILY RITUAL</a><span>{{ t("Méně. A přece víc.") }}</span><a class="back-top" href="#">{{ t("Zpět nahoru") }} <span aria-hidden="true"><ArrowIcon direction="up" /></span></a></div><div class="footer-bottom"><span>© {{ new Date().getFullYear() }} {{ t("DAILY RITUAL — koncept") }}</span><span lang="en">Concept project by <strong>VERBA</strong></span><span>{{ t("Fiktivní portfolio projekt") }}</span></div><PhotoCredits /></footer>
</template>
