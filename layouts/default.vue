<template>
  <div id="blog-box">
    <div id="blog-header" class="blog-header clear-fix default-border-radius" >
      <div class="logo-box float-left">
        <div class="logo">
          心机之蛙
          <!--我改变了-->
        </div>
      </div>
      <div v-if="isShow==='noLogin'" class="login-tips-text-box float-right">
        <a :href="'/login'+redirectPath">
          <span><i class="sob_blog sobfingermap "></i> 登录</span>
        </a>
        <a :href="'/register?keyword=register'">
          <span><i class="sob_blog sobmembers-add "></i> 注册</span>
        </a>
      </div>
      <div v-if="isShow==='login'" class="login-tips-text-box float-right">
        <el-link :href="'/userInfo/'" :underline="false" type="primary">个人中心</el-link>
        <el-link href="http://mp.huangdouya.group/#/index" v-if="roles==='role_admin'" type="primary">|后台管理</el-link>

      </div>
      <div class="navigation-box float-right">
          <a href="/">
            <span><i class="sob_blog sobhome "></i> 首页</span>
          </a>
          <a href="/link">
            <span><i class="sob_blog soblink "></i> 友链</span>
          </a>
          <a href="/about">
            <span><i class="sob_blog sobabout_line  "></i> 关于</span>
         </a>
      </div>
      <div class="user-info-box" style="display: none">
        用户信息
      </div>
    </div>
    <Nuxt/>
    <div class="blog-footer">
      <div>
        <a href="/about">
          <span>关于我们</span>
        </a>
        |
        <a href="/about">
          <span>联系我们</span>
        </a>
        |
        <a href="/link">
          <span>友情链接</span>
        </a>
        |
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target='_BLANK'>
          <span>粤ICP备  2020119681号</span>
        </a>
      </div>
      <div class="copy-right-box">
        <p>
          Copyright @
          <a href="https:www.sunofbeach.net" target="_blank">
            阳光沙滩
          </a>
          （2019-2020）本网站仅供学习所用
        </p>
      </div>
    </div>
    <div id="g-to-top" style="display: none" @click="toTop()">
      <div class="el-icon-caret-top" ></div>
      <div>
        回到
        <br>
        顶部
      </div>
    </div>
  </div>
</template>
<script>
  import * as api from "../api/api"
  export default {
    data(){
      return{
        isShow:'noLogin',
        roles:'',
        redirectPath:'',
        userInfo:[]
      }
    },
    mounted() {
      this.textLogin()

      if(this.redirectPath!=='?redirect='+location.href&&
         this.$route.path!=='/' &&
         this.$route.path!=='/login'&&
        this.$route.path!=='/register'){
        this.redirectPath='?redirect='+location.href;
      }

      window.addEventListener('scroll',this.onWindowScroll)
    },
    beforeDestroy() {

      window.removeEventListener('scroll',this.onWindowScroll);
    },
    methods:{
      toTop(){
        document.documentElement.scrollTo({
          top:0,
          behavior:'smooth'
        })
      },
      onWindowScroll(){
        let scrolledTop=document.documentElement.scrollTop;

        if(scrolledTop>370){
          document.getElementById('g-to-top').style.display='block'
        }else {
          document.getElementById('g-to-top').style.display='none'
        }
      },
      async textLogin(){
         api.textLogin().then(result=>{
          if(result.code===20000){
            this.isShow='login'
            this.roles=result.data.roles
            this.userInfo=result.data
            console.log(this.roles)
          }
        })
      }
    }
  }
</script>
<style>
  #g-to-top{
    position: fixed;
    right: 100px;
    bottom: 10px;
    text-align: center;
    cursor: pointer;
    border:1px solid #8A8A8A;
    padding: 0px 5px 0px 5px;
  }
  #g-to-top .el-icon-caret-top{
    font-size: 30px;
  }
  .login-tips-text-box span{
    margin-right: 5px;
    cursor: pointer;
  }
  .navigation-box i{
    font-size: 20px;
    font-weight: 600;
  }
  .default-border-radius{
    border-radius: 5px;
  }
  .navigation-box span:hover,.login-tips-text-box span:hover{
    color: #FFC0CB;
  }
  .navigation-box span{
    margin-right: 40px;
    color:#737F90;
    font-size:18px ;
    cursor: pointer;
  }
  .navigation-box{
    margin-right: 10px;
    padding: 10px;
  }
  .login-tips-text-box{
    margin-right: 10px;
    padding: 10px;
    font-size: 16px;
  }
  .logo-box{
    margin-left: 10px;
  }
  .logo-box .logo{
    margin-top: 5px;
    color: #737F90;
    font-size: 24px;
    font-weight: 600;

  }

  a{
    text-decoration: none;
  }
  .blog-header{
    background: #Fff;
  }
  .blog-footer{
    line-height: 30px;
    text-align: center;
    color: #909090;

  }
  body{
    background: #F2F2FA;
  }
  #blog-box{
    width: 1140px;
    margin: 0 auto;
  }
  .float-right{
    float: right;
  }
  .float-left{
    float: left;
  }
  .clear-fix{
    overflow: hidden;
    zoom:1;
  }
</style>
