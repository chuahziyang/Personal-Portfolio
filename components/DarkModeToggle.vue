<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

//define props
</script>

<template>
  <button @click="toggleDark()">
    <fa v-if="!isDark" :icon="[`fas`, `moon`]" size="xl" target="_blank"> </fa>
    <fa
      v-if="isDark"
      color="white"
      :icon="[`fas`, `sun`]"
      size="xl"
      target="_blank"
    >
    </fa>
  </button>
</template>
