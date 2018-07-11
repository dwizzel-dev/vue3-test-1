/**
 * @examples: https://github.com/vuejs/vue-router/tree/dev/examples
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewHome from '@/components/views/Home';
import ViewAboutUs from '@/components/views/AboutUs';
import ViewUser from '@/components/views/User';
import ViewShowMe from '@/components/views/ShowMe';

Vue.use(VueRouter);


const router = new VueRouter({
  linkExactActiveClass: 'isExactActive', // the class to aplly when active
  linkActiveClass: 'isActive', // the class to aplly when active and exact
  routes: [
    {
      path: '',
      name: 'Home',
      component: ViewHome,
      meta: { // pass the meta via the router
        title: 'Home',
        description: 'home page description',
      },
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: ViewAboutUs,
    },
    {
      path: '/about',
      redirect: '/about-us', // redirect by path
    },
    {
      path: '/aboutus',
      redirect: {
        name: 'AboutUs', // redirect by route name
      },
    },
    {
      path: '/user', // with dynamic link
      component: ViewUser,
      children: [
        {
          path: ':username',
          name: 'User',
          component: ViewUser,
        },
      ],
    },
    {
      path: '/show-me',
      name: 'ShowMe',
      component: ViewShowMe,
      meta: { // pass the meta via the router
        title: 'Show Me',
        description: 'show me page description',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title !== 'undefined') {
    // set a title if a meta in the router is defined
    document.title = to.meta.title;
  } else {
    // put a loding because the component will set the title itself
    document.title = 'Loading...';
  }
  next();
});

export default router;
