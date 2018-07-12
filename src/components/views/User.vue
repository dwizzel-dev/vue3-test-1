<template>
  <div class="user">
    <top-navigation></top-navigation>
    <!-- changes made via the template -->
    <h1>{{meta.title}} {{$route.params.username}}</h1>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
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
  created() {
    // on page created
    this.setPageTitle('-created');
  },
  computed: {
    ...mapGetters('counter', { // on store counter 2
      visits: 'getVisits',
    }),
    routeParams() { // important: those cannot be arrow function because "this" will loose its scope
      return this.$route.params;
    },
  },
  methods: {
    ...mapMutations('counter2', [ // on store counter 2
      'incrementVisit',
    ]),
    setPageTitle(args) {
      // call store mutations
      this.$store.commit('counter/incrementVisit'); // will call directly the counter 1
      this.incrementVisit(); // will call the counter 2
      // changes made via a property
      if (typeof this.routeParams.username !== 'undefined') {
        // call store getters
        document.title = this.meta.title + this.routeParams.username + args + this.counter.replace('%d', this.visits);
      } else {
        // call store getters
        document.title = this.meta.title + args + this.counter.replace('%d', this.visits);
      }
    },
  },
  watch: {
    // on route change
    $route() {
      // call inner method
      this.setPageTitle('-watch');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
