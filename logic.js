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
var timeCompare = parseInt(moment().format("hh"))




let selectedIndex;

for (let i = 1; i <= 12; i++) {
    //cycle through all ids
    let element = document.getElementById(i);
    //check to see if the time matches that in the innerHTML
    if (timeCompare + "am" === element.childNodes[1].innerHTML || timeCompare + "pm" === element.childNodes[1].innerHTML) {
        //add the present class to the current time
      element.childNodes[3].classList.add("present");
      selectedIndex = i;
    }
}
//adding the past class to all previous time blocks
for (let i = 1; i < selectedIndex; i++) {
    let element = document.getElementById(i);
    element.childNodes[3].classList.add("past");
}
//adding the future class to all future time blocks
for (let i = selectedIndex + 1; i <= 12; i++) {
    let element = document.getElementById(i);
    element.childNodes[3].classList.add("future");
}






