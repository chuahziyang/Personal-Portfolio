<template>
  <div :class="getmode()">
    <div
      class="flex h-screen flex-col bg-white dark:bg-thegray justify-between"
    >
      <div class="mx-20">
        <side-bar></side-bar>
      </div>
      <div class="mx-auto grow min-w-xl max-w-3xl w-full">
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
