<template>
  <div class="button-sets-1">
    <ImgButton :slideNumber="0" @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="1" @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="2" @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="3" @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="4" @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="5" @change-slide="changeCurrentSlide" />
  </div>
  <div class="button-sets-2">
    <ImgButton :slideNumber="0" @change-slide="changeCurrentSlide" /><br />
    <ImgButton :slideNumber="1" @change-slide="changeCurrentSlide" /><br />
    <ImgButton :slideNumber="2" @change-slide="changeCurrentSlide" /><br />
    <ImgButton :slideNumber="3" @change-slide="changeCurrentSlide" /><br />
    <ImgButton :slideNumber="4" @change-slide="changeCurrentSlide" /><br />
    <ImgButton :slideNumber="5" @change-slide="changeCurrentSlide" /><br />
  </div>
</template>

<script>
import ImgButton from "./ImgButton.vue";
export default {
  components: {
    ImgButton,
  },
  methods: {
    changeCurrentSlide: function (evt) {
      console.log("buttonsets called", evt);
      this.$emit("change-slide", evt);
    },
  },
};
</script>

<style scoped>
.button-sets-1 {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-around;
  top: 73%;
}

.button-sets-2 {
  display: none;
}

@media only screen and (min-width: 375px) {
  .button-sets-1 {
    top: 67.5%;
  }
}

@media only screen and (min-width: 720px) {
  .button-sets-1 {
    display: none;
  }

  .button-sets-2 {
    display: unset;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
