<script setup lang="ts">
//get props passed into component
import { project } from "@/data/projects";
/* eslint-disable */
interface Props {
  project: project;
}

const props = defineProps<Props>();
const { name, linktoinfo, linktoproject, image } = props.project;

console.log(props);
</script>

<template>
  <div class="flex-col flex bg-red-800">
    <div class="bg-green-100 basis-3/5">{{ image }}</div>
    <div class="bg-blue-100 flex flex-col px-6 py-2 justify-between basis-2/5">
      <h5 class="text-2xl font-bold leading-8 tracking-tight">
        {{ name }}
      </h5>
      <h6 class="max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae at
        porro odio voluptas saepe omnis adipisci modi eveniet dignissimos
        aliquid necessitatibus architecto explicabo quo deserunt et, laboriosam
        non. Dolorum!
      </h6>
      <div class="flex flex-row justify-between">
        <a :href="linktoinfo" target="_">
          <h6
            class="text-xl font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Learn more →
          </h6>
        </a>
        <a :href="linktoproject" target="_">
          <h6
            class="text-xl font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            visit project
          </h6>
        </a>
      </div>
    </div>
  </div>
</template>
