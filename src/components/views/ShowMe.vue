<template>
  <div class="about-us">
    <top-navigation></top-navigation>
    <h1>{{h1}} {{getVisits}} {{fullStatus}}</h1>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import TopNavigation from '@/components/shared/TopNavigation';

export default {
  name: 'ShowMe',
  components: { TopNavigation },
  data() {
    return {
      h1: 'Show Me',
      status: 'online',
    };
  },
  computed: {
    ...mapGetters([
      'getVisits',
    ]),
    fullStatus() { // important: those cannot be arrow function because "this" will loose its scope
      const str = 'status: ';
      return str + this.status;
    },
  },
  methods: {
    ...mapActions([
      'addVisit',
    ]),
  },
  watch: {
    getVisits() { // this observe the mutations of the getVisits from the vuex.$store
      // eslint-disable-next-line
      console.log('getVisits as Changed: ' + this.getVisits);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
