<template>
  <div class="photo-page-div">
    <img :src="imageUrl" />
  </div>
</template>

<script>
export default {
  props: ["imageUrl"],
};
</script>

<style scoped>
.photo-page-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

img {
  max-width: 90%;
  height: auto;
  border-radius: 20px;
}
</style>
