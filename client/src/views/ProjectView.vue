<template>
  <view-wrapper>
    <h1>Projects</h1>
    <hr class="border-grey mb-3" />
    <div class="grow grid grid-cols-2">
      <div class="border-2" v-for="project in projects" :key="project">
        <project-panel class="h-80" :project="project"></project-panel>
      </div>
    </div>
  </view-wrapper>
</template>

<script setup lang="ts">
import ViewWrapper from "@/components/ViewWrapper.vue";
import { projects } from "@/data/projects";
import ProjectPanel from "@/components/ProjectPanel.vue";
</script>
