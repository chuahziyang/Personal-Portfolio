<script setup lang="ts">
interface stack {
  name: string;
  colour: string;
}

interface Props {
  stack: stack[];
}

function getColor(stack: stack) {
  // return "bg-green-500";
  switch (stack.colour) {
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "black":
      return "bg-black";
    case "orange":
      return "bg-orange-500";
  }
}
//eslint-disable-next-line
const props = defineProps<Props>();
</script>

<template>
  <div class="mb-2 flex flex-wrap">
    <span
      v-for="stack in props.stack"
      :key="stack.name"
      class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white"
      v-bind:class="getColor(stack)"
    >
      {{ stack.name }}
    </span>
  </div>
</template>
