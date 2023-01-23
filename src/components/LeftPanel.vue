<template>
  <div id="left-panel">
    <Transition name="fade">
      <PhotoPage
        v-show="currentSlide == 0"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674407530/sample5_r6jay5.jpg"
      />
    </Transition>
    <Transition name="fade">
      <PhotoPage
        v-show="currentSlide == 1"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674407542/sample4_nzh2u7.jpg"
      />
    </Transition>
    <Transition name="fade">
      <PhotoPage
        v-show="currentSlide == 2"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674407530/sample5_r6jay5.jpg"
      />
    </Transition>
    <Transition name="fade">
      <PhotoPage
        v-show="currentSlide == 3"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674407542/sample4_nzh2u7.jpg"
      />
    </Transition>
    <Transition name="fade">
      <PhotoPage
        v-show="currentSlide == 4"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674407530/sample5_r6jay5.jpg"
      />
    </Transition>
    <Transition name="fade">
      <PhotoPage
        v-show="currentSlide == 5"
        imageUrl="https://res.cloudinary.com/dt7n0rbhy/image/upload/v1674407542/sample4_nzh2u7.jpg"
      />
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
    height: 70%;
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
