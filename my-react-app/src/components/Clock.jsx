import React, { useState, useEffect } from "react"
import Calendar from "./Calendar.jsx"
import texture from "../assets/texture.jpg"
function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    var toRegHours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", //am 0 - 11
                      "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]; //pm 12 - 23
    var hours = toRegHours[time.getHours()];

    var minutes = 0;
    if(time.getMinutes() < 10){
        minutes = "0" + time.getMinutes();
    } 
    else{
        minutes = time.getMinutes();
    }

    const blue = {
        color: '#147efb'
    };

    const white = {
        color: '#FDFFF5'
    };

    return(
        <section id="clock-wrapper">
            <img id="img-texture-2" src={texture} alt="Background Texture" />
            <div id="clock-items">
                <div id="clock-time">
                    <Calendar />    
                    <p className="time">{hours}</p>
                    <p className="time" id="colon">:</p>
                    <p className="time">{minutes}</p>
                    <div id="ampm">
                        <p style={time.getHours() < 12 ? blue : white}>am</p>
                        <p style={time.getHours() >= 12 ? blue : white}>pm</p>
                    </div>
                </div>
                <div id="clock-day">
                    <p style={time.getDay() == 1 ? blue : white}>mon</p>
                    <p style={time.getDay() == 2 ? blue : white}>tue</p>
                    <p style={time.getDay() == 3 ? blue : white}>wed</p>
                    <p style={time.getDay() == 4 ? blue : white}>thu</p>
                    <p style={time.getDay() == 5 ? blue : white}>fri</p>
                    <p style={time.getDay() == 6 ? blue : white}>sat</p>
                    <p style={time.getDay() == 0 ? blue : white}>sun</p>
                </div>
            </div>
        </section>
    )
}

export default Clock