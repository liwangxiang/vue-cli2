<template>
	<div class="ok">
		<div class="content">
			<div v-on:click="close" class="close">x</div>
            <div>我是一个内容</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			close:function(){
				this.$emit('closetip')
			}
		}
	}
</script>
<style scoped>
    .ok{
    	position: fixed;
    	top: 0;
    	bottom: 0;
    	left:0;
    	right: 0;
    	background:rgba(0,0,0,0.6); 
    }
    .content{
    	width: 200px;
    	height: 200px;
    	position: absolute;
    	left: 50%;
    	right: 50%;
    	background-color: #fff;
    	border-radius: 5px;
    	-webkit-transform: translate(-50%, 50%);
        transform: translate(-50%, 50%);
    }
    .close{
        position: absolute;
        top: 5px;
        right: 5px;
        width: 10px;
        line-height: 10px;
        border-radius: 50%;
    }
</style>