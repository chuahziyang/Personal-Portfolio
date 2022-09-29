<template>
  <div
    class="w-full h-full bg-white dark:bg-thegray flex flex-row overflow-x-auto gap-x-1"
  >
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
