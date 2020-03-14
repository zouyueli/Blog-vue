<template>
  <div id="app">
    <!-- <router-view/> -->
    <AddBlog></AddBlog>  
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'


// App.vue 是多个组件的合并（components目录下.vue文件的集合），之后一起作用于 index.html
export default {
  name: 'App',
  components:{
    AddBlog,
  }
}
</script>


<style>

</style>
