var time = new Date();



time.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric',
hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
});

var clock = document.querySelector("#clock");

// add the time to the UI
var renderTime = function (){
    var time = new Date();
    clock.textContent = time.toLocaleString("en-US", {year:"numeric", month:"long", day:"numeric",
hour:"numeric", minute:"numeric",second:"numeric", hour12:true});
};

// Update the time every second
setInterval(renderTime,1000);



$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});


$('.saveBtn').on('click', function(){
    
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
      
        var value = localStorage.getItem(id);

        $(this).val(value);
        
        console.log(value);
        
       
        

      
    }); 
});



document.getElementById("09").value = getSavedValue("09");
document.getElementById("10").value = getSavedValue("10");
document.getElementById("11").value = getSavedValue("11");
document.getElementById("12").value = getSavedValue("12");
document.getElementById("13").value = getSavedValue("13");
document.getElementById("14").value = getSavedValue("14");
document.getElementById("15").value = getSavedValue("15");
document.getElementById("16").value = getSavedValue("16");
document.getElementById("17").value = getSavedValue("17");


// Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem("col-10", val);// Every time user writing something, the localStorage's value will override . 
  
}



// get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}





// color alert 

var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "taskarea"
    var timeBlockElements = $(".col-10");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}


// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);