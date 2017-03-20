"use strict";
import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'

//创建vue实例
new Vue({
	el:"#app",
	store,
	router,
	watch: {
	  	// 监视路由，参数为要目标路由和当前页面的路由
	  	'$route' (to, from){
	  		switch(to.path){
	  			case '/' : store.state.footer_flag = '首页'; break;
	  			case '/about_our' : store.state.footer_flag = '关于我们'; break;
	  			case '/chat' : store.state.footer_flag = '在线客服'; break;
	  			case '/user' : store.state.footer_flag = '个人中心'; break;
	  			default : store.state.footer_flag = '首页'; break;
	  		}
	  		$(window).scrollTop(0);
	  	}
	}
}).$mount('#app');