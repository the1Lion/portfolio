<script>
import ContactIcons from "./ContactIcons.vue";
import {Email} from "../../assets/smtp/smtp.js";

export default {
  name: "ContactForm",
  components: {ContactIcons},
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    send() {
      if (this.email && this.message && this.name) {
        this.sendEmail()
      }
    },
    sendEmail() {
      Email.send({
        SecureToken: this.$constants.SMTP_SECURE_TOKEN,
        To: this.$constants.USER_EMAIL,
        From: this.$constants.SMTP_EMAIL,
        name: this.name,
        Subject: this.email + ' ' + this.$constants.SMTP_EMAIL_SUBJECT,
        Body: this.message,
      })
    }
  }
}
</script>

<template>
  <form action="" class="p-6 flex flex-col justify-center">
    <!-- component -->
    <div class="relative py-3 sm:max-w-5xl sm:mx-auto">
      <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 dark:bg-gradient-to-r
                dark:from-violet-600 dark:to-fuchsia-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
        <div class="sm:flex gap-5">
          <div class="max-w-md mx-auto max-[639px]:mb-12">
            <div>
              <h1 class="text-2xl font-bold sm:text-3xl mb-5">Get in touch!</h1>
              <p class="text-xl font-semibold text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div class="mt-5">
                <contact-icons/>
              </div>
            </div>

          </div>
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-bold sm:text-3xl mb-5">Get in touch!</h1>
              <p class="text-xl font-semibold text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input autocomplete="off" v-model="name" id="name" name="name" type="text"
                         class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                         placeholder="Name" required/>
                  <label for="name"
                         class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your
                    Name</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" v-model="email" id="email" name="email" type="email"
                         class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                         placeholder="Email" required/>
                  <label for="email"
                         class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your
                    Email</label>
                </div>
                <div class="relative">
                      <textarea autocomplete="off" v-model="message" id="message" name="message" type="textarea"
                                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder="Message" required/>
                  <label for="message"
                         class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Message</label>
                </div>
                <div class="relative">
                  <button
                      @click="send"
                      type="submit"
                      class="bg-gradient-to-r from-cyan-500 to-blue-600 dark:bg-gradient-to-r dark:from-violet-600 dark:to-fuchsia-700 text-white rounded-md px-2 py-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </form>

</template>

<style scoped>

</style>