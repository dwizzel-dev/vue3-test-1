<template>
  <div class="plugin-test-js">
    <!-- changes made via the template with the data properties -->
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

export default {
  name: 'PluginTestJS',
  components: {},
  data() {
    return {
      title: 'Plugin Test JS',
    };
  },
  created() {
    this.$logger.log(`${this.title} created!`);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
