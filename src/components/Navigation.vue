<script>
export default {
  name: "Navigation",
  data() {
    return {
      showMenu: true,
    }
  }
}
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-sky-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
      </svg>
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
          <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
        </div>
        <div>
          <a href="#"
             class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Lebenslauf</a>
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