import React, { useState, useEffect } from "react"

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    var hours = 0;
    var minutes = 0;
    
    if(time.getHours() < 10){
        if(time.getHours() == 0){
            hours = 12;
        } else{
            hours = "0" + time.getHours();
        }
    } else {
        if(time.getHours() > 12) {
            hours = time.getHours() - 12;
            
        } else{
            hours = time.getHours();
        }
    }

    if(time.getMinutes() < 10){
        minutes = "0" + time.getMinutes();
    } else{
        minutes = time.getMinutes();
    }
   
    
    if(time.getHours() < 12){
        if(time.getDay() == 1){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p style={timeStyle}>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 2){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p style={timeStyle}>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 3){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p style={timeStyle}>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 4){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p style={timeStyle}>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 5){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p style={timeStyle}>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 6){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p style={timeStyle}>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 0){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p style={timeStyle}>am</p>
                            <p>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p style={timeStyle}>sun</p>
                    </div>
                </section>
            )
        }

        
    } else {
        if(time.getDay() == 1){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p style={timeStyle}>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 2){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p style={timeStyle}>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 3){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p style={timeStyle}>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 4){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p style={timeStyle}>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 5){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p style={timeStyle}>fri</p>
                        <p>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 6){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p  style={timeStyle}>sat</p>
                        <p>sun</p>
                    </div>
                </section>
            )
        }
        if(time.getDay() == 0){
            const timeStyle = {
                color: '#147efb'
            };
            return(
                <section id="clock-wrapper">
                    <div id="clock-time">
                        <p className="time">{hours}</p>
                        <p className="time" id="colon">:</p>
                        <p className="time">{minutes}</p>
                        <div id="ampm">
                            <p>am</p>
                            <p style={timeStyle}>pm</p>
                        </div>
                    </div>
                    <div id="clock-day">
                        <p>mon</p>
                        <p>tue</p>
                        <p>wed</p>
                        <p>thu</p>
                        <p>fri</p>
                        <p>sat</p>
                        <p style={timeStyle}>sun</p>
                    </div>
                </section>
            )
        }
    }
}

export default Clock