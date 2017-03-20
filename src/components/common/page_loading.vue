<template>
	<div id="page_loading">
		<span class="mask" v-bind:class="{'in':loading_show == true }"></span>
	</div>
</template>
<script>

	export default{
		props:['loading_show']
		// created:{  
		// 	console.log(loading_show)
		// }
	}
</script>
<style>
	#page_loading{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: rgba(255,255,255,0.6);
		z-index: 2000;
		border-radius: 5px;
	}
	#page_loading>.mask{
		display: block;
		height: 100%;
		width: 0%;
		background: #8DD35F;
		-webkit-transition: all 2s;
		transition: all 2s;
	}
	#page_loading>.mask.in{
		width: 100%;
	}
</style>