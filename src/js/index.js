var mySwiper = new Swiper('.big_banner_pic_wrap', {
    loop: true,
    // autoplay: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true,
    },
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
$(function(){
	var num = JSON.parse(localStorage.getItem('hongmi')).length;
	$('.shop_car_num').html(num);
})

$(".head_menu").hover(function () {
    $('.head_menu_con').stop();	
    $('.head_menu_con').slideDown(300);
}, function () {
    $('.head_menu_con').stop();
    $('.head_menu_con').slideUp(300);
})
$('.head_menu').children().hover(function () {

    $(this).children(".head_menu_con").css("z-index", "1002");
    $(this).siblings().children(".head_menu_con").css("z-index", 999)
}, function () {
    $(this).children(".head_menu_con").css("z-index", "1001");
})
var obanner_box = document.querySelector('.big_banner_pic_wrap');
obanner_box.onmouseover = function () {
    mySwiper.autoplay.stop();
}
obanner_box.onmouseout = function () {
    mySwiper.autoplay.start();
}
var mySwiper2 = new Swiper('.bottom_pic_box_change', {
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$('.bottom_pic_box').mouseover(function () {
    $(this).find('.swiper-button-prev').css('display', 'block');
    $(this).find('.swiper-button-next').css('display', 'block');
})
$('.bottom_pic_box').mouseout(function () {
    $(this).find('.swiper-button-prev').css('display', 'none');
    $(this).find('.swiper-button-next').css('display', 'none');
})
$("#banner_menu_wrap").children().hover(function () {
    $(this).css("background", "#ff6700");
    $(this).children(".banner_menu_content").css("border", "1px solid #F0F0F0").show();
}, function () {
    $(this).css("background", "none");
    $(this).children(".banner_menu_content").css("border", "0px solid #F0F0F0").hide();
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1300) {
        $('.back_top').css('display', 'block');
    } else {
        $('.back_top').css('display', 'none');
    }
});
$(function () {
    $(".back_top").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 500);
    });
})
$('.right_btn_shop_car').click(function(){
    location.href = 'shopcar.html';
})
$('.btn3_info').click(function(){
	location.href = 'shopcar.html';
})
