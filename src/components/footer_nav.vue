<template>
    <div id="footer">
        <div v-bind:class="{ 'active' : flag == '首页'}" class="one_page">
            <router-link v-on:click="tap('首页')" to="/">
                <i class="one_page_icon"></i>
                <p class="font">首页</p>
            </router-link>
        </div>
        <div v-bind:class="{ 'active' : flag == '关于我们'}" class="about_our">
            <router-link v-on:click="tap('关于我们')" to="/about_our">
                <i class="about_our_icon"></i>
                <p class="font">关于我们</p>
            </router-link>
        </div>
        <div v-bind:class="{ 'active' : flag == '在线客服'}" class="chat_server">
            <router-link v-on:click="tap('在线客服')" to="/chat">
                <i class="chat_server_icon"></i>
                <p class="font">在线客服</p>
            </router-link>
        </div>
        <div v-bind:class="{ 'active' : flag == '个人中心'}" class="user_center">
            <router-link v-on:click="tap('个人中心')" to="/user">
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
                flag : '首页'
            }
        },
        created:function(){
            this.flag = this.$store.footer_flag
        },
    }
</script>