<script>
export default {
  name: "ProfileContactInformation"
}
</script>

<template>
  <div class="p-7 rounded-2xl mt-5 bg-blue-200 dark:bg-[#1D1D1D]">
    <div class="flex py-2 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
        <span
            class="flex-shrink-0 text-[#E93B81]">
        <svg stroke="currentColor"
             fill="currentColor"
             stroke-width="0"
             viewBox="0 0 320 512"
             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/></svg>
      </span>
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
        <p class="dark:text-white break-all"><a class="hover:text-[#FA5252] duration-300 transition"
                                                :href="'tel:' + $constants.PHONE_NUMBER">{{
            $constants.PHONE_NUMBER
          }}</a>
        </p></div>
    </div>
    <div class="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]"><span
        class="flex-shrink-0 text-[#6AB5B9]">
        <svg stroke="currentColor"
             fill="currentColor"
             stroke-width="0"
             viewBox="0 0 384 512"
             height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
      </span>
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
        <p class="dark:text-white break-all">{{
            $constants.USER_COUNTRY
          }}</p></div>
    </div>
    <div class="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]"><span
        class="flex-shrink-0 text-[#FD7590]"><svg stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 512 512"
                                                  height="1em" width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"><path
        d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg></span>
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
        <p class="dark:text-white break-all"><a class="hover:text-[#FA5252] duration-300 transition"
                                                :href="'mailto:' + $constants.USER_EMAIL">{{$constants.USER_EMAIL}}</a></p></div>
    </div>
    <div class="flex py-2.5 undefined"><span
        class="flex-shrink-0 text-[#C17CEB]"><svg stroke="currentColor"
                                                  fill="currentColor"
                                                  stroke-width="0"
                                                  viewBox="0 0 448 512"
                                                  height="1em" width="1em"
                                                  xmlns="http://www.w3.org/2000/svg"><path
        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg></span>
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Birthday</p>
        <p class="dark:text-white break-all">{{$constants.USER_BIRTH_DAY}}</p></div>
    </div>
  </div>
</template>

<style scoped>

</style>