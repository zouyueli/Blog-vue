<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div v-for="blog in filteredBlogs" class="single-blog">
      <!-- 这里一定要使用v-bind，否则 获取不到blog.id -->
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  //当vue对象创建属性和方法时，调用created方法(钩子函数)
  created() {
    //若请求的是本地的路径，需要把文件放在static目录
    axios.get("/blogs").then(resp => {
      // console.log(resp.data);
      //   console.log(resp.data.constructor == Array); //true
      //   console.log(Object.prototype.toString.call(resp.data) == '[object Array]');  //true
      this.blogs = resp.data;
    });
  },
  //局部自定义指令：在vue对象中的directives属性中定义指令对象
  //全局自定义指令:在main.js文件中定义，
  //   directives:{
  //   	'rainbow':{
  //   		bind(el,binding,vnode){
  //   			el.style.color = "#" + Math.random().toString(16).slice(2,8);
  //   		}
  //   	}
  //   }

  //自定义过滤器
  filters: {
    snippet: function(value) {
      return value.slice(0, 100) + "...";
    }
  },

  computed: {
    filteredBlogs: function() {
      //es6新增的方法 ：数组的filter方法，匹配对了返回true，进行展示，否则false
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>F

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
