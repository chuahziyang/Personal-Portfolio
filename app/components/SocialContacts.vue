<template>
  <div class="flex justify-center">
    <a
      class="mx-2"
      v-for="icon in icons"
      :key="icon"
      target="_blank"
      :href="icon.link"
    >
      <fa
        :icon="[`${icon.icon}`, `${icon.iconlink}`]"
        size="xl"
        target="_blank"
      >
      </fa>
    </a>
    <!-- <h1 v-for="icon in icons" :key="icon">
      {{ icon.name }}
    </h1> -->
  </div>
</template>

<script setup lang="ts">
import icons from "@/data/iconlist";
</script>
