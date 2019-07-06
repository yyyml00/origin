<template>
  <div id="app">
    <div class="container-box">
        <div class="header">
            <h1  >水库管理系统</h1>
            <div class="loginStatuBox">
            <i class="fa fa-user"></i>
            <span class="el-dropdown-link">
                已登录
            </span>
           <a href="javascrit:void" class="preCenter">个人中心</a> / 
           <a href="javascrit:void" @click="exitLogin" class="exit">退出登录</a>
            </div>
        </div>
        <div class="flex-box">
          <div class="aside-box">
             <el-menu
            default-active="2"
            class="el-menu-vertical-demo">
            <router-link  to="/index">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                
                <span slot="title">首页</span>
            </el-menu-item>
            </router-link>
            <el-submenu index="2">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <!-- <router-link tag="el-menu-item" to="/index/system" index="2-1">选项1</router-link> -->
            <router-link to="/index/system">
            <el-menu-item index="2-2">选项</el-menu-item>
            </router-link>
            </el-submenu>
            <el-submenu index="3">
            <template slot="title">
            <i class="fa fa-user"></i>
            <span>导航一</span>
            </template>
            
            <el-menu-item index="3-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            
            <el-menu-item index="4-2">选项2</el-menu-item>
            </el-submenu>
            </el-menu>    
          </div>
          <div class="main-box">
          <router-view></router-view>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
    },
    methods: {
        exitLogin(){
            this.$router.push({path: '/login'})
        }
    }
}
</script>
<style>
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, button {
    margin: 0;
    padding: 0;
    border: 0;
    /*font-size: 100%;*/
    font-weight: normal;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* custom */
a {
    text-decoration: none;

}

li {
    list-style: none;
}
html, body {
    width: 100%;
}

body {
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


    .header {
      height: 60px;
      width: 100%;
      text-align: center;
      line-height: 60px;
      background-color: rgb(56, 104, 194);
    } 
    .flex-box {
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
    }
    
    .flex-box .main-box {
      width: 85%;
      box-sizing: border-box;
      height: 600px;
      background-color: rgb(241, 241, 241);

    }
    .flex-box .aside-box {
      width: 15%;
      height: 600px;
      min-width: 200px;
    }
    .router-link-exact-active {
     color: blue;
     }
     .header h1 {
         float: left;
         margin-left: 60px;
         color: azure;
       
     }
     .loginStatuBox {
         float: right;
         margin-right: 60px;
         color: azure;
     }
     .loginStatuBox >span {
         margin-right: 20px;
     }
     .loginStatuBox > a {
         color: azure;
         font-size: 12px;
     }
     .loginStatuBox > i {
         font-size: 24px;  
     }


     .aside-box i {
         margin: 0 6px;
     }

    .aside-box .el-menu li {
       background-color: rgb(197, 200, 206);
    }


</style>
