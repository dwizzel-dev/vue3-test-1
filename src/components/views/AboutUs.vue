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
    // call store actions with object
    this.$store.dispatch({
      type: 'addVisit',
      count: 10,
    });
    // change the meta wuth the data property when the page is created
    document.title = this.meta.title;
  },
  watch: {
    // watch for some injected object like $route
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
