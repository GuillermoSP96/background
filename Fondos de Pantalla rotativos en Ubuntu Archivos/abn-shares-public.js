// @ document ready
(function($)
{
	// @ window load
	$(window).bind('load', function()
	{
		if( $('#abn-shares-buttons').length )
		{
			/**/

			// fixed scroll
			var stickyTop = $('#abn-shares-buttons').offset().top;
			var stickyHeight = $('#abn-shares-buttons').height();

			$(window).bind('scroll', function()
			{
				var windowTop = $(window).scrollTop();
				var t = 0;

				if( $('#wpadminbar').length )
					t = 32;

				if( windowTop >= (stickyTop - stickyHeight) )
					 $('#abn-shares-buttons').css({ position: 'fixed', top: t }).addClass('fixed');
				else $('#abn-shares-buttons').css({ position: 'relative', top: 0 }).removeClass('fixed').find('h1').remove();

				if( $('#abn-shares-buttons').hasClass('fixed') && !$('#abn-shares-buttons h1').length )
					if( $('h1.blogposting-title').length )
						$('#abn-shares-buttons div.fixed-inner').prepend('<h1 class="blogposting-title">'+ $('h1.blogposting-title').text() +'</h1>');
					else if( $('h1.page-title').length )
						$('#abn-shares-buttons div.fixed-inner').prepend('<h1 class="blogposting-title">'+ $('h1.page-title').clone().children().remove().end().text() +'</h1>');
			});

			// button popups
			$('#abn-shares-buttons a.abns-button').each(function()
			{
				$(this).click(function(ev)
				{
					ev.preventDefault();

					window.open($(this).attr('href'), $(this).attr('id'), 'left=0,top=0,width=600,height=700,toolbar=0,resizable=1');
				});
			});

			/**/
		}
	});
	/**/
})(jQuery);