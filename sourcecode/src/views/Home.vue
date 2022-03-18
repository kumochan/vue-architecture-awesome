<template>
  <div>
    <NavbarComponent />
    <div id="layoutSidenav">
      <SlidebarComponent />
      <div id="layoutSidenav_content">
        <main>
          <MainComponent />
        </main>
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/views/layouts/NavbarComponent';
import SlidebarComponent from '@/views/layouts/SlidebarComponent';
import MainComponent from '@/views/layouts/MainComponent';
import FooterComponent from '@/views/layouts/FooterComponent';

export default {
  name: 'Home',
  components: {
    NavbarComponent,
    SlidebarComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
</style>
