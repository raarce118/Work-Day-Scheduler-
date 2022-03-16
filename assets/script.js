// Get current day using moment.js
var currentDay = moment().format("dddd, MMMM Do YYYY");
// Display current day at top of planner
$("#currentDay").html(currentDay);

$(document).ready(function () {
// saveBtn click listener 
$(".saveBtn").on("click", function () {
// Get nearby values of the description in JQuery
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

 // Save task text in storage
 localStorage.setItem(time, text);
});
   
function timeTracker() {

var timeNow = moment().hour();


$(".time-block").each(function () {
 var blockTime = parseInt($(this).attr("id").split("hour")[1]);

// Check Time
if (blockTime < timeNow) {
$(this).removeClass("future");
$(this).removeClass("present");
$(this).addClass("past");
}
 else if (blockTime === timeNow) {
$(this).removeClass("past");
$(this).removeClass("future");
$(this).addClass("present");
}
else {
$(this).removeClass("present");
$(this).removeClass("past");
$(this).addClass("future");

}
})

        
}
//get task from storage 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
    
timeTracker();

})