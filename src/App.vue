<template>
  <div id="app">
    <Header />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
main {
  flex: 1;
}
router-view {
  margin: 20px;
}
</style>
