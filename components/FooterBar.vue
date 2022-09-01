<script setup>
//get current year
import SocialContacts from "@/components/SocialContacts.vue";
const year = new Date().getFullYear();
</script>

<template>
  <div>
    <social-contacts></social-contacts>
    <div class="flex justify-center font-light">
      <span class="pb-2 mt-4 text-xs font-light dark:text-gray-200">
        {{ year }}
        <span>&#169;</span>
        Chuah Zi Yang
      </span>
    </div>
  </div>
</template>
