<script>
export default {
  name: "Card",
  props: {
    title: '',
    description: '',
    url: '',
  },
}
</script>

<template>
  <a :href="url" class="block cursor-pointer max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-300
  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="mb-4 flex gap-5">
      <slot name="image"></slot>
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
    </div>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
      <slot/>
  </a>
</template>

<style scoped>

</style>