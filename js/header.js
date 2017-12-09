//login
$('header li').eq(0).click(function(){
	window.open('login.html');
})
//register
$('header li').eq(1).click(function(){
	window.open('register.html');
})
//app
$('header li').eq(3).hover(function(){
	$('header li div').slideDown();
},function(){
	$('header li div').slideUp();
})
//nav
$('nav li').eq(0).nextAll().click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.wrap').fadeOut(500);
	$('.brand-ware').fadeIn(500);
})
$('nav li').eq(0).click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.wrap').fadeIn(500);
	$('.brand-ware').fadeOut(500);
})