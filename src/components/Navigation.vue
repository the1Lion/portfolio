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
  },
  methods: {
    // routeClass(){
    //   return {
    //     'rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500'
    //   }
    // }
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
          @click="showMenu = !showMenu"
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
          <a href="/" class="block px-2 py-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
              hover:rounded hover:dark:bg-gradient-to-r hover:dark:from-cyan-500 hover:dark:to-blue-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
             :class="$route.name === 'Home' ? 'text-white rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''">
            <div class="flex items-center gap-2"><span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="0.875em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg></span>
              Home
            </div>
          </a>
          <a href="/about" class="block px-2 py-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
              hover:rounded hover:dark:bg-gradient-to-r hover:dark:from-cyan-500 hover:dark:to-blue-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
             :class="$route.name === 'About' ? 'text-white rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''">

            <div class="flex items-center gap-2"><span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="0.875em" xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></span>
              About
            </div>
          </a>
          <a href="/resume" class="block px-2 py-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
              hover:rounded hover:dark:bg-gradient-to-r hover:dark:from-cyan-500 hover:dark:to-blue-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
             :class="$route.name === 'Resume' ? 'text-white rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''">

            <div class="flex items-center gap-2"><span>
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" height="0.875em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg></span>
              Resume
            </div>
          </a>
          <a href="/works" class="block px-2 py-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
              hover:rounded hover:dark:bg-gradient-to-r hover:dark:from-cyan-500 hover:dark:to-blue-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
             :class="$route.name === 'Works' ? 'text-white rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''">

            <div class="flex items-center gap-2"><span>
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" height="0.875em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg></span>
              Works
            </div>
          </a>
          <a href="/contact" class="block px-2 py-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
              hover:rounded hover:dark:bg-gradient-to-r hover:dark:from-cyan-500 hover:dark:to-blue-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
             :class="$route.name === 'Contact' ? 'text-white rounded dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''">

            <div class="flex items-center gap-2"><span>
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" height="0.875em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/></svg></span>
              Contact
            </div>
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