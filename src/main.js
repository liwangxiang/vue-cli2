// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
"use strict";
import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'


// import home from './pages/home'
// import detail from './pages/detail'



//创建路由实例
// const router = new VueRouter({
// 	hash:'false',
// 	routes:[
// 		{
// 	    	path:"/",
// 	    	component:home
// 	    },
// 	    {
// 	    	path:'/detail',
// 	    	component:detail
// 	    }
// 	]
// });

//创建vue实例
new Vue({
	el:"#app",
	router,
	store,
	watch: {
	  	// 监视路由，参数为要目标路由和当前页面的路由
	  	'$route' (to, from){
	  		if(to.path == '/'){
	  			store.footer_flag = '首页'
	  		}else if(to.path == '/about_our'){
	  			store.footer_flag = '关于我们'
	  		}else if(to.path == '/chat'){
	  			store.footer_flag = '在线客服'
	  		}else if(to.path == '/user'){
	  			store.footer_flag = '个人中心'
	  		}else{
	  			store.footer_flag = '首页'
	  		}
	  	}
	  	// '$route' (to, from){
	  	// 	const toDepth = to.path.substring(0, to.path.length-2).split('/').length
	  	// 	// 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
	  	// 	// 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
	  	// 	// 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
	  	// 	const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
	  	// 	this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
	  	// 	// 根据路由深度，来判断是该从右侧进入还是该从左侧进入
	  	// }
	}
}).$mount('#app');