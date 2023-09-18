<script>
export default {
  name: "ProgressBar",
  props: {
    progressPercentage: {
      required: true,
      type: String,
    },
    color: {
      required: false,
      type: String,
      default: 'bg-blue-600'
    },
    backgroundColor: {
      required: false,
      type: String,
      default: 'bg-gray-300'
    },
    darkBackgroundColor: {
      required: false,
      type: String,
      default: 'bg-gray-700'
    }
  }
}
</script>

<template>
  <div :class="'w-full ' + backgroundColor +' rounded-full h-2.5 dark:' + darkBackgroundColor">
    <div :class="color + ' h-2.5 rounded-full'" :style="'width: ' +  progressPercentage + '%'"></div>
  </div>
</template>

<style scoped>

</style>