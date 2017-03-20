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
               <div class="center">提现</div>
               <div class="right_btn">
                    <a href="javascript:history.go(-1)" id="back"><i class="go"></i>返回</a>
                </div>
            </div>
            <!-- 提现方式区域 -->
            <div id="withdrawals_away">
                <div class="left">
                    <img src="../../../static/images/bank1.png" />
                </div>
                <div class="center">
                    <div class="top">中国银行</div>
                    <div class="bottom">尾号7895借记卡</div>
                </div>
                <div class="right">
                    <i class="top_right"></i>
                </div>
            </div>
            <!-- 提现内容区域 -->
            <div id="withdrawals_con">
                <div class="title">提现金额</div>
                <div class="content">
                    <span class="title">￥</span>
                    <div class="input_box">
                        <input type="number" id="money" />
                    </div>
                </div>
                <div class="bottom">
                    <div class="left">可提现金额：9634.50元</div>
                    <div class="right">
                        <a href="javascript:;" data-id="9634.50" id="get_all">全部提现</a>
                    </div>
                </div>
            </div>
            <!-- 按钮区域 -->
            <div id="btn_box">
                <a href="javascript:;" id="sure">确认提现</a>
            </div>
        </div>
        <!-- 弹框区域 -->
        <div id="dialog">

        </div>
    </div>
</template>
<script>
    import left_nav from '../../components/common/left_nav'

    export default{
        components:{
            left_nav
        }
    }
    // $(function(){
    //     //全部提现
    //     $("#get_all").on("click",function(){
    //         $("#money").val($(this).attr("data-id"))
    //     })
    //     //mui 冲突解决
    //     $("#showUserPicker").on("click",function(){
    //         $("body").off("touchmove");
    //     })
    //     $("body").on("click",".mui-poppicker .mui-btn",function(){
    //         $("body").on("touchmove",touch)
    //     })
    // })
</script>
<style scoped>
    @import "../../css/withdrawals.css";
</style>
