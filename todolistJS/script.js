let todoList = [];

document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText) {
        todoList.push({
            text: todoText,
            completed: false
        });

        todoInput.value = '';

        toDoList();
    }
}

function toDoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

    todoList.forEach((todo, index) => {
        const todoElement = document.createElement('li');
        todoElement.textContent = todo.text;

        if (todo.completed) {
            todoElement.style.textDecoration = 'line-through';
        }

        todoElement.addEventListener('click', () => {
            todo.completed = !todo.completed;
            toDoList();
        });

        todoListElement.appendChild(todoElement);
    });
}

toDoList();