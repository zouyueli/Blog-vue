# vue-blog

> A Vue.js project
## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
```

### 本地构建服务器,模拟后端接口
``` bash
# 全局下载json-server模块
npm install -g json-server
# 创建一个新文件夹（文件夹名除json-server外），进入该目录
npm install json-server --save
# 修改package.json文件配置，修改<scripts>
    "scripts": {
        "json:server": "json-server --watch db.json",
        "json:server:remote": "json-server http://jsonplaceholder.typicode.com/db"
    },
# 新建db.json文件，添加数据,如当前项目下的db.json文件

# 启动后端服务
npm run json:server
之后，浏览器访问 http://localhost:3000/
```


### json-server的增删改查
##### 1 查询列表blogs
```
axios.get("http://localhost:3000/blogs").then((resp)=>{});
```
##### 2 添加blog
```
axios.post("http://localhost:3000/blogs", this.blog).then(function(resp) {});
```
##### 3 修改blog
```
axios.put("http://localhost:3000/blogs/"+this.id, this.blog).then(function(resp) {});
```
##### 4 删除blog
```
axios.delete("http://localhost:3000/blogs/"+this.id).then(function(resp) {});
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
