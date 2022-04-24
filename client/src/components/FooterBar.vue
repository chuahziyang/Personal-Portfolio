<script setup>
//get current year
import SocialContacts from "@/components/SocialContacts.vue";
const year = new Date().getFullYear();
</script>

<template>
  <div>
    <social-contacts></social-contacts>
    <div className="flex flex-coL items-center font-light dark:text-white">
      <span className="pb-8 mt-4 text-xs font-light lg:mt-8">
        {{ year }}
        <span>&#169;</span>
        Chuah Zi Yang
      </span>
    </div>
  </div>
</template>
