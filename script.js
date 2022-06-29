// Load current date at bottom of header
let today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY"));

// Assign object to localStorage
let tasks = {
    // date: today
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": []
};

// Add tasks to localStorage
let setTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Click handler for tasks
$(".task").click(function() {

    // Save tasks if already clicked
    $("textarea").each(function() {
        replaceTextarea($(this));
    })

    let time = $(this).closest(".task-info").attr("id");
    if (parseInt(time) >= moment().hour()) {
        let text = $(this).text();
        let textInput = $("<textarea>")
            .addClass("form-control")
            .val(text);

        $(this).html(textInput);
        textInput.trigger("focus");
    }
})


// Click handler for saving tasks
$(".saveBtn").click(function() {
    replaceTextarea($(this));
})







// Color-code time blocks for past, present, or future

// On time block click, events can be entered and saved in local storage. Upon page refresh, saved events persist.