import React from "react"

function Calendar() {

    const today = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var currMonth = months[today.getMonth()];


    return(
        <div id="calendar-wrapper">
            <p id="calendar-month">{currMonth}</p>
            <p id="calendar-day">{today.getDate()}</p>
        </div>
    )
}

export default Calendar