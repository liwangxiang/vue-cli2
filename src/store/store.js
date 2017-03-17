import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const state = {
	footer_flag : '首页', //底部导航栏标识
	num:0
}
const mutations = {
	// page_loading_start:function(state){
	// 	state.page_loading_flag = true;
	// },
	// page_loading_end:function(state){
	// 	state.page_loading_flag = false;
	// },
	add: function(state){
		state.num++;
		console.log(state.num)
	}
}
const actions = {
	// page_loading_start:function(context){
	// 	context.commit('page_loading_start');
	// },
	// page_loading_end:function(context){
	// 	context.commit('page_loading_end');
	// }
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})