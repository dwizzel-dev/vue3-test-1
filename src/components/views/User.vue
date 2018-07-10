<template>
  <div class="user">
    <top-navigation></top-navigation>
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
      h1: 'Loading...',
      meta: {
        title: 'User ',
      },
    };
  },
  methods: {
    setPageTitle(args) {
      if (typeof this.$route.params.username !== 'undefined') {
        document.title = this.meta.title + this.$route.params.username + args;
      } else {
        document.title = this.meta.title + args;
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
