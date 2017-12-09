//全选
$(function(){
	if(location.search!=""){
		var log = location.search.split('?')[1].split("=")[1];
		$('.cayTop span').eq(1).hide();
		$('.cayTop span').eq(0).html(log);
	}
		$.ajax({
			type:"get",
			url:"file/main.json",
			async:true,
			dataType:"json",
			data:{},
			success:function(res){
				for(i=0;i<$('.logcheck ul').length;i++){
					for(j=0;j<$('.logcheck ul').eq(i).children().length;j++){
						$('.logcheck ul').eq(i).children().eq(1).children().attr('src',res[i]['src']);
						$('.logcheck ul').eq(i).children().eq(2).html(res[i]['title']);
//						$('.logcheck ul').eq(i).children().eq(3).html(res[i]['picher']);
					}
				}
			}
		});
	//商品总数
	$('h4 span').html($('.logcheck ul').length);
	//默认全选
	if($('#checkAll').get(0).checked){
		$('.logcheck ul input[type="checkbox"]').attr('checked',true);
	}
	//点击全选
	$('#checkAll').click(function(){
		if($('#checkAll').get(0).checked){
			$('.logcheck ul input[type="checkbox"]').attr('checked',true);
		}else{
			$('.logcheck ul input[type="checkbox"]').attr('checked',false);
		}
		much()
	})
	//点击选项
	$('.logcheck ul input[type="checkbox"]').click(function(){
		var num = 0;
		for(i=0;i<$('.logcheck ul input[type="checkbox"]').length;i++){
			if($('.logcheck ul input[type="checkbox"]').eq(i).attr('checked')){
				num++;
			}
		}
		if (num==$('.logcheck ul input[type="checkbox"]').length) {
			$('#checkAll').attr('checked',true);
		}else{
			$('#checkAll').attr('checked',false);
		}
		much()
	})
	//商品小计
	var picAll = $('.logcheck ul');
	for(i=0;i<picAll.length;i++){
		picAll.eq(i).children().eq(5).html(picAll.eq(i).children().eq(3).html().split('￥')[1]*picAll.eq(i).children().eq(4).children().val());
	}
	//数量增减
	$('.logcheck ul input[type="number"]').on('input propertychang',$('.logcheck ul input[type="number"]'),function(){
		picAll.eq($(this).parent().parent().index()).children().eq(5).html(picAll.eq($(this).parent().parent().index()).children().eq(3).html().split('￥')[1]*picAll.eq($(this).parent().parent().index()).children().eq(4).children().val());
		much()
	})
	//合计
	much()
	var count = 0;
	//合计回调函数
	function much(){
		count = 0;
		for(i=0;i<$('.logcheck ul input[type="checkbox"]').length;i++){
			if($('.logcheck ul input[type="checkbox"]').eq(i).attr('checked')){
				count += Number(picAll.eq(i).children().eq(5).html());
			}
		}
		$('.cayPicAll span').html(count.toFixed(2));
	}
	//点击删除
	$('.logcheck button').click(function(){
		$(this).parent().parent().remove();
		$('h4 span').html($('.logcheck ul').length);
		picAll = $('.logcheck ul');
		for(i=0;i<picAll.length;i++){
			picAll.eq(i).children().eq(5).html(picAll.eq(i).children().eq(3).html().split('￥')[1]*picAll.eq(i).children().eq(4).children().val());
		}
		much()
		//数量增减
		$('.logcheck ul input[type="number"]').bind('input propertychang',function(){
			picAll.eq($(this).parent().parent().index()).children().eq(5).html(picAll.eq($(this).parent().parent().index()).children().eq(3).html().split('￥')[1]*picAll.eq($(this).parent().parent().index()).children().eq(4).children().val());
			much()
		})
	})	
	//点击结算
	$('.cayPicAll .by').click(function(){
		alert('交易成功！');
	})
})
		

	

