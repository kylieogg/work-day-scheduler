// function to get and display current date at top of application
let today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY"));

$(document).ready(function () {
    // Click event listener for save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save task in local storage
        localStorage.setItem(time, text);
    }) 

    function trackTime() {
        // Gets current time
        var currentTime = moment().hour();

        $("")
    }        
})





// Color-code time blocks for past, present, or future





// Get items from local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));









