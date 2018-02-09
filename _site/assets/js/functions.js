$(document).ready(function() {


  $('.menu-icon').click(function(){
  	$('.side-bar-modal').addClass('is-open');
  });

  $('.side-bar-modal').click(function(event){
   if (event.target == this){
     $('.side-bar-modal').removeClass('is-open');
   }
  });



  $('.filter-icon').click(function(){
    $('.filter-wrapper').toggleClass('is-open');
  });


  $('.filter-btn').click(function(){
    $('.filter-btn').toggleClass('is-active');
  });

  // $('.add-deal-btn').click(function(){
  // 	$('.deal-modal').addClass('is-open');
  // });
  //
  // $('.close-btn').click(function(){
  // 	$('.deal-modal').removeClass('is-open');
  // });

});





/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// notification modal
  $('.notifications-icon').click(function(){
      $('.notif-modal-bg').addClass('is-open');
      // return false
    });

     $('.notif-close').click(function(){
      $('.notif-close').addClass('is-close');

    });

    $('.notif-close').click(function(){
     $('.notif-clear').addClass('is-open');

    });

    $('.notif-clear').click(function(){
     $('.notify').addClass('is-close');

   });

   $('.notif-clear').click(function(){
    $('.notify-empty').addClass('is-open');

  });

     $('.notif-modal-bg').click(function(event){
      if (event.target == this){
        $('.notif-modal-bg').removeClass('is-open');
      }


    });

    // $('.setting-icon').click(function(){
    //  $('.notif-setting').addClass('is-open');
    //
    // });
