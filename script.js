
$('.top-text').slideDown(1250);








// modal
// contents-modal
$('#saoif').click(function(){
  $('.motojime').fadeOut();
  $('#saoif-modal').slideDown();
});
$('#progate').click(function(){
  $('.motojime').fadeOut();
  $('#progate-modal').slideDown();
});

$('#bicycle').click(function(){
  $('.motojime').fadeOut();
  $('#bicycle-modal').slideDown();
});


$('.close-modal').click(function(){
  $('.motojime').fadeIn();
  $('.modal').slideUp();
});
// おしまい

// menu-modal
$('#bars').click(function(){
  if($('#bars').hasClass('open')){
    $('#menu-modal').slideDown(150);
    $('#bars').removeClass('open');
  } else{
    $('#menu-modal').slideUp(300);
    $('#bars').addClass('open');
  }
});

$('#contact-btn').click(function(){
  $('.contact-form').fadeIn();
});

$('#close-contact').click(function(){
  $('.contact-form').fadeOut();
});
