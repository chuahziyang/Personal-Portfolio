<script setup lang="ts">
import { projects } from "@/data/projects";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const isSubmitted = ref(false);
const isSuccess = ref(false);

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  comment: yup.string().required(),
  // company
});

async function test(values) {
  const { name, company, email, comment } = values;
  const success = await useContact({
    content: comment,
    name,
    email,
    company,
  });

  isSubmitted.value = true;
  isSuccess.value = success;

  if (success) {
    window.scrollTo(0, 0);
  }
}

function required(value) {
  return true;
  return value == undefined || value == "" ? "required" : true;
}
</script>

<template>
  <div>
    <view-wrapper>
      <Form class="flex-1" :validation-schema="schema" @submit="test">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-white dark:bg-thegray px-4 py-5 sm:p-6">
            <div v-if="isSubmitted">
              <success-bar :success="isSuccess"></success-bar>
            </div>
            <h1>Contact Me</h1>
            <hr class="border-grey mb-3" />
            <h4 class="mb-8">
              Interested in contacting me for a project? Do feel free to drop me
              a message!
            </h4>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="label">Name</label>
                <Field class="field" type="text" name="name" />
                <ErrorMessage class="error" name="name" />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="company" class="label">Company *</label>
                <Field class="field" type="text" name="company" />
                <ErrorMessage class="error" name="company" />
              </div>
              <div class="col-span-6">
                <label for="email-address" class="label">Email address</label>
                <Field class="field" type="text" name="email" />
                <ErrorMessage class="error" name="email" />
              </div>
              <div class="col-span-6">
                <label for="comment" class="label"
                  >What can I do for you?</label
                >
                <div class="mt-1">
                  <Field
                    name="comment"
                    as="textarea"
                    rows="4"
                    id="comment"
                    class="dark:bg-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage class="error" name="comment" />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-thegray px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
    </view-wrapper>
  </div>
</template>
