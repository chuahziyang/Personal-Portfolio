<template>
  <div class="flex flex-row">
    <h1 v-for="icon in icons" :key="icon">
      {{ icon.name }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import icons from "@/data/iconlist";
</script>
