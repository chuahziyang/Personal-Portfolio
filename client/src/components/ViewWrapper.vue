<template>
  <div :class="getmode()">
    <div
      class="flex h-screen flex-col bg-white dark:bg-thegray justify-between"
    >
      <side-bar></side-bar>
      <div class="mx-20 grow">
        <slot></slot>
      </div>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";

function getmode() {
  // return "dark";
  return "";
}
</script>
