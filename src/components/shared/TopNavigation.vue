<template>
  <div class="top-navigation">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
        <li><router-link to="/user">User</router-link></li>
        <li><router-link to="/show-me">Show Me</router-link></li>
        <li class="login"><auth-button/></li>
      </ul>
    </nav>
  </div>
</template>

<script>

import AuthButton from '@/components/shared/AuthButton';

export default {
  name: 'TopNavigation',
  components: { AuthButton },
  data() {
    return {
      //
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  float:left;
  width:100%;
}
nav A{
  text-decoration: none;
  color:#000;
  float:left;
  margin: 0;
  padding:10px;
  background: #ddd;
  border-radius: 5px;
}
ul{
  list-style: none;
  float:left;
  margin:0;
  padding: 0;
  width: 100%;
}
li{
  float:left;
  margin: 0 10px 0 0;
}
li:last-child{
  margin-right:0;
}
li.login{
  float:right;
  margin: 0 10px 0 0;
}
A.isActive{
  color:#fff;
  background-color: #444;
}
</style>
