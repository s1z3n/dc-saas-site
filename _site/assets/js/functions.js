$(document).ready(function() {


  $('.menu-icon').click(function(){
  	$('.side-bar-modal').addClass('is-open');

  });

  $('.side-bar-modal').click(function(event){
   if (event.target == this){
     $('.side-bar-modal').removeClass('is-open');
   }


  });

});

  //  $('.close').click(function(){
  // 	$('.modal-bg').removeClass('is-open');
  // });
  //
  //  $('.navigation').click(function(event){
  //  	if (event.target == this){
  //  		$('.navigation').removeClass('is-open');
  //  	}
