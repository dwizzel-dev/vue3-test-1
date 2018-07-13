<template>
  <div class="top-navigation">
    <nav>
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="'/' + item[0]" exact>{{item[1]}}</router-link>
        </li>
        <li class="login"><auth-button/></li>
      </ul>
    </nav>
  </div>
</template>

<script>

import AuthButton from '@/components/shared/AuthButton';

const routes = [
  ['', 'Home'],
  ['about-us', 'Async'],
  ['user', 'User'],
  ['show-me', 'Show Me'],
  ['func-test', 'Func'],
  ['plugin-test-js', 'Plugin'],
];


export default {
  name: 'TopNavigation',
  components: { AuthButton },
  data() {
    return {
      menu: routes,
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
  margin: 0;
}
A.isActive{
  color:#fff;
  background-color: #444;
}
</style>
