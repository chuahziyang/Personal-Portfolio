<script setup>
const props = defineProps({
  success: {
    type: Boolean,
    required: true,
  },
});

const successMessage = "Email sent Successfully";
const failureMessage =
  "Oops. Something went wrong. Send me an email at czyang2002@gmail.com instead";

const mapping = {
  true: {
    background: "bg-green-50",
    textcolour: "text-green-800",
  },
  false: {
    background: "bg-red-50",
    textcolour: "text-red-800",
  },
};
</script>

<template>
  <div
    class="rounded-md bg-green-50 p-4"
    v-bind:class="mapping[success].background"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" /> -->
      </div>
      <div class="ml-3">
        <p
          class="text-sm font-medium"
          v-bind:class="mapping[success].textcolour"
        >
          {{ success ? successMessage : failureMessage }}
        </p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            type="button"
            class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
          >
            <span class="sr-only">Dismiss</span>
            <!-- <XIcon class="h-5 w-5" aria-hidden="true" /> -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { CheckCircleIcon, XIcon } from "@heroicons/vue/solid";
</script>
