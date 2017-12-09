var flag = false;
var past = /^[A-Za-z0-9_]{6,16}$/;
var numb = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
$('#username').blur(function(){
	fn('手机号',$('#username'),numb,$('b').eq(0))
});
$('#pas').blur(function(){
	fn('密码',$('#pas'),past,$('b').eq(3))
});
$('#pass').blur(function(){
	if($('#pas').val() != $('#pass').val()){
		$('b').eq(4).show().html("密码不一致！");
		flag = false;
	}else{
		$('b').eq(4).hide();
		flag = true;
	}
});
var arr = ['captcha1.png','captcha2.png','captcha3.png','captcha4.png','captcha5.png'];
var mat = Math.floor(Math.random()*arr.length);
$('.ig').attr('src','img/registerimg/'+arr[mat]);
$('.ig').click(function(){$(this).attr('src','img/registerimg/'+arr[Math.floor(Math.random()*arr.length)])})
function fn(str,type,tes,b){
	if (type.val()=="") {
		b.show().html(str+"不能为空！");
		flag = false;
	}else if (!tes.test(type.val())) {
		b.show().html(str+'不正确!');
		flag = false;
	}else{
		b.hide();
		flag = true;
	}
	
}
$('#smt').click(function(){
	if (flag) {
		window.localStorage.setItem('usernum',$('#username').val());
		window.localStorage.setItem('userpas',$('#pas').val());
		alert('注册成功！');
		location.href = 'header.html?id=15627509375';
	}	
})
$('header img').css('cursor','pointer');
$('header img').click(function(){
	location.href = 'header.html';
})



