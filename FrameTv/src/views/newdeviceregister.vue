<template>
  <div class="bg-purple-700 min-h-screen py-6 flex flex-col text-white justify-center">
    <div class="mx-auto bg-purple-600 py-8 px-10 rounded-md">
      <div class="mb-3">
        <h2 class="font-medium text-5xl mb-8">FrameTV App</h2>
      </div>

      <div class="mt-2">
        <span>Mail Adress</span><br />
        <input
          class="bg-purple-500 focus:outline-none mt-2 rounded-sm py-2 px-2 w-full"
          type="text"
        />
      </div>
      <div class="mt-2">
        <span>Password</span><br />
        <input
          class="bg-purple-500 focus:outline-none mt-2 rounded-sm py-2 px-2 w-full"
          type="text"
        />
      </div>

      <div class="mt-4 flex justify-between">
        <button
          class="border-purple-300 text-purple-300 hover:bg-purple-400 hover:text-purple-800 border rounded-sm py-3 px-4"
        >
          Sign Up
        </button>
        <button
          @click="createuser"
          class="bg-purple-900 hover:bg-purple-400 rounded-sm py-3 px-4"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    createuser() {
      console.log("basıldı");
      this.$store
        .dispatch("registerUser", "serhad")
        .then((result) => {})
        .catch((err) => {});
    },
  },
};
</script>
