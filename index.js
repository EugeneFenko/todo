let addBtn = document.querySelector("input#add");
let clrBtn = document.querySelector("input#clr");
let field = document.getElementById('field');

const li = document.createElement('li');
li.textContent = field.value;
 


addBtn.addEventListener("click",function() {
    document.querySelector("ul").appendChild(li);
    console.log(document.querySelector("ul").chidren);
});




console.log(li.textContent);