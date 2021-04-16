// Declare Global Variables
let LISTS = [];

// Select elements

let listsElement = document.getElementById('lists-list');
let title = document.getElementById('list-title');
let listOfToDosElement = document.getElementById('list');
let newListInput = document.getElementById('name-new-list');
let newToDoInput = document.getElementById('item');
let thingElement = document.getElementsByClassName("thing");

// Append list name to list of current lists

function renderList(name){
    let listName = `<li><a class="list-link" href="">${name}</a></li>`;
    let positioning = "beforeend";

    listsElement.insertAdjacentHTML(positioning, listName);
}

//Create and name a new list

    newListInput.addEventListener('keyup', function(event) {
if (event.keyCode == 13){
    let name = newListInput.value;
        if(name){
            title.textContent = name;
            newListInput.style.display = 'none';
            renderList(name);
        }
        if(title.style.display == 'none'){
            title.style.display = 'block'
        }
        
        newListInput.value="";
}
})

console.log(title);

// function to add list name to local storage

//Add a to-do item to list

// get the whole object, 
// tell it which list, 



let LIST,
id;

const TODO = {
    toDo: "",
    id: 0, 
    urgent: false,
    done: false
}

let CHECK = "fa-circle"
let UNCHECK = "fa-check-circle"
let PRIORITY = "red-text"
let EXCLAMATION = "fa-exclamation"
let STRIKETHROUGH = "strike-through"

function addToDo(toDo, id, done, urgent, trash){

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


let position = "beforeend";

listOfToDosElement.insertAdjacentHTML(position, text);
}



document.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
        let toDo = newToDoInput.value;
            if(toDo){
                addToDo(toDo);

        // localStorage.setItem("TODO", JSON.stringify(LIST));

                // id ++;
            }
        newToDoInput.value = "";
           
    }
});


// toggle icons
// check/uncheck


function completeToDo(element){
    thingElement.classList.toggle(CHECK);
    thingElement.classList.toggle(UNCHECK);
    thingElement.parentNode.querySelector(".text").classList.toggle(STRIKETHROUGH);

}


// Urgent

function toDoAlert(element){
    
    element.parentNode.classList.toggle(PRIORITY);
    item.property = !item.property
    }

// trash

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

// target the icons


list.addEventListener("click",function(event){

    const element = event.target;

    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "redColor"){
        toDoAlert(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
     
    // localStorage.setItem("TODO", JSON.stringify(LIST));

    });

// put back in storage like this

// New list button

function newListButton(){
    title.style.display = 'none';
    newListInput.style.display = 'block';
    title.textContent = "";
}

