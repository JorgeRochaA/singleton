<script setup>
import { ref } from "vue";
import Navbar from "../shared/components/Navbar.vue";
</script>

<template>
  <div class="home">
    <Navbar />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: red;
}
</style>
