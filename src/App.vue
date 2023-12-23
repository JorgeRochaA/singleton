<script setup>
import Navbar from "./shared/components/Navbar.vue";
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  min-height: 100vh;
  width: 100vw;
}
</style>
