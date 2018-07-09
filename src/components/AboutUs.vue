<template>
  <div class="about-us">
    <top-navigation></top-navigation>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

import TopNavigation from '@/components/shared/TopNavigation';

export default {
  page: {
    title: 'About Us',
    meta: [{
      name: 'description',
      content: 'about us page',
    }],
  },
  name: 'AboutUs',
  components: { TopNavigation },
  data() {
    return {
      title: 'About Us',
    };
  },
  created() {
    document.title = 'About Us';
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
