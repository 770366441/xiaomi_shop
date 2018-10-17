var mySwiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	autoplay: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
$(function() {
	var xin;
	var price;
	var yan;

	$('.step-list').on('click', 'a', function() {
		{
			var target = $(event.target);
			if(target.attr('class') == 'write') {
				$('.swiper-container').removeClass('xianShi');
				$('#oneI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				console.log(yan)
				$('#yansetu').html(yan);
			} else if(target.attr('class') == 'jin') {
				$('.swiper-container').removeClass('xianShi');
				$('#twoI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				$('#yansetu').html(yan);
			} else if(target.attr('class') == 'pink') {
				$('.swiper-container').removeClass('xianShi');
				$('#threeI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				$('#yansetu').html(yan);
			} else if(target.attr('class') == 'blue') {
				$('.swiper-container').removeClass('xianShi');
				$('#fourI').addClass('xianShi');
				target.parent().css({
					'border': '1px solid #ff6700'
				});
				target.parent().siblings().css({
					'border-color': '#e0e0e0'
				});
				yan = target.text().trim();
				$('#yansetu').html(yan);
			}

		}
	})

	$(window).scroll(function() {
		var num = document.documentElement.scrollTop;

		if(num > 800) {
			$('.lunbotu').css({
				position: 'absolute',
				left: '0px',
				top: '682px'
			})

		} else if(num >= 200) {
			$('.imation').css({
				position: 'fixed',
				top: '0',
				left: '0',
				'z-index': '1100',
				background: '#fff'
			});
			$('.lunbotu').css({
				position: 'fixed',
				top: '73px',
				left: '0px'
			})
		} else if(num < 200) {
			$('.imation').css({
				position: 'static'
			});
			$('.lunbotu').css({
				position: 'static'
			})

		}
	});
	$('.step_list1').on('click', 'li', function() {

		var target = $(event.target);
		if(target.attr("class") == 'alione') {
			console.log(1)
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			$('.ddpig').html('');
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.daZhe').text('799元')
			$('.qian').html($('.zuiPrice').text());
		} else if(target.attr("class") == 'alitwo') {
			console.log(2);
			target.parent().css({
				'border': '1px solid #ff6700'
			})
			target.parent().siblings().css({
				'border-color': '#e0e0e0'
			})
			$('.ddpig').html('');
			$('.xinghaode').text(target.find('.name').html())
			$('.zuiPrice').text(target.find('.price').html())
			$('.daZhe').text('999元')
			$('.qian').html($('.zuiPrice').text());
		}
	})
	$('.duihao').click(function() {
		$('.duihao').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			color: '#fff'
		});
		$('.duihao').html('√');
		$('.zhengqudui').css({
			visibility: 'visible'
		})
		$('.zhengqudui').html('√');
		$('.duihao1').css({
			'background-color': '#fff',
			color: '#fff'
		});
		$('.duihao1').html('');
		$('.zhengqudui1').css({
			visibility: 'hidden'
		});
		$('.fuwu1').css({
			'border-color': '#ff6700'
		});
		$('.fuwu3').css({
			'border-color': '#e0e0e0'
		});
		var sum = parseInt($('.zuiPrice').text());
		sum = parseInt($('.zijiJiage').text()) + sum;
		$('.qian').html(sum + '元');
	})
	$('.duihao1').click(function() {
		$('.duihao1').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			color: '#fff'
		});
		$('.duihao1').html('√');
		$('.zhengqudui1').css({
			visibility: 'visible'
		})
		$('.zhengqudui1').html('√');
		$('.duihao').css({
			'background-color': '#fff',
			color: '#fff'
		});
		$('.duihao').html('');
		$('.zhengqudui').css({
			visibility: 'hidden'
		})
		$('.fuwu3').css({
			'border-color': '#ff6700'
		});
		$('.fuwu2').css({
			'border-color': '#e0e0e0'
		});
		$('.qian').html($('.zuiPrice').text());
		var sum = parseInt($('.zuiPrice').text());
		sum = parseInt($('.zijiJiage').text()) + sum;
		$('.qian').html(sum + '元');
	})
	$('.address-info').click(function(e) {
		var target = e.target;

		console.log(1);
		var input = $("<input type='text'>");
		var td = $(target);
		input.val(td.text());
		td.contents().replaceWith(input);
		input.blur(function() {
			td.text($(this).val());
			$(this).remove();
		})
	})
	$('.dianji').on('click', 'button', function(e) {
		var target = $(event.target);
		var id = 1;
		if(target.prop('tagName') == 'BUTTON') {
			//			console.log(JSON.parse(localStorage.getItem('hongmi'))[0].tok)
			if(JSON.parse(localStorage.getItem('hongmi'))) {
				var arr = JSON.parse(localStorage.getItem('hongmi'))
				var num = 1;
				var fool;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				auto:for(var i = 0; i < arr.length; i++) {
					for(var k in arr[i]) {
						if(arr[i].name == name && arr[i].type == type && arr[i].iphoneColor == iphoneColor && arr[i].address == address && arr[i].price == price && arr[i].phoneurl == phoneurl) {
							
							num = Number(arr[i].tok) + 1;
							data = {
								id:arr[i].id,
								name: name,
								type: type,
								iphoneColor: iphoneColor,
								address: address,
								price: price,
								tok: num,
								phoneurl: phoneurl
							}
							arr.splice(i, 1, data)
							arr = JSON.stringify(arr);
							localStorage.setItem('hongmi', arr);
							fool=i;
							break auto;
						}
					}
				}
				if(i !=fool) {
					var arr = JSON.parse(localStorage.getItem('hongmi'))
					var id = arr[arr.length-1].id;
					console.log(id)
					id +=1;
					data = {
						id:id,
						name: name,
						type: type,
						iphoneColor: iphoneColor,
						address: address,
						price: price,
						tok: num,
						phoneurl: phoneurl
					}
					arr.push(data);
					arr = JSON.stringify(arr);
					localStorage.setItem('hongmi', arr);

				}
				console.log(arr);
			} else {
				var arr = [];
				var num = 1;
				var price = parseInt($('.qian').text());
				var iphoneColor = $("#yansetu").text();
				var address = $('.sheng').text() + $('.shi').text() + $('.qu').text() + $('.jie').text();
				var name = $('.type').text();
				var type = $('.xinghaode').text();
				var str = $('.tuPianUrl').css('background-image').slice(4);
				var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
				data = {
					id:1,
					name: name,
					type: type,
					iphoneColor: iphoneColor,
					address: address,
					price: price,
					tok: num,
					phoneurl: phoneurl
				}
				arr.push(data);
				arr = JSON.stringify(arr);
				console.log(arr);
				localStorage.setItem('hongmi', arr);
				/*if(localStorage.getItesm('hongmi') && JSON.parse(localStorage.getItem('hongmi'))[0].tok)
				{
					num=JSON.parse(localStorage.getItem('hongmi'))[0].tok+1;
				}*/
			}
		}
		location.href = 'shopcar.html'
	})
	
})