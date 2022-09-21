<template>
  <div class="w-full overflow-x-auto h-96 gap-x-2 flex flex-row">
    <ImageItem
      v-for="image in props.links"
      :srcimg="image"
      alt="asd"
    ></ImageItem>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
  },
});
</script>
