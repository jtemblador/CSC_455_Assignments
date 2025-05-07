// State management
let todos = [];
let todoInput = document.getElementById('todo-input');
let todoForm = document.getElementById('todo-form');
let todoList = document.getElementById('todo-list');

// Load saved todos from localStorage if available
function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        renderTodoList();
    }
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add a new todo
function addTodo(text) {
    if (text.trim() !== '') {
        todos.push(text);
        saveTodos();
        renderTodoList();
    }
}

// Delete a todo
function deleteTodo(index) {
    todos = todos.filter((_, i) => i !== index);
    saveTodos();
    renderTodoList();
}

// Render the todo list
function renderTodoList() {
    // Clear the current list
    todoList.innerHTML = '';
    
    // Show empty state message if no todos
    if (todos.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'empty-list';
        emptyMessage.textContent = 'Your to-do list is empty. Add a task to get started!';
        todoList.appendChild(emptyMessage);
        return;
    }
    
    // Render each todo item
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        
        // Create the text node
        const todoText = document.createTextNode(todo);
        li.appendChild(todoText);
        
        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(index));
        
        // Add the delete button to the list item
        li.appendChild(deleteButton);
        
        // Add the list item to the list
        todoList.appendChild(li);
    });
}

// Event listener for form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
});