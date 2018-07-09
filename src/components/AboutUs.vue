<template>
  <div class="about-us">
    <top-navigation></top-navigation>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

import TopNavigation from '@/components/shared/TopNavigation';

export default {
  name: 'AboutUs',
  components: { TopNavigation },
  data() {
    return {
      meta: {
        title: 'About Us',
        description: 'Description About Us',
      },
    };
  },
  created() {
    document.title = this.meta.title; // pass the meta via the cretion mode
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
