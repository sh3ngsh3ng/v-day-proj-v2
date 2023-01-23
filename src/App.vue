<template>
  <MainPage v-if="loginSuccess" />
  <LoginPage v-else @login-success="loginUser" />
</template>

<script>
  import MainPage from "./components/MainPage"
  import LoginPage from "./components/LoginPage"
  export default {
    name: 'App',
    components: {
      MainPage, LoginPage
    },
    data: function () {
      return {
        loginSuccess: false
      }
    },
    methods: {
      loginUser: function (evt) {
        this.loginSuccess = evt
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