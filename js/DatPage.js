$(function(){
	if(location.search!=""){
		var log = location.search.split('?')[1].split("=")[1];
		$('header ul li').eq(1).remove();
		$('header ul li').eq(0).html(log.split('&')[0]);
	}
	//
	$.ajax({
		type:"get",
		url:"file/main.json",
		async:true,
		dataType:"json",
		data:{},
		success:function(res){
			var log = location.search.split('?')[1].split("=")[1].split('&')[1];
			$('.detailTitle').html(res[log]['title']);
			$('.detailData p span').eq(0).html(res[log]['xh']);
			$('.detailData p span').eq(1).html(res[log]['bh']);
			$('.detailData p span').eq(2).html(res[log]['pp']);
			$('.detailData p span').eq(3).html(res[log]['xl']);
			$('.picBox p .picsp').eq(0).html(res[log]['jg']);
			$('.picBox p .picsp').eq(1).html(res[log]['fq']);
			$('.picBox p .picsp').eq(2).html(res[log]['lj1']);
			$('.picBox p .picsp').eq(3).html(res[log]['lj2']);
			$('.picBox p .picsp').eq(5).html(res[log]['mj']);
			$('.kuashi li img').eq(0).attr('src',res[log]['kssrc1']);
			$('.kuashi li img').eq(1).attr('src',res[log]['kssrc2']);
			$('.kuashi li img').eq(2).attr('src',res[log]['kssrc3']);
			$('.kuashi li span').eq(0).html(res[log]['ks1']);
			$('.kuashi li span').eq(1).html(res[log]['ks2']);
			$('.kuashi li span').eq(2).html(res[log]['ks3']);
				console.log(res[log]['title'])
		}
	});
	
	var num = 0;
	$('.bigBox .simg img').eq(num).addClass('sthat').siblings().removeClass('sthat');
	
	$('.detailTab li').mouseover(function(){
		num = $(this).index();
		$(this).css('filter','brightness(100%)').siblings().css('filter','brightness(200%)');
		$('.bigBox .simg img').eq(num).addClass('sthat').siblings().removeClass('sthat');
		console.log();
	})
	//进入
	$('.bigBox').hover(function(){
		$('.bigBox div').eq(1).addClass('simg').siblings().removeClass('simg');
		$('.bigBox .simg img').eq(num).addClass('that').siblings().removeClass('that');
		
	},function(){
		$('.bigBox div').eq(0).addClass('simg').siblings().removeClass('simg');
		$('.bigBox .simg img').eq(num).addClass('that').siblings().removeClass('that');
	})
	//移动
	$('.bigBox').mousemove(mov)
	function mov(event){
		//鼠标坐标
		var ev = event||window.event;
		var pX = ev.pageX||ev.clientX+$(document).scrollLeft();
		var pY = ev.pageY||ev.clientY+$(document).scrollTop();
		//比例值
		var rati = ($('.bigBox .simg').width()-$('.bigBox').width())/($('.bigBox').width()-200)
		
		var endX = pX - $('.bigBox').offset().left - 100;
		var endY = pY - $('.bigBox').offset().top - 100;
		//可移动最大值
		var maxX = $('.bigBox').width()-220;
		var maxY = $('.bigBox').height()-220;
		//判断
		if(endX>maxX){
			endX = maxX;
		}else if(endX<0){
			endX = 0;
		}
		if(endY>maxY){
			endY = maxY;
		}else if(endY<0){
			endY = 0;
		}
		//给值
		$('.simg').css({'left':-endX*rati,'top':-endY*rati});
		
	}
})