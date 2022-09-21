<template>
  <div class="overflow-x-auto h-96 gap-x-2 flex flex-row">
    <div v-for="image in props.links">
      <ImageItem :srcimg="image" alt="asd"></ImageItem>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
  },
});
</script>
