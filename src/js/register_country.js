//将li中内容添加到p标签里面
var country_list = (function() {
	var $country_name = document.querySelector('#country_name');
	var $ul_iphone = document.querySelector('.iphone_list');
	var $_iphone = document.querySelector('._iphone');
	var $p = document.querySelector(".country_confirm");
	var $ul = document.querySelector(".country_list")
	var $li = document.querySelectorAll(".comment_li")
	return {
		init() {
			this.event();
		},
		event() {
			$ul.onclick = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == "LI" && target.className == "comment_li") {
					$p.innerHTML = target.innerHTML;
					$ul.style.display = "none";
				}
			}
			$ul_iphone.onclick = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == "LI" && target.className == "iphone") {
					var target = target.lastElementChild;
					$_iphone.innerHTML = target.innerHTML;
					$ul_iphone.style.display = "none";
				}
			
			}
			
		}
	}
}());
//点击p标签作为开关，用户显示list
$(function() {

	$(".country_content").click(function() {

		$(".country_list").toggle(500);
	})
	$(".tel_start").click(function() {

		$(".iphone_list").toggle(500);
	})
})
//通过ajax，添加国家
var ajaxCountry = function addCountry() {
	var $country_name = document.querySelector('#country_name');
	var $p = document.querySelector(".country_confirm");
	var $ul = document.querySelector(".country_list");
	var $li = document.querySelectorAll(".comment_li")
	var $comment = document.querySelector('.comment')
	var $iphone_name = document.querySelector('#iphone_name');
	var $iphone_comment = document.querySelector('.iphone_comment');
	var $iphone_list = document.querySelector('.iphone_list');
	window.onload = function() {
		var obj = {
			success: function(data) {
				var obj = {};
				obj = JSON.parse(data);
				console.log(obj)
				for(var i in obj) {
					var li = document.createElement('li');
					li.className = "comment_li";
					li.innerHTML = obj[i];
					$ul.appendChild(li);
				}
				$country_name.addEventListener('change',function(){
				var arr = cha(data);
					for(var i = 0; i < arr.length; i++) {
						var li = document.createElement('li');
						li.className = "comment_li";
						li.innerHTML = arr[i];
						var first= $comment.nextElementSibling
						$ul.insertBefore(li,first);
					}
				},false)
			}
		}
		var obj2 = {
			success: function(data) {
				var bigul = document.querySelector(".iphone_list")
				var obj2 = {};
				obj2 = JSON.parse(data);
				console.log(obj2)
				for(var i = 0; i < obj2.length;) {
					var li = document.createElement('li');
					li.className = "iphone";
					var span_left = document.createElement("span");
					span_left.className = "country_left";
					span_left.innerHTML = obj2[i];
					li.appendChild(span_left);
					var span_right = document.createElement("span");
					span_right.className = "iphone_right";
					span_right.innerHTML = "+" + obj2[i + 1];
					li.appendChild(span_right);
					bigul.appendChild(li);
					i += 2;
				}
				var iphoneArr1 = [];
				var iphoneArr2 = [];
				for(var k=0;k<obj2.length;k++)
				{
					if(k%2 == 0)
					{
						iphoneArr1.push(obj2[k]);
						continue;
					}
					iphoneArr2.push(obj2[k]);
				}
				console.log(iphoneArr1)
				console.log(iphoneArr2)
				$iphone_name.addEventListener('change',function(){
					var arr = cha1(iphoneArr1);
					for(var i = 0; i < arr.length; i++) {
						var li = document.createElement('li');
						li.className = "iphone";
						var span_left = document.createElement("span");
						span_left.className = "country_left";
						console.log(arr[i]);
						var reg = /\D*/;
						var str1 = arr[i].match(reg);
						span_left.innerHTML = str1;
						li.appendChild(span_left);
						var span_right = document.createElement("span");
						span_right.className = "iphone_right";
						var reg1 = /\d*$/;
						var str2 = arr[i].match(reg1)
						console.log(str2)
						span_right.innerHTML = "+" + iphoneArr2[str2];
						li.appendChild(span_right);
						var first= $iphone_comment.nextElementSibling
						$iphone_list.insertBefore(li,first);
					
					}
				},false)
			}
		}
		ajax('register_country.php', obj);
		ajax('register_tel.php', obj2);

	}
}
//通过正则表达式，查找需要的值
function search(val, str) {
	var reg = new RegExp("^" + str);
	var count = reg.test(val);
	if(count)
	{
		return val;
	}
}
//将数据循环查询，找到相应的数据
function cha(data) {
	debugger
	data = eval(data);
	var $country_name = document.querySelector('#country_name');
	var str = $country_name.value;
	var arr = [];
	for(var i = 0; i < data.length; i++) {
		arr1 = search(data[i], str);
		if(arr1 != null) {
			arr.push(arr1);
		}
	}
	return arr;
}
//查询iPhone
function cha1(data) {

	data = eval(data);
	var $iphone_name = document.querySelector('#iphone_name');
	var str = $iphone_name.value;
	var arr = [];
	for(var i = 0; i < data.length; i++) {
		arr1 = search(data[i], str);
		if(arr1 != null) {
			arr.push(arr1+i);
		}
	}
	return arr;
}
//验证手机是否合格
function testTel(tel)
{
	var reg =/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
	var test = reg.test(tel);
	if(test)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//检验手机号码
function testIphone()
{
	var $ipW = document.querySelector('#ipW');
	var $tel_input = document.querySelector('.tel_input');
	$tel_input.onchange = function()
	{
		var tel = $tel_input.value;
		if(testTel(tel))
		{
			$ipW.innerHTML='';
			return true;
		}
		else{
			$ipW.innerHTML='手机号码格式错误';
			return false;
		}
	}
}
//通过ajax进行注册
var register = (function() {
	var $ipW = document.querySelector('#ipW');
	var $login_up = document.querySelector('.login_up');
	var $country_confirm = document.querySelector('.country_confirm');
	var $tel_input = document.querySelector('.tel_input');
	return {
		init() {		
				this.event();	
		},
		event() {
			$login_up.onclick = function()
			{
				var obj =
				{
					data:
					{
						country:$country_confirm.innerHTML,
						iphone:$tel_input.value
					},
					success:function(data)
					{
						if(data =='手机号码已存在请换个')
						{
							$ipW.innerHTML = data;
						}
						else{
							alert('注册成功');
							location.href = "login.html";
						}
					}
				}
				if($tel_input.value!='' && $ipW.innerHTML =='')
				{
					debugger
					ajax('register.php',obj);
				}
			}
		}
	}
}());
