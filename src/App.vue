<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "sass/main";

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  height: 100%;
  #app {
    height: 100%;
  }
}
</style>
