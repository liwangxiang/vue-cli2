<template>
	<div>
        <div class="ok" v-if="style_dialog == 'success'">
            <div class="content">
                <div v-on:click="close" class="close">x</div>
                <div>成功啦，你真帅！</div>
            </div>
        </div>
        <div class="ok" v-if="style_dialog == 'error'">
            <div class="content">
                <div v-on:click="close" class="close">x</div>
                <div>报错了，怎么办，快跑路吧！</div>
            </div>
        </div>   
    </div>
</template>
<script>
	export default{
        props:['style_dialog'],
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