<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者: {{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/' + id">编辑</router-link>
  </div>
</template>


<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/blogs/" + this.id)
      .then(function(resp) {
        //   console.log(resp);  //true
        this.blog = resp.body;
      });
  },
  methods: {
    deleteSingleBlog() {
      this.$http
        .delete("http://localhost:3000/blogs/" + this.id)
        .then(function(resp) {
			//重定向
			this.$router.push({path:'/'})
        });
    }
  }
};
</script>
<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>