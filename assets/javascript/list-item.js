let list = document.getElementById('list');

function addToDo(toDo){
    let li = document.createElement('li');
        li.textContent = toDo;
        list.appendChild(li);
}


let input = document.getElementById('item');

document.addEventListener("keyup", function(event){
     console.log(event);
    if (event.keyCode == 13){
        let toDo = input.value;
        console.log(toDo)
            if(toDo){
                addToDo(toDo);
            }
        input.value ="";
            
    }
});


