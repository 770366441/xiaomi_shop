// 二维码登录 手机登录 切换
function qie()
{
	var oewm_login = document.querySelector('.form_top_a2');
	var oewm = document.querySelector('.ewm_login');
	var otel_login = document.querySelector('.form_top_a1');
	var otel = document.querySelector('.tel_login');
	
	otel_login.onclick = function(){
	    otel.style.display = 'block';
	    otel_login.className = 'a_in';
	    oewm.style.display = 'none';
	    oewm_login.className = 'a_out';
	}
	oewm_login.onclick = function(){
	    otel.style.display = 'none';
	    otel_login.className = 'a_out';
	    oewm.style.display = 'block';
	    oewm_login.className = 'a_in';
	}
}
//
var wiper = (function()
{
	var $form_inp_btn = document.querySelector('.form_inp_btn');
	var $input_name = document.querySelector('#input_name');
	var $input_pass = document.querySelector('#input_pass');
	return{
		init()
		{
			this.event();
		},
		event()
		{
			var _this = this;
			$form_inp_btn.onclick = function()
			{
				
				var obj =
				{
					method:'post',
					data:
					{
						username:$input_name.value,
						password:$input_pass.value
					},
					success:function(data)
					{
						if(data == '登陆成功')
						{
							alert('登陆成功');
							location.href = 'index.html';
						}
					}
				}
			ajax('login.php',obj);
			}
			
		}
	}
}())








