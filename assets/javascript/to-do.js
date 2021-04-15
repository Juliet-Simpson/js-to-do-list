
// LOCAL STORAGE

// saving theme

// function swapStyleSheet(sheet){
//     document.getElementById('page-theme').setAttribute('href',sheet);

// }

function populateStorage() {
  localStorage.setItem('page-theme', document.getElementById('page-theme').value);
 
}

// OR

localStorage.setItem('colorSetting', '#a4509b');

{"page-theme": "business-light",}

// saving lists

let LISTS = []
let id = 0

localStorage.setItem("TODO", JSON.stringify(LIST));
// paste this wherever LIST array is updated... need something similar for LISTS ??

{"LISTS": [
    {"name": "list1",
     "items": [{name:toDo;
                id: id;
                done: false;
                urgent: false;
                trash: false;}, {},]
   }, {"name": "list2"
        "items" : ["item2.1":{}]}
  ]
 }


// Retrieving lists
let data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadlist(LIST);
}else{
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.urgent, item.trash);
    })
}

//  trash button ???

Storage.removeItem()

// delete list button

// DO THIS WEEKEND

// make icons toggling work, sort out urgent one

// save list name
// retrieve list name from current lists put back in h2

// store theme

// work on css

// MONDAY TUTOR SESSION
// try and sort out linking list to lists in storage
// deleting a list
// retieving a list

// THEN
 
// How to use description replaced with add a to do textbox once a title is in place 

//   A 'well done' gif with a sound loads on click.

// Weather API using current location.


