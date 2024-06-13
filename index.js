$(window).on('load',function() {
  $('#top-to-menu').on('click',function() {
    $('#background-img').removeClass().addClass('background-menu');
    $('#filter').removeClass().addClass('filter-menu');
    $('#top').hide(0,function() {
      $('#menu,#menu-content,#js-footer').show(0);
    });
  });
  $('#menu-to-top').on('click',function() {
    $('#background-img').removeClass().addClass('background-top');
    $('#filter').removeClass().addClass('filter-top');
    $('#menu,#menu-content,#js-footer').hide(0,function() {
      $('#top').show(0);
    });
  });
  $('#for-news').on('click',function() {
    $('#background-img').removeClass().addClass('background-news');
    $('#filter').removeClass().addClass('filter-news-contact');
    $('#top,#menu,#menu-content,#contact,#contact-content').hide(0,function() {
      $('#news,#news-content,#js-footer').show(0);
    });
  });
  $('#for-menu').on('click',function() {
    $('#background-img').removeClass().addClass('background-menu');
    $('#filter').removeClass().addClass('filter-menu');
    $('#top,#news,#news-content,#contact,#contact-content').hide(0,function() {
      $('#menu,#menu-content,#js-footer').show(0);
    });
  });
  $('#for-contact').on('click',function() {
    $('#background-img').removeClass().addClass('background-contact');
    $('#filter').removeClass().addClass('filter-news-contact');
    $('#top,#menu,#menu-content,#news,#news-content').hide(0,function() {
      $('#contact,#contact-content,#js-footer').show(0);
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
