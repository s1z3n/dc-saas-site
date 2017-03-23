$(document).ready(function() {


  $('.contact-nav').click(function(){
  	$('.modal-bg').addClass('is-open');

  });

   $('.close').click(function(){
  	$('.modal-bg').removeClass('is-open');
  });

   $('.modal-bg').click(function(event){
   	if (event.target == this){
   		$('.modal-bg').removeClass('is-open');
   	}
