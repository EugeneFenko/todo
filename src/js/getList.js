let addBtn = document.querySelector("input#add");
let field = document.getElementById('field');
let list = document.querySelector("ul.itemList");
let example = document.querySelector('ul.exampleList');
let form = document.querySelector('form');


function getList() {
    
    const task = JSON.parse(localStorage.getItem('tasks'));
    task.forEach(item => {
        
        const li = document.createElement('li');
        const time = document.createElement('i');
        let nowTime = new Date();
        li.className = "itemLi";
        li.innerHTML = `
        <div class="itemVal">${item}</div>
        <div class="itemAttr">
        <span class="addTime">
            <i class="fa fa-clock-o" aria-hidden="true"></i>    
            ${nowTime.getDate()}.${nowTime.getMonth()+1}.${nowTime.getFullYear()}</span>
            
            <i class="fa fa-remove del"></i>
        </div>
        `;
        if (localStorage.getItem('tasks') != "") {
            list.appendChild(li);   //add item on list
        }

        console.log(item);
        
    });

}

getList();
