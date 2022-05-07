<script setup lang="ts">
//defineprops
interface Props {
  stack: string[];
}

//eslint-disable-next-line
const props = defineProps<Props>();
console.log(props.stack);
</script>

<template>
  <div class="mb-2 flex flex-wrap">
    <span
      v-for="stack in props.stack"
      :key="stack"
      class="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-blue-600"
    >
      {{ stack }}
    </span>
  </div>
</template>
