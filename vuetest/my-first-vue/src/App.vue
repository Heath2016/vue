<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h2 v-text="title"></h2>
    <h3 v-html="hello"></h3>

  </div>
</template>

<script>
export default {
  data:function(){
    return {
      title:"hello world",
      hello:'<span>!</span> this '

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
