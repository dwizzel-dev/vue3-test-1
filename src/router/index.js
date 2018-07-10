/**
 * @examples: https://github.com/vuejs/vue-router/tree/dev/examples
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewHome from '@/components/views/Home';
import ViewAboutUs from '@/components/views/AboutUs';
import ViewUser from '@/components/views/User';

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
      redirect: '/about-us', // redirest by path
    },
    {
      path: '/aboutus',
      redirect: {
        name: 'AboutUs', // redirest by route name
      },
    },
    {
      path: '/user', // with dynamic link
      component: ViewUser,
      children: [
        {
          path: ':username',
          name: 'user',
          component: ViewUser,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title !== 'undefined') {
    document.title = to.meta.title;
  } else {
    document.title = 'Loading...';
  }
  next();
});

export default router;
