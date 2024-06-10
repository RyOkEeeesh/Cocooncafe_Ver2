$(document).ready(function() {
  $.fn.extend({
      toggle_text: function (initial_text, alternate_text) {
          return this.text(this.text() == alternate_text ? initial_text : alternate_text);
      }
  });
});
$('.Z').click(function() {
  $('.Z').toggle_text('メニューを見る', 'トップへ戻る');
  $('#copy').toggle_text('Have a nice day together', 'Menu');
  $('.subcopy1').toggle();
  $('.subcopy2').toggle();
  $('#background').toggleClass('background').toggleClass('background2');
  $('#filter').toggleClass('filter').toggleClass('filter2');
  $('#fade').toggleClass('fade').toggleClass('fadeout')
  $('.scroll').slideToggle('');
  $(".Y").slideToggle(800);
  });
(window.onload = function() {
    // フェードイン処理
  jQuery(window).scroll(function (){
    jQuery(".fade2").each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("fadein");
      } else {
        //　スクロールで画面上部に戻った際に要素を非表示にしたい場合
        // jQuery(this).removeClass("fadein");
      }
    });
  });
})();