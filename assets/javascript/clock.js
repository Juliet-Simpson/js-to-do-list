// Date and time

function dateAndTime(){
    // Date
    let todaysDate = new Date;
    let year = todaysDate.getYear();
            if(year<1000){
                year += 1900;
            }
    let day = todaysDate.getDay();
    let month = todaysDate.getMonth();
    let monthDay = todaysDate.getDate();
    let dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    let monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    // Time
    let timeNow = new Date();
    let h = timeNow.getHours();
    let m = timeNow.getMinutes();
    let s = timeNow.getSeconds();

        if(h ==24){
            h=0;
        }else if (h>12){
            h = h-0;
        }

        if(h<10){
            h = "0" + h;
        }

        if(m<10){
            m = "0" + m;
        }

        if(s<10){
            s = "0" + s;
        }

    let clockDisplay = document.getElementById("date-and-time");

    clockDisplay.innerHTML = "<i class='far fa-calendar-alt'></i> " + dayArray[day] + " " +monthDay+ " " +monthArray[month]+ " " +year+ " <i class='far fa-clock'></i> " +h+ ":" +m+ ":" +s;

    setTimeout("dateAndTime()",1000);
}
dateAndTime();