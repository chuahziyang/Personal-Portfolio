<script setup lang="ts">
const route = useRoute();
const projectlink = route.params.project;

const project = useProject(projectlink);

const { name, linktoproject, linktoinfo, image, stack, description } = project;
</script>

<template>
  <view-wrapper>
    <div class="grow">
      <h1>{{ name }}</h1>
      <h4>{{ description }}</h4>
      <h2>Stack</h2>
      <stack-bar :stack="stack"></stack-bar>
    </div>
  </view-wrapper>
</template>
