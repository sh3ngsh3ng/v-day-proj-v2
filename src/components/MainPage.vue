<template>
  <div id="mainpage-div">
    <LeftPanel v-bind:currentSlide="this.currentSlide" />
    <ButtonSets @change-slide="changeCurrentSlide" />
    <RightPanel v-bind:currentSlide="this.currentSlide" />
    <div class="bg-image"></div>
    <MusicPlayer />
  </div>
</template>

<script>
  import LeftPanel from "./LeftPanel.vue";
  import RightPanel from "./RightPanel.vue";
  import ButtonSets from "./ButtonSets.vue";
  import MusicPlayer from "./MusicPlayer.vue";
  export default {
    name: "MainPage",
    data: function () {
      return {
        currentSlide: 0,
      };
    },
    components: {
      LeftPanel,
      RightPanel,
      ButtonSets,
      MusicPlayer
    },
    methods: {
      changeCurrentSlide: function (evt) {
        this.currentSlide = evt;
      },
    },
  };
</script>

<style scoped>
  #mainpage-div {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
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