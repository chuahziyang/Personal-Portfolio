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
  <!-- <div class="h-[30rem] bg-green-200">asdasd</div> -->
  <div class="h-[36rem] bg-green-200 flex">
    <ImageCarousell :links="links"></ImageCarousell>
  </div>
</template>

<script setup>
const links = ["mtrac5", "mtrac", "mtrac1", "mtrac2", "mtrac3"];
</script>
