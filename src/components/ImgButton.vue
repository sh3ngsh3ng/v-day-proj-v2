<template>
  <img @click="changeSlide" src="../assets/sample4.jpg" />
</template>

<script>
export default {
  methods: {
    changeSlide: function () {
      this.$emit("change-slide", this.slideNumber);
    },
  },
  props: ["slideNumber"],
};
</script>

<style scoped>
img {
  height: 4vh;
  width: 11vw;
  opacity: 0.8;
  border-radius: 50%;
  background-color: beige;
  box-shadow: 0 0 0 4px #fff;
}

img:hover {
  opacity: 1;
}

@media only screen and (min-width: 375px) {
  img {
    height: 5vh;
    width: 12vw;
  }
}
</style>
