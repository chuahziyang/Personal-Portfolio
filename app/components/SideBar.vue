<template>
  <header class="flex items-center justify-end py-8">
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        <a
          v-for="link in links"
          :key="link"
          :href="link.link"
          class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
        >
          {{ link.name }}
        </a>
        <dark-mode-toggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import links from "@/data/links";
</script>
