<template>
  <div>
    <div
      class="sm:max-h-screen sm:max-w-screen flex h-full min-h-screen flex-col bg-white dark:bg-thegray justify-between"
    >
      <side-bar class="bg-green-200"></side-bar>
      <div
        class="bg-orange-200 flex mx-10 sm:mx-auto grow max-w-3xl md:w-screen"
      >
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
