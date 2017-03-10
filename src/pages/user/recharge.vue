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
                <div class="center">充值</div>
                <div class="right_btn">
                    <a href="javascript:history.go(-1)" id="back"><i class="go"></i>返回</a>
                </div>
            </div>
            <!-- 充值金额区域 -->
            <div id="pay_money">
                <div class="pay_con">
                    <div class="title">充值金额</div>
                    <div class="content"><input id="pay_num" type="number" placeholder="请输入您要充值的金额"></div>
                </div>
                <div class="pay_btn">
                    <span data-id="50" class="active">50元</span>
                    <span data-id="100">100元</span>
                    <span data-id="500">500元</span>
                    <span data-id="1000">1000元</span>
                </div>
                <div class="pay_title">支付方式</div>
            </div>
            <!-- 充值方式区域 -->
            <div id="pay_away">
               <div class="weixin">
                   <div class="away_logo"><i class="weixin_logo"></i></div>
                   <div class="content">
                       <p class="pay_name">微信支付</p>
                   </div>
                   <div class="right"><i data-id="weixin" class="select ok"></i></div>
               </div>
               <div class="alipay">
                   <div class="away_logo"><i class="alipay_logo"></i></div>
                   <div class="content">
                       <p class="pay_name">支付宝支付</p>
                   </div>
                   <div class="right"><i data-id="alipay" class="select no"></i></div>
               </div>
               <div class="bank_card">
                   <div class="away_logo"><i class="bank_card_logo"></i></div>
                   <div class="content">
                       <p class="pay_name">银行卡支付</p>
                   </div>
                   <div class="right"><i class="select no"></i></div>
               </div>
            </div>
            <!-- 按钮区域 -->
            <div id="btn_area">
                <a id="next_step" href="javascript:;">确认充值</a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import left_nav from '../../components/left_nav'

    export default{
        components:{
            left_nav
        }
    }
    // ;(function(){
    //     // 支付金额
    //     $("#pay_num").on("input propertychange",function(){
    //         var _val=$(this).val();
    //     })
    //     $("#pay_money .pay_btn").find("span").on("click",function(){
    //         var _val=$(this).attr("data-id");
    //         $(this).addClass("active").siblings().removeClass("active");
    //         $("#pay_num").val(_val);
    //     })
    //     // 支付方式
    //     $("#pay_away>div").on("click",function(){
    //         $("#pay_away").find(".select").removeClass("ok").addClass("no");
    //         $(this).find(".select").removeClass("no").addClass("ok");
    //     })
    //     //确定充值
    //     $("#next_step").on("click",function(){
    //         var pay_away = $("#pay_away").find(".select.ok").attr("data-id");
    //         var pay_money=$("#pay_num").val();
    //         if(pay_money!=""){
    //             $.ajax({
    //                 url:"/user/recharge/do",
    //                 type:"post",
    //                 data:{
    //                   "pay_type":pay_away,
    //                   "amount":pay_money
    //                 },
    //                 dataType:"json",
    //                 success:function(data){
    //                     if(data.code == '200'){
    //                         window.location.href = data.info.url;
    //                     }else{
    //                         alert(data.msg)
    //                     }
    //                 }
    //             })
    //         }
    //     })
    // })()
</script>
<style scoped>
    @import "../../../static/css/recharge.css";
</style>

