<!--
 * @Author: jinglin.tan
 * @Date: 2020-07-30 10:54:47
 * @LastEditors: jinglin.tan
 * @LastEditTime: 2020-07-31 14:08:32
 * @Description: 
-->
<template>
  <div class="hello">
    <p>vue 容器</p>
    <div id="subapp-viewport" class="app-view-box" style="height: 500px;"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    loadMicroApp(
      { name: 'bi', entry: '//localhost:8082', container: '#subapp-viewport', props: { name: 'qiankun' } }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
