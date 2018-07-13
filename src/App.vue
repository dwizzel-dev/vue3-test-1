<template>
  <div id="app">
    <div class="container-outer">
      <div class="container-inner">
        <top-navigation/>
        <div class="top-content-outer">
          <div class="top-content-inner">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TopNavigation from '@/components/shared/TopNavigation';

export default {
  name: 'App',
  components: { TopNavigation },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  padding: 0;
  margin: 0 auto;
  width: 640px;
}
/* containers */
.container-outer{
  width:96%;
  float:left;
  background-color: #333;
  border-radius: 5px;
  padding:2%;
}
.container-inner{
  float: left;
  width: 100%;
}
.top-content-outer{
  width: 96%;
  float: left;
  padding: 2%;
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
}
.top-content-inner{
  width:100%;
  float:left;
}

/* navigation */
.top-navigation{
  float:left;
  width:100%;
}

/* buttons */
button{
  text-decoration: none;
  color: #000;
  float: left;
  margin: 0;
  padding: 10px;
  background: #ddd;
  border-radius: 5px;
  border: none;
  font-size: inherit;
  cursor: pointer;
  }
button:focus{
  outline: none;
}

</style>
