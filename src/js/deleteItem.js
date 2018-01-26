// Delete item 
document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("del")) {
        console.log("Deleted")
        e.target.parentElement.parentElement.remove();
    }
});