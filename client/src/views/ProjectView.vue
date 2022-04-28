<template>
  <view-wrapper>
    <h3>Projects</h3>
    <div class="grow grid grid-cols-3">
      <div class="border-2" v-for="project in projects" :key="project">
        <project-panel :name="project.name"></project-panel>
      </div>
    </div>
  </view-wrapper>
</template>

<script setup lang="ts">
import ViewWrapper from "@/components/ViewWrapper.vue";
import projects from "@/data/projects";
import ProjectPanel from "@/components/ProjectPanel.vue";
</script>
