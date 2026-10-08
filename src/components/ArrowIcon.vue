<script setup>
defineProps({ direction: { type: String, default: 'right' } })
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true" focusable="false">
    <path v-if="direction === 'right'" d="M4 12h15M13 5l7 7-7 7" />
    <path v-else-if="direction === 'diagonal'" d="M5 19 19 5M10 5h9v9" />
    <path v-else-if="direction === 'up'" d="M12 20V4M5 11l7-7 7 7" />
    <path v-else-if="direction === 'down'" d="M12 4v16M5 13l7 7 7-7" />
  </svg>
</template>
