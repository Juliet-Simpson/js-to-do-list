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


