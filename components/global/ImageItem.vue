<template>
  <img :src="images[srcimg]" :alt="alt" />
</template>

<script setup>
import { filename } from "pathe/utils";

const props = defineProps({
  srcimg: {
    type: String,
    default: "emob-1",
  },
  alt: {
    type: String,
    default: "emob-1",
  },
});

const glob = import.meta.glob("~/assets/*.jpg", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>
