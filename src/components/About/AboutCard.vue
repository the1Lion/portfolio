<script>
export default {
  name: "AboutCard",
  props: {
    cardTitle: '',
    cardDescription: '',
    cardUrl: '',
  },
}
</script>

<template>
  <a :href="cardUrl" class="block cursor-pointer max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-300
  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ cardTitle }}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{ cardDescription }}</p>
    <slot/>
  </a>
</template>

<style scoped>

</style>