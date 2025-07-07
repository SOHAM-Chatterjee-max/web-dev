let btn = document.querySelector("button");
let input = document.querySelector("input");
let todoList = document.querySelector("ul");

btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("Please enter a value");
        return;
    }

    let item = document.createElement("li");

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

   
    let taskText = document.createElement("span");
    taskText.innerText = input.value;

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");
   
let editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.classList.add("edit");


item.appendChild(editBtn);


editBtn.addEventListener("click", function () {
    let newText = prompt("Edit your task:", taskText.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskText.innerText = newText;
    }
});
let clearBtn = document.querySelector("#clear-all");
clearBtn.addEventListener("click", function () {
    todoList.innerHTML = ""; 
});



  
    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(deleteBtn);
    todoList.appendChild(item);

    
    checkbox.addEventListener("change", function () {
        taskText.classList.toggle("completed");
    });

  
    deleteBtn.addEventListener("click", function () {
        item.remove();
    });

    input.value = "";
});
