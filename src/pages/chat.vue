<template>
    <div>
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
               <div class="center">在线客服</div>
               <div class="right_btn">
                    <a href="javascript:history.go(-1)" id="back"><i class="go"></i>返回</a>
                </div>
            </div>
            <!-- 聊天内容区域 -->
            <div id="wrapper">
                <div id="user_info">
                    <ul>
                        <li>
                            <div class="left fl">
                                <div class="pho_box"><img class="user_ph/images/official.png" />
                                </div>
                                <!-- <div class="nick_name">客服名称</div> -->
                            </div>
                            <div class="right fl other">
                                <p>你说了什么啊啊，我也不知道</p>
                            </div>
                        </li>
                        <li>
                            <div class="left fr">
                                <div class="pho_box">
                                    <img class="user_ph/images/official.png" />
                                </div>
                            </div>
                            <div class="right fr my">
                                <p>我了什么啊啊，我也不知道</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 输入input -->
            <div id="send_box">
                <div class="send_pho_box" style="display:none">
                  <form id="imageform">
                      <a class="send_pho" href="javascript:;"></a>
                      <input type="file" name="photo" accept="image/png,image/gif,image/jpg,image/jpeg" id="change_pho_btn"/>
                  </form>
                </div>
                <div class="send_input">
                  <textarea type="text" class="send_con" placeholder="说点什么吧..."></textarea>
                </div>
                <div class="send_btn_box"><a class="send_btn" href="javascript:;">发送</a></div>
            </div>
        </div>
    </div>
</template>
<script>
    import left_nav from "../components/common/left_nav";

    export default{
        components:{
            left_nav
        },
        methods:{

        },
        mounted:function(){
            
            this.$nextTick(function(){

            })
            
        }
    }
</script>
<style scoped>
   body{
    background-color: #fafafa;
}
#header .center{
    width: 4rem;
    line-height: 100%;
    font-family: "微软雅黑";
    font-size: 16px;
}
#mian_box{
    overflow: hidden;
}
/*顶部title区域*/
#top{
    width: 10rem;
    height: 38px;
    font-size: 0.56rem;
    color: #fff;
    line-height: 38px;
    font-family: "Microsoft YaHei";
    text-align: center;
    position: fixed;
    top: 0;
    background-color: #36634d;
}
#top .title{

}
#top .go_back{
    width: 9px;
    height: 15px;
    position: absolute;
    top: 11px;
    left:20px;
}
#top .submit_btn{
    color: #fff;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    position: absolute;
    top: 5px;
    right:20px;
}
/*聊天内容区域*/
#user_info{
    height: auto;
    background: none;
}
#wrapper{

    overflow: hidden;
}
#user_info li{
    width: 10rem;
    overflow: hidden;
    margin-bottom: 8px;
}
#user_info li .left{
    width: 70px;
    overflow: hidden;
}
#user_info li .right{
    margin-top: 20px;
    width: 7.28rem;
    background: #fff;
    border: 1px solid #e2e2e2;
    letter-spacing: 0.5px;
    position: relative;
}
#user_info li .other:before{
    content: "";
    width: 6px;
    height: 14px;
    position: absolute;
    left: -6px;
    top: 10px;
    background: url(../../static/images/liao_left.png) no-repeat;
    background-size: 100% 100%;
}
#user_info li .my:before{
    content: "";
    width: 6px;
    height: 14px;
    position: absolute;
    right: -6px;
    top: 10px;
    background: url(../../static/images/liao_right.png) no-repeat;
    background-size: 100% 100%;
}
#user_info .left .pho_box{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px #eaeaea solid;
    margin: 13px auto 0;
}
#user_info .left .pho_box .user_pho{
    width: 44px;
    height: 44px;
}
#user_info .left .nick_name{
    width: 100%;
    text-align: center;
    color: #434343;
    font-size: 12px;
    font-family: "Microsoft YaHei";
}
#user_info li .right p{
    color: #292929;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    line-height: 16px;
    padding: 8px 5px 8px 5px;
    min-height: 16px;
}
/*发表评论input*/
#send_box{
    width: 10rem;
    margin: 0 auto;
    height: 35px;
    position: fixed;
    left: 50%;
    bottom: 0;
    margin-left: -5rem;
    background-color: #fefefe;
    border-top:1px solid #c1c1c1;
    display: -moz-box; 
    display: -webkit-box; 
    display: box;
}
#send_box .send_pho_box{
    width: 38px;
    height: 100%;
    position: relative;
}
#send_box .send_pho_box .send_pho{
    display: block;
    width: 28px;
    height: 22px;
    /*background: url(../../static/imgages/send_pho_icon.png) no-repeat;*/
    background-size: 100% 100%;
    margin:5px auto 0;
}
#change_pho_btn{
    display: block;
    width: 28px;
    height: 22px;
    margin:5px auto 0;
    position: absolute;
    top: 5px;
    left: 5px;
    opacity: 0;
}
#send_box .send_input{
    box-flex: 1;
    -moz-box-flex: 1; 
    -webkit-box-flex: 1; 
    
}
#send_box .send_con{
    width: 97%;
    height: 20px;
    line-height: 20px;
    border: 1px solid #c1c1c1;
    outline: none;
    border-radius: 3px;
    background-color: #fff;
    text-indent: 10px;
    color:#292929;
    font-family: "微软雅黑";
    margin-top: 5px;
    resize:none;
    margin-left: 1%;
    font-size: 12px;
}
#send_box .send_btn_box{
    width: 56px;
    height: 100%;
}
#send_box .send_btn_box .send_btn{
    display: inline-block;
    border-radius: 3px;
    width: 50px;
    height: 25px;
    line-height: 26px;
    background-color: #dc3232;
    color: #fff;
    text-align: center;
    margin: 5px 3px 0;
    font-family: "微软雅黑";
    font-size: 14px;
}
</style>