// GLOBAL VARIABLES 

// Create a list of food selection
var selection = [];
var currentFood;
var feeling;
// Data holding food data
var data = '{"food": [{"rest_type": "mexican","foodname": "burrito","image": "http://www.cheatsheet.com/wp-content/uploads/2015/04/hot-fresh-breakfast-burrito.jpg"},{"rest_type": "asian","foodname": "chowmein","image": "http://a.ctimg.net/6XefNw7DRYqzu99EuqarJw/recipechicken-chow-mein.jpg"},{"rest_type": "mexican","foodname": "taco","image": "http://s3.amazonaws.com/etntmedia/media/images/ext/102501580/taco-bell-shredded-chicken-soft-taco-md.jpg"},{"rest_type": "american","foodname": "maccheese","image": "http://spicysouthernkitchen.com/wp-content/uploads/velveeta-mac-and-cheese-22.jpg"},{"rest_type": "asian","foodname": "ramen","image": "http://static.wixstatic.com/media/78181f_6bca9a6dedd74e6b9c744c0fbea1dadb.jpg_srz_669_446_85_22_0.50_1.20_0.00_jpg_srz"},{"rest_type": "mexican","foodname": "enchillada","image": "http://www.drodd.com/images15/enchilada-recipe19.jpeg"},{"rest_type": "american","foodname": "pizza","image": "http://cache.boston.com/bonzai-fba/Original_Photo/2011/11/23/pizza__1322067494_5957.jpg"},{"rest_type": "american","foodname": "burger","image": "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"},{"rest_type": "asian","foodname": "bao","image": "http://www.cinamilano.it/wp-content/uploads/2014/05/baozi.jpg"},{"rest_type": " ","foodname": " ","image": "images/ItsAMatch.png"}]}';
//var restaurant = '{"restaurant": [{"rest_type": "mexican","rest_name": "Salsas","address": "Grape & Day Center, 4160 Grape Rd, Mishawaka, IN 46545","image": "https://media-cdn.tripadvisor.com/media/photo-s/02/d7/d2/bb/salsa-s.jpg"},{"rest_type": "asian","rest_name": "JW Chen","address": "1835 S Bend Ave, South Bend, IN 46637","image": "https://media-cdn.tripadvisor.com/media/photo-s/0b/98/80/5e/jw-chen-s.jpg"},{"rest_type": "mexican-american","rest_name": "Chipotle","address": "Eddy Street Commons, 1251 N Eddy St #101, South Bend, IN 46601","image": "http://i.huffpost.com/gen/2871550/images/o-CHIPOTLE-DELIVERY-facebook.jpg"},{"rest_type": "american","rest_name": "Five Guys","address": "Eddy Street Commons, 1233 N Eddy St, South Bend, IN 46617","image": "http://i3.liverpoolecho.co.uk/incoming/article10217278.ece/ALTERNATES/s1227b/Five-Guys-Uxbridge-LR-87.jpg"},{"rest_type": "asian-american","rest_name": "Panda Express","address": "4906 Grape Rd, Mishawaka, IN 46544","image": "http://static.comicvine.com/uploads/original/11113/111130700/4588389-4060048401-2c30f.jpg"},{"rest_type": "asian-mexican","rest_name": "South Dining Hall","address": "Notre Dame, IN 46556","image": "http://my.nd.edu/s/1210/images/editor/_cheer/on_the_list/sdh2_directions.jpg"}]}';
//var restaurant = '{"restaurant": [{"rest_type": "mexican","rest_name": "Salsas","address": "Grape & Day Center, 4160 Grape Rd, Mishawaka, IN 46545","image": "images/salsas.png","yelp":"https://www.yelp.com/biz/salsas-mexican-grill-mishawaka?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"},{"rest_type": "asian","rest_name": "JW Chens","address": "1835 S Bend Ave, South Bend, IN 46637","image": "images/jwchen.png"},{"rest_type": "mexican-american","rest_name": "Chipotle","address": "Eddy Street Commons, 1251 N Eddy St #101, South Bend, IN 46601","image": "images/chipotle.png"},{"rest_type": "american","rest_name": "Five Guys","address": "Eddy Street Commons, 1233 N Eddy St, South Bend, IN 46617","image": "images/fiveguys.png"},{"rest_type": "asian-american","rest_name": "Panda Express","address": "4906 Grape Rd, Mishawaka, IN 46544","image": "images/pandaex.png"},{"rest_type": "asian-mexican","rest_name": "South Dining Hall","address": "Notre Dame, IN 46556","image": "images/sdh.png"}]}';
var restaurant = '{"restaurant":[{"rest_type":"mexican","rest_name":"Salsas","address":"Grape & Day Center, 4160 Grape Rd, Mishawaka, IN 46545","image":"images/salsas.png","gmap" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.044280203206!2d-86.18774484933242!3d41.697979784544394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816d20806f7b8d9%3A0x4382bc2490ca9813!2s4160+Grape+Rd%2C+Mishawaka%2C+IN+46545!5e0!3m2!1sen!2sus!4v1475389583837"},{"rest_type":"asian","rest_name":"JW Chens","address":"1835 S Bend Ave, South Bend, IN 46637","image":"images/jwchen.png","gmap":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.0501769596917!2d-86.2234547493324!3d41.69785248455231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd7de0fa5ae1%3A0x9d7164dc09e38b46!2s1835+S+Bend+Ave%2C+South+Bend%2C+IN+46637!5e0!3m2!1sen!2sus!4v1475389872147"},{"rest_type":"mexican-american","rest_name":"Chipotle","address":"Eddy Street Commons, 1251 N Eddy St #101, South Bend, IN 46601","image":"images/chipotle.png","gmap":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.318977934527!2d-86.23802759933261!3d41.6920492349142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd677bfc1aa5%3A0xe98b44b3ddab3b45!2s1251+N+Eddy+St+%23101%2C+South+Bend%2C+IN+46601!5e0!3m2!1sen!2sus!4v1475389928265" },{"rest_type":"american","rest_name":"Five Guys","address":"Eddy Street Commons, 1233 N Eddy St, South Bend, IN 46617","image":"images/fiveguys.png","gmap":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.3384979039597!2d-86.2381705493326!3d41.69162778494059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd67804f4d87%3A0x6d760fd9d10792!2s1233+N+Eddy+St%2C+South+Bend%2C+IN+46617!5e0!3m2!1sen!2sus!4v1475389998954"},{"rest_type":"asian-american","rest_name":"Panda Express","address":"4906 Grape Rd, Mishawaka, IN 46544","image":"images/pandaex.png","gmap":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.7757560713817!2d-86.18969004933216!3d41.70377638418283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816d20f1bc0753b%3A0x8d59724e57c621e0!2s4906+Grape+Rd%2C+Mishawaka%2C+IN+46545!5e0!3m2!1sen!2sus!4v1475390050383" },{"rest_type":"asian-mexican","rest_name":"South Dining Hall","address":"Notre Dame, IN 46556","image":"images/sdh.png","gmap":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.975905936866!2d-86.24364499933233!3d41.69945583445241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816d2a755a2f97d%3A0x46af6fb878365f39!2sSouth+Dining+Hall%2C+Notre+Dame%2C+IN+46556!5e0!3m2!1sen!2sus!4v1475390109181"}]}';
var userpic = 'images/mimi_icon.png';
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
    // Select a restaurant 
    var restaurant_data = JSON.parse(restaurant);

    if ((foodCount.asian > foodCount.mexican) && (foodCount.asian > foodCount.american)){
        rec_restaurant = restaurant_data.restaurant[1];
    }
    else if ((foodCount.asian > foodCount.mexican) && (foodCount.asian === foodCount.american)){
        rec_restaurant = restaurant_data.restaurant[4];
    }
    else if ((foodCount.mexican > foodCount.asian) && (foodCount.mexican > foodCount.american)){
        rec_restaurant = restaurant_data.restaurant[0];
    }
    else if ((foodCount.american > foodCount.asian) && (foodCount.american > foodCount.mexican)){
        rec_restaurant = restaurant_data.restaurant[3];
    }
    else if ((foodCount.american > foodCount.asian) && (foodCount.american === foodCount.mexican)){
        rec_restaurant = restaurant_data.restaurant[2];
    }
    else{
        rec_restaurant = restaurant_data.restaurant[5];
    }

    return rec_restaurant;
    
};

