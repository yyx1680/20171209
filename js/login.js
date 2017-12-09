var flag = false;
var jsonobj = {
	"userhpone":"15627509375",
	"pass":"888888"
}
$('#submit').click(function(){
	if($('#userphone').val()==""){
		$('b').eq(0).html("请输入手机号码");
		flag = false;
	}else{
		$('b').eq(0).css('display',"none");
		flag = true;
	}
	if($('#ps').val()==""){
		$('b').eq(1).html("请输入密码");
		flag = false;
	}else{
		$('b').eq(1).css('display',"none");
		flag = true;
	}
	if(flag){
		if($('#userphone').val()==jsonobj['userhpone']&&$('#ps').val()==jsonobj['pass']){
			location.href = 'header.html?id='+15627509375;
			$('b').eq(1).css('display',"none");
			flag = true;
		}else{
			$('b').eq(1).css('display',"block");
			$('b').eq(1).html("密码不正确");
			flag = false;
		}
	}
})
