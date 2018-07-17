$(function(){
	// 捲動瀏覽器畫面
	$(window).scroll(function(){
		// 設定功能表的新顯示位置
		$("nav").stop().animate({"top" : $(window).scrollTop() + 100}, 500);
	});
});