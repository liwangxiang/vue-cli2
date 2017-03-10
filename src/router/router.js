import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const login = r => require.ensure([], () => r(require('../pages/login')), 'login')
const about_our = r => require.ensure([], () => r(require('../pages/about_our')), 'about_our')
const chat = r => require.ensure([], () => r(require('../pages/chat')), 'chat')
const user = r => require.ensure([], () => r(require('../pages/user/user')), 'user')
const recharge = r => require.ensure([], () => r(require('../pages/user/recharge')), 'recharge')
const withdrawals = r => require.ensure([], () => r(require('../pages/user/withdrawals')), 'withdrawals')



export default new VueRouter({
	hash:'false',
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	},
	routes:[
	    //地址为空时跳转home页面
	    {
	    	path:"",
	    	redirect:'/home'
	    },
	    //首页
		{
	    	path:"/home",
	    	component: home
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
});