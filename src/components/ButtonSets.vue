<template>
  <div class="button-sets-1">
    <ImgButton :slideNumber="0"
      imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo5_z8jr7b.jpg"
      @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="1"
      imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo1_qxic4b.jpg"
      @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="2"
      imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674460039/photo7_rpmwsp.jpg"
      @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="3"
      imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo2_i5ubvt.jpg"
      @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="4"
      imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo3_vhfmkt.jpg"
      @change-slide="changeCurrentSlide" />
    <ImgButton :slideNumber="5"
      imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo6_tzsbes.jpg"
      @change-slide="changeCurrentSlide" />
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
        this.$emit("change-slide", evt);
      },
    },
  };
</script>

<style scoped>
  .button-sets-1 {
    display: flex;
    width: 100%;
    height: 5%;
    justify-content: space-around;
    align-items: center;
  }

  .button-sets-2 {
    display: none;
  }

  @media only screen and (min-width: 375px) {
    .button-sets-1 {
      height: 10%;
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