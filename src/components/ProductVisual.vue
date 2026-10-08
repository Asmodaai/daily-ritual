<script setup>
defineProps({ variant: { type: String, default: 'hydrate' } })
</script>

<template>
  <!-- Original vector packaging. Solid fills only; deliberately no photographic assets. -->
  <svg class="product-visual" viewBox="0 0 260 430" aria-hidden="true" focusable="false">
    <template v-if="variant === 'cleanse'">
      <ellipse cx="136" cy="401" rx="83" ry="10" fill="#373b2f" opacity=".09" />
      <rect x="79" y="75" width="104" height="35" rx="4" fill="#55594c" />
      <path d="M94 80V44h83v13h-59v23" fill="#414638" />
      <path d="M79 106Q60 110 59 137v245q0 12 14 12h117q13 0 13-12V137q-1-27-21-31Z" fill="#878c75" />
      <path d="M180 109q20 2 23 28v245q0 12-13 12h-13q12-1 12-16V134q0-15-9-25" fill="#72795f" />
      <path d="M69 140v228" stroke="#a6ac95" stroke-width="4" opacity=".7" />
      <rect x="75" y="185" width="112" height="137" fill="#e9e7db" />
      <text x="131" y="214" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" letter-spacing="2" fill="#35382f">DAILY</text>
      <text x="131" y="246" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-style="italic" fill="#35382f">ritual</text>
      <path d="M117 267h28" stroke="#8a8a78" stroke-width=".7" />
      <text x="131" y="286" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" letter-spacing="2" fill="#4b4c3e">CLEANSE</text>
      <text x="131" y="308" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" letter-spacing="1" fill="#4b4c3e">01 — 150 ML</text>
    </template>
    <template v-else-if="variant === 'protect'">
      <ellipse cx="132" cy="401" rx="88" ry="10" fill="#373b2f" opacity=".09" />
      <path d="m65 118 14 253h105l13-253Z" fill="#e9e5d7" stroke="#c9c5b6" stroke-width="1" />
      <path d="m182 122-11 246h13l13-250Z" fill="#d7d1c1" />
      <path d="M65 116h132v11H65Z" fill="#d8d3c4" />
      <path d="M70 120h122" stroke="#b6b1a3" stroke-dasharray="1 3" stroke-width="5" />
      <rect x="78" y="365" width="107" height="31" rx="3" fill="#565a4a" />
      <path d="M84 390h95" stroke="#757967" stroke-width="1" />
      <text x="131" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" letter-spacing="2" fill="#35382f">DAILY</text>
      <text x="131" y="240" text-anchor="middle" font-family="Georgia, serif" font-size="31" font-style="italic" fill="#35382f">ritual</text>
      <path d="M117 263h28" stroke="#8a8a78" stroke-width=".7" />
      <text x="131" y="284" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" letter-spacing="2" fill="#4b4c3e">PROTECT</text>
      <text x="131" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" letter-spacing="1" fill="#4b4c3e">03 — 50 ML</text>
    </template>
    <template v-else>
      <ellipse cx="139" cy="400" rx="80" ry="10" fill="#373b2f" opacity=".10" />
      <rect x="88" y="71" width="89" height="102" rx="3" fill="#3e4237" />
      <path d="M94 77v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86m5-86v86" stroke="#666b59" stroke-width=".8" opacity=".7" />
      <path d="M91 173q-25 7-25 36v167q0 21 20 21h94q20 0 20-21V209q0-29-25-36Z" fill="#d5d1b9" stroke="#aaa78e" stroke-width="1" />
      <path d="M177 178q20 9 20 33v163q0 20-18 20h-14q15-2 15-23V201q0-16-3-23Z" fill="#bbb89b" />
      <path d="M78 212v151" stroke="#eae7d5" stroke-width="5" opacity=".7" />
      <rect x="84" y="220" width="97" height="119" fill="#eeeddf" />
      <text x="133" y="247" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" letter-spacing="2" fill="#35382f">DAILY</text>
      <text x="133" y="280" text-anchor="middle" font-family="Georgia, serif" font-size="31" font-style="italic" fill="#35382f">ritual</text>
      <path d="M120 298h26" stroke="#8a8a78" stroke-width=".7" />
      <text x="133" y="316" text-anchor="middle" font-family="Arial, sans-serif" font-size="6.5" letter-spacing="1.7" fill="#4b4c3e">HYDRATE</text>
      <text x="133" y="366" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" letter-spacing="1" fill="#414535">02 — 30 ML</text>
    </template>
  </svg>
</template>
