<script setup lang="ts">
import ViewWrapper from "@/components/ViewWrapper.vue";
</script>

<template>
  <view-wrapper>
    <h5 class="text-3xl font-bold dark:text-white lg:text-5xl">
      Hi, I'm Zi Yang
    </h5>
    <h4 class="my-2 text-lg lg:my-4 lg:text-2xl">Software Engineer</h4>
    <p className="font-light lg:text-xl">
      Read more
      <a className="ml-2 mr-2 font-normal text-black" href="/about">
        <RoughNotation
          show
          type="highlight"
          animationDelay="{250}"
          animationDuration="{2000}"
          color="{aboutColor}"
        >
          about me
        </RoughNotation>
      </a>
      or
      <a className="ml-2 font-normal text-black" href="/contact">
        <RoughNotation
          show
          type="highlight"
          animationDelay="{250}"
          animationDuration="{2000}"
          color="{contactColor}"
        >
          contact me
        </RoughNotation>
      </a>
    </p>
  </view-wrapper>
</template>
