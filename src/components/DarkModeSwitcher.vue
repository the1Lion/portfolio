<script>
import {useDark, useToggle} from '@vueuse/core';

export default {
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    // Any other setup logic can be added here

    // Return any variables or functions that need to be used in the template
    return {
      isDark,
      toggleDark,
    };
  },
  data() {
    return {}
  },
};
</script>


<template>
  <label class="scale-[0.6] themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
    <input
      type="checkbox"
      v-model="isDark"
      class="sr-only"
    />
    <span
      :class="[
        'slider',
        'mx-4',
        'flex',
        'h-8',
        'w-[60px]',
        'items-center',
        'rounded-full',
        'p-1',
        'duration-200',
        isDark ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
      ]"
    >
      <span
        :class="[
          'dot',
          'h-6',
          'w-6',
          'rounded-full',
          'duration-200',
          isDark ? 'translate-x-[28px] bg-yellow-100' : 'bg-white'
        ]"
      >
        <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"/>
        </svg>
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                clip-rule="evenodd"/>
        </svg>

      </span>
    </span>
  </label>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Add any other styling specific to this component */
</style>
