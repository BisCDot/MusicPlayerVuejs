<template>
  <Home></Home>
</template>
<script>
import Home from './views/Home.vue';

export default {
  
  components: {
    Home
}
}
</script>

<style>
:root {
    --primary-color: #1fae7e;
    --text-color: #333;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .icon-pause{
  display: none;

}
#app.playing .icon-pause{
  display: inline-block;
  
}
#app.playing .icon-play{
  display: none;
}
</style>
