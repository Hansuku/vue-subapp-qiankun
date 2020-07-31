<!--
 * @Author: jinglin.tan
 * @Date: 2020-07-30 10:54:47
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-31 16:46:06
 * @Description: data
--> 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view ref="routerView"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
