/**
 * Created by Administrator on 2016/11/23.
 */
$(function(){
	/*图片切换函数*/
	(function(){
		var n=0;
		var t = setInterval(right,3000);
		$('#box' ).hover(function(){
			clearInterval(t);
		},function(){
			t = setInterval(right,3000);
		});
		/*小圆点对应图片*/
		$('#num_ul li').click(function(){
			n = $(this).index();
			change();
		});
		function right(){
			if(n == $('#img_ul li').length-1){
				n = -1;
			}
			n++;
			change();
		}
		function change(){
			$('#img_ul li' ).eq(n ).fadeIn(500);
			$('#img_ul li:not(:eq('+n+'))').css('display','none');
			$('#num_ul li' ).eq(n ).css('background-color','white');//图片对应小圆点
			$('#num_ul li:not(:eq('+n+'))').css('background-color','#cccccc');//图片对应小圆点
		}
	}());

	/*返回顶部函数*/
	function goTop(){
		$('.go_top' ).click(function(){
			$("html,body").animate({
				scrollTop: 0
			}, 500);
		})
	}
	goTop();

	/*滚动监听事件*/
	$('#myNav ul li:contains(Home)').click(function(){
		var top = $("#home").offset().top-160;
		$("html,body").animate({
			scrollTop: top
		}, 500);
	});
	$('#myNav ul li:contains(Services)').click(function(){
		var top = $("#services").offset().top-160;
		$("html,body").animate({
			scrollTop: top
		}, 500);
	});
	$('#myNav ul li:contains(About)').click(function(){
		var top = $("#about").offset().top-100;
		$("html,body").animate({
			scrollTop: top
		}, 500);
	});
	$('#myNav ul li:contains(Photo)').click(function(){
		var top = $("#gallery").offset().top-160;
		$("html,body").animate({
			scrollTop: top
		}, 500);
	});
	$('#myNav ul li:contains(Contact)').click(function(){
		var top = $("#contactUs").offset().top-160;
		$("html,body").animate({
			scrollTop: top
		}, 500);
	});

	/*滚轮事件*/
	$(window ).scroll(function(){
		//console.log($(window ).scrollTop());
		if($(window).scrollTop()==0){
			$('.go_top' ).fadeOut();
		}else{
			$('.go_top' ).fadeIn();
		}
	});


	/*Gallery鼠标位置hover事件*/
	var w = $('.gall_col_img' ).width();
	var h = $('.gall_col_img' ).height();
	var mark = $('.gall_col_img_mark');
	$('.gall_col_img').bind({
		mouseenter:function(e){
		var ol = e.offsetX,
			ot = e.offsetY,
			ob = h-ot,
			or = w-ol;
			//console.log(ob);
		if(ol<ot&&ol<ob&&ol<or){
			$(this ).find(mark).show().css('left',-w ).css('top',0 ).stop().animate({
				left:0
			},300);
		}else if(ot<ol&&ot<ob&&ot<or){
			$(this ).find(mark).show().css('top',-h ).css('left',0).stop().animate({
				top:0
			},300);
		}else if(or<ol&&or<ob&&or<ot){
			$(this ).find(mark).show().css('left',w ).css('top',0).stop().animate({
				left:0
			},300);
		}else{
			$(this ).find(mark).show().css('top',h ).css('left',0).stop().animate({
				top:0
			},300);
		}
	},mouseleave:function(e){
		var ol = e.offsetX,
			ot = e.offsetY,
			ob = h-ot,
			or = w-ol;
		if(ol<ot&&ol<ob&&ol<or){
			$(this ).find(mark).css('left',0 ).stop().animate({
				left:-w-200
			},300);
		}else if(ot<ol&&ot<ob&&ot<or){
			$(this ).find(mark).css('top',0 ).stop().animate({
				top:-h
			},300);
		}else if(or<ol&&or<ob&&or<ot){
			$(this ).find(mark).css('left',0 ).stop().animate({
				left:w
			},300);
		}else{
			$(this ).find(mark).css('top',0 ).stop().animate({
				top:h
			},300);
		}
	}});
});