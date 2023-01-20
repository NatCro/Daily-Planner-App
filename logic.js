// need loop to check for current time against all time blocks
//need variable for current time


$(dcument).ready(function(){
    $(".saveBtn").on("click", function(){
    //this gets nearby values of description class
    var value = $(this.siblings(".description")).val();
    //this is = of the parent attributte hour-# (e.g.9)
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
})
})