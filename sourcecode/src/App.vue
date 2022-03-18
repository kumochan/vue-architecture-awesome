<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    script: [
      { src: '/assets/js/scripts.js', body: true },
      { src: '/assets/demo/chart-area-demo.js', body: true },
      { src: '/assets/demo/chart-bar-demo.js', body: true },
      { src: '/assets/js/datatables-simple-demo.js', body: true },
    ],
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import 'https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css';
@import './assets/styles.css';
</style>