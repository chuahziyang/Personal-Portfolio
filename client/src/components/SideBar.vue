<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a class="icon" v-for="link in links" :key="link" :href="link.link"
        ><i class="not-italic block font-medium">
          {{ link.name }}
        </i>
      </a>
    </div>
  </nav>
</template>

<script setup>
import links from "@/data/links";
</script>
