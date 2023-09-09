<template>
  <div id="app">
    <FirstPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue'

export default {
  name: 'app',
  components: {
    FirstPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
