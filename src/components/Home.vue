<script setup>
import { ref } from "vue";
import Navbar from "../shared/components/Navbar.vue";
</script>

<template>
  <div class="homeView">
    <Navbar />
  </div>
</template>

<style scoped lang="scss">
.homeView {
  position: relative;
  min-height: 100vh;
}
</style>
