<template>
  <div class="flex justify-center">
    <fa
      class="mx-2"
      v-for="icon in icons"
      :key="icon"
      :icon="[`${icon.icon}`, `${icon.iconlink}`]"
      size="xl"
    ></fa>
    <!-- <h1 v-for="icon in icons" :key="icon">
      {{ icon.name }}
    </h1> -->
  </div>
</template>

<script setup lang="ts">
import icons from "@/data/iconlist";
</script>
