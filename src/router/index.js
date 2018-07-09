import Vue from 'vue';
import Router from 'vue-router';
import CompHome from '@/components/Home';
import CompAboutUs from '@/components/AboutUs';

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: CompHome,
      meta: {
        title: 'Home',
        description: 'home page',
      },
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: CompAboutUs,
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
