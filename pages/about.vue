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
        <h4 class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          A software engineer who values learning and growing with people,
          teams, and technologies. Experienced at writing code in a high-paced
          environment. Presently, I am working as a Senior Software Engineer at
          Curebase where I am helping to build a decentralized clinical trial
          platform while scaling infrastructure with a focus on security, HIPAA,
          and GDPR compliance. Previously I've worked with the Digitization
          Program Office (DPO) at the Smithsonian Institution as a consulting
          Full Stack Engineer in collaboration with the Office of the Chief
          Information Officer (OCIO).
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
