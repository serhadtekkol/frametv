<template class="">
  <div class="min-h-screen bg-gray-700 py-6 flex flex-col justify-center">
    <div class="mx-auto">
      <h2 class="font-extrabold text-3xl font-sans mb-2 text-slate-300">FrameTvApp</h2>
      <h3 class="text-slate-500 text-center">
        Please visit frametv.web.app , get secure key and type code the below area
      </h3>
      <div class="mt-2">
        <input type="text" class="rounded-md w-full text-lg px-8 py-3" value="serjad" />
        <button
          @click="control"
          class="bg-green-700 text-green-200 mt-2 px-3 py-2 rounded-lg active:bg-green-800 w-full"
        >
          Enter
        </button>
      </div>
      <div class="fixed bottom-0 left-0 text-gray-600 text-center w-full">
        Arinna Software
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  mounted() {
    let t = localStorage.getItem("accounttoken");
    if (t != "") {
    } else {
      router.push("/");
    }
  },
};
</script>
