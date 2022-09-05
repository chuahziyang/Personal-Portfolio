<template>
  <header class="flex items-center justify-center sm:justify-end py-8">
    <div class="flex flex-row sm:block py-2">
      <a
        v-for="link in links"
        :key="link"
        :href="link.link"
        class="font-medium text-gray-900 dark:text-gray-100 p-4"
      >
        {{ link.name }}
      </a>
      <dark-mode-toggle />
    </div>
  </header>
</template>

<script setup>
import links from "@/data/links";
</script>
