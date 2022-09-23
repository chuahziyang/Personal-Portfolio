<template>
  <div class="w-full h-[160] bg-gray-400 flex flex-row overflow-x-auto gap-x-2">
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
