<template>
  <div class="home">
    <top-navigation></top-navigation>
    <!-- changes made via the template with the data properties -->
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

import TopNavigation from '@/components/shared/TopNavigation';

export default {
  name: 'Home',
  components: { TopNavigation },
  data() {
    return {
      title: 'Welcome Home',
    };
  },
  created() {
    // call store actions with payload
    this.$store.dispatch('resetVisit');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  background: #eee;
  float:left;
  width:100%;
}
nav A{
  text-decoration: none;
}
ul{
  list-style: none;
  float:left;
  margin:10px;
  padding: 0;
}
li{
  float:left;
  margin: 0 10px 0 0;
  padding:10px;
  background: #ddd;
  border-radius: 5px;
}
li:last-child{
  margin-right:0;
}
</style>
