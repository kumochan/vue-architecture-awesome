import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/Home';
import DemoView from '@/views/Demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: DemoView,
    },
  ],
});
