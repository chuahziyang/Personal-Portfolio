<script setup lang="ts">
import ViewWrapper from "@/components/ViewWrapper.vue";
</script>

<template>
  <view-wrapper>
    <div class="grid items-center w-full h-full">
      <div>
        <h5 class="text-3xl font-bold dark:text-white lg:text-5xl">
          Hi, I'm Zi Yang
        </h5>
        <h4 class="my-2 text-lg lg:my-4 lg:text-2xl">Software Engineer</h4>
        <p className="font-light lg:text-xl">
          Read more
          <a className="ml-2 mr-2 font-normal text-black" href="/about">
            <RoughNotation
              :is-show="true"
              type="highlight"
              color="#F5E1FF"
              :animationDuration="2500"
            >
              about me
            </RoughNotation>
          </a>
          or
          <a className="ml-2 font-normal text-black" href="/contact">
            <RoughNotation
              :is-show="true"
              type="highlight"
              color="#CAF0F8"
              :animationDuration="2500"
            >
              contact me
            </RoughNotation>
          </a>
        </p>
      </div>
    </div>
  </view-wrapper>
</template>
