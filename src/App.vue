<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <headervue></headervue>
    <contentvue></contentvue>
    <!-- <navvue></navvue> -->
    <!-- <router-link to='/home'>home</router-link>
    <router-link to='/page1'>page1</router-link>
    <router-link to='/page2'>page2</router-link>
    <router-link to='/page3'>page3</router-link>
    <router-link to='/page4'>page4</router-link> -->
  </div>
</template>

<script>
import headervue from './components/headervue.vue'
import contentvue from './components/contentvue.vue'
// import navvue from './components/navvue.vue'
export default {
  // name: 'app'
  data: function () {
    return {}
  },
  components: {
    'headervue': headervue,
    // 'navvue': navvue,
    'contentvue': contentvue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
