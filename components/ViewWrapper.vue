<template>
  <div>
    <div
      class="flex h-full min-h-screen flex-col bg-white dark:bg-thegray justify-between"
    >
      <side-bar></side-bar>
      <div class="flex mx-10 sm:mx-auto grow max-w-3xl w-full">
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
