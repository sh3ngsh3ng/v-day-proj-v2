<template>
  <MainPage v-if="loginSuccess" />
  <LoginPage v-else @login-success="loginUser" />
  <MusicPlayer :toggleMusic="this.toggleMusic" />
</template>

<script>
  import MainPage from "./components/MainPage"
  import LoginPage from "./components/LoginPage"
  import MusicPlayer from "./components/MusicPlayer"
  export default {
    name: 'App',
    components: {
      MainPage, LoginPage, MusicPlayer
    },
    data: function () {
      return {
        loginSuccess: false,
        toggleMusic: false
      }
    },
    methods: {
      loginUser: function (evt) {
        this.loginSuccess = evt
      }
    },
    watch: {
      loginSuccess() {
        this.toggleMusic = true
      }
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>