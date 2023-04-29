const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const clearAll = document.querySelector(".clearAll")

todoInput.addEventListener("keypress", e => {
    if(e.keyCode === 13) {
        generateTodo(todoInput.value);
        todoInput.value = "";
    }
});

function generateTodo(todo) {
     const li = document.createElement("li");
     const likeSpan = generateTodoLike();
     const itemSpan = generateTodoItem(todo);
     const manageSpan = generateTodoManage();

     li.appendChild(likeSpan);
     li.appendChild(itemSpan);
     li.appendChild(manageSpan);
     todoList.appendChild(li);
}

const generateTodoLike = () => {
    const span = document.createElement("span");
    const icon = document.createElement("i");

    span.classList.add("todo-like");
    icon.classList.add("material-icons", "like");
    icon.innerText = "check_box_outline_blank";
    span.appendChild(icon);
    icon.addEventListener("click", (e) => {
        // icon.innerText === "check_box" ? icon.innerText = "check_box_outline_blank" : icon.innerText = "check_box"
        const li = e.target.parentNode.parentNode;
        if(icon.innerText === "check_box_outline_blank") {
            icon.innerText = "check_box";
            li.classList.add("done");
        } else {
            icon.innerText = "check_box_outline_blank";
            li.classList.remove("done");
        }
    });
    return span;
}

const generateTodoItem = function(todo) {
    const span = document.createElement("span");
    span.classList.add("todo-item");
    span.innerText = todo;
    return span;
}

function generateTodoManage() {
    const span = document.createElement("span");
    const iconCheck = document.createElement("i");
    const iconClear = document.createElement("i");

    span.classList.add("todo-manage");
    iconCheck.classList.add("material-icons", "check");
    iconCheck.innerText = "check";
    iconClear.classList.add("material-icons", "clear");
    iconClear.innerText = "clear";
    iconCheck.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;
        const iconLike = e.target.parentNode.parentNode.firstChild.firstChild;
        if(iconLike.innerText === "check_box_outline_blank") {
            iconLike.innerText = "check_box";
            li.classList.add("done");
        }
    });
    iconClear .addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;
        todoList.removeChild(li);
    });
    span.appendChild(iconCheck);
    span.appendChild(iconClear);
    return span;
}

clearAll.addEventListener("click", () => {
    while (todoList.hasChildNodes()) {
        todoList.removeChild(todoList.firstChild);
    }
});