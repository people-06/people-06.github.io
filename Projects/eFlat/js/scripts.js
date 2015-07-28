$(document).ready(function(){

/* Find cities 
    var placeSearch, autocomplete;
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
    initialize();*/
/* end Find cities */

/* Tooltip */
$('#filterBtn').tooltip();

/* DatePick */
	$(function($){
		$.datepicker.regional['ru'] = {
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
			'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			dateFormat: 'd.mm.yy', firstDay: 1,
			renderer: $.datepicker.defaultRenderer,
			prevText: '&#x3c;Пред',  prevStatus: '',
			prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
			nextText: 'След&#x3e;', nextStatus: '',
			nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
			currentText: 'Сегодня', currentStatus: '',
			todayText: 'Сегодня', todayStatus: '',
			clearText: 'Очистить', clearStatus: '',
			closeText: 'Закрыть', closeStatus: '',
			yearStatus: '', monthStatus: '',
			weekText: 'Не', weekStatus: '',
			dayStatus: 'D, M d', defaultStatus: '',
			isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);
		$( "#startDate" ).datepicker({
		  defaultDate: "+1w",
		  numberOfMonths: 1,
		  onClose: function( selectedDate ) {
			$('.booking-info').find(this).addClass('withDate');
			$( "#endDate" ).datepicker( "option", "minDate", selectedDate ).focus();
		  }
		});
		$( "#endDate" ).datepicker({
		  defaultDate: "+1w",
		  numberOfMonths: 1,
		  onClose: function( selectedDate ) {
			$('.booking-info').find(this).addClass('withDate');
			$( "#startDate" ).datepicker( "option", "maxDate", selectedDate );
		  }
		});
	});


/*carusel for main page*/
	$(function() {
		var $cityList = $('.popular-city-list');
		var $cityListImg = $cityList.find('img');
		$cityList.height($cityListImg.height());
		$(window).resize(function(){
			$cityList.height($cityListImg.height());
		});
	});
  $(".show-more-popular").live("click", function(){ 
    var p = $(this).parents('.popular.block').eq(0),ul = p.find('ul.popular-city-list').eq(0),li = ul.find('li').eq(0),h = li.height() + (parseInt( li.css('marginTop'), 10 ) || 0) + (parseInt( li.css('marginBottom'), 10 ) || 0),ust = ul.scrollTop();
    console.log((ust+h)+" < "+ul[0].scrollHeight-9);
    if ( ust + h < ul[0].scrollHeight-9){
      ul.animate({scrollTop: '+='+h+'px'}, 600);
    } else {
      ul.animate({scrollTop: '0px'}, 600);
    }return false;
  });
/*end carusel for main page*/

/*show-hide filter block*/
	$(".select-fl-elem").click(function(){
		$(this).parents(".wrap-section-filter").siblings().find(".tl-block").hide();
		$(this).next(".tl-block").slideToggle();
		
	});
	$("body").click(function(){
	  $(".tl-block").hide();
	});

	// Prevent events from getting pass .popup
	$(".select-fl-elem,.tl-block").click(function(e){
	  e.stopPropagation();
	});

/*end show-hide filter block*/

/*click on filter element(checkbox)*/
  $(".tl-block li input").click(function(){
    if($(this).prop("checked")){
      $(".filter-attributes").append('<span class="label label-info fl-tag" data-filtergroup="'+$(this).attr('name')+'" data-filtertag="'+$(this).val()+'">'+
                 $(this).val()+
                 '<i class="glyphicon glyphicon-remove"></i>'+
                 '</span>'
      );
    }else{
        $(".label-info[data-filtertag='"+$(this).val()+"']").remove();
    }
	$('#filterBtn').tooltip('show'),setTimeout(function(){$('#filterBtn').tooltip('hide')},1500);
  });
/*end click on filter element(checkbox)*/

/*remove filter tag*/
  $(".fl-tag .glyphicon-remove").live("click", function(){
      var mainBlock = $(this).parent();
      var valueOnCheckBox = $(mainBlock).data("filtertag");
      $('.tl-block li input').filter(function(){return this.value==valueOnCheckBox}).prop('checked', false);
      $(mainBlock).remove();
  });
/*end remove filter tag*/

/*tabs on flat page*/
$(".address-tab-link").click(function(){
	$(".product-tabs ul li").removeClass("active");
	var tabHash = $(this).attr("href");
	$('.product-tabs ul li a[href="'+tabHash+'"').parents("li").addClass("active");
});
/*end tabs on flat page*/


/*  easy top scroll */
	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	$(function() {
	  $('.nav-pills a, .scroll-link').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			
			if ( $(this).attr('href') == '#cityReview' ) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 100
				}, 1000);
			} else {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1000);
			}
			return false;
		  }
		}
	  });
	});

