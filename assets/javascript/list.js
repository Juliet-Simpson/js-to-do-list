// Change style theme

function swapStyleSheet(sheet){
    document.getElementById('page-theme').setAttribute('href',sheet);

}
console.log(swapStyleSheet);

//Append list name to list of current lists


let lists = document.getElementsByClassName('lists-list');
console.log(lists);

function addName(name){

    const newListElement = document.createElement('li');
    newListElement.classList.add('list-name');
    newListElement.innerHTML = `<a class="list-link" href="list.html">${name}</a>`;
    console.log(newListElement);

    for (let i=0; i < lists.length; i++) {
        lists[i].appendChild(newListElement.cloneNode(true));
    }
console.log("Adding name: ", name);

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


