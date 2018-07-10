<template>
  <div class="top-navigation">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
        <li><router-link to="/user">User</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation',
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
  background: #eee;
  float:left;
  width:100%;
  border-radius: 5px;
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
  margin:10px;
  padding: 0;
}
li{
  float:left;
  margin: 0 10px 0 0;
}
li:last-child{
  margin-right:0;
}
A.isActive{
  color:#fff;
  background-color: #333;
}
</style>
