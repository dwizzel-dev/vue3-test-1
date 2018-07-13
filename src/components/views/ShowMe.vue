<template>
  <div class="about-us">
    <h1>{{h1}}</h1>
    <h3>getVisits: {{getVisits}}</h3>
    <h3>fullStatus(): {{fullStatus}}</h3>
    <h3>clicks: {{clicks}}</h3>
  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'ShowMe',
  components: {},
  data() {
    return {
      h1: 'Show Me',
      status: 'online',
    };
  },
  computed: {
    ...mapState('counter', {
      clicks: state => state.clicks,
    }),
    ...mapGetters('counter', [
      'getVisits',
      'getClicks',
    ]),
    fullStatus() { // important: those cannot be arrow function because "this" will loose its scope
      const str = 'status: ';
      return str + this.status;
    },
  },
  methods: {
    ...mapActions('counter', [
      'addVisit',
    ]),
    ...mapMutations('counter', [
      'incrementClick',
    ]),
  },
  created() {
    this.incrementClick();
  },
  watch: {
    $routes() {
      // later
    },
    // this observe the mutations of the getVisits
    // from the vuex.$store initiated with namespace
    getVisits() {
      // eslint-disable-next-line
      this.$logger.log('store.counter.getVisits via mapGetters observer: ' + this.getVisits);
    },
    getClicks() {
      // eslint-disable-next-line
      this.$logger.log('store.counter.getClicks via mapGetters observer: ' + this.clicks);
    },
    clicks() {
      // eslint-disable-next-line
      this.$logger.log('store.counter.clicks via mapState observer in ShowMe.vue: ' + this.clicks);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
