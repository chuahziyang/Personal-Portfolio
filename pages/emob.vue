<script setup lang="ts">
const projectname = "EMOB+";
const projectdescription =
  "Ready to deploy, distributed cryptocurrency trading bot. The idea of this project originally came from a script I used to automate buying and selling of fiat assets. I was curious and wanted to scale it into a real system which can execute trades for me. I had a lot of fun building this. I got to play with lots of different technologies while growing my financial knowledge.";
const stack = [
  { name: "TailwindCSS", colour: "blue" },
  { name: "Prisma", colour: "green" },
  { name: "VueJS", colour: "green" },
  { name: "Postgres", colour: "blue" },
];
</script>

<template>
  <view-wrapper>
    <div class="grow">
      <h1>{{ projectname }}</h1>
      <h4>{{ projectdescription }}</h4>
      <h2>Stack</h2>
      <stack-bar :stack="stack"></stack-bar>
    </div>
  </view-wrapper>
</template>
