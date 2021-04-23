// Declare Global Variables
let LISTS;
if(localStorage.getItem("LISTS")){
    LISTS = JSON.parse(localStorage.getItem("LISTS"))
}else{
    LISTS =[]
}

let selectedList = "";

// Select elements

let listsElement = document.getElementById('lists-list');
let title = document.getElementById('list-title');
let listOfToDosElement = document.getElementById('list');
let newListInput = document.getElementById('name-new-list');
let newToDoInput = document.getElementById('item');
let thingElement = document.getElementsByClassName("thing");

// Render lists to user interface

function renderLists(LISTS){
    // Clear current lists
    listsElement.innerHTML = "";

    LISTS.forEach(function(list){
        renderList(list.name)
    })
}
renderLists(LISTS);

// Append list name to list of current lists

function renderList(name){
    let listName = `<li><div class="list-link" onclick = "selectList('${name}')" >${name}</div></li>`;
    let positioning = "beforeend";

    listsElement.insertAdjacentHTML(positioning, listName);
}

//Create and name a new list

newListInput.addEventListener('keyup', function(event) {
    if (event.keyCode == 13){
        let name = newListInput.value;
            if(name){
                saveList(name)
                selectList(name)
                // Clear input
                newListInput.value="";
            }     
    }
})

// Save list function
function saveList (name){
    LISTS.push({
        name: name,
        todos:[]
    })
    // Save LISTS to local storage
    localStorage.setItem("LISTS", JSON.stringify(LISTS));

    // Re-render LISTS
    renderLists(LISTS);
}

// Select List function
function selectList(name){
    // Save the list name to the global variable selectedList
    selectedList = name;
    // Title
    title.innerHTML = selectedList
    if(selectedList){
        newListInput.style.display = "none";
        title.style.display = "block";
    }else{
        newListInput.style.display = "block";
        title.style.display = "none";
    }
}

// Delete list function
function deleteList(){
    // Removes the selected list from the LISTS array
    LISTS.forEach(function(list,index){
        if(selectedList == list.name){
            LISTS.splice(index, 1);
        }
    })
    // Save LISTS to local storage
    localStorage.setItem("LISTS", JSON.stringify(LISTS));

    // Re-render LISTS
    renderLists(LISTS);

    // There is now no selected list
    selectList("")
}
// Just some class names for css
let CHECK = "fa-circle"
let UNCHECK = "fa-check-circle"
let PRIORITY = "red-text"
let EXCLAMATION = "fa-exclamation"
let STRIKETHROUGH = "strike-through"

// Render a single todo
function addToDo(toDo, listName){

    // DONE
    let DONE;
    if(toDo.done === true){
        DONE = UNCHECK;
    }else{
        DONE = CHECK;
    }

    // STRIKETHROUGH
    let LINE;
    if(toDo.done === true){
        LINE = STRIKETHROUGH;
    }else{
        LINE = "";
    }
    // PRIORITY
    let RED;
    if(toDo.urgent === true){  
        RED = PRIORITY;
    }else{
        RED = "";
    }
      
    let text = `<li class="thing">
                    <i class="far ${DONE} fa-lg" job="complete" listName="${listName}" toDoText=”${toDo.text}” ></i> 
                    <span class="text ${LINE} ${RED}">
                        ${toDo.text} 
                        <i class="fas fa-exclamation" job="redColor" listName="${listName}" toDoText=”${toDo.text}”></i>
                    </span>
                    <i class="far fa-trash-alt" job="delete" listName="${listName}" toDoText=”${toDo.text}”></i></li>`;

    let position = "beforeend";

    listOfToDosElement.insertAdjacentHTML(position, text);
}

newToDoInput.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
            // Add a todo item but only when input is not empty and a list is selected
            if(newToDoInput.value && selectedList){
                const toDo = {
                                text : newToDoInput.value,
                                urgent : false,
                                done : false
                }
                // Save todo to LISTS array and update local storage
                saveToDo(toDo);
                
                // Render a todo to UI
                addToDo(toDo);

                // Clear input
                newToDoInput.value = "";
            }        
        }
});

function saveToDo(toDo){
    LISTS.forEach(function(list){
        if(list.name === selectedList){
            list.todos.push(toDo)
        }
    })

    // Save LISTS to local storage
    localStorage.setItem("LISTS", JSON.stringify(LISTS));  
}

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
