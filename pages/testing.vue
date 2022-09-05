<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { email, slurpApi } = runtimeConfig.public;
</script>

<template>
  <view-wrapper {{email}} {{slurpApi}}
    ><button
      @click="
        useContact({
          content: 'asdasdasd',
          name: 'asdasd',
          subject: 'Testing',
          company: 'testetsdf',
        })
      "
    >
      asdasdasdas
    </button></view-wrapper
  >
</template>
