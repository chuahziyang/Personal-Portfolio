<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.name"
        class="dark:bg-thegray px-4 py-5 bg-white shadow rounded-lg overflow-hidden border-2 dark:border-gray-800 sm:p-6"
      >
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ item.name }}
        </dt>
        <dd
          class="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-200"
        >
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: {
    type: Object,
    required: true,
  },
});
const { stats } = props;
</script>
