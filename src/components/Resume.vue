<template>
  <div id="resume">
    <nav>
      <div class="blog">
        <router-link class="show" to='/'>Echo博客</router-link>
        <router-link class="write" to='/add'>写博客</router-link>
      </div>
      <ul>
        <li>关于我</li>
        <li>求职意向</li>
        <li>专业技能</li>
        <li>我的经历</li>
      </ul>
    </nav>
    <div class="section1">
        <h2>关于我</h2>
        <div>
          <img src="/static/img/person.jpg" alt="头像" style="height:200px;width:200px;">
        </div>
        <p>
          我叫邹月鹂，毕业于江西农业大学，就读软件工程专业。<br>
          原先从事于测试岗位，觉得测试过于繁琐，跟自己本身的发展需求不是很符合.<br>
          在经过一段时间的考虑后，打算转行前端开发。
        </p>
        
    </div>
    <div class="section2">
        <h2>求职意向</h2>
        <div class="section2-div">
           <div class="skill-1">
              <img src="/static/img/web.png"></img>
              <span>网页制作</span>
              <p>响应式开发<br>代码简洁且重用</p>
           </div>
           <div class="skill-2">
              <img src="/static/img/h5.png"></img>
              <span>H5页面</span>
               <p>移动端界面的开发<br>兼容不同终端，手机/平板</p>
           </div>
           <div class="skill-3">
              <img src="/static/img/css.png"></img>
              <span>前端逻辑判断</span>
              <p>利用js实现业务逻辑<br>通过ajax进行前后端数据交互</p>
           </div>
           
        </div>
    </div>
    <div class="section3">
        <h2>技能掌握</h2>
        <div class="wrappers">
            <div class="wrapper " v-for="item in numMap" >
                <div class="progress" ref="progress">
                  <div class="clip-left"></div>
                  <div class="clip-right"></div>
                  <div class="clip-mask" v-if="Number.parseInt(item.deg) > 50"></div>
                  <div class="num">{{item.deg}}</div>
                </div>
                <p class="ptitle"> {{item.title}}</p>
			      </div>
        </div>
        
    </div>
    <div class="section4">
        <h2>我的经历</h2>
        <div class="exp-container">
          <ul class = "exp">
            <li class="job-1 job-box">
              <div class="my-date date-box">2019/11-2020/3</div>
              <div class="my-desc desc-box">
                <h3 class="u-name">上海蓉亿科技有限公司</h3>
                <p class="job j-box">效能部/测试工程师</p>
                <p class="task task-box">负责物联网IOT和江西物联项目的手工测试;
                              使用Python语言进行IOT项目的自动化脚本的开发;<br>
                                密切与产品沟通，保证产品的质量
                </p>
              </div> 

            </li>
            <li class="job-2 job-box">
              <div class="my-date date-box">2015/9-2019/7</div>
              <div class="my-desc desc-box">
                <h3  class="u-name">江西农业大学</h3>
                <p class="job j-box">大学本科</p>
                <p class="task task-box">软件工程专业<br>获得英语四级证书</p>
              </div>
            </li>
            
          </ul>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {
      numMap:[{title:"HTML",deg:"80%"},{title:"CSS",deg:"70%"},{title:"Jquery",deg:"80%"},{title:"Node",deg:"30%"}]
     
    }
  },
  mounted(){
     this.init();
  },
  methods:{
    init(){
      let arr = this.$refs.progress;
      let template;
      for(let i = 0;i<arr.length;i++){
          let num = Number.parseInt(arr[i].innerText);
          //百分比对应的度数
          let degress = Math.ceil(num/100*360);
          template = `rotate(${degress}deg)`
          if(degress < 180){
             console.log(degress);
             arr[i].getElementsByClassName("clip-right")[0].style.transform = template;
             arr[i].getElementsByClassName("clip-left")[0].style.zIndex="10";
          }else{
            degress = degress-180;
            arr[i].getElementsByClassName("clip-left")[0].style.transform = `rotate(${degress}deg)`;
          }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resume{
  /* background: rgba(0, 0, 0, 0.05); */
  margin: 0;
  padding:0;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft Yahei";

}


nav{
  background:#2c3e50;
  height:70px;
  text-align: right;
  margin-bottom: 50px;
}

nav .blog{
   float:left;

   width:200px;
   /* background: orange; */
   margin-left:40px;
   display:flex;
   height: 70px;
   line-height: 70px;
   font-weight: bold;

}

nav .blog a{
   vertical-align: center;
   padding-left:20px;
   cursor: pointer;
   color:white;
   text-decoration: none;
}


nav ul{
  padding-right: 100px;
}
nav ul li {
  display: inline-block;
  color:white;
  font-size: 14px;
  line-height: 70px;
  padding-left:10px;
  padding-right:50px;
  cursor: pointer;

}

nav ul li.active{
  color:#E87E04;
}

.section1 {
  text-align: center;
  margin-bottom:80px;
}

h2{
  /* background: blue; */
  text-align: center;
  font-size: 30px;
  color: #2c3e50;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 50px;
  
}
.section1 img{
  border-radius: 100px;
  text-align: center;
  margin-bottom: 30px;
}
.section1 p{
  letter-spacing: 2px;
  font-size: 14px;
  color:rgba(0,0,0,0.5);
}

.section2 h2{
  margin-bottom: 10px;
}
.section2-div{
  text-align: center;
  margin-bottom: 50px;
}

.section2 .skill-1,.skill-2,.skill-3{
  display: inline-block;
  padding: 50px;
}
.section2 .skill-1 > span,.skill-2 > span,.skill-3 > span{
  margin-top:20px;
  margin-bottom: 20px;
  font-size: 18px;
  display: block;
  color:#E87E04;
  font-family: "SimHei";
}
.section2 .skill-1 > p,.skill-2 > p,.skill-3 > p {
  /* height:50px; */
  
  /* background: green; */
  color: #787978;
  font-size: 14px;
}
    


.section3
      .wrappers{
        text-align: center;
        margin:50px;  
        margin-bottom: 80px;      
      }


      .wrapper{
				display: inline-block;
				margin:50px;
			}

      
			.wrapper{
				width:200px;
				height:200px;
				position: relative;
        /* margin-left:50px; */
			}
			.progress{
				width:200px;
				height:200px;
				position: absolute;
				border:10px solid orange;
				border-radius: 50%;
			}
			.clip-left{
				width:200px;
				height:200px;
				border:10px lightgray solid;
				border-radius: 50%;
				position: absolute;
				clip:rect(0 100px 200px 0);
				top:-10px;
				right: -10px;
				
			}
			
			.clip-right{
				width:200px;
				height:200px;
				border:10px solid lightgray;
				border-radius: 50%;
				position: absolute;
				clip:rect(0 200px 200px 100px);
				top:-10px;
				right: -10px;
			}
			
			.num{
				height: 200px;
				position: absolute;
				font-size: 18px;
				width: 200px;;
				text-align: center;
				line-height: 200px;
				top:-10px;
				left:-10px;
			}
			.ptitle{
				width: 200px;
				position: absolute;
				top:240px;
				text-align: center;
			}
      .clip-mask{
				width:200px;
				height:200px;
				position: absolute;
				border:10px solid orange;
				top:-10px;
				left:-10px;
				clip:rect(0 200px 200px 100px);
				border-radius: 50%;
			}



.section4
    .job-2::before{
       content: "";
       position: absolute;
       top: -50px;
       bottom: 0;
       height:50px;
       left: 50%;
       width: 2px;
       /* margin-left: -1.5px; */
       background-color: rgb(87, 87, 131);
    }
   
  
    .exp .job-box {
      /* background: grey; */
      position: relative;
      text-align: center;
    }
    .exp .date-box{
      height:200px;
      width:200px;
      background:pink;
      line-height: 200px;
      display: inline-block;
      font-size: 18px;
      border-radius: 50%;
    }

    .exp  .desc-box{
      height:200px;
      width:400px;
      display: inline-block;
    }

    .exp .u-name{
      font-weight: 700;
      color: #626e7c;
    }

    .exp .j-box{
      margin-top:10px;
      font-family: "SimHei";
      color: #E87E04;
    }


    .job-1 .my-desc{
      position: absolute;
      left:250px;
      padding-right: 30px;

    }
    .job-1 .my-desc h3{
      text-align: right;
      /* margin-right: 30px; */
      margin-top:30px;
      
    }
    .job-1 .my-desc .job{
      text-align: right;
      /* margin-right: 30px;  */
    }

    .exp .task-box{
      color:#787978;
      font-size: 14px;
    }

    .job-1 .my-desc .task{
      text-align: right;
      /* margin-right:30px; */
      margin-left:30px;
      margin-top:15px;  
    }

    .job-2{
      margin-top:50px;
    }
    .job-2 .my-desc{
      position: absolute;
      top:0px;
      right:250px;
      /* line-height: 200px; */
      text-align: left;
      padding-left: 30px;
      padding-top:30px;

    }
    .job-2 .my-desc .job{
      
      padding-top:10px;
    }
    .job-2 .my-desc .task{
      margin-top:20px;
    }


    
    

</style>
