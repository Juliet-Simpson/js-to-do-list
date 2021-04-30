// Declare Global Variables
let LISTS;
if(localStorage.getItem("LISTS")){
    LISTS = JSON.parse(localStorage.getItem("LISTS"));
}else{
    LISTS =[];
}

let selectedList;
if(localStorage.getItem("SELECTEDLIST")){
    selectedList = localStorage.getItem("SELECTEDLIST");
}else{
    selectedList = "";
}

// Variables for CSS class names
let CHECK = "fa-circle";
let UNCHECK = "fa-check-circle";
let PRIORITY = "red-text";
let EXCLAMATION = "fa-exclamation";
let STRIKETHROUGH = "strike-through";

// Select elements

let listsElement = document.getElementById('lists-list');
let title = document.getElementById('list-title');
let listOfToDosElement = document.getElementById('list');
let newListInput = document.getElementById('name-new-list');
let newToDoInput = document.getElementById('item');

// Render lists to user interface

function renderLists(LISTS){
    // Clear current lists
    listsElement.innerHTML = "";

    LISTS.forEach(function(list){
        renderList(list.name);
    });
}

//Open the app with last used list and its to dos.
selectList(selectedList);

// Open the app with saved lists listed under Current Lists.
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
                saveList(name);
                selectList(name);
                // Clear input
                newListInput.value="";
            }     
    }

    // Scroll to the bottom of the list
    listsElement.scrollTo(0, listsElement.scrollHeight);
});

// Save list function
function saveList (name){
    let listExists = checkForExistingList(name);
    if(listExists){
        alert("There is already a list with this name.  Please enter a different one.");
    }else{
        LISTS.push({
            name: name,
            todos:[]
        });
      
        // Save LISTS to local storage
        localStorage.setItem("LISTS", JSON.stringify(LISTS));

        // Re-render LISTS
        renderLists(LISTS);
    }
}

// Prevent duplication of list names
// Check to see if list name exists
function checkForExistingList(listName){

    let listExists = false;

    LISTS.forEach(function(list){
        if(list.name === listName){
            listExists = true;
        }
    });
  
    return listExists;
}

// Select List function
function selectList(name){
    // Save the list name to the global variable selectedList
    selectedList = name;

    // Save selected list to local storage
    localStorage.setItem("SELECTEDLIST", selectedList);

    // Title
    title.innerHTML = selectedList;
    if(selectedList){
        newListInput.style.display = "none";
        title.style.display = "block";
    }else{
        newListInput.style.display = "block";
        title.style.display = "none";
    }
    renderListOfToDos(selectedList);
}

// Delete list function
function deleteList(){
    // Remove the selected list from the LISTS array
    LISTS.forEach(function(list,index){
        if(selectedList == list.name){
            LISTS.splice(index, 1);
        }
    });
  
    // Save LISTS to local storage
    localStorage.setItem("LISTS", JSON.stringify(LISTS));

    // Re-render LISTS
    renderLists(LISTS);

    // There is now no selected list
    selectList("")
}

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
    if(toDo.urgent === true && toDo.done === false){  
        RED = PRIORITY;
    }else{
        RED = "";
    }
      
    let text = `<li class="thing">
                    <i class="far ${DONE} fa-lg" job="complete" listName='${listName}' toDoText='${toDo.text}' ></i> 
        <span class="text ${LINE} ${RED}">
            ${toDo.text}  
        </span><i class="fas fa-exclamation ${RED}" job="redColor" listName="${listName}" toDoText='${toDo.text}'></i>
        <i class="far fa-trash-alt" job="delete" listName="${listName}" toDoText='${toDo.text}'></i>
                </li>`;

    let position = "beforeend";

    listOfToDosElement.insertAdjacentHTML(position, text);
}

// Render list of todos
function renderListOfToDos(listName){
    // Clear existing list of todos
    listOfToDosElement.innerHTML = "";

    // Render new list of to dos
    LISTS.forEach(function(list){
        if(list.name === listName){
            list.todos.forEach(function(toDo){
                addToDo(toDo, listName);
            });
        }
    });
}

newToDoInput.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
            // Add a todo item but only when input is not empty and a list is selected
            if(newToDoInput.value){
                // Check if the user has selected a list
                if(selectedList){
                    const toDo = {
                                text : newToDoInput.value,
                                urgent : false,
                                done : false
                    };
                    // Check if todo already exists
                    let toDoExists = checkForExistingToDo(toDo.text, selectedList);
                    if(toDoExists){
                        alert("This thing to do is already listed");
                    }else{
                        // Save todo to LISTS array and update local storage
                        saveToDo(toDo);
                        
                        // Render a todo to UI
                        addToDo(toDo, selectedList);

                        // make last entered toDo visible at the bottom of the list
                        listOfToDosElement.scrollTo(0, listOfToDosElement.scrollHeight);
                    }  
                    
                    // Clear input
                    newToDoInput.value = "";  
                }else{
                    alert("Please select or name a list before adding anything to do.");
                } 
            }        
        }
});

function saveToDo(toDo){
    LISTS.forEach(function(list){
        if(list.name === selectedList){
            list.todos.push(toDo);
        }
    });

    // Save LISTS to local storage
    localStorage.setItem("LISTS", JSON.stringify(LISTS));  
}

// Check for existing todo
function checkForExistingToDo(toDoText, listName){
    let toDoExists = false;

    LISTS.forEach(function(list){
        if(list.name === listName){
            list.todos.forEach(function(toDo){
                if(toDo.text === toDoText){
                    toDoExists = true;
                }
            });
        }
    });

    return toDoExists;
}

// target the icons
listOfToDosElement.addEventListener("click",function(event){
    
    // Target the clicked icon
    const element = event.target;
    
    // Exit function when text is clicked
    if(element.tagName === "SPAN"){
        return;
    }

    // Get values of custom attributes
    const elementJob = element.attributes.job.value;
    const elementListName = element.attributes.listName.value;
    const elementToDoText = element.attributes.toDoText.value;

    // Search for the correct list and the correct todo and then make the clicked change 
    LISTS.forEach(function(list){
        if(list.name === elementListName){
            list.todos.forEach(function(toDo, index){
                if(toDo.text === elementToDoText){
                    if(elementJob == "complete"){
                        // Done toDo
                        toDo.done = !toDo.done;
                    }else if(elementJob == "redColor"){
                        // Urgent toDo
                        toDo.urgent = !toDo.urgent;
                    }else if(elementJob == "delete"){
                        // Delete toDo from todos array
                        list.todos.splice(index, 1);
                    }
                }               
            });
        }
    });
  
    // Save LISTS to local storage
    localStorage.setItem("LISTS", JSON.stringify(LISTS));

    // Re render todos
    renderListOfToDos(selectedList);
});

// New list button
function newListButton(){
    selectList("");
}