// Insert into HTML file
var insertHTML = function(){
            var go_here = give_restaurant();
            document.getElementById("pop-up").innerHTML = go_here.rest_name;
            document.getElementById("address").innerHTML = go_here.address ;
            document.getElementById("message").innerHTML = "You and" + " " + go_here.rest_name + " " + "like each other!";
            document.getElementById("restaurant-pic").src = go_here.image;
            document.getElementById("user-pic").src= userpic;
            document.getElementById("user-pic").style.display="block";
            document.getElementById("restaurant-pic").style.display = "block";
            document.getElementById("btnYes").style.display = "none";
            document.getElementById("btnNo").style.display = "none";
            document.getElementById("header").style.display = "none";  
            document.getElementById("googlemap").src=go_here.gmap;
            document.getElementById("googlemap").style.display = "block";
            //document.getElementById("yelp-salsas").style.display = "block";
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
            //alert("Swiping right");
            if (count === 9){
            alert("Mexican: " + foodCount.mexican + ", Asian: " + foodCount.asian + " , American: " + foodCount.american);
            insertHTML();

            };

        });

        // Do following if swiped left
        $("img").on("swipeleft",function(){
            selection.push(currentFood.rest_type);
            feeling = count_food();
            count+=1;
            currentFood = food_data.food[count];
            img.src = currentFood.image;
            //alert("Swiping left");

            // Check if reaching the end
            if (count === 9){
            alert("Mexican: " + foodCount.mexican + ", Asian: " + foodCount.asian + " , American: " + foodCount.american);
            var go_here = give_restaurant();

            insertHTML();

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
            var go_here = give_restaurant();

            insertHTML();

            };
        }); 

        // Click "yes"
        $("button.yes").click(function(){
            selection.push(currentFood.rest_type);
            feeling = count_food();
            console.log('yes');
            console.log(foodCount);

            count+=1;
            currentFood = food_data.food[count];
            img.src = currentFood.image;

            // Check if reaching the end
            if (count === 9){
                alert("Mexican: " + foodCount.mexican + ", Asian: " + foodCount.asian + " , American: " + foodCount.american);
                
                insertHTML();

            };


        }); 

});
