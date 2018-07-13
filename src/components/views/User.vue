<template>
  <div class="user">
    <!-- changes made via the template -->
    <h1>{{meta.title}} {{$route.params.username}}</h1>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'User',
  components: {},
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
  },
  methods: {
    ...mapMutations('counter2', { // on store counter 2
      incrementVisitCounter2: 'incrementVisit',
    }),
    setPageTitle(args) {
      // call store mutations
      this.$store.commit('counter/incrementVisit'); // will call directly the counter 1
      this.incrementVisitCounter2(); // will call the counter 2
      // changes made via a property
      if (typeof this.$route.params.username !== 'undefined') {
        // call store getters
        document.title = `${this.meta.title} ${this.$route.params.username} ${args} ${this.counter.replace('%d', this.visits)}`;
      } else {
        // call store getters
        document.title = `${this.meta.title} ${args} ${this.counter.replace('%d', this.visits)}`;
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
