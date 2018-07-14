/**
 * @examples: https://github.com/vuejs/vue-router/tree/dev/examples
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routing from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  linkExactActiveClass: 'isExactActive', // the class to aplly when active
  linkActiveClass: 'isActive', // the class to aplly when active and exact
  routes: routing,
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
