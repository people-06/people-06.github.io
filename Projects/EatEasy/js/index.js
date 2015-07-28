var app = {
    
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        //$('.iosSlider').iosSlider();
        
        $(function() {
          $('.menu-btn').click(function(){
            document.location.href = 'menu.html';
          });
        });
        
        
        $(function() {
          $('.product-list dd').not('.active').hide();
          
          $('.product-list dt').click(function() {
                                      $('.product-list dd').not($(this).next('.product-list dd')).removeClass('active').slideUp(600);
                                      $(this).next('.product-list dd').addClass('active').slideToggle(600);
                                      })
          })
        
        $(function() {
          $('.count').each(function() {
                           var asd = $(this);
                           asd.find('.minus').click(function() {
                                                    var data = asd.find('input').val();
                                                    if(data > 1) {
                                                    asd.find('input').val(parseInt(data) - 1);
                                                    $('.plus').removeClass('disabled');
                                                    }  else if (data < 2 ){
                                                    $(this).addClass('disabled');
                                                    }
                                                    return false;
                                                    });
                           asd.find('.plus').click(function() {
                                                   var data = asd.find('input').val();
                                                   if(data < 7){
                                                   asd.find('input').val(parseInt(data) + 1);
                                                   $('.minus').removeClass('disabled');
                                                   } else if (data > 6){
                                                   $(this).addClass('disabled');
                                                   }
                                                   return false;
                                                   });
                           });
          });
	
    }
};	
$('.modal, .modal>div').hide();
	function ShowFirstModal(){
		$('.modal, .first-slide').show();
	}
	function ShowSecondModal(){
		$('.first-slide').hide();
		$('.second-slide').show();
	}
	function ShowThirdModal(){
		$('.second-slide').hide();
		$('.modal, .third-slide').show();
	}
	$('.modal .cancel-link-btn').click(function(){
		$('.modal, .modal>div').hide();
	});
	
function openSearch(){
	$('.search').toggleClass('active');
}
$('.menu-toggle').click(function(){

	var hasClass = $('body').hasClass('open-menu');
	
	if( !hasClass ) {
		$('.menu-wrap').animate({
			left: 0
		});
		$('footer').animate({
			left: 400
		});
		$('body,header').animate({
			'margin-left': '400px'
		});
		$('.modal-wrap').hide();
		$('body').addClass('open-menu');
	} else if ( hasClass){
		$('.menu-wrap').animate({
			left: '-400px'
		});
		$('body,header').animate({
			'margin-left': 0
		});
		$('footer').animate({
			left: 0
		});
		$('body').removeClass('open-menu');
		$('.modal-wrap').show();
	}
	
});
$('input, textarea').focusin(function(){
	$('footer').hide();
}).focusout(function(){
	$('footer').show();
});
$('.current span').click(function(){
	$(this).parents('.order-types-inner').find('.select-list').slideToggle('fast');
});
function goBack(){
	window.history.back()
}
$('.bxslider').bxSlider({
	controls: false
});