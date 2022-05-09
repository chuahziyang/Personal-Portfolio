<template>
  <header className="flex items-center justify-end py-8">
    <div className="flex items-center text-base leading-5">
      <div className="hidden sm:block">
        <a
          v-for="link in links"
          :key="link"
          :href="link.link"
          className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
        >
          {{ link.name }}
        </a>
      </div>
      <ThemeSwitch />
      <MobileNav />
    </div>
  </header>
</template>

<script setup>
import links from "@/data/links";
</script>
