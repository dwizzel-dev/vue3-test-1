<template>
  <div class="func-test">
    <!-- changes made via the template with the data properties -->
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

export default {
  name: 'FuncTest',
  components: {},
  data() {
    return {
      title: 'Func Test',
    };
  },
  created() {
    this.$auth.doServerLogin();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
