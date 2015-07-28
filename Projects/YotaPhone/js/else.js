$(document).ready(function() {
	$.fn.fullpage({
		anchors: ['mwc2014', 'yotaphone', 'yotaruby', 'about-us', 'what-we-do'],
		fixedElements: '#site-header,.arrows-right',
		css3: true,
		scrollOverflow: false,
        menu: '#site-menu',
		afterLoad: function(index, direction){
			$('.arrows-right').attr("data-index", index);
		}
	});	
	$('#prev').click(function(){
		$.fn.fullpage.moveSectionUp();
	});
	$('#next').click(function(){
		$.fn.fullpage.moveSectionDown();
	});

	$(".content,.youtube-box").fitText(1);
	$(".fullwidth").fitText(5);
	$("#site-header").fitText(0.8);
	
	$(function() {
		var $menu = $('#site-menu');
		
		if ( $(window).width() < 640) {
		
			$('.show-menu').on('click', function() {
			
				$menu.slideToggle();
					
			});
			$('#site-menu a').on('click', function() {
				$menu.attr('style','');
			});
			
		} else {
			$menu.attr('style','');
		}
		
	});
	
});