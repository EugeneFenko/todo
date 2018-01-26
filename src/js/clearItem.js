// Clear all items
let clrBtn = document.querySelector("input#clr");
let list = document.querySelector("ul.itemList");

clrBtn.addEventListener("click", function () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});