import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const state = {
	footer_flag : '首页', //底部导航栏标识
	num:0
}
const mutations = {
	add: function(state){
		state.num++;
		console.log(state.num)
	}
}
export default new Vuex.Store({
	state,
	mutations
})