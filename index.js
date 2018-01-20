let addBtn = document.querySelector("input#add");
let clrBtn = document.querySelector("input#clr");
let field = document.getElementById('field');
let form = document.querySelector("form");
let list = document.querySelector("ul");

// Add items
addBtn.addEventListener("click", function (e) {
    const del = document.createElement('i');
    const li = document.createElement('li');

    li.textContent = field.value;
    li.className = "itemLi";
    
    del.textContent = 'X';
    del.className = 'del';
    li.appendChild(del); //add del icon
    
    
    if (field.value != "") {
        list.appendChild(li);   //add item on list
    }
    
    field.value = '';
    e.preventDefault();
});

// Clear all items
clrBtn.addEventListener("click", function () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});

// Delete item 
document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("del")) {
        console.log("Deleted")
        e.target.parentElement.remove();
    }
});
