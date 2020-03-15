// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

//全局：在任何一个组件 都可以使用
Vue.use(VueResource)
Vue.use(VueRouter)



//自定义指令（全局）
Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})

//自定义过滤器（全局）
// Vue.filter("snippet",function(value){
//   return value.slice(0,100) + "...";
// })


//创建vue-router对象
var routerObj = new VueRouter({
  routes:routes,
  //取消掉地址栏的 #
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : routerObj,
  components: { App },
  template: '<App/>'    //该template参数：使用该模板元素替换了index.html页面中id为app的元素，
                    //（挂载元素的内容会被忽略，在index.html页面中显示的是app模板元素里面的内容）

})
