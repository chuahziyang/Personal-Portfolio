<script setup lang="ts">
//get props passed into component
/* eslint-disable */
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex-col flex bg-red-800">
    <div class="bg-green-100 basis-1/2">
      {{ name }}
    </div>
    <div class="bg-blue-100 basis-1/2">
      {{ name }}
    </div>
  </div>
</template>
