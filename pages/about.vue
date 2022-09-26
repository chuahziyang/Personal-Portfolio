<script setup>
import { skills } from "@/data/skills";
import resumelink from "@/data/resume";
</script>

<template>
  <div>
    <top-banner></top-banner>
    <view-wrapper>
      <div>
        <h1>About</h1>
        <hr class="border-grey mb-3" />
        <h4 class="">
          Hi! I'm an aspiring web developer with 2 years of web development
          experience. I worked as the head of NSFC Projects Team, an SAF
          digitalisation effort in my NS journey. In the 2 years I was in
          Projects Team, I had the opportunity to work on army wide projects,
          such as the MTRAC+ platform, where we currently serve 20k Transport
          Operators(Drivers) in their day to day operations. We have currently
          200k MTRAC's recorded. I am a quick and independent learner,
        </h4>
        <div class="my-10">
          <a :href="resumelink" target="_" class="my-10 dark:text-gray-200">
            <RoughNotation
              :is-show="true"
              :strokeWidth="3"
              type="box"
              color="#F5E1FF"
              :animationDuration="2500"
            >
              Resume
            </RoughNotation>
          </a>
        </div>
        <h2>Technologies I've worked with</h2>
        <stack-bar :stack="skills"></stack-bar>
      </div>
    </view-wrapper>
  </div>
</template>
