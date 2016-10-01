// GLOBAL VARIABLES 

// Create a list of food selection
var selection = [];
var currentFood;
var feeling;
// Data holding food data
//var data = '{"food": [{"rest_type": "asian","foodname": "ramen","image": "http://static.wixstatic.com/media/78181f_6bca9a6dedd74e6b9c744c0fbea1dadb.jpg_srz_669_446_85_22_0.50_1.20_0.00_jpg_srz"},{"rest_type": "mexican","foodname": "taco","image": "http://s3.amazonaws.com/etntmedia/media/images/ext/102501580/taco-bell-shredded-chicken-soft-taco-md.jpg"},{"rest_type": "american","foodname": "pizza","image": "http://cache.boston.com/bonzai-fba/Original_Photo/2011/11/23/pizza__1322067494_5957.jpg"},{"rest_type": "american","foodname": "burger","image": "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"},{"rest_type": " ","foodname": " ","image": "https://secure.static.tumblr.com/23b7a2ddc35b0dbb8fcf30fa9062c812/rd5zybt/uRYnkbaam/tumblr_static_b457m5mq054w88k8kw48s84s4_640_v2.png"}]}';
var data = '{"food": [{"rest_type": "mexican","foodname": "burrito","image": "http://www.cheatsheet.com/wp-content/uploads/2015/04/hot-fresh-breakfast-burrito.jpg"},{"rest_type": "asian","foodname": "chowmein","image": "http://a.ctimg.net/6XefNw7DRYqzu99EuqarJw/recipechicken-chow-mein.jpg"},{"rest_type": "mexican","foodname": "taco","image": "http://s3.amazonaws.com/etntmedia/media/images/ext/102501580/taco-bell-shredded-chicken-soft-taco-md.jpg"},{"rest_type": "american","foodname": "maccheese","image": "http://spicysouthernkitchen.com/wp-content/uploads/velveeta-mac-and-cheese-22.jpg"},{"rest_type": "asian","foodname": "ramen","image": "http://static.wixstatic.com/media/78181f_6bca9a6dedd74e6b9c744c0fbea1dadb.jpg_srz_669_446_85_22_0.50_1.20_0.00_jpg_srz"},{"rest_type": "mexican","foodname": "enchillada","image": "http://www.drodd.com/images15/enchilada-recipe19.jpeg"},{"rest_type": "american","foodname": "pizza","image": "http://cache.boston.com/bonzai-fba/Original_Photo/2011/11/23/pizza__1322067494_5957.jpg"},{"rest_type": "american","foodname": "burger","image": "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"},{"rest_type": "asian","foodname": "bao","image": "http://www.cinamilano.it/wp-content/uploads/2014/05/baozi.jpg"},{"rest_type": " ","foodname": " ","image": "https://secure.static.tumblr.com/23b7a2ddc35b0dbb8fcf30fa9062c812/rd5zybt/uRYnkbaam/tumblr_static_b457m5mq054w88k8kw48s84s4_640_v2.png"}]}';
// New dictionary -- key: foodtype, value: count
var foodCount = {
    mexican: 0,
    asian: 0,
    american:0
};


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// FUNCTIONS

// Function that counts how many mexican, american, asian food by changing foodCount
var count_food = function(){
    var total;
    // Add to count dictionary
        var i = selection.length - 1;
        if (selection[i] === 'mexican'){
            foodCount.mexican += 1;
        }
        else if (selection[i] === 'asian'){
            foodCount.asian += 1;
        }
        else if (selection[i] === 'american'){
            foodCount.american += 1;
        }

    // Determine foodCount max value
    var arr = Object.keys( foodCount ).map(function ( key ) { return foodCount[key]; });
    //var min = Math.min.apply( null, arr );
    var max = Math.max.apply( null, arr );

    return max;
}

// Check total yes to food
var check_yes = function(){
    var total_yes = foodCount.american + foodCount.mexican + foodCount.asian;
    return total_yes;
}

// Determine which restaurant based upon max in list
var give_restaurant = function(){
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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Function that performs after HTML is loaded
$(document).ready(function(){

    // Parse data 
    var food_data = JSON.parse(data);
    console.log(food_data);
        
        var count = 0; // index for food
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
            selection.push(currentFood.rest_type);
            feeling = count_food();
            count+=1;
            currentFood = food_data.food[count];
            img.src = currentFood.image;
            alert("Swiping left");

            // Check if reaching the end
            if (count === 9){
            alert("Mexican: " + foodCount.mexican + ", Asian: " + foodCount.asian + " , American: " + foodCount.american);
            };

        });

        // Click "no"
        $("button.no").click(function(){
            count+=1;
            console.log('no');
            console.log(foodCount);
            currentFood = food_data.food[count];
            img.src = currentFood.image;
            
            // Check if reaching the end
            if (count === 9){
            alert("Mexican: " + foodCount.mexican + ", Asian: " + foodCount.asian + " , American: " + foodCount.american);
            };
        }); 

        // Click "yes"
        $("button.yes").click(function(){
            selection.push(currentFood.rest_type);
            feeling = count_food();
            console.log('yes');
            console.log(foodCount);

            count+=1;

            // Check if reaching the end
            if (count === 9){
            alert("Mexican: " + foodCount.mexican + ", Asian: " + foodCount.asian + " , American: " + foodCount.american);
            };

            currentFood = food_data.food[count];
            img.src = currentFood.image;
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