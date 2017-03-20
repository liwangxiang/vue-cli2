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
               <div class="center">关于我们</div>
            </div>
            <!-- 内容区域 -->
            <div id="content">
                <h2>我们承诺</h2>

                <h3>公平诚信</h3>
                <div class="box">Allin娱乐作为国际知名的线上博彩营运商，获得GEOTRUST国际认证，确保网站公平公正，对接入的所有平台均经过严格的筛选，只选用国际知名线上博彩平台。保证让每位玩家在一个公平、公正的环境下进行游戏。同时菲律宾政府First Cagayan leisure and Resort Corporation会对游戏平台的数据进行监控最终确保游戏的公平性和真实性。</div>

                <h3>信息安全隐私</h3>
                <div class="box">在日渐热络、成熟的网络博彩市场中，除了多样化的游戏外，网络安全最为客户注重，Allin娱乐针对现阶段网络安全问题，成立了网络安全维护中心，彻底解决了网络安全的后顾之忧，诺顿分级评级核Allin娱乐为最安全网站之一；会员网上支付和银行交易由国际金融机构在高标准的安全和机密的网络中进行。所有会员数据均经过加密，保障玩家隐私。我们不会向任何第三方包括政府透露客户任何的个人信息及资料。</div>

                <h3>高效存提现</h3>
                <div class="box">Allin娱乐全天候不打烊，不断注重用户体验，高效快速的存提现业务是用户最实在的体验，Allin娱乐一直致力于开发最新的收支业务和人员培训，高效的存提现，保证5分钟存提款到账，全天候处理客户出入款相关事宜。</div>

                <h3>精英客服团队</h3>
                <div class="box">Allin娱乐严格训练的客服团队，以专业、亲切的态度，尽速解决您于网站、游戏中遇到的种种问题，全天候24小时为您提供专业、贴心的VIP服务，努力让客户皆有宾至如归的感觉。Allin娱乐以业界前所未见的各种优惠方式回馈客户，绝对是您明智的选择！</div>

                <h2>十大放心理由</h2>

                <h3>平台足够权威</h3>
                <div class="box">Allin娱乐与BBIN,AG,MG,OG,ALLBET,3S,PT,HB进行技术合作，并获得GEOTRUST国际认证，确保网站公平、公正、公开。</div>

                <h3>排名足够靠前</h3>
                <div class="box">Allin娱乐为亚洲最具公信力品牌之一，信誉领先排名，在海量娱乐城信息中独占前茅。</div>

                <h3>资金足够安全</h3>
                <div class="box">Allin娱乐雄厚的资金链信誉良好，大额充值无忧，资金安全有保障，免去您一切后顾之忧。</div>

                <h3>提现足够自由</h3>
                <div class="box">Allin娱乐24小时自由提现，提现3-5分钟火速到帐。</div>

                <h3>活动足够给力</h3>
                <div class="box">Allin娱乐时时推出各项给力活动，优惠送不停，让您真正赚翻天。</div>

                <h3>安全足够保障</h3>
                <div class="box">Allin娱乐采用128位SSL加密技术和严格的安全管理体系，确保客户资料安全得到最完善的保障。</div>

                <h3>服务足够贴心</h3>
                <div class="box">Allin娱乐7X24小时客服贴心的服务，温馨的呵护每一位玩家。</div>

                <h3>VIP足够至尊</h3>
                <div class="box">Allin娱乐VIP尊享贵宾级的专属服务让您享有宾至如归般的帝王享受。</div>

                <h3>操作足够简单</h3>
                <div class="box">Allin娱乐秉承以客户为中心的宗旨，在开发之初就设计了诸多人性化的功能和特性，省去繁琐的麻烦，让您轻松操作。</div>

                <h3>营业足够合法</h3>
                <div class="box">Allin娱乐是菲律宾政府认证的大型合法互联网博彩公司。选择Allin，等于选择一份信誉的保障。</div>


            </div>
            <!-- 底部导航栏区域 -->
            <footer_nav></footer_nav>
        </div>
    </div>
</template>
<script>
    import left_nav from '../components/common/left_nav'
    import footer_nav from '../components/common/footer_nav'

    export default{
	    components:{
	        left_nav,
            footer_nav
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
/*内容区域*/
#content{
	margin: 0 15px 0 15px;
}
#content h2{
	text-align: center;
	color: #dc3232;
	font-size: 16px;
	font-family: "Microsoft YaHei";
	line-height: 40px;
}
#content h2:nth-child(1){
	margin-top: 15px;
	line-height: 25px;
}
#content h3{
	text-align: left;
	color: #545454;
	font-size: 16px;
	font-family: "Microsoft YaHei";
	line-height: 34px;
}
#content .box{
	color: #808080;
	font-size: 14px;
	font-family: "Microsoft YaHei";
	line-height: 22px;
}
</style>