// Change style theme

function swapStyleSheet(sheet){
    document.getElementById('page-theme').setAttribute('href',sheet);

}
console.log(swapStyleSheet);

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
      
    let text = `<li class='thing'>
               <p class='text'> ${toDo} 
			<i class="far fa-trash-alt"></i></p>
           </li>`;

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


