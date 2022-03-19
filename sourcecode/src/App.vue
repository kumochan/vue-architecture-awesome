<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css';
@import './assets/styles.css';
</style>

<script>
export default {
  name: 'app',
  mounted() {
    const fontawesome = document.createElement('script');
    fontawesome.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js',
    );
    document.head.appendChild(fontawesome);
  },
  created() {
    const scripts = [
     '/assets/js/bootstrap.bundle.min.js',
     '/assets/js/scripts.js',
     '/assets/js/Chart.min.js',
    //  '/assets/demo/chart-area-demo.js',
    //  '/assets/demo/chart-bar-demo.js',
     '/assets/js/simple-datatables@latest',
     '/assets/js/datatables-simple-demo.js',
    ];
    scripts.forEach((script) => {
      const tag = document.createElement('script');
      tag.setAttribute('src', script);
      document.head.appendChild(tag);
    });
  },
  // metaInfo: {
  //   title: 'Default App Title',
  //   titleTemplate: '%s | vue-meta Example App',
  //   htmlAttrs: {
  //     lang: 'en-US',
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'description', content: 'An example Vue application with vue-meta.' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //   ],
  //   script: [
  //     { src: '/assets/js/bootstrap.bundle.min.js' },
  //     { src: '/assets/js/scripts.js' },
  //     { src: '/assets/js/Chart.min.js' },
  //     { src: '/assets/demo/chart-area-demo.js' },
  //     { src: '/assets/demo/chart-bar-demo.js' },
  //     { src: '/assets/js/simple-datatables@latest' },
  //     { src: '/assets/js/datatables-simple-demo.js' },
  //   ],
  // },
};
</script>