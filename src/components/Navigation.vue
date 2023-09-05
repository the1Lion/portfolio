<script>
import DarkModeSwitcher from "./DarkModeSwitcher.vue";
import DownloadPdfButton from "./DownloadPdfButton.vue";

export default {
  name: "Navigation",
  components: {DownloadPdfButton, DarkModeSwitcher},
  data() {
    return {
      showMenu: true,
    }
  }
}
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">

      <span class="font-semibold text-2xl tracking-tight pl-3">Mohamad Katramez</span>
    </div>
    <div class="block lg:hidden">
      <button
          @click = "showMenu = !showMenu"
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <Transition>
      <div v-show="showMenu" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-xl lg:flex-grow">
          <a href="/" class="block px-2 py-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Home
          </a>
          <a href="/about" class="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
        </div>
        <DarkModeSwitcher/>
        <div>
          <DownloadPdfButton pdf-file-name="MKatramez_CV.pdf" pdf-url="/MKatramez_CV.pdf"/>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>