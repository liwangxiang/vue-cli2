<template>
    <div id="footer">
        <div v-bind:class="{ 'active':flag == '首页'}" class="one_page">
            <router-link to="/">
                <i class="one_page_icon"></i>
                <p class="font">首页</p>
            </router-link>
        </div>
        <div v-bind:class="{ 'active':flag == '关于我们'}" class="about_our">
            <router-link to="/about_our">
                <i class="about_our_icon"></i>
                <p class="font">关于我们</p>
            </router-link>
        </div>
        <div v-bind:class="{ 'active':flag == '在线客服'}" class="chat_server">
            <router-link to="/chat">
                <i class="chat_server_icon"></i>
                <p class="font">在线客服</p>
            </router-link>
        </div>
        <div v-bind:class="{ 'active':flag == '个人中心'}" class="user_center">
            <router-link to="/user">
                <i class="user_icon"></i>
                <p class="font">个人中心</p>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                flag :'',
            }
        },
        created:function(){
            this.flag = this.$store.state.footer_flag;
        }
    }
</script>
<style scoped>
    #footer>div{
        position: relative;
        overflow: hidden;
    }
    #footer .mask{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.6);
        border-radius: 50%;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    #footer .mask.in{
        -webkit-animation: acrive 0.3s;
        animation: acrive 0.3s;
        -webkit-animation-fill-mode:forwards;
        animation-fill-mode:forwards;
    }
    @-webkit-keyframes acrive{
        from { 
            -webkit-transform: scale(0);
            transform: scale(0); 
            border-radius: 50%;
        }
        to { 
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            border-radius: 0%;
        }
    }
    @keyframes acrive{
        0% { 
            -webkit-transform: scale(0);
            transform: scale(0); 
            border-radius: 50%;
        }
        50% { 
            -webkit-transform: scale(0.6);
            transform: scale(0.6); 
            border-radius: 50%;
        }
        100% { 
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            border-radius: 0%;
        }
    }
</style>