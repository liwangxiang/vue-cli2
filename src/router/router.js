import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const app = r => require.ensure([], () => r(require('../app')), 'app')
const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const login = r => require.ensure([], () => r(require('../pages/login')), 'login')
const about_our = r => require.ensure([], () => r(require('../pages/about_our')), 'about_our')
const chat = r => require.ensure([], () => r(require('../pages/chat')), 'chat')
const user = r => require.ensure([], () => r(require('../pages/user/user')), 'user')
const recharge = r => require.ensure([], () => r(require('../pages/user/recharge')), 'recharge')
const withdrawals = r => require.ensure([], () => r(require('../pages/user/withdrawals')), 'withdrawals')



const router = new VueRouter({
	mode: 'hash',
	routes:[{
   	   path:"/",  //顶层路由对应index页面
   	   component: app,
   	   children: [
	   	   //地址为空时跳转home页面
		    {
		    	path:"",
		    	redirect:'/home'
		    },
   	       //首页
			{
		    	path:"/home",
		    	component: home,
		    	// beforeEnter: (to, from, next) => {
			    //    console.log("S");
			    //    next();
			    //   }
		    },
		    //登入页
		    {
		    	path:'/login',
		    	component: login
		    },
		    //关于我们
		    {
		    	path:'/about_our',
		    	component: about_our
		    },
		    //在线客服
		    {
		    	path:'/chat',
		    	component: chat
		    },
		    //用户中心
		    {
		    	path:'/user',
		    	component: user
		    },
		    //充值
		    {
		    	path:'/user/recharge',
		    	component: recharge
		    },
		    //提现
		    {
		    	path:'/user/withdrawals',
		    	component: withdrawals
		    },
		    //404页面
		    {
		    	path:"*",
		    	redirect:'/home'
		    }
   	    ]
    }]
});
// router.beforeEach((to, from, next) => {
//   // this.$store.commit('page_loading_start');
//   // console.log(this)
//   next();
// });
// router.afterEach(route => {
//   // this.$store.commit('page_loading_end');
// });
export default  router;