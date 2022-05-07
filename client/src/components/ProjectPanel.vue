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
    <div class="bg-blue-100 basis-2/5">
      {{ name }}
    </div>
  </div>
</template>
