var getinp = document.getElementById("taskInput");
var getlist = document.getElementById("taskList");

function todo(){
    if (getinp.value == "") {
        alert("Please enter a task.");
        return;
    }
    getlist.innerHTML += `<li>${getinp.value}  <span><button style="background-color: rgb(255, 0, 0); color: white; width: 80px; height: 30px; border-radius: 10px; font-size: 20px; font-weight: bolder;" onclick='this.parentNode.parentNode.remove()'>delete</button> <button style="background-color: rgb(0, 102, 255); color: white; width: 80px; height: 30px; border-radius: 10px; font-size: 20px; font-weight: bolder;" onclick='edit(this)'>Edit</button></span> </li>` 
    getinp.value = "";

}

function clearall(){
    getlist.innerHTML = "";
}

function edit(e){
    console.log(e.parentNode.parentNode.firstChild.textContent);
    var editable = prompt("Edit your task", e.parentNode.parentNode.firstChild.textContent);
    e.parentNode.firstChild.textContent  = editable;

}
