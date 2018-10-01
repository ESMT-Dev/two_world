$(window).scroll(function(){
	var st = $(this).scrollTop();
	$(".parText").css({
		"transform":"translate(0%, -"+ st/40  + "%"
	})
	});

$(window).scroll(function(){
	var st = $(this).scrollTop();
	$(".polygon, .polygon_tree").css({
		"transform":"translate(0%, -"+ st/20  + "%"
	})
	});