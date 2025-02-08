document.addEventListener("DOMContentLoaded", loadTodos);

function newTodo() {
    let task = prompt("Enter a new TO-DO:");
    if (task) {
        addTodo(task);
        saveTodos();
    }
}

function addTodo(task) {
    let list = document.getElementById("ft_list");
    let newItem = document.createElement("div");
    newItem.textContent = task;
    newItem.className = "todo";
    newItem.onclick = function () {
        if (confirm("Do you want to remove this TO-DO?")) {
            newItem.remove();
            saveTodos();
        }
    };
    list.prepend(newItem);
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + ";path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [name, value] = cookie.split("=");
        if (name === "todos") {
            let todos = JSON.parse(value);
            todos.forEach(addTodo);
        }
    }
}
