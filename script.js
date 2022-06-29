// Load current date at bottom of header
let today = moment();

$("#currentDay").text(today.format("MMMM Do YYYY"));

//function compareInput() {
    //let currentTime = moment().format('h:mm a');
//}



// Color-code time blocks for past, present, or future

// On time block click, events can be entered and saved in local storage. Upon page refresh, saved events persist.