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

    $('.setting-icon').click(function(){
     $('.notif-setting').addClass('is-open');

    });


    // $('.more-btn').click(function(){
    //     $('.hidden-btn').addClass('is-open');
    //     // return false
    //   });
    //
    //
    //   $('body').click(function(event){
    //    if (event.target == this){
    //      $('.hidden-btn').removeClass('is-open');
    //    }
    //
    //
    //  });




// setting modals

$('#bentity').click(function(){
  $('.bentity-modal').addClass('is-open');

});

 $('.back-btn').click(function(){
  $('.bentity-modal').removeClass('is-open');
});



$('#system-config').click(function(){
  $('.system-config-modal').addClass('is-open');

});

 $('.back-btn').click(function(){
  $('.system-config-modal').removeClass('is-open');
});








function showHideInfo() {
  if(document.getElementById('app-check').checked){
    document.getElementById('app-hide').style.display='block';

  }  else {document.getElementById('app-hide').style.display='none';

  }
  if(document.getElementById('set-check').checked){
    document.getElementById('set-hide').style.display='block';

  }  else {document.getElementById('set-hide').style.display='none';

  }
  if(document.getElementById('facility-check').checked){
    document.getElementById('fac-hide').style.display='block';

  }  else {document.getElementById('fac-hide').style.display='none';

  }

}






$('#dp-add-info').click(function(){
  $('.add-info-modal').addClass('test-open');

});

//  $('.add-info-modal').click(function(event){
//   if (event.target == this){
//     $('.add-info-modal').removeClass('test-open');
//   }
//
//
// });
