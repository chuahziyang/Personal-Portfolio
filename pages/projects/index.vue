<template>
  <div>
    <view-wrapper>
      <!-- <div class="bg-red-400 text-gray-100 font-medium mb-base">
        <div
          class="py-md px-lg md:py-md md:px-20 lg:py-md lg:px-20 xl:py-md xl:px-80"
        >
          You are on the staging server meant for testing. Data here is sandboxed
          and does not reflect the production database.
        </div>
      </div> -->
      <div>
        <h1>Projects</h1>
        <hr class="border-grey mb-3" />
        <div class="grow grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2">
          <div
            class="border-2 h-80 w-100 dark:border-gray-600"
            v-for="project in projects"
            :key="project.name"
          >
            <project-panel
              class="w-full h-full"
              :project="project"
            ></project-panel>
          </div>
        </div>
      </div>
    </view-wrapper>
  </div>
</template>

<script setup lang="ts">
import { projects } from "@/data/projects";
</script>
