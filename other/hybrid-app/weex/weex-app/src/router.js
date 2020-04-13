/*global Vue*/
import Home from '@/components/Home';
import HelloWorld from '@/components/HelloWorld';

import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
