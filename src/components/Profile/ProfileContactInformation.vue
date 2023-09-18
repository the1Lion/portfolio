<script>
export default {
  name: "ProfileContactInformation"
}
</script>

<template>
  <div class="p-7 rounded-2xl mt-5 bg-blue-200 dark:bg-[#1D1D1D] w-max">
    <div class="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]"><span
        class="flex-shrink-0 text-[#FD7590]">
      <svg stroke="currentColor"
           fill="currentColor"
           stroke-width="0"
           viewBox="0 0 512 512"
           height="1em" width="1em"
           xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
    </span>
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email Address</p>
        <p class="dark:text-white break-all"><a class="hover:text-[#FA5252] duration-300 transition"
                                                :href="'mailto:' + $constants.USER_EMAIL">{{
            $constants.USER_EMAIL
          }}</a>
        </p></div>
    </div>
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
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone Number</p>
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
    <div class="flex py-2.5 undefined"><span
        class="flex-shrink-0 text-[#C17CEB]">
      <svg stroke="currentColor"
           fill="currentColor"
           stroke-width="0"
           viewBox="0 0 448 512"
           height="1em" width="1em"
           xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
      </span>
      <div class="text-left ml-2.5"><p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Birthday</p>
        <p class="dark:text-white break-all">{{ $constants.USER_BIRTH_DAY }}</p></div>
    </div>
  </div>
</template>

<style scoped>

</style>