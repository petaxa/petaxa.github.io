

$('#silica').click(function(){
  $('#silica-modal').slideDown();
  if($(this).find('contents')){
    $('.modal').slideUp();
  }
});

$('#kirito').click(function(){
  $('#kirito-modal').slideDown();
  if($(this).find('contents').click()){
    $('.modal').slideUp();
  }
});

$('#asuna').click(function(){
  $('#asuna-modal').slideDown();
  if($(this).find('contents').click()){
    $('.modal').slideUp();
  }
});

var aiueo=$(this).find('contents').click();

$('.close-modal').click(function(){
  $('.modal').slideUp();
});
