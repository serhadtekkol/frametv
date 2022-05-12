<template>
  <div class="min-h-screen py-6 flex flex-col justify-center w-full bg-slate-100">
    <div
      :class="menuopen ? 'w-3/6' : ' w-4/6'"
      class="mx-auto shadow-lg rounded-sm shadowinner"
    >
      <img
        class="rounded-sm"
        :src="imglist[selectedImage] + '?auto=compress&cs=tinysrgb&dpr=3&h=1500&w=2520'"
      />
    </div>
    <div
      :class="menuopen ? '' : 'hidden'"
      class="w-full h-full z-50 fixed backdrop-blur-sm bg-gray-600/30"
    >
      <div class="flex justify-center items-center h-screen text-white">
        <ul class="inline-flex w-full items-center mx-auto">
          <li v-for="(items, index) in imglist" class="inline">
            <button @click="changeImg(index)" class="webtv h-8 rounded-md ml-3 mr-3">
              <img
                class="hover:shadow-md hover:scale-110 rounded-sm"
                :src="items + '?auto=compress&cs=tinysrgb&dpr=3&h=300&w=504'"
              />
            </button>
          </li>
        </ul>
        <div>
          {{ typed }}
        </div>
      </div>
    </div>

    <div
      class="hidden w-2/3 mx-auto rounded-md text-xs py-1 px-2 mt-3 border shadow-md border-amber-100 text-amber-100 bg-slate-500/80 text-center bottom-10 z-50 fixed left-0 right-0"
    >
      Want to see all images press "Enter" key
      <br />
      For change the images please use "Numpad" keys
      <br />
      If you want to load all images press key 0 (zero)
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        "https://images.pexels.com/photos/9871500/pexels-photo-9871500.jpeg",
        "https://images.pexels.com/photos/11029040/pexels-photo-11029040.jpeg",
        "https://images.pexels.com/photos/6317441/pexels-photo-6317441.jpeg",
        "https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg",
        "https://images.pexels.com/photos/11603647/pexels-photo-11603647.jpeg",
        "https://images.pexels.com/photos/11391081/pexels-photo-11391081.jpeg",
      ],

      typed: "",
      selectedImage: 1,
      menuopen: false,
    };
  },

  methods: {
    changeImg(imgs) {
      this.selectedImage = imgs;
    },
  },
  mounted() {
    document.addEventListener(
      "keydown",
      function (e) {
        this.typed = e.keyCode;
        console.log(String.fromCharCode(e.keyCode));
        let totalItem = this.imglist.length;
        console.log(totalItem);
        if (totalItem >= parseInt(String.fromCharCode(e.keyCode))) {
          console.warn("değişti");
          this.selectedImage = String.fromCharCode(e.keyCode);
        }

        if (e.keyCode === 40) {
          this.menuopen = false;
        }
        if (e.keyCode === 38) {
          this.menuopen = true;
        }
      }.bind(this)
    );
  },
};
</script>
<style scoped>
.webtv:hover,
.webtv:active {
  outline-color: -webkit-focus-ring-color;
  outline-style: auto;
  outline-width: 0px;
}

.shadowinner {
  -moz-box-shadow: inset 10px 10px 50px #fff;
  -webkit-box-shadow: inset 10px 10px 50px #fff;
  box-shadow: inset 10px 10px 50px #fff;
}
</style>
