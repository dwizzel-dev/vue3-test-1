
import ViewHome from '@/components/views/Home';
import ViewAboutUs from '@/components/views/AboutUs';
import ViewUser from '@/components/views/User';
import ViewShowMe from '@/components/views/ShowMe';
import ViewFuncTest from '@/components/views/FuncTest';
import ViewPluginTestJS from '@/components/views/PluginTestJS';

export default [
  {
    path: '/',
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
    },
  },
  {
    path: '/func-test',
    name: 'Func',
    component: ViewFuncTest,
    meta: { // pass the meta via the router
      title: 'Func Test Me',
    },
  },
  {
    path: '/plugin-test-js',
    name: 'Plugin-JS',
    component: ViewPluginTestJS,
    meta: { // pass the meta via the router
      title: 'Plugin Test Me',
    },
  },
];

