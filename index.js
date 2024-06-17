$(window).on('load',function() {
	$('#top-to-menu').on('click',function() {
		$('#background-img').removeClass().addClass('background-menu');
		$('#filter').removeClass().addClass('filter-menu');
		$('#top').fadeOut(400,function() {
			$('#menu').fadeIn(400);
			$('#menu-content,#js-footer').slideDown(400);
		});
	});
	$('#menu-to-top').on('click',function() {
		$('#background-img').removeClass().addClass('background-top');
		$('#filter').removeClass().addClass('filter-top');
		$('#menu').fadeOut(400,function() {
			$('#top').fadeIn(400);
			$('#menu-content,#js-footer').slideUp(400);
		});
	});
	$('#for-news').on('click',function() {
		$('#background-img').removeClass().addClass('background-news');
		$('#filter').removeClass().addClass('filter-news-contact');
		$('#top,#menu,#contact,#js-footer').hide(0,function() {
			$('#news').show(0);
			$('#menu-content,#contact-content').fadeOut(400,function() {
				setTimeout(function() {
						$('#news-content,#js-footer').fadeIn(400);
				},400);
			});
		});
	});
	$('#for-menu').on('click',function() {
		$('#background-img').removeClass().addClass('background-menu');
		$('#filter').removeClass().addClass('filter-menu');
		$('#top,#news,#contact,#js-footer').hide(0,function() {
			$('#menu').show(0);
			$('#news-content,#contact-content').fadeOut(400,function() {
				setTimeout(function() {
						$('#menu-content,#js-footer').fadeIn(400);
				},400);
			});
		});
	});
	$('#for-contact').on('click',function() {
		$('#background-img').removeClass().addClass('background-contact');
		$('#filter').removeClass().addClass('filter-news-contact');
		$('#top,#menu,#news,#js-footer').hide(0,function() {
			$('#contact').show(0);
			$('#menu-content,#news-content').fadeOut(400,function() {
				setTimeout(function() {
					$('#contact-content,#js-footer').fadeIn(400);
				},400);
			});
		});
	});
	$(window).scroll(function() {
		$('.caption-fade').each(function() {
			var winheight = $(window).height();
			var posi = $(this).offset().top;
			var scroll = $(window).scrollTop();
			if (scroll + winheight > posi){
				$(this).addClass('caption-fadein');
			} else {
				//　スクロールで画面上部に戻った際に要素を非表示にしたい場合
				// $(this).removeClass("fadein");
			}
		});
	});
});
