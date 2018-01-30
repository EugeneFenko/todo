// Add items
let addBtn = document.querySelector("input#add");
let field = document.getElementById('field');
let list = document.querySelector("ul.itemList");
let example = document.querySelector('ul.exampleList');
let form = document.querySelector('form');

// function addItem(e) {
//     const del = document.createElement('i');
//     const li = document.createElement('li');
//     const time = document.createElement('i');
//     li.textContent = field.value;
//     li.className = "itemLi";

//     del.classList = 'fa fa-remove del';
//     li.appendChild(del); //add del icon
    
//     time.classList = 'fa fa-clock-o addTime';
//     li.appendChild(time);
    
//     if (field.value != "") {
//         list.appendChild(li);   //add item on list
//     }
  
//     field.value = '';
//     e.preventDefault();
// }

function addItem(e) {
    const del = document.createElement('i');
    const li = document.createElement('li');
    const time = document.createElement('i');
    let nowTime = new Date();
    li.textContent = field.value;
    li.className = "itemLi";

    li.innerHTML = `
    <div class="itemVal">${field.value}</div>
    <div class="itemAttr">
    <span class="addTime">
        <i class="fa fa-clock-o" aria-hidden="true"></i>    
        ${nowTime.getDate()}.${nowTime.getMonth()+1}.${nowTime.getFullYear()}</span>
        
        <i class="fa fa-remove del"></i>
    </div>
    `;
   
    
    if (field.value != "") {
        list.appendChild(li);   //add item on list
    }
  
    field.value = '';
    e.preventDefault();
}


addBtn.addEventListener("click", addItem);
form.addEventListener("submit", addItem);

field.addEventListener("focus", function (e) {
    const pen = document.createElement('i');
    const li = document.createElement('li');

    li.className = "itemLi";
    pen.classList = 'fa fa-pencil';

    li.appendChild(pen);     //add del icon
     example.appendChild(li);   //add item on list

    e.preventDefault();
});

field.addEventListener('input',function(){
    example.firstElementChild.textContent = field.value;
});

field.addEventListener('blur',function(){
    example.firstElementChild.remove();

});

