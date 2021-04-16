// Change style theme
let activeSheet = document.getElementById('page-theme');

if (localStorage.getItem("lastActiveSheet")) {
     activeSheet.setAttribute('href',localStorage.getItem("lastActiveSheet"));
}

function swapStyleSheet(sheet){ 
    activeSheet.setAttribute('href', sheet);
    localStorage.setItem("lastActiveSheet", sheet);
}

