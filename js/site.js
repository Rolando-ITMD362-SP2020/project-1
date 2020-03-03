jQuery(function($) {
  $('html').removeClass('nojs');
  $("html").addClass("hasjs");



  // $('input:text').focus(function() {
  //   $(this).css({ 'background': 'Black' });
  // });

  // $('input:text').blur(function() {
  //   $(this).css({ 'background': 'red' });
  // });

});

$(".field").bind('focus blur', function() {
  $(this).toggleClass('red');
});