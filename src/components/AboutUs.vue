<template>
  <div class="about-us">
    <top-navigation></top-navigation>
    <h1>{{h1}}</h1>
  </div>
</template>

<script>

import TopNavigation from '@/components/shared/TopNavigation';

export default {
  name: 'AboutUs',
  components: { TopNavigation },
  data() {
    return {
      h1: 'About Us',
      meta: {
        title: 'Title: About Us ',
      },
    };
  },
  created() {
    document.title = this.meta.title; // pass the meta via the creation mode
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
