<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isDarkValue = useState("darkValue", () => isDark.value);

watchEffect(() => {
  isDarkValue.value = isDark.value;
});

//define props
</script>

<template>
  <button class="w-4" @click="toggleDark()">
    <fa
      v-if="isDarkValue"
      color="white"
      :icon="[`fas`, `sun`]"
      size="xl"
      target="_blank"
    >
    </fa>
    <fa v-else :icon="[`fas`, `moon`]" size="xl" target="_blank"> </fa>
  </button>
</template>
