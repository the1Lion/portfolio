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
  <div class="w-full rounded-full h-2.5 " :class="'dark:'+ darkBackgroundColor + ' ' + backgroundColor">
    <div class=" h-2.5 rounded-full" :class="color" :style="'width: ' +  progressPercentage + '%'"></div>
  </div>
</template>

<style scoped>

</style>