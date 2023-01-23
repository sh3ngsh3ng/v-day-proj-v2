<template>
  <img @click="changeSlide" :src="imageUrl" />
</template>

<script>
  export default {
    methods: {
      changeSlide: function () {
        this.$emit("change-slide", this.slideNumber);
      },
    },
    props: ["slideNumber", "imageUrl"],
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


  img:active {
    animation: shake 0.5s;
    opacity: 1;
  }

  @media only screen and (min-width: 375px) {
    img {
      height: 5vh;
      width: 12vw;
    }
  }


  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }

    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }

    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }

    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }

    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }

    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }

    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }

    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }

    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }

    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }

    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
</style>