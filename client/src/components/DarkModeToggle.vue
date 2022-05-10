<script setup lang="ts">
//eslint-disable-next-line
const props = defineProps({
  darkmode: {
    type: Boolean,
    default: false,
  },
});
//define props
</script>

<template>
  <button>
    <fa v-if="!darkmode" :icon="[`fas`, `moon`]" size="xl" target="_blank">
    </fa>
    <fa v-if="darkmode" :icon="[`fas`, `sun`]" size="xl" target="_blank"> </fa>
  </button>
</template>
