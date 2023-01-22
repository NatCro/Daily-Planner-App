// need loop to check for current time against all time blocks
//need variable for current time


$(document).ready(function(){
    $(".saveBtn").on("click", function(){
    //this gets nearby values of description class
    var value = $(this.siblings(".description")).val();
    //this is = of the parent attributte hour-# (e.g.9)
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
})
})

//variable for current time to compare to each section

// function to check for the current time and check the colour is correct (change the class to reflect the colour?)

//save text to the box by logging to local storage

//display current date/time at the top of the page
var currentTime = moment().format("dddd MM YYYY HH:mm")
document.getElementById("currentDay").innerHTML = currentTime


//seeing what the time is to change the colour of the block
var timeCompare = parseInt(moment().format("HH"))

console.log(timeCompare)

