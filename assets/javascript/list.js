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

    clockDisplay.innerHTML = "" +dayArray[day] + " " +monthDay+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

    setTimeout("dateAndTime()",1000);
}
dateAndTime();

//Append list name to list of current lists
let LISTS;

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

let LIST, id;

let CHECK = "fa-circle"
let UNCHECK = "fa-check-circle"
let PRIORITY = "red-text"
let EXCLAMATION = "fa-exclamation"
let STRIKETHROUGH = "strike-through"

function addToDo(toDo,id,done,urgent,trash){

    if(trash){return;}

    // DONE
    let DONE;
    if(done === true){
        DONE = UNCHECK;
    }else{
        DONE = CHECK;
    }

    // STRIKETHROUGH
    let LINE;
    if(done === true){
        LINE = STRIKETHROUGH;
    }else{
        LINE = "";
    }
    // PRIORITY
    let RED;
    if(urgent === true){  
        RED = PRIORITY;
    }else{
        RED = "";
    }
      
    let text = `<li class="thing">
                    <p ><i class="far ${DONE} fa-lg" job="complete" id="${id}"></i> 
                    <span class="text ${LINE} ${RED}">${toDo} <i class="fas fa-exclamation" job="redColor" id="${id}"></i></span>
			        <i class="far fa-trash-alt" job="delete" id="${id} "></i></p></li>`;

console.log(text);

let position = "beforeend";

list.insertAdjacentHTML(position, text);
}

let input = document.getElementById('item');

document.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
        let toDo = input.value;
            if(toDo){
                addToDo(toDo);

                // LIST.push({
                //     name :toDo,
                //     id : id,
                //     done : false,
                //     urgent : false,
                //     trash : false,
                // });

        // localStorage.setItem("TODO", JSON.stringify(LIST));

                // id ++;
            }
        input.value = "";
           
    }
});


// toggle icons
// check/uncheck

let element = document.getElementsByClassName("thing");
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(STRIKETHROUGH);

}

console.log(element);

// Urgent
function toDoAlert(element){
    
    element.parentNode.classList.toggle(PRIORITY);
    item.property = !item.property
    }


// trash
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    // LIST[element.id].trash = true;
}

// target the icons

//   Array.from(document.getElementById("thing")).forEach(function(element) {
//      element.addEventListener("click", function(){
     
list.addEventListener("click",function(event){

    const element = event.target;
    console.log(element.classList);
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "redColor"){
        toDoAlert(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
     
    localStorage.setItem("TODO", JSON.stringify(LIST));

    });

// })});

    