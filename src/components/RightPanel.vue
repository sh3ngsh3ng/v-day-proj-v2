<template>
  <div id="right-panel">
    <Transition name="fade">
      <TextPage
        v-if="currentSlide == 0"
        header="To my love..."
        text="I never believed in fairy tales until I met you. You are my happily ever after and I will love you forever."
      />
    </Transition>
    <Transition name="fade">
      <TextPage
        v-if="currentSlide == 1"
        text="I fall in love with you every day all over again."
      />
    </Transition>
    <Transition name="fade">
      <TextPage
        v-if="currentSlide == 2"
        text="You light up my world and make every day worth living."
      />
    </Transition>
    <Transition name="fade">
      <TextPage
        v-if="currentSlide == 3"
        text="I am forever yours, my love for you will never fade."
      />
    </Transition>
    <Transition name="fade">
      <TextPage
        v-if="currentSlide == 4"
        text="I never knew what love was until I met you."
      />
    </Transition>
    <Transition name="fade">
      <TextPage
        v-if="currentSlide == 5"
        text="You are my everything, my heart and soul belong to you."
      />
    </Transition>
  </div>
</template>

<script>
import TextPage from "./TextPage.vue";
export default {
  components: {
    TextPage,
  },
  props: ["currentSlide"],
};
</script>

<style scoped>
#right-panel {
  width: 100%;
  height: 25%;
  background-color: rgb(56, 54, 54);
}

@media only screen and (min-width: 375px) {
  #right-panel {
    height: 30%;
  }
}

@media only screen and (min-width: 720px) {
  #right-panel {
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
