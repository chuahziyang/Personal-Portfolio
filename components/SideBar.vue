<template>
  <header
    class="sm:mr-5 lg:mr-10 xl:mr-20 2xl:mr-40 h-20 flex items-center justify-center sm:justify-end py-6"
  >
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
