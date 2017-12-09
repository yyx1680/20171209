
//轮播
var timer = null;
var num = 0;
var cloneli = $('.imgBox img').eq(0).clone();
$('.imgBox').append(cloneli);
$('.move').hover(function(){clearInterval(timer)
},function(){
	clearInterval(timer);
	timer = setInterval(remove,3000);
})
//定时器
timer = setInterval(remove,3000);
function remove(){
	num++;
	if(num>$('.move img').length-1){num = 1;$('.move .imgBox').css('left',0)};
	if(num>$('.move ul li').length-1){
		$('.move ul li').eq(0).addClass('active').siblings().removeClass('active');
	}
	$('.move ul li').eq(num).addClass('active').siblings().removeClass('active');
	$('.move .imgBox').stop().animate({'left':num*-1500},500);
}
//tab
$('.move ul li').mouseover(tab);
function tab(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.move .imgBox').stop().animate({'left':($(this).index())*-1500});
	num = $(this).index();
}
//next
$('.next').click(remove);
//previous
$('.previous').click(function(){
	num--;
	if(num<0){
		num = $('.move ul li').length-1;
		$('.move .imgBox').css('left',(num+1)*(-1500));
	}
	$('.move .imgBox').stop().animate({'left':num*-1500},500);
	$('.move ul li').eq(num).addClass('active').siblings().removeClass('active');
})
//$('.ware li').hover(function(){
//	$('.ware li .hov').eq($(this).index()).slideDown();
//},function(){
//	$('.ware li .hov').eq($(this).index()).slideUp();
//})

$('.ware li div img').click(function(){
	location.href = 'DatPage.html?id=15627509375'+"&"+$(this).parent().parent().index();
})

if(location.search!=""){
	var log = location.search.split('?')[1].split("=")[1];
	$('header ul li').eq(1).remove();
	$('header ul li').eq(0).html(log);
}

$('header ul .mycay').click(function(){
	location.href = 'tobycay.html?id=15627509375';
})
var cayspan = 0;window.localStorage.removeItem('id')

//var offset = $('.sidebar .cay span').offset();

$('.ware li .hov .addcay').click(function(){
//	var flyer = $('.sidebar .cay span').clone();
//	flyer.fly({
//		start:{
//			left : event.pageX-6,
//			top : event.pageY-6
//		},
//		end:{
//			left : offset.left+6,
//			top : offset.top+6,
//			width:0,
//			height:0
//		},
//		onEnd:function(){
//			$('.sidebar .cay span').css('background','#991111')
			var par = $(this).parent().parent().index();
			console.log($('.ware li .hov .addcay').length);
			cayspan++;
			window.localStorage.setItem('id',par);
			$('.sidebar .cay span').show(100).html(cayspan);
//		}
//	})
	
})

$('.sidebar .cay').click(function(){
	location.href = 'tobycay.html?id=15627509375';
})

$.ajax({
	type:"get",
	url:"file/main.json",
	async:true,
	dataType:"json",
	data:{},
	success:function(res){
		for(i=0;i<$('.ware li').length;i++){
			$('.ware li').eq(i).find('img').attr('src',res[i]['src']);
			$('.ware li').eq(i).find('.title').html(res[i]['title']);
			$('.ware li').eq(i).find('.pic').html(res[i]['picher']);
//			console.log(res[i]['src'])
		}
	}
	
});

//totop
var topTimer = null;
$('.sidebar .totop').click(function(){
	if ($(window).scrollTop()>0) {
		topTimer = setInterval(function(){
			window.scrollBy(0,-100);
			if($(window).scrollTop()<=0){
				clearInterval(topTimer);
			}
		},50)
	}
})



