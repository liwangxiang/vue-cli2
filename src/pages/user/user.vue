<template>
    <div>
        <page_loading v-if="loading_show"></page_loading>
        <!-- 侧边导航 -->
        <left_nav></left_nav>
        <div id="mask"></div>
        <div class="all_box" id="mian_box" v-on:click="add()">
            <!-- 顶部导航 -->
            <div id="header">
                <div class="left_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
               <div class="center">个人中心</div>
            </div>
            <!-- 用户信息 -->
            <div id="user_info">
                <div class="left">
                    <i class="user_icon"></i>
                    <span class="user_name" v-on:click.prevent="alertTip">我是谁</span>
                </div>
                <div class="right" >  <!-- 使用一般标签router.go()去跳转 -->
                    <a href="email.html" target = '_blank'>
                        <span class="money_num">站内信</span>
                        <span class="email_num">21</span>
                        <i class="email_icon"></i>
                    </a>
                </div>
            </div>
            <!-- 账户余额区域 -->
            <div id="yu_e">
                <p class="title">&nbsp;资金账户（元）</p>
                <p class="money">{{money}}</p>
                <img src="../../../static/images/user_bg.png" class="bottom_bg" />
            </div>
            <!-- ul li区域 -->
            <div id="list">
                <ul class="list1">
                    <li>
                        <router-link to='/user/recharge'>
                            <i class="recharge_icon"></i>
                            充值
                            <i class="top_right"></i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/withdrawals">
                            <i class="getMoney_icon"></i>
                            提现
                            <i class="top_right"></i>
                        </router-link>
                    </li>
                    <li><a href="account_transfer.html"><i class="zz_icon"></i>转账<i class="top_right"></i></a></li>
                </ul>
                <ul class="list2">
                    <li><a href="betting.html"><i class="tz_icon"></i>投注记录<i class="top_right"></i></a></li>
                    <li><a href="account_transfer_record.html"><i class="zzJ_icon"></i>转账记录<i class="top_right"></i></a></li>
                    <li><a href="transaction_record.html"><i class="jyJ_icon"></i>交易记录<i class="top_right"></i></a></li>
                </ul>
                <ul class="list3">
                    <li><a href="account_set.html"><i class="zh_set_icon"></i>账户设置<i class="top_right"></i></a></li>
                    <li><a href="safe_set.html"><i class="safe_set_icon"></i>安全设置<i class="top_right"></i></a></li>
                    <li><a href="login.html"><i class="out_icon"></i>退出登录<i class="top_right"></i></a></li>
                </ul>
            </div>
            <!-- 底部导航栏区域 -->
            <footer_nav></footer_nav>
            <!-- 弹窗区域 -->
            <tip_dialog 
                v-if="show_dialog" 
                v-on:closetip="show_dialog = false"
                v-bind:style_dialog = "style_dialog"></tip_dialog>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    import left_nav from '../../components/common/left_nav'
    import footer_nav from '../../components/common/footer_nav'
    import tip_dialog from '../../components/common/tip_dialog'
    import page_loading from '../../components/common/page_loading'

    export default{
        data(){
            return{
                footer_flag:'',   //底部导航栏标识
                loading_show:'',
                num:"",
                money:2368,
                show_dialog:false, //是否展示弹窗
                style_dialog:"success", //展示哪种弹窗
            }
        },
        beforeRouteEnter (to, from, next) {
             //ajax
             // next();
        },
        beforeRouteLeave (to, from, next) {
            //离开页面-->显示loading条
            this.loading_show = true;
            next();
        },
        components:{
            left_nav,
            footer_nav,
            tip_dialog,
            page_loading
        },
        mounted:function(){
            this.loading_show = false;   //加载完成-->隐藏loading条
        },
        methods:{
            ...mapMutations([
               // this.$store.commit('add');
               'add'
            ]),
            getdata:function(){
                this.money = '222222222221'

            },
            alertTip:function(event){
                this.show_dialog = true;
                // event.preventDefault();
            }
        }
    }
</script>
<style scoped>
    @import "../../css/user.css" ;
    .all_box{
        background: #fafafa;
    }
</style>
