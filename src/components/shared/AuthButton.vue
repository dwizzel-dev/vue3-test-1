<template>
  <button :class="button.style" v-on:click="doLogin">{{button.text}}</button>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
// import { mapGetters } from 'vuex';

export default {
  name: 'AuthButton',
  data() {
    return {
      button: {
        text: 'Login',
        style: 'in',
      },
    };
  },
  computed: {
    ...mapGetters('auth', [ // on store auth
      'isLoggedIn',
    ]),
  },
  created() {
    this.setButton(this.isLoggedIn);
  },
  methods: {
    ...mapMutations('auth', [
      'loginStatus',
    ]),
    setButton(status) {
      if (status) {
        this.button.text = 'Logout';
        this.button.style = 'out';
        // this.button.action = 'doLogout';
      } else {
        this.button.text = 'Login';
        this.button.style = 'in';
        // this.button.action = 'doLogin';
      }
    },
    doLogin() {
      // eslint-disable-next-line
      console.log('doLogin()');
      this.loginStatus(!this.isLoggedIn);
    },
  },
  watch: {
    isLoggedIn() {
      // eslint-disable-next-line
      console.log('store.auth.isLoggedIn changed  : ' + this.isLoggedIn);
      this.setButton(this.isLoggedIn);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button.in{
  color: #fff;
  background: rgb(0, 98, 255);
}
button.out{
  color: #fff;
  background: rgb(255, 0, 0);
}
</style>
