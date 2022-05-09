<script setup>
import ViewWrapper from "@/components/ViewWrapper.vue";
import StackBar from "@/components/StackBar.vue";

const stack = [
  { name: "Vue.js", colour: "blue" },
  { name: "Prisma", colour: "blue" },
  { name: "VueJS", colour: "green" },
  { name: "Postgres", colour: "blue" },
];
</script>

<template>
  <view-wrapper>
    <h1>About</h1>
    <hr class="border-grey mb-3" />
    <h4
      class="prose mb-3 max-w-none text-gray-500 line-clamp-2 dark:text-gray-400"
    >
      A software engineer who values learning and growing with people, teams,
      and technologies. Experienced at writing code in a high-paced environment.
      Presently, I am working as a Senior Software Engineer at Curebase where I
      am helping to build a decentralized clinical trial platform while scaling
      infrastructure with a focus on security, HIPAA, and GDPR compliance.
      Previously I've worked with the Digitization Program Office (DPO) at the
      Smithsonian Institution as a consulting Full Stack Engineer in
      collaboration with the Office of the Chief Information Officer (OCIO).
    </h4>
    <h2>Skills</h2>
    <stack-bar :stack="stack"></stack-bar>
  </view-wrapper>
</template>
