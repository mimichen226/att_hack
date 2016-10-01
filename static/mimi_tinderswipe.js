$(document).ready(function(){
    // Function for swiping right
    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);      // Rotate image after swiping
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');     // Display the message "Like!"


      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

    // Function for swiping left 
   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);       // Rotate image after swiping
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike</div>');   // Dsiplay the message "Dislike"

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });


});

