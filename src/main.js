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
	  		if(to.path == '/'){
	  			store.state.footer_flag = '首页'
	  		}else if(to.path == '/about_our'){
	  			store.state.footer_flag = '关于我们'
	  		}else if(to.path == '/chat'){
	  			store.state.footer_flag = '在线客服'
	  		}else if(to.path == '/user'){
	  			store.state.footer_flag = '个人中心'
	  		}else{
	  			store.state.footer_flag = '首页'
	  		}
	  		$(window).scrollTop(0);
	  	}
	}
}).$mount('#app');