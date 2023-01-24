<template>
  <Transition name="fade">
    <div v-if="!this.loading" id="mainpage-div">
      <LeftPanel v-bind:currentSlide="this.currentSlide" />
      <ButtonSets @change-slide="changeCurrentSlide" />
      <RightPanel v-bind:currentSlide="this.currentSlide" />
      <div class="bg-image"></div>
    </div>
    <div id="loading-div" v-else><pulse-loader color="pink"></pulse-loader></div>
  </Transition>
</template>

<script>
  import LeftPanel from "./LeftPanel.vue";
  import RightPanel from "./RightPanel.vue";
  import ButtonSets from "./ButtonSets.vue";
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  export default {
    name: "MainPage",
    data: function () {
      return {
        currentSlide: 0,
        loading: true
      };
    },
    components: {
      LeftPanel,
      RightPanel,
      ButtonSets,
      PulseLoader
    },
    methods: {
      changeCurrentSlide: function (evt) {
        this.currentSlide = evt;
      },
    },
    mounted: function () {
      setTimeout(() => (this.loading = false), 2000)
    }
  };
</script>

<style scoped>
  #mainpage-div {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
  }


  #loading-div {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  .bg-image {
    position: absolute;
    background-image: url("../assets/bg-photo.jpg");
    background-position: center;
    background-size: cover;
    overflow: hidden;
    filter: blur(10px);
    z-index: -10;
    height: 100%;
    width: 100%;
  }
</style>