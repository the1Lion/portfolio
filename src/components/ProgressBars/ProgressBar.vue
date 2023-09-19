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
  <slot name="header"/>
  <div class="w-full rounded-full h-2 " :class="'dark:'+ darkBackgroundColor + ' ' + backgroundColor">
    <div class=" h-2 rounded-full" :class="color" :style="'width: ' +  progressPercentage + '%'">
      <span class="text-xs relative" :style="'left: ' +  (parseInt(progressPercentage) >= 90 ? '90' : progressPercentage ) + '%'">
        {{ progressPercentage }}%
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>