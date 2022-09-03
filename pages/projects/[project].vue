<script setup lang="ts">
const route = useRoute();
const projectlink = route.params.project;

const project = useProject(projectlink);

const { name, linktoproject, linktoinfo, image, stack, description } = project;
</script>

<template>
  <view-wrapper>
    <div class="grow">
      <div class="flex flex-row items-end">
        <h1>{{ name }}</h1>
        <a :href="linktoproject" target="_">
          <span>
            <fa class="mb-8" :icon="[`fa`, `link`]" color="blue"> </fa>
          </span>
        </a>
      </div>
      <h3>{{ description }}</h3>
      <h2>Stack</h2>
      <stack-bar :stack="stack"></stack-bar>
    </div>
  </view-wrapper>
</template>