/*  end scroll */

/* tooltips */
	$('.glyphicon-info-sign').tooltip();
	
/* show owner info */
	$('.show-owner-info').on('click',function(){
		$('.hidden-owner-info').slideToggle('slow');
		$(this).toggleClass('change-text');
	});	
	
/* catalog page padding */
	$(function(){
		function pagePadding(page){
			var $page = page;
			var footHeight = $('footer').outerHeight();
			$page.css({
				'padding-bottom': 40 + $('.text-a-lot').outerHeight() + 'px'
			}).parents('body').css({
				'padding-bottom': footHeight + 40
			});
		}
		pagePadding($('.catalog-page'));
		$(window).resize(function(){
			pagePadding($('.catalog-page'));
		});
	});
	
/* anchor-menu */
	$('.anchor-menu a').on('click', function() {
		$(this).parents('li').siblings().removeClass('active');
		$(this).parents('li').addClass('active')
	});
	
// active class for apt carousel
	$(function(){
		/*var hash = window.location.hash;
		$('.apt-carousel-item').each( function(){
			var $this = $(this);
			if ( $this.find('a').attr('href') == hash ) {
				$this.siblings().removeClass('active');
				$this.addClass('active');
				return false;
			}
		});*/
		
		$('.apt-carousel-item').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		});
	});
	
// show review form
	$(function(){
		$('.rating-form').hide();
		$('.review-question .btn').click(function(){
			$('.rating-form').slideToggle();
		});
	});
	
// Scrollbars
	$(".same-items-block .panel-body").customScrollbar();
	$('.text-a-lot .scroll-list-wrap').height( $('.text-a-lot .text-intro') .height() ).customScrollbar();
	
// Add Flat Top Steps
	/*$(function(){
		$('.add-flat-list').ready(function(){
			var $title = $('.cycle-slide-active .add-flat-title');
			var titleHeight = $title.outerHeight();
			$('.cycle-pager.top').css({top: titleHeight});
		});
		$('.add-flat-list').find('.cycle-pager span, .next').click(function(){
			var $title = $('.cycle-slide-active .add-flat-title');
			var titleHeight = $title.outerHeight();
			$('.cycle-pager.top').css({top: titleHeight},'slow');
		});
	});*/
	
});
// END DOCUMENT READY

/* history back */
function goBack() {
	window.history.back()
}




/* Find cities */
function initialize() {
  // Create the autocomplete object, restricting the search
  // to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
  /** @type {HTMLInputElement} */(document.getElementById('citySearch')),
      { types: ['geocode'] });
  // When the user selects an address from the dropdown,
  // populate the address fields in the form.
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });
}

function fillInAddress() {

  var place = autocomplete.getPlace();
  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
          geolocation));
    });
  }
}

/* Find cities */

$(document).ready(function(){
	var numberOfSelects = $('select').length;

// Iterate over each select element
$('select').each( function() {
    
    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;
    
    // Hides the select element
    $this.addClass('hidden');
    
    // Wrap the select element in a div
    $this.wrap('<div class="select" />');
    
    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');
    
    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');
    
    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());
    
    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class' : 'options'
    }).insertAfter($styledSelect);
    
    // Insert a list item into the unordered list for each select option
    for(var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text()
        }).appendTo($list);
    }
    
    // Cache the list items
    var $listItems = $list.children('li');
    
    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click( function(e) {
        e.stopPropagation();
        $('div.styledSelect.active').each( function() {
            $(this).removeClass('active')
                .next('ul.options').filter(':not(:animated)').slideUp(250);   
        });
        /* Use this instead of the .each() method when dealing with a large number of elements:
        for(var i = 0; i < numberOfSelects; i++) {
            if($('div.styledSelect').eq(i).hasClass('active') === true) {
                $('div.styledSelect').eq(i).removeClass('active')
                    .next('ul.options').filter(':not(:animated)').slideUp(250);
            }
        } */
        $(this).toggleClass('active')
            .next('ul.options').filter(':not(:animated)').slideToggle(250);
    });
    
    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click( function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text())
            .removeClass('active');
        $this.val($(this).text().toLowerCase());
        $list.filter(':not(:animated)').slideUp(250);
    });
    
    // Hides the unordered list when clicking outside of it
    $(document).click( function() {
        $styledSelect.removeClass('active');
        $list.filter(':not(:animated)').slideUp(250);
    });
    
});

});
