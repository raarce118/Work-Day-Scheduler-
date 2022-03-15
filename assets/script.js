// Get current day using moment.js
var currentDay = moment().format("dddd, MMMM Do YYYY");
// Display current day at top of planner
$("#currentDay").text(currentDay);