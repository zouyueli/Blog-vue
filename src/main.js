// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'    //该template参数：使用该模板元素替换了index.html页面中id为app的元素，
                    //（挂载元素的内容会被忽略，在index.html页面中显示的是app模板元素里面的内容）

})
