<script setup>
import Navbar from "./shared/components/Navbar.vue";
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-margin-top: 50px;
  font-family: "Rubik", "sans-serif";

  &::-webkit-scrollbar {
    width: 0px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
