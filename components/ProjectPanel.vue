<script setup lang="ts">
//get props passed into component
import { project } from "@/data/projects";
/* eslint-disable */
interface Props {
  project: project;
}

const props = defineProps<Props>();
const { workinglink, name, linktoinfo, linktoproject, image, description } =
  props.project;

console.log(props);

const isDarkMode = useDarkMode();
</script>

<template>
  <div class="flex-col flex">
    <div class="h-48 flex bg-white">
      <ImageItem :srcimg="image" alt="asd" />
    </div>
    <div class="flex flex-col pl-6 pr-3 py-2 justify-between h-32">
      <h5 class="dark:text-white text-2xl font-bold leading-8 tracking-tight">
        {{ name }}
      </h5>
      <h6 class="max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
        {{ description }}
      </h6>
      <div class="flex flex-row justify-between">
        <a :href="`projects/${linktoinfo}`" target="_">
          <h6
            class="text-xl font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Learn more →
          </h6>
        </a>
        <a v-if="workinglink" :href="linktoproject" target="_">
          <span>
            <fa v-if="!isDarkMode" :icon="[`fa`, `link`]" color="blue"> </fa>
            <fa v-else :icon="[`fa`, `link`]" color="DarkCyan"> </fa>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
