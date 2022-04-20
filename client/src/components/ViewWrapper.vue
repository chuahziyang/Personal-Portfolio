<template>
  <div class="flex h-screen flex-col justify-between">
    <side-bar></side-bar>
    <slot></slot>
    <footer-bar></footer-bar>
  </div>
</template>

<script setup lang="ts">
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>
