<template>
	<nav>
		<ul>
			<li>
				<!-- <router-link>标签默认有一个属性为router-link-active的class值，
					当点击了该<router-link>，则会在class添加 router-link-exact-active，
						当点击了其他link后该值并不会被删除
					所以需要在<router-link>添加exact
				-->
				<router-link to="/resume">笔者简历</router-link>
				<router-link to="/" exact >博客</router-link>
				<router-link to="/add" exact>写博客</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name:"blog-header"
	}
</script>

<style scoped>
ul{
	list-style-type: none;
	text-align: center;
	margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}

a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav{
	background: crimson;
	padding: 30px 0;
	margin-bottom: 40px;
}

.router-link-active{
	background: rgba(255,255,255,0.8);
	color: #444;
}

</style>