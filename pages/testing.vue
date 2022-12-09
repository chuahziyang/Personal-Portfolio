<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
-->
<template>
  <ViewWrapper> {{ data }}</ViewWrapper>
</template>

<script setup>
const { data } = await useContacts({
  content: "Testing",
  email: "czyang2002@gmail.com",
  name: "God himself",
  company: "Ro and Co",
});
</script>
