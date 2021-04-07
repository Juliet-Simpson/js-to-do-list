// Change style theme

function swapStyleSheet(sheet){
    document.getElementById('page-theme').setAttribute('href',sheet);

}
console.log(swapStyleSheet);

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
    let dayArray = new Array("Sun.","Mon.","Tues.","Weds.","Thurs.","Fri.","Sat.");
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

        if(m<10){
            m = "0" + m;
        }

        if(s<10){
            s = "0" + s;
        }

    let clockDisplay = document.getElementById("date-and-time");

    clockDisplay.textContent = "" +dayArray[day] + " " +monthDay+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

    clockDisplay.innerText = "" +dayArray[day] + " " +monthDay+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

    setTimeout("dateAndTime()",1000);
}
dateAndTime();
console.log(dateAndTime);

//Append list name to list of current lists


let lists = document.getElementById('lists-list');

function addName(name){
    let listName = `<li><a class="list-link" href="">${name}</a></li>`;
    let positioning = "beforeend";

    lists.insertAdjacentHTML(positioning, listName);
}


//Create and name a new list

let title = document.getElementById('list-title')

let change = document.getElementById('name-new-list');
    change.addEventListener('keyup', function(event) {
if (event.keyCode == 13){
    let name = change.value;
        if(name){
            title.textContent = name;
            change.style.display = 'none';
            addName(name);
        }
        change.value="";
}
})


//Add a to-do item to list

let list = document.getElementById('list');

function addToDo(toDo){
      
    let text = `<li class="thing"><p class="text"><i class="far fa-circle" job="complete" id="0"></i> ${toDo} 
			<i class="fas fa-exclamation" job="urgent" id="0"><i class="far fa-trash-alt" job="delete" id="0"></i></p></li>`;

console.log(text)

let position = "beforeend";

list.insertAdjacentHTML(position, text);
}

let input = document.getElementById('item');

document.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
        let toDo = input.value;
            if(toDo){
                addToDo(toDo);
            }
        input.value ="";
           
    }
});


