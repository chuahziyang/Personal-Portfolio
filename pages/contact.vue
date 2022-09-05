<script setup lang="ts">
import { projects } from "@/data/projects";

function onContact() {
  console.log("adsasdasd");
}
</script>

<template>
  <view-wrapper>
    <h1>Contact</h1>
    <hr class="border-grey mb-3" />
    <h4>
      Interested in contacting me for a project? Do feel free to drop me a
      message!
    </h4>
    <button @click="onContact()" class="my-6 dark:text-gray-200">
      <RoughNotation
        :is-show="true"
        :strokeWidth="3"
        type="box"
        color="#F5E1FF"
        :animationDuration="2500"
      >
        Contact me
      </RoughNotation>
    </button>
  </view-wrapper>
</template>
