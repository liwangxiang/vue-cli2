$(function(){
	//性别选择
	$("#list").on("click",".boy,.girl",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	//mui冲突解决
    $("#demo2").on("click",function(){
        $("body").off("touchmove");
    })
    $("body").on("click",".mui-dtpicker .mui-btn",function(){
        $("body").on("touchmove",touch)
    })
})