<script setup>
import { computed } from 'vue'
import { photos } from '../data/photos'
const props = defineProps({
  image: { type: String, required: true, validator: value => value in photos },
  alt: { type: String, default: undefined },
  sizes: { type: String, default: '(max-width: 600px) calc(100vw - 48px), 45vw' },
  priority: { type: Boolean, default: false },
})
const photo = computed(() => photos[props.image])
</script>

<template>
  <img class="editorial-photo" :src="photo.src" :srcset="photo.srcset" :sizes="sizes"
    :width="photo.width" :height="photo.height" :alt="alt ?? photo.alt"
    :loading="priority ? 'eager' : 'lazy'" :fetchpriority="priority ? 'high' : 'auto'" decoding="async">
</template>
