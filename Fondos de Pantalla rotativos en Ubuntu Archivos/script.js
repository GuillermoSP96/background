jQuery(document).ready(function($) {

	$(document).on('ready'+rlpArgs.custom_events, function() {
	 if(rlpArgs.script === 'nivo_lightbox') {
			$.each($('a[rel*="'+rlpArgs.selector+'"]'), function() {
				var match = $(this).attr('rel').match(new RegExp(rlpArgs.selector+'\\[(gallery\\-(?:[\\da-z]{1,4}))\\]', 'ig'));

				if(match !== null) {
					$(this).attr('data-lightbox-gallery', match[0]);
				}
			});

			$('a[rel*="'+rlpArgs.selector+'"]').nivoLightbox({
				theme: rlpArgs.theme,
				effect: rlpArgs.effect,
				clickOverlayToClose: (rlpArgs.clickOverlayToClose === '1' ? true : false),
				keyboardNav: (rlpArgs.keyboardNav === '1' ? true : false),
				errorMessage: rlpArgs.errorMessage,
				onPrev: function() {$('.nivo-lightbox-content').hide().fadeIn();},
				onNext: function() {$('.nivo-lightbox-content').hide().fadeIn();},
				afterShowLightbox: function(){
 				if(rlpArgs.autoplay_video === '1') {
						src = $('.nivo-lightbox-content > iframe').attr('src');
						$('.nivo-lightbox-content > iframe').attr('src', src + '?autoplay=1');
				}

				}
			
			});
		} 

		 if(rlpArgs.touch_swipe === '1') {

		 	//touch swipe
			$('body').swipe({
			// excludedElements: "button, input, select, textarea, .noSwipe, body", 
				excludedElements: "button, input, select, textarea, .noSwipe", 
			    swipeLeft: function(){ $(".nivo-lightbox-next").click(); },
			    swipeRight: function(){ $(".nivo-lightbox-prev").click(); },
			     min_move_x: 20,
			     min_move_y: 20,
			     preventDefaultEvents: false
			});

		 }

	});



});