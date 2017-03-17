$(function(){
    //标记为已读
    $("#list").on("click",".sign",function(event){
        var val = $(this).parent().attr("data-id");
        event.preventDefault(); 
    })
    //删除
    $("#list").on("click",".del",function(event){
        var val = $(this).parent().attr("data-id");
        event.preventDefault(); 
    })
    var slider_flag;
    //向左滑动
    $("#list").on("touchmove","li",function(e){
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            var spanX = touch.pageX - pressX;
            var spanY = touch.pageY - pressY;
            if (Math.abs(spanX) > Math.abs(spanY)*2&&slider_flag==true) {
                spanX > 0?to_right($(this)):to_left($(this));
                slider_flag = false;
            }
        };
    })
    function to_right(obj){
        if(obj.hasClass("in")){
            obj.removeClass("in");
            $("body").off("touchmove")
        }
    }
    function to_left(obj){
        obj.addClass("in");
    }
    var pressX;
    var pressY;
    $("#list li").on('touchstart', function(e) {
        if (event.targetTouches.length == 1) {
            // 如果这个元素的位置内只有一个手指的话
            var touch = event.targetTouches[0];
            // 把元素放在手指所在的位置
            pressX = touch.pageX;
            pressY = touch.pageY;
            slider_flag = true;
        }
    });
    $("#list li").on("touchend",function(e){
        $("body").on("touchmove",touch)
        slider_flag = true;
    })
})