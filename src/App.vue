<template>
  <div id="app">
    <!-- 根据url的不同，切换到不同的组件 -->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
    
    <!-- <ShowBlogs></ShowBlogs>   -->
  </div>
</template>

<script>
//import后面的值 相当于一个变量，可任意，但建议用vue组件名
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'  


// App.vue 是多个组件的合并（components目录下.vue文件的集合），之后一起作用于 index.html
export default {
  name: 'App',
  components:{
    AddBlog,ShowBlogs,BlogHeader,SingleBlog,EditBlog
  }
}
</script>


<style>

</style>
