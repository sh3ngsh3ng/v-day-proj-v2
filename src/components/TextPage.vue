<template>
  <div class="text-page-div">
    <div class="inner-div">
      <p class="header">{{ header }}</p>
      <p class="main-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "header"],
};
</script>

<style scoped>
/* Lobster */
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
/* Great Vibes */
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

/* Allura */
@import url("https://fonts.googleapis.com/css2?family=Allura&display=swap");

/* Amatic SC */
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");

/* Alex Brush */
@import url("https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap");
.text-page-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-div {
  margin-top: 5vh;
}

.main-text {
  margin: 0;
}

p {
  color: white;
  text-align: center;
  font-family: "Amatic SC";
  font-size: 20px;
  padding: 5px;
}
</style>
