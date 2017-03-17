<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>

	export default{
  
	}
</script>
<style scoped>
      /* 跳转页面动画 */
      .slide-enter,
      .slide_back-enter {
        position: absolute;
        width: 100%;
      }
      .slide-leave,
      .slide_back-leave {
        position: absolute;
        width: 100%;
      }
      .slide-enter-active,
      .slide_back-enter-active {
        transition: all 0.3s linear;
      }
      .slide-leave-active {
        position: absolute;
        transition: all 0.3s linear;
        transform: translate(-100%);
      }
      .slide-enter{
        transform: translateX(100%);
      }
      .slide_back-leave-active {
        position: absolute;
        transition: all 0.3s linear;
        transform: translate(100%);
      }
      .slide_back-enter {
        transform: translateX(-100%);
      }
      .fade-enter-active,.fade-leave-active{
          /*transition:opacity .3s;*/
          position: absolute;
          top: 0;
          display: block;
      }
      .fade-leave-to,.fade-enter{
        /*opacity:0;*/
        display: none;
      }
      /*html,body{
        width: 100%;
        height: 100%;
      }
      #app{
            width: 100%;
    height: 100%;
    overflow-y: scroll;
      }*/
</style>