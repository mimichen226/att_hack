/*
Function that associates food type with a value

mexican = 0
asian = 1
american = 2

var foodType = {
    mexican: 0,
    asian: 1,
    american: 2
};

*/

// Create a list of food selection
var selection = [];

//console.log(selection);


// Data holding food data
var data = '{"food": [{"rest_type": "asian","foodname": "ramen","image": "http://static.wixstatic.com/media/78181f_6bca9a6dedd74e6b9c744c0fbea1dadb.jpg_srz_669_446_85_22_0.50_1.20_0.00_jpg_srz"},{"rest_type": "mexican","foodname": "taco","image": "http://s3.amazonaws.com/etntmedia/media/images/ext/102501580/taco-bell-shredded-chicken-soft-taco-md.jpg"},{"rest_type": "american","foodname": "pizza","image": "http://cache.boston.com/bonzai-fba/Original_Photo/2011/11/23/pizza__1322067494_5957.jpg"},{"rest_type": "american","foodname": "burger","image": "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"}]}';


// New dictionary -- key: foodtype, value: count
var foodCount = {
    mexican: 0,
    asian: 0,
    american:0
};


//console.log(foodCount);

// Function adds food to selection
var add_to_foodCount = function(food){
    selection.push(food)
}


// Function that counts how many mexican, american, asian food by changing foodCount
var count_food = function(){
    var total;
    // Loop through selection to count the food type user selected
    for (i = 0; i < selection.length;i++){
        if (selection[i] === 'mexican'){
            foodCount.mexican += 1;
        }
        else if (selection[i] === 'asian'){
            foodCount.asian += 1;
        }
        else if (selection[i] === 'american'){
            foodCount.american += 1;
        }
    }
    //total = foodCount.american + foodCount.mexican + foodCount.asian;

    // Determine foodCount max value
        var arr = Object.keys( foodCount ).map(function ( key ) { return foodCount[key]; });
        var min = Math.min.apply( null, arr );
        var max = Math.max.apply( null, arr );
    //console.log(max);
    return max;
}
    //console.log(foodCount);
    

var find_max = function(){
    // Prints key with max value in dictionary
    var max = Object.keys(foodCount).reduce(function(a, b){ return foodCount[a] > foodCount[b] ? a : b });
    //console.log(max);
    
    // Create list of restaurant 
    // Can create one list, and just random generate between certain numbers
    var asian_rest = ['Ichiban','Creasian',"JW Chen's",'Seoul Garden'];
    var mex_rest = ['Taco Bell',"Flamingo's","Chipotle"];
    var amer_rest = ['Pancake House','Five Guys','Chik-Fil-A'];
    if (max == 'asian'){
        var rand = asian_rest[Math.floor(Math.random() * asian_rest.length)];
    }
    else if (max == 'american'){
        var rand = amer_rest[Math.floor(Math.random() * amer_rest.length)];
    }
    else if (max == 'mexican'){
        var rand = mex_rest[Math.floor(Math.random() * mex_rest.length)];
    }
    //console.log(rand);
    return rand;
    
};


// Function that creates a click button
function click_button(){
    document.getElementById("pop-up").innerHTML = "Paragraph changed!";

};

// Function that checks if works
var checkCount = function(){
    console.log("It works!!");
};
var currentFood;
// Function that performs after HTML is loaded
$(document).ready(function(){
    // Parse data 
    var food_data = JSON.parse(data);
    console.log(food_data);
    //console.log(food_data.food[0].rest_type);

    // Loop through every element in food_data
    //for (i = 0; i < food_data.food.length; i++){
        var count = 0;
        currentFood = food_data.food[count];

    // Show image
        var img = new Image();
        img.src = currentFood.image;
        img.setAttribute("class", "swipable-img");
        img.setAttribute("alt", "effy");
        document.getElementById("img-container").appendChild(img);

        // Do following if swiped right
        $("img").on("swiperight",function(){
            count+=1;
            currentFood = food_data.food[count];
            img.src = currentFood.image;
            alert("Swiping right");

        });

        // Do following if swiped left
        $("img").on("swipeleft",function(){
            count+=1;
            currentFood = food_data.food[count];
            img.src = currentFood.image;
            alert("Swiping left");

        });

        // Click "no"
        $("button.no").click(function(){
            count+=1;
            feeling = count_food();
            currentFood = food_data.food[count];
            img.src = currentFood.image;
            alert("NO: New picture:" + " " + selection);
        }); 

        // Click "yes"
        $("button.yes").click(function(){
            selection.push(currentFood.rest_type);
            var feeling = count_food();
            alert(feeling);

            /*if (feeling > 3){
                alert(find_max());
            };
            */

            count+=1;
            currentFood = food_data.food[count];
            img.src = currentFood.image;

            alert("YES: New picture:" + " " + selection);
        }); 

/*
        function click_no(){
            count+=1;
            var currentFood = food_data.food[count];
            img.src = currentFood.image;
            alert("New picture");
        }*/

    

    // Function for swiping right
    /*
    $(".swipable-img").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);      // Rotate image after swiping
      count += 1;
      selection.push();
      checkCount();
      $('.swipable-img').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');     // Display the message "Like!"


      if ( $(this).is(':last-child') ) {
        $('.swipable-img:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);}
       // var currentFood = food_data.food[count];

        var currentFood = food_data.food[count];

        // Show image
        var img = new Image();
        img.src = currentFood.image;
        img.setAttribute("class", "swipable-img");
        img.setAttribute("alt", "effy");
        document.getElementById("img-container").appendChild(img);
       
    });  

    // Function for swiping left 
   $(".swipable-img").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);       // Rotate image after swiping
    $('.swipable-img').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike</div>');   // Dsiplay the message "Dislike"

    if ( $(this).is(':last-child') ) {
     $('.swipable-img:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });
*/

});


//document.write(main());