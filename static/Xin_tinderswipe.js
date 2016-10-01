var food = {'taco':0,'burrito':0,'fajita':0,'quesadilla':0,'enchillada':0,
        'rice':1, 'ramen':1,'wonton':1,'bao':1,'dumpling':1,
        'fries':2,'pizza':2,'hamburger':2,'sandwich':2,'macncheese':2};
var response = {'Mexican':0,'Asian':0,'American':0};
var taco = document.getElementById('yourImgId');



$(document).ready(function(){

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});



for (item in food) {
    answer = raw_input("{}? ".format(item))
    if answer == 'yes':
        ugh.append(food[item])
}

for (index in ugh) {
    if index == 0:
        response['Mexican'] += 1
    if index == 1:
        response['Asian'] += 1
    if index == 2:
        response['American'] += 1
}
