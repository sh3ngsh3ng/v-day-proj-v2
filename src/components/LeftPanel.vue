<template>
  <div id="left-panel">
    <Transition name="fade">
      <PhotoPage v-show="currentSlide == 0"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo5_z8jr7b.jpg" />
    </Transition>
    <Transition name="fade">
      <PhotoPage v-show="currentSlide == 1"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo1_qxic4b.jpg" />
    </Transition>
    <Transition name="fade">
      <PhotoPage v-show="currentSlide == 2"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674460039/photo7_rpmwsp.jpg" />
    </Transition>
    <Transition name="fade">
      <PhotoPage v-show="currentSlide == 3"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo2_i5ubvt.jpg" />
    </Transition>
    <Transition name="fade">
      <PhotoPage v-show="currentSlide == 4"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo3_vhfmkt.jpg" />
    </Transition>
    <Transition name="fade">
      <PhotoPage v-show="currentSlide == 5"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674458856/photo6_tzsbes.jpg" />
    </Transition>
  </div>
</template>

<script>
  import PhotoPage from "./PhotoPage.vue";
  export default {
    components: {
      PhotoPage,
    },
    props: ["currentSlide"],
  };
</script>

<style scoped>
  #left-panel {
    width: 100%;
    height: 75%;
  }

  @media only screen and (min-width: 375px) {
    #left-panel {
      height: 65%;
    }
  }

  @media only screen and (min-width: 720px) {
    #left-panel {
      width: 50vw;
      height: 100%;
    }
  }

  .fade-enter-active {
    transition: opacity 1s ease-in;
  }

  /* .fade-leave-active {
  transition: transform 1.5 linear;
} */

  .fade-enter-from {
    opacity: 0;
  }
</style>