;(function(){
    // 设置fontsize
	$(window).on("resize",function resize(){
		if($(window).width()>=550){
			$("html").css({"font-size":550/10});
		}else{
			$("html").css({"font-size":$(window).width()/10});
		}
	})
	$(window).trigger('resize');
})()
$(function(){
	// <!-- 公告区域 -->
	function silder($html){
		$html.css({ '-webkit-transform':'translate3d(0,-1.36rem,0)',
							'transform':'translate3d(0,-1.36rem,0)',
						'-webkit-transition':'500ms linear',
						'transition':'500ms linear'});
		setTimeout(function(){
			$html.css({'-webkit-transform':'translate3d(0,0rem,0)',
							'transform':'translate3d(0,0rem,0)',
						'-webkit-transition':'0ms linear',
						'transition':'0ms linear'}).find(".ad").eq(0).appendTo($html);
		},500);
	}
	setInterval(function(){
		var $html=$("#demo");
		silder($html)
	},2500);

    $("body").on("click",'#header .left_btn',function(){
    	$("#left_nav,#mask").addClass("in");
    })
	//向左滑动
	
	window.touch=function(){
		if (event.targetTouches.length == 1) {
			var touch = event.targetTouches[0];
			var spanX = touch.pageX - pressX;
			var spanY = touch.pageY - pressY;
			if (Math.abs(spanX) > Math.abs(spanY)*2) {
				spanX > 0?to_right():to_left();
				return false;
			}
		};
	}
	$("body").on("touchmove",touch)
	function to_right(){
		$("#left_nav,#mask").addClass("in");
		$("#mian_box").css({"position":"fixed","margin-top":-$("body").scrollTop()});
	}
	function to_left(){
		var obj = $("#mian_box");
		var _top = $("body").scrollTop()||-parseInt(obj.css('margin-top'));
		$("#left_nav,#mask").removeClass("in");
		obj.css({"position":"inherit","margin-top":0});
		$("body").scrollTop(_top);
	}
	var pressX;
	var pressY;
	$("body").on('touchstart', function(e) {
		if (event.targetTouches.length == 1) {
			// 如果这个元素的位置内只有一个手指的话
			var touch = event.targetTouches[0];
			// 把元素放在手指所在的位置
			pressX = touch.pageX;
			pressY = touch.pageY;
		}
	});
	// $("#left_nav").on("touchmove",function(){
	// 	if($("#left_nav").scrollTop()<=1){
	// 		$(this).css({"overflow":"inherit"})
	// 	}
	// })
	
})