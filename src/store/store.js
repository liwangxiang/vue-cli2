import Vue from 'vue'
Vue.use(Vuex)

const state = {
	footer_flag : '首页',
	num:0
}
const mutations = {
	add: function(state){
		state.num++
	}
}
export default new Vuex.Store({
	state,
	mutations
})