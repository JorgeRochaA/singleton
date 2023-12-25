<script setup>
import GetStarted from "./components/GetStarted.vue";
import Navbar from "./shared/components/Navbar.vue";
import Sponsor from "./components/Sponsor.vue";
import Features from "./components/Features.vue";
import EarnRewards from "./components/EarnRewards.vue";
import Plans from "./components/Plans.vue";
import Footer from "./shared/components/Footer.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <GetStarted />
    <Sponsor />
    <Features />
    <EarnRewards />
    <Plans />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
* {
  margin: 0;
  padding: 0 !important;
  box-sizing: border-box;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background: white;
}
</style>
