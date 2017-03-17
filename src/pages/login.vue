<template>
        <div>
            <img src="../../static/images/login_bg.png" class="logo_bg">
	        <!-- 侧边导航 -->
	        <left_nav></left_nav>
	        <div id="mask"></div>
	        <div class="all_box" id="mian_box">
	            <!-- 顶部导航 -->
	            <div id="header">
	                <div class="left_btn">
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                </div>
	               <div class="center">登录</div>
	            </div>
	            <div id="logo_box">
	                <img src="../../static/images/login_log.png" class="log_logo" />
	            </div>
	            <!-- 输入内容区域 -->
	            <ul id="input_area">
	                <li>
	                    <div class="title"><i class="user_logo"></i></div>
	                    <div class="content">
	                        <input id="username" type="text" placeholder="请输入您的用户名" />
	                    </div>
	                </li>
	                <li>
	                    <div class="title"><i class="pwd_logo"></i></div>
	                    <div class="content">
	                        <input id="password" type="password" placeholder="请输入您的密码" />
	                    </div>
	                </li>
	            </ul>
	            <!-- 按钮提示区域 -->
	            <div id="btn_box">
	                <div class="forgot">
	                    <a class="fl reg_btn" href="reg.html">点击注册</a>
	                    <a class="fr" href="get_pwd.html">忘记密码？</a>
	                </div>
	                <!-- <div class="tip">
	                    <i class="tip_icon"></i>
	                    <span class="tip_con">用户名或密码错误！</span>
	                </div> -->
	                <a href="index.html" id="login">登录</a>
	            </div>
	        </div>
        </div>
</template>
<script scoped>
	import left_nav from '../components/left_nav'

	export default{
	    components:{
	        left_nav
	    }
	}
</script>
<style scoped>
body{overflow: hidden;height:auto;}
#header .center{
	width: 4rem;
	line-height: 100%;
	font-family: "微软雅黑";
	font-size: 16px;
}
.logo_bg{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
}
.all_box{margin-bottom: 0;}
/*登录logo*/
#logo_box{
	width: 100%;
	height: 190px;
}
#logo_box .log_logo{
	display: block;
	width: 92px;
	height: 107px;
    margin: 60px auto;
}
/*输入内容区域*/
#input_area{
	width: 250px;
	overflow: hidden;
	margin: 0 auto;
}
#input_area li{
	width: 100%;
	height: 50px;
	line-height: 50px;
	float: left;
	border-bottom: 1px solid #c1c1c1;
	overflow: hidden;
	display: -moz-box; 
    display: -webkit-box; 
    display: box;
}
#input_area li .title{
	width: 30px;
}
#input_area li .title .user_logo{
	display: inline-block;
	width: 15px;
	height: 20px;
	margin:15px 7px;
	background:url(../../static/images/user_logo.png) no-repeat;
	background-size: 100% 100%;
}
#input_area li .title .pwd_logo{
	display: inline-block;
	width: 17px;
	height: 20px;
	margin:15px 7px;
	background:url(../../static/images/pwd_logo.png) no-repeat;
	background-size: 100% 100%;
}
#input_area li .content{
	-moz-box-flex: 1; 
    -webkit-box-flex: 1; 
    box-flex: 1;
}
#input_area .content input{
	height: 50px;
	border: none;
	background: none;
	outline: none;
	font-family: "微软雅黑";
	font-size: 14px;
	color: #545454;
	width: 100%;
}
/*按钮提示区域*/
#btn_box{
	margin: 0 0.425rem 0 0.425rem;
	overflow: hidden;
	position: relative;
}
#btn_box .forgot{
	padding-top: 14px;
	text-indent: 10px;
	overflow: hidden;
	width: 250px;
	margin: 0 auto;
}
#btn_box .forgot a{
    font-family: "微软雅黑";
	font-size: 14px;
	color: #dc3232;
}
#btn_box .forgot .reg_btn{
	color: #545454;
}
#btn_box .tip{
	padding-top: 10px;
}
#btn_box .tip_icon{
	display: inline-block;
    height: 14px;
    width: 14px;
    background: url(../../static/images/tip_icon.png) no-repeat;
    background-size: 100% 100%;
    vertical-align: -18%;
    margin-left: 10px;
}
#btn_box .tip_con{
	font-family: "微软雅黑";
	font-size: 14px;
	color: #dc3232;
}
#login{
	display: block;
	line-height: 40px;
	width: 85%;
	text-align: center;
	background-color:#dc3232;
	color: #fff;
	border-radius:4px; 
	font-family: "微软雅黑";
	font-size: 18px;
	margin: 28px auto;
}
</style>