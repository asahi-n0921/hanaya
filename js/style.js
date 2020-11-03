// $(function () {
//   $('.menu').on('click', function () {
//     $(this).toggleClass('active');
//     $("#nav").toggleClass('active');
//   })
// }) $(function () {
//   $('#nav a').on('click', function () {
//     $('#nav').toggleClass('active');
//     $(".menu").toggleClass('active');
//   })
// });


// ハンバーガーメニュー
$(function () {
	$('.Nav__toggle').click(function () {
		$(this).toggleClass('active');
		$('.Nav__bg').fadeToggle();
		$('.Hamburger').toggleClass('open');
	})
	$('.Nav__bg').click(function () {
		$(this).fadeOut();
		$('.Nav__toggle').removeClass('active');
		$('.Hamburger').removeClass('open');
	});
});

// ヘッダースクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});