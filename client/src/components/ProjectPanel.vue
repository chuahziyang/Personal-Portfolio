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
  <div>{{ name }}</div>
</template>
