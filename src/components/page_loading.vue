<template>
	<div id="page_loading">
		<span class="mask"></span>
	</div>
</template>
<script>
	export default{
		
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
	}
</style>