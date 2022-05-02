// tells engine to load html and css first.
$(document).ready(function(){
    // display current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // assign saveBtn click listener for user input and time stamp
    $(".saveBtn").on("click", function(){
        // gets nearby values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // sets items in local storage
        localStorage.setItem(time, text);
    })
    // load any saved data from local storage for each hour created.
    $("#hour0 .description").val(localStorage.getItem("hour0"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
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
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));
    $("#hour22 .description").val(localStorage.getItem("hour22"));
    $("#hour23 .description").val(localStorage.getItem("hour23"));

    function hourTracker(){
        // get current number of hours
        var currentHour = moment().hour();

        // time block loop
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            // time check to see if we've moved past this time
            if (blockHour < currentHour){
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})