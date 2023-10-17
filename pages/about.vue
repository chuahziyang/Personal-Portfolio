<script setup>
import { skills, languages } from "@/data/skills";
import resumelink from "@/data/resume";
</script>

<template>
  <div>
    <view-wrapper>
      <div>
        <h1>About</h1>
        <hr class="border-grey mb-3" />
        <h4 class="">
          A software engineer who aims to innovate and inspire
          <br />
          <br />
          Previously, I worked as a SWE Intern at
          <a
            class="text-blue-500 underline"
            href="https://thesoftwarepractice.com/"
            >The Software Practice</a
          >
          where I was a part of the Performance Team for the Networked Trade
          Platform, a government project offering one-stop trade and logistics
          ecosystem which supports digitalisation efforts and connects players
          across the trade value chain - in Singapore and abroad. I was the sole
          creator of our HTTP performance tests suite.
          <br />
          <br />
          I also worked as a the head of NSFC Project Team as part of the
          <a
            class="text-blue-500 underline"
            href="https://www.mindef.gov.sg/web/portal/mindef/home"
          >
            Singapore Armed Forces</a
          >
          digitalization incentive. During my time as the Head of NSFC, we
          created various applications that are currently being used army-wide
          (check the projects tab).
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
        <h2>Languages</h2>
        <stack-bar :stack="languages"></stack-bar>
        <h2>Skills</h2>
        <stack-bar :stack="skills"></stack-bar>
      </div>
    </view-wrapper>
  </div>
</template>
