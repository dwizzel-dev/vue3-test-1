<template>
  <div class="user">
    <top-navigation></top-navigation>
    <!-- changes made via the template -->
    <h1>{{meta.title}} {{$route.params.username}}</h1>
  </div>
</template>

<script>

import TopNavigation from '@/components/shared/TopNavigation';

export default {
  name: 'User',
  components: { TopNavigation },
  data() {
    return {
      counter: ' (%d)',
      h1: 'Loading...',
      meta: {
        title: 'User ',
      },
    };
  },
  methods: {
    setPageTitle(args) {
      this.$store.commit('increment');
      // changes made via a property
      if (typeof this.$route.params.username !== 'undefined') {
        document.title = this.meta.title + this.$route.params.username + args + this.counter.replace('%d', this.$store.getters.getVisits);
      } else {
        document.title = this.meta.title + args + this.counter.replace('%d', this.$store.getters.getVisits);
      }
    },
  },
  created() {
    // pass the meta via the creation mode
    this.setPageTitle('-created');
  },
  watch: {
    $route() {
      this.setPageTitle('-watch');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
