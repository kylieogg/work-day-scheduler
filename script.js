// Load current date at bottom of header
let today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY"));

// Assign object to localStorage
let tasks = {
    date: today
};
// Add tasks to localStorage
let setTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}





// Color-code time blocks for past, present, or future

// On time block click, events can be entered and saved in local storage. Upon page refresh, saved events persist.