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
	            <img src="../../static/images/index_logo.png" class="center" />
	            <div class="right_btn">
	                <a href="login.html" id="loggin">登录</a>
	                <a href="reg.html" id="reg">注册</a>
	            </div>
	        </div>
	        <!-- 用户信息 -->
	        <div id="user_info">
	            <div class="left">
	                <i class="user_icon"></i>
	                <span class="user_name">我是谁</span>
	            </div>
	            <div class="right">
	                <span class="money_num">￥{{money}}</span>
	                <i class="money_icon"></i>
	            </div>
	        </div>
	        <!-- 轮播图binner -->
	        <div id="lunbo_box">
	            <div class="swiper-container">
	                <div class="swiper-wrapper">
	                    <div class="swiper-slide"><img src="../../static/images/banner1.png"></div>
	                    <div class="swiper-slide"><img src="../../static/images/banner2.png"></div>
	                    <div class="swiper-slide"><img src="../../static/images/banner3.png"></div>
	                    <div class="swiper-slide"><img src="../../static/images/banner4.png"></div>
	                </div>
	                <!-- Add Pagination -->
	                <div class="swiper-pagination"></div>
	            </div>
	        </div>
	        <!-- 公告区域 -->
	        <div id="gongao">
	            <img src="../../static/images/gongao_icon.png" class="gongao_icon" />
	            <div id="demo">
	                <div class="ad" onclick="window.location.href='/message/index'">
	                    <span class="ad_board">公告</span>&nbsp;
	                    <span>游**b</span>&nbsp;是 <!--{{timediff}}前-->
	                </div><div class="ad" onclick="window.location.href='/message/index'">
	                    <span class="ad_board">公告</span>&nbsp;
	                    <span>游**3</span>&nbsp;4 <!--{{timediff}}前-->
	                </div>
	            </div>
	        </div>
	        <!-- 游戏列表区域 -->
	        <div id="game_list">
	            <ul>
	                <li>
	                    <a href="game.html">
	                        <img src="../../static/images/li_1.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">电子游艺</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="entertainment.html">
	                        <img src="../../static/images/li_2.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">真人娱乐</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="sport_match.html">
	                        <img src="../../static/images/li_3.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">体育赛事</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="lottery_game.html">
	                        <img src="../../static/images/li_4.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">彩票游戏</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <img src="../../static/images/li_5.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">MG老虎机</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <img src="../../static/images/li_6.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">捕鱼天下</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <img src="../../static/images/li_7.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">德州扑克</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <img src="../../static/images/li_8.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">PT老虎机</div>
	                    </a>
	                </li>
	                <li>
	                    <a href="discount.html">
	                        <img src="../../static/images/li_9.png" />
	                        <div class="li_bg"></div>
	                        <div class="text">优惠中心</div>
	                    </a>
	                </li>
	            </ul>
	        </div>
	        <!-- 底部导航栏区域 -->
            <footer_nav></footer_nav>
	    </div>
    </div>
</template>
<script>
        
        import '../../static/js/swiper.min.js'
	    import left_nav from '../components/left_nav'
	    import footer_nav from '../components/footer_nav'

		export default{
			data (){
				return {
					money:"12121212"
				}
			},
		    components:{
		        left_nav,
		        footer_nav
		    },
		 //    beforeRouteEnter (to, from, next) {
			   
			//    next();
			// },
			created () {

	           this.getdata()
	        },
	        watch:{
            '$route': 'getdata'
        },
		    mounted:function(){
		    	
                $(".swiper-container").css({"width":$(window).width()})
				var swiper = new Swiper('.swiper-container', {
						        pagination: '.swiper-pagination',
						        paginationClickable: true,
						        loop:true,
						        autoplay: 2500,
						        autoplayDisableOnInteraction: false
						    });
		    },
		    methods:{
		    	getdata:function(){
		    		this.money = "222222222";
		             this.$nextTick(function () {
		                // $(window).off("scroll")
		                // alert("home")
		              })
		    	}
		    },
	        destroyed(){
	           // $(window).scrollTop(0)
	        }
		}

</script>
<style scoped>
    @import '../../static/css/swiper.min.css';
    body{background-color: #fafafa;}
    #user_info{
       overflow:hidden;
        background-color: #c52020;
    }
	/*<!-- 游戏列表区域 -->*/
	#game_list{
		padding: 0 0.139rem 0 0.139rem;
		overflow: hidden;
		background-color: #fafafa;
		margin-bottom: 60px;
	}
	#game_list ul{
		overflow: hidden;
		margin-top: 10px;
	}
	#game_list li{
		position: relative;
	    margin-left: 0.324rem;
	    margin-top: 10px;
	    width: 2.78rem;
	    height: 2.5rem;
	    /*overflow: hidden;*/
	    float: left;
	    
	}
	#game_list li .li_bg{
		position: absolute;
		top: 0;
		left: 0;
		width: 2.78rem;
	    height: 1.85rem;
	    background: url(../../static/images/li_bg.png) no-repeat;
		background-size: 100% 100%;
	}
	#game_list li img{
		width: 98%;
		height: 1.8rem;
		margin-left:1.5%;
		margin-top:2%;
	}
	#game_list li .text{
		text-align: center;
		font-family: "微软雅黑";
		color: #545454;
		font-size: 12px;
	}
</style>