<script setup>
//get current year
import SocialContacts from "@/components/SocialContacts.vue";
const year = new Date().getFullYear();
</script>

<template>
  <div>
    <social-contacts></social-contacts>
    <div
      className="mt-2 flex flex-col items-center py-8 font-light dark:text-white lg:py-8"
    >
      <span className="mt-4 text-xs font-light lg:mt-8">
        {{ year }}
        <span>&#169;</span>
        Chuah Zi Yang
      </span>
    </div>
  </div>
</template>
